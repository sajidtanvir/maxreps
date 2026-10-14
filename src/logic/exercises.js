export const GUIDES = {
  'bench press': { m: 'Chest, front delts, triceps', s: ['Lie on the bench with eyes under the bar and feet flat on the floor.', 'Grip slightly wider than shoulders, squeeze shoulder blades together and unrack.', 'Lower the bar under control to mid-chest, elbows about 45° from your body.', 'Press up and slightly back until arms are straight.'], t: "Keep your glutes on the bench and don't bounce the bar off your chest." },
  'overhead press': { m: 'Shoulders, triceps, upper chest', s: ['Stand with feet hip-width, bar resting on your front shoulders.', 'Brace your core and squeeze your glutes.', 'Press the bar straight up, moving your head back slightly to clear it.', 'Lock out overhead with the bar over mid-foot, then lower under control.'], t: 'Avoid leaning back. A tight core and glutes protect your lower back.' },
  'incline dumbbell press': { m: 'Upper chest, front delts, triceps', s: ['Set the bench to 30–45° and sit with a dumbbell on each thigh.', 'Lie back and bring the dumbbells to chest level, palms forward.', 'Press up until arms are straight, dumbbells nearly touching.', 'Lower slowly until you feel a stretch across the chest.'], t: 'A steeper angle shifts work to the shoulders. Keep it at 45° or lower.' },
  'tricep pushdown': { m: 'Triceps', s: ['Face the cable stack with a rope or bar at chest height.', 'Pin your elbows to your sides.', 'Push down until arms are fully straight, squeezing the triceps.', 'Let the handle rise back to chest height with control.'], t: 'Only your forearms should move. If your elbows drift, lower the weight.' },
  'deadlift': { m: 'Hamstrings, glutes, back, grip', s: ['Stand with mid-foot under the bar, feet hip-width.', 'Hinge down and grip just outside your shins. Flatten your back.', 'Push the floor away, keeping the bar against your legs.', 'Stand tall with hips locked, then lower by pushing your hips back.'], t: 'Never round your lower back. Take slack out of the bar before you pull.' },
  'pull-ups': { m: 'Lats, biceps, upper back', s: ['Hang from the bar with hands just wider than shoulders, palms away.', 'Pull your shoulder blades down and back.', 'Pull up until your chin clears the bar, leading with your chest.', 'Lower all the way to a dead hang with control.'], t: 'Avoid kipping. Use a band or negatives until you can do clean reps.' },
  'barbell row': { m: 'Upper back, lats, rear delts', s: ['Hold the bar with an overhand grip and hinge forward to about 45°.', 'Keep your back flat and knees slightly bent.', 'Pull the bar to your lower ribs, driving elbows back.', 'Lower under control without standing up.'], t: "Keep your torso still. If you're swinging, the weight is too heavy." },
  'bicep curl': { m: 'Biceps, forearms', s: ['Stand tall with dumbbells at your sides, palms forward.', 'Keep elbows close to your torso.', 'Curl the weights up until forearms are vertical.', 'Lower slowly over 2–3 seconds.'], t: 'Avoid swinging your hips. Slow negatives build more muscle.' },
  'back squat': { m: 'Quads, glutes, core', s: ['Rest the bar on your upper back, feet shoulder-width, toes slightly out.', 'Brace your core and push your hips back and down.', 'Lower until thighs are at least parallel, knees tracking over toes.', 'Drive up through the mid-foot to standing.'], t: "Keep your chest up and don't let your knees cave in." },
  'romanian deadlift': { m: 'Hamstrings, glutes, lower back', s: ['Stand holding the bar at hip height, knees soft.', 'Push your hips back, sliding the bar down your thighs.', 'Lower until you feel a strong hamstring stretch, usually mid-shin.', 'Drive your hips forward to stand tall.'], t: 'This is a hip hinge, not a squat. Keep your knee bend fixed.' },
  'walking lunges': { m: 'Quads, glutes, hamstrings', s: ['Stand tall holding dumbbells at your sides.', 'Take a long step forward and lower your back knee toward the floor.', 'Keep your front knee over the ankle and torso upright.', 'Push through the front heel and step into the next lunge.'], t: "Take steps long enough that your front knee doesn't pass your toes." },
  'calf raises': { m: 'Calves', s: ['Stand on the edge of a step with heels hanging off.', 'Lower your heels for a full stretch.', 'Rise onto the balls of your feet as high as you can.', 'Pause at the top, then lower slowly.'], t: 'Use full range and a pause at the top. Bouncing wastes the rep.' },
  'warm-up walk, 5 min': { m: 'Full body warm-up', s: ['Walk at an easy pace for the first 2 minutes.', 'Gradually increase speed until breathing is slightly elevated.', 'Swing your arms naturally and stand tall.'], t: 'You should still be able to hold a conversation.' },
  'running, 30 min': { m: 'Heart, lungs, legs', s: ['Start at a comfortable pace for the first 5 minutes.', 'Settle into a steady pace where you can speak in short sentences.', 'Land with your foot under your hips, not out in front.', 'Keep shoulders relaxed and arms bent around 90°.'], t: 'Take short, quick steps rather than long strides to reduce impact.' },
  'cool-down walk, 5 min': { m: 'Recovery', s: ['Slow to an easy walk.', 'Breathe deeply through your nose.', 'Finish when your heart rate feels close to normal.'], t: "Don't stop abruptly after running. Let your heart rate come down gradually." },
  'mobility flow, 10 min': { m: 'Hips, spine, shoulders', s: ["Start with 10 cat-cows on hands and knees.", 'Move into world\u2019s greatest stretch, 5 per side.', 'Finish with 10 slow arm circles each direction.'], t: 'Move slowly and breathe. Never force a range of motion.' },
  'light walk, 20 min': { m: 'Active recovery', s: ['Walk at an easy, relaxed pace.', 'Keep your posture tall and arms loose.', 'Choose a flat route if your legs are sore.'], t: 'Light movement improves blood flow and speeds recovery.' },
  'stretching, 10 min': { m: 'Hamstrings, hips, chest', s: ['Hold a standing hamstring stretch for 30 seconds per leg.', 'Do a kneeling hip flexor stretch for 30 seconds per side.', 'Finish with a doorway chest stretch for 30 seconds.'], t: 'Stretch to mild tension, not pain, and keep breathing.' }
};

