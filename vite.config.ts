import { defineConfig, loadEnv, type Plugin, type Connect } from 'vite';
import react from '@vitejs/plugin-react';
import { complete } from './server/complete';

// Serves POST /api/complete during `vite dev` and `vite preview`, so the AI
// features work locally with ANTHROPIC_API_KEY in .env.local.
function aiProxy(): Plugin {
  const handler: Connect.NextHandleFunction = (req, res, next) => {
    if (req.url !== '/api/complete' || req.method !== 'POST') return next();
    let raw = '';
    req.on('data', (c) => (raw += c));
    req.on('end', async () => {
      let body;
      try {
        body = JSON.parse(raw || '{}');
      } catch {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
        return;
      }
      const r = await complete(body);
      res.statusCode = r.status;
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify(r.body));
    });
  };
  return {
    name: 'ai-proxy',
    configureServer: (s) => void s.middlewares.use(handler),
    configurePreviewServer: (s) => void s.middlewares.use(handler),
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), 'ANTHROPIC_'));
  return { plugins: [react(), aiProxy()], server: { host: true }, build: { chunkSizeWarningLimit: 700 } };
});