export const DB_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
export const IMG_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
export const STOP = new Set(['min', 'the', 'a', 'and', 'with', 'of', 'to', 'on', 'up', 'down', 'flow', 'light']);
export const tok = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/)
  .filter((w) => w && !STOP.has(w) && !/^\d+$/.test(w))
  .map((w) => (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w));
export const ALIAS = {
  'back squat': 'barbell squat', 'overhead press': 'standing military press', 'pull-ups': 'pullups',
  'bicep curl': 'dumbbell bicep curl', 'tricep pushdown': 'triceps pushdown', 'deadlift': 'barbell deadlift',
  'barbell row': 'bent over barbell row', 'calf raises': 'standing calf raises', 'bench press': 'barbell bench press medium grip',
  'warm-up walk, 5 min': 'walking treadmill', 'running, 30 min': 'running treadmill', 'cool-down walk, 5 min': 'walking treadmill',
  'mobility flow, 10 min': 'cat stretch', 'light walk, 20 min': 'walking treadmill', 'stretching, 10 min': 'hamstring stretch'
};
export let DB_P = null;
export const loadDB = () => DB_P || (DB_P = fetch(DB_URL).then((r) => r.json())
  .then((a) => a.filter((e) => e.images && e.images.length).map((e) => ({ e, toks: tok(e.name) })))
  .catch((err) => { DB_P = null; throw err; }));
export const bestMatch = (db, q) => {
  const qt = tok(q);
  if (!qt.length) return null;
  let best = null, bs = 0;
  for (const d of db) {
    const m = qt.filter((t) => d.toks.includes(t)).length;
    if (!m) continue;
    const s = m / qt.length - d.toks.length * 0.01;
    if (s > bs) { bs = s; best = d; }
  }
  return best ? { e: best.e, score: bs } : null;
};

