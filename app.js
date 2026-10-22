/* Habit Gamified: app.js */
'use strict';

// --- 1. DEFAULT RULES ---
const defaultConfig = {
  seasonStartDate: "2026-10-01",
  mainQuests: [
    { id: "mq1a", name: "Wake 5 AM or earlier", xp: 20, attr: "VITALITY" },
    { id: "mq1b", name: "Subuh + water", xp: 15, attr: "SPIRIT" },
    { id: "sq1b1", parent: "mq1b", name: "Stretching yoga", xp: 10 },
    { id: "sq1b2", parent: "mq1b", name: "Posture exercise", xp: 10 },
    { id: "sq1b3", parent: "mq1b", name: "Eye exercise", xp: 5 },
    { id: "sq1b4", parent: "mq1b", name: "Make bed right after waking", xp: 5 },
    { id: "sq1b5", parent: "mq1b", name: "No phone first 30 min", xp: 10 },
    { id: "mq2", name: "Deep Work, 2 hours", xp: 40, attr: "CRAFT" },
    { id: "sq2a", parent: "mq2", name: "Extend to 4 hours", xp: 40 },
    { id: "sq2b", parent: "mq2", name: "No music at all", xp: 20 },
    { id: "sq2c", parent: "mq2", name: "No multitasking", xp: 20 },
    { id: "mq3", name: "Speak & Correct, 30 min", xp: 30, attr: "VOICE" },
    { id: "sq3a", parent: "mq3", name: "Real talk with people", xp: 30 },
    { id: "sq3b", parent: "mq3", name: "Call with AI", xp: 20 },
    { id: "sq3c", parent: "mq3", name: "Describe a photo", xp: 10 },
    { id: "sq3d", parent: "mq3", name: "Retell a story/insight", xp: 15 },
    { id: "sq3e", parent: "mq3", name: "Yapping about my day", xp: 10 },
    { id: "sq3f", parent: "mq3", name: "Write correction in book", xp: 15 },
    { id: "sq3g", parent: "mq3", name: "Speaking drill from corrections", xp: 10 },
    { id: "sq3h", parent: "mq3", name: "Ask 1-3 questions on story", xp: 10 },
    { id: "mq4", name: "Listen actively without subtitles", xp: 20, attr: "VOICE" },
    { id: "sq4a", parent: "mq4", name: "Listen again & shadow 10m", xp: 15 },
    { id: "sq4b", parent: "mq4", name: "Retell video in own words", xp: 20 },
    { id: "sq4c", parent: "mq4", name: "Jot down 3+ phrases", xp: 15 },
    { id: "sq4d", parent: "mq4", name: "Get 1 tip on convo keeping", xp: 10 },
    { id: "mq5", name: "Workout or Run", xp: 30, attr: "VITALITY" },
    { id: "sq5a", parent: "mq5", name: "L-Men Protein", xp: 5 },
    { id: "sq5b", parent: "mq5", name: "Coconut Water", xp: 10 },
    { id: "sq5c", parent: "mq5", name: "Run day bonus", xp: 10 },
    { id: "sq5d", parent: "mq5", name: "Make it harder than last", xp: 15 },
    { id: "mq6", name: "Solat Magrib", xp: 20, attr: "SPIRIT" },
    { id: "sq6a", parent: "mq6", name: "Cite Quran", xp: 10 },
    { id: "sq6b", parent: "mq6", name: "Meditate & stretching", xp: 10 },
    { id: "sq6c", parent: "mq6", name: "Read out loud 10m", xp: 15 },
    { id: "sq6d", parent: "mq6", name: "Going for dinner", xp: 20 },
    { id: "sq6e", parent: "mq6", name: "Mindful eating", xp: 5 },
    { id: "mq7", name: "Planning for tomorrow", xp: 20, attr: "FOCUS" },
    { id: "sq7a", parent: "mq7", name: "Moment journal + book", xp: 10 },
    { id: "sq7b", parent: "mq7", name: "Prepare 1 video to listen", xp: 10 },
    { id: "sq7c", parent: "mq7", name: "Solat Isya", xp: 25 },
    { id: "sq7d", parent: "mq7", name: "Brush teeth", xp: 5 },
    { id: "sq7e", parent: "mq7", name: "Wash face", xp: 5 },
    { id: "sq7f", parent: "mq7", name: "Tidy up desk", xp: 10 },
    { id: "sq7g", parent: "mq7", name: "Turn off lamp", xp: 5 },
    { id: "sq7h", parent: "mq7", name: "Set an alarm", xp: 5 },
    { id: "sq7i", parent: "mq7", name: "Airplane mode", xp: 10 },
    { id: "sq7j", parent: "mq7", name: "Chill book reading 20m", xp: 20 },
    { id: "mq8", name: "Zero Social Media Day", xp: 25, attr: "FOCUS" }
  ],
  extras: [
    // Optional Extras (tier: 0 = Unlocked Everyday)
    { id: "e11", tier: 0, name: "Badminton or Swim", xp: 60, attr: "VITALITY", weeklyOnce: true },
    { id: "e12", tier: 0, name: "Long run 5K+", xp: 80, attr: "VITALITY", weeklyOnce: true },
    { id: "e13", tier: 0, name: "Social group activities", xp: 60, attr: "VOICE" },
    { id: "e16", tier: 0, name: "Animate for Yourself 2h", xp: 120, attr: "CRAFT", weeklyOnce: true },

    // Tier 1 Extras
    { id: "e1", tier: 1, name: "Flashcards review, 15 min", xp: 20, attr: "VOICE" },
    { id: "e1a", parent: "e1", name: "Adding new phrases", xp: 15 },
    { id: "e2", tier: 1, name: "Brain dump writing", xp: 20, attr: "SPIRIT" },
    { id: "e2a", parent: "e2", name: "Rewrite 5 sentences by hand", xp: 20 },
    { id: "e3", tier: 1, name: "Tidy your room", xp: 25, attr: "FOCUS" },
    { id: "e4", tier: 1, name: "Pose Try / Draw pose", xp: 20, attr: "CRAFT" },
    { id: "e5", tier: 1, name: "Reaching out to someone", xp: 20, attr: "VOICE" },
    { id: "e6", tier: 1, name: "Read Reddit/Discord phrases", xp: 20, attr: "VOICE" },
    { id: "e7", tier: 1, name: "Clean eating day", xp: 20, attr: "VITALITY" },

    // Tier 2 Extras
    { id: "e8", tier: 2, name: "Rig course progress 30m", xp: 20, attr: "CRAFT" },
    { id: "e8a", parent: "e8", name: "+ 2 hours", xp: 30 },
    { id: "e9", tier: 2, name: "Deep watch productive", xp: 20, attr: "CRAFT" },
    { id: "e9a", parent: "e9", name: "Note the insight learned", xp: 25 },
    { id: "e10", tier: 2, name: "Watch movie/series", xp: 30, attr: "SPIRIT" },
    { id: "e10a", parent: "e10", name: "Write summary/lessons", xp: 20 },
    { id: "e10b", parent: "e10", name: "Save references PureRef", xp: 15 },
    { id: "e10c", parent: "e10", name: "Speak out loud feelings", xp: 15 },
    { id: "e14", tier: 2, name: "Anim Watch & Analyze 30m", xp: 40, attr: "CRAFT" },
    { id: "e15", tier: 2, name: "Record yourself speaking", xp: 40, attr: "VOICE" }
  ],
  enemies: [
    { id: "en1", name: "Dwelling on past/anxiety", xp: 30, isTime: true },
    { id: "en2", name: "Guessing what others think", xp: 30, isTime: true },
    { id: "en3", name: "Reading social media drama", xp: 40, isTime: true },
    { id: "en4", name: "Mindlessly scrolling IG", xp: 50, isTime: true },
    { id: "en5", name: "Mindlessly scrolling TikTok", xp: 60, isTime: true },
    { id: "en6", name: "Scrolling Shorts/Twitter", xp: 40, isTime: true },
    { id: "en7", name: "Taking too long a nap", xp: 20, isTime: false },
    { id: "en8", name: "Phone at night/bedtime", xp: 20, isTime: false },
    { id: "en9", name: "Cheap dopamine", xp: 50, isTime: false }
  ],
  achievements: [
    { id: "a1", name: "First Blood", xp: 50 }, { id: "a2", name: "Early Bird", xp: 100 },
    { id: "a3", name: "Phone Monk", xp: 150 }, { id: "a4", name: "Voice Unlocked", xp: 200 },
    { id: "a5", name: "Ship It Trilogy", xp: 250 }, { id: "a6", name: "Untouchable Week", xp: 200 },
    { id: "a7", name: "Comeback Kid", xp: 100 }, { id: "a8", name: "Rig Master", xp: 500 },
    { id: "a9", name: "Iron Lungs", xp: 500 }, { id: "a10", name: "Season Finisher", xp: 500 }
  ],
  ranks: [
    { name: "Iron", tiers: [0, 650, 1300] }, { name: "Bronze", tiers: [2000, 3150, 4350] },
    { name: "Silver", tiers: [5500, 7000, 8500] }, { name: "Gold", tiers: [10000, 12000, 14000] },
    { name: "Platinum", tiers: [16000, 18300, 20700] }, { name: "Diamond", tiers: [23000, 26000, 29000] },
    { name: "Ascendant", tiers: [32000, 35000, 38000] }, { name: "Immortal", tiers: [41000, 44000, 47000] },
    { name: "Radiant", tiers: [50000, 999999, 999999] }
  ]
};

// --- 2. CONSTANTS & HELPERS ---
const STORAGE_KEY = 'habitGamifiedDB';
const T1_REQ = 220;                    // quest XP needed to open Extras tier 1
const COUNT_BONUS_IN_SEASON = true;    // weekly review and achievements add to season XP
const REVIEW_XP = 50;
const GRADES = [['D', 100], ['C', 220], ['B', 350], ['A', 500], ['S', 650]];
const GRADE_MAX = 650;
const ATTRS = ['CRAFT', 'VOICE', 'VITALITY', 'SPIRIT', 'FOCUS'];
const ATTR_LEVELS = [0, 1000, 2500, 4500, 7000];
const ATTR_TITLES = ['Novice', 'Apprentice', 'Adept', 'Expert', 'Master'];
const MESSAGES = {
  S: 'Legendary. Unstoppable.', A: 'Strong day. Almost perfect.', B: 'Good solid day.',
  C: 'You showed up. Baseline met.', D: 'Partial. Second Wind tomorrow.', F: 'Reset. We go again.'
};
const LOCK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

const $ = id => document.getElementById(id);
const clone = o => JSON.parse(JSON.stringify(o));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = n => Number(n).toLocaleString('en-US');
const cap = s => s.charAt(0) + s.slice(1).toLowerCase();
const newId = () => 'c' + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36);

const pad2 = n => String(n).padStart(2, '0');
const toKey = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const fromKey = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d, 12); };
const addDays = (key, n) => { const d = fromKey(key); d.setDate(d.getDate() + n); return toKey(d); };
const todayKey = () => toKey(new Date());
const isKey = s => /^\d{4}-\d{2}-\d{2}$/.test(s || '');
const dayShort = key => fromKey(key).toLocaleDateString('en-GB', { weekday: 'short' });

function getWeekStr(key) {
  const [y, m, dd] = key.split('-').map(Number);
  const d = new Date(Date.UTC(y, m - 1, dd));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}
function weekDays(key) {
  const idx = (fromKey(key).getDay() + 6) % 7;
  const mon = addDays(key, -idx);
  return [0, 1, 2, 3, 4, 5, 6].map(i => addDays(mon, i));
}

// --- 3. DATA MANAGER ---
function freshDB() {
  return {
    version: 1, config: clone(defaultConfig), logs: {}, weekly: {}, unlockedAch: [],
    attributes: { CRAFT: 0, VOICE: 0, VITALITY: 0, SPIRIT: 0, FOCUS: 0 }, updatedAt: Date.now(), lastExport: null
  };
}

function collapseEnemies(list, enemyCfg) {
  const out = [], map = {};
  list.forEach(e => {
    if (!e || !e.id) return;
    const c = enemyCfg.find(x => x.id === e.id);
    let m = map[e.id];
    if (!m) { m = map[e.id] = { id: e.id }; out.push(m); }
    const timed = c ? c.isTime : e.min !== undefined;
    if (timed) m.min = (m.min || 0) + (e.min != null ? e.min : 30);
    else m.n = (m.n || 0) + (e.n || 1);
  });
  return out;
}

function normalize(raw) {
  const d = Object.assign(freshDB(), raw && typeof raw === 'object' ? raw : {});
  d.config = Object.assign(clone(defaultConfig), d.config || {});
  ['mainQuests', 'extras', 'enemies', 'achievements', 'ranks'].forEach(k => {
    if (!Array.isArray(d.config[k])) d.config[k] = clone(defaultConfig[k]);
  });
  // Migration: ensure optional extras have tier: 0
  const optIds = ['e11', 'e12', 'e13', 'e16'];
  d.config.extras.forEach(item => {
    if (optIds.includes(item.id)) item.tier = 0;
  });

  if (!d.logs || typeof d.logs !== 'object') d.logs = {};
  if (!d.weekly || typeof d.weekly !== 'object') d.weekly = {};
  if (!Array.isArray(d.unlockedAch)) d.unlockedAch = [];
  for (const k in d.logs) {
    const l = d.logs[k] = d.logs[k] || {};
    l.ticked = l.ticked || {};
    l.review = l.review || {};
    l.enemies = collapseEnemies(Array.isArray(l.enemies) ? l.enemies : [], d.config.enemies);
  }
  for (const w in d.weekly) {
    const x = d.weekly[w] = d.weekly[w] || {};
    x.bonuses = x.bonuses || {}; x.review = x.review || {};
  }
  return d;
}

function loadData() {
  let raw = null;
  try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage blocked */ }
  if (!raw) return normalize(null);
  try { return normalize(JSON.parse(raw)); }
  catch (e) {
    try { localStorage.setItem(STORAGE_KEY + '_corrupt', raw); } catch (_) { /* ignore */ }
    return normalize(null);
  }
}

let db = loadData();
const statsCache = new Map();
function saveData() {
  statsCache.clear();
  db.updatedAt = Date.now();
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); } catch (e) { toast('Could not save. Storage is full or blocked.'); }
}

let currentDate = todayKey();
let currentWeekStr = getWeekStr(currentDate);
let reviewLoadedFor = null;
let editCat = 'mainQuests';

function ensureDay(key) { if (!db.logs[key]) db.logs[key] = { ticked: {}, enemies: [], review: {} }; return db.logs[key]; }
function ensureWeek(wk) { if (!db.weekly[wk]) db.weekly[wk] = { bonuses: {}, review: {} }; return db.weekly[wk]; }
ensureDay(currentDate); ensureWeek(currentWeekStr);

// --- 4. CORE LOGIC ---
const tierOf = it => it.tier !== undefined ? it.tier : (it.parent ? (db.config.extras.find(p => p.id === it.parent) || {}).tier : undefined);
const mainsFor = key => db.config.mainQuests.filter(q => !q.parent && (!q.from || q.from <= key));

function dayIsClear(key) {
  const log = db.logs[key]; if (!log) return false;
  const m = mainsFor(key);
  return m.length > 0 && m.every(q => log.ticked[q.id]);
}

function t2Req(key) {
  const m = parseInt(key.slice(5, 7), 10) - 1;
  return m === 9 ? 400 : (m === 10 ? 425 : 450);
}

function calcDayStats(key) {
  const log = db.logs[key];
  const blank = { base: 0, net: 0, grade: 'F', isClear: false, rawMain: 0, rawSub: 0, rawExtra: 0, mainBonus: 0, penalty: 0, untouchable: false, mult: 1, streak: 0 };
  if (!log) return blank;
  const cfg = db.config;
  const isClear = dayIsClear(key);

  let rawMain = 0, rawSub = 0, rawExtra = 0;
  for (const id in log.ticked) {
    const pts = log.ticked[id];
    const mq = cfg.mainQuests.find(q => q.id === id);
    if (mq) { if (mq.parent) rawSub += pts; else rawMain += pts; }
    else rawExtra += pts;
  }
  const base = rawMain + rawSub + rawExtra;

  let penalty = 0;
  log.enemies.forEach(e => {
    const c = cfg.enemies.find(x => x.id === e.id);
    if (!c) return;
    penalty += c.isTime ? c.xp * ((e.min != null ? e.min : 30) / 30) : c.xp * (e.n || 1);
  });
  penalty = Math.round(penalty);

  let streak = 0, k = addDays(key, -1);
  while (dayIsClear(k)) { streak++; k = addDays(k, -1); }
  let mult = 1.0;
  if (streak >= 14) mult = 1.5; else if (streak >= 7) mult = 1.25; else if (streak >= 3) mult = 1.1;
  if (streak === 0 && isClear) mult = Math.max(mult, 1.2);

  const untouchable = isClear && log.enemies.length === 0;
  const mainBonus = Math.floor(rawMain * mult) - rawMain;
  let net = rawMain + mainBonus + rawSub + rawExtra + (untouchable ? 30 : 0) - penalty;
  if (net < 0) net = 0;

  let grade = 'F';
  for (const [g, thr] of GRADES) if (net >= thr) grade = g;
  return { base, net, grade, isClear, rawMain, rawSub, rawExtra, mainBonus, penalty, untouchable, mult, streak };
}
function stats(key) {
  if (!statsCache.has(key)) statsCache.set(key, calcDayStats(key));
  return statsCache.get(key);
}

function streakInfo() {
  const t = todayKey();
  let cur = 0, k = dayIsClear(t) ? t : addDays(t, -1);
  while (dayIsClear(k)) { cur++; k = addDays(k, -1); }
  let best = 0, run = 0, prev = null;
  Object.keys(db.logs).filter(dayIsClear).sort().forEach(d => {
    run = (prev && addDays(prev, 1) === d) ? run + 1 : 1;
    prev = d; best = Math.max(best, run);
  });
  return { cur, best };
}

function computeAttributes() {
  const out = { CRAFT: 0, VOICE: 0, VITALITY: 0, SPIRIT: 0, FOCUS: 0 };
  const all = [...db.config.mainQuests, ...db.config.extras];
  for (const key in db.logs) {
    for (const id in db.logs[key].ticked) {
      const q = all.find(x => x.id === id); if (!q) continue;
      let attr = q.attr;
      if (!attr && q.parent) { const p = all.find(x => x.id === q.parent); attr = p && p.attr; }
      if (attr && attr in out) out[attr] += db.logs[key].ticked[id];
    }
  }
  return out;
}

const reviewDone = wk => !!(wk && wk.review && ['win', 'enemy', 'rule'].some(k => (wk.review[k] || '').trim()));
function bonusXP() {
  let t = 0;
  for (const w in db.weekly) { if (reviewDone(db.weekly[w])) t += REVIEW_XP; }
  db.unlockedAch.forEach(id => { const a = db.config.achievements.find(x => x.id === id); if (a) t += a.xp; });
  return t;
}

function ladder() {
  const out = [];
  db.config.ranks.forEach(r => {
    const valid = r.tiers.filter(x => x < 999999);
    valid.forEach((xp, i) => out.push({ rank: r.name, label: valid.length > 1 ? `${r.name} ${['I', 'II', 'III'][i]}` : r.name, xp }));
  });
  return out;
}

function weeklyDoneOn(id, key) {
  return weekDays(key).find(d => d !== key && db.logs[d] && db.logs[d].ticked[id]) || null;
}

// --- 5. FEEDBACK ---
let toastTimer;
function toast(msg) {
  const t = $('toast'); if (!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}
function celebrate(msg) {
  if (msg) toast(msg);
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = $('confetti-container'); if (!c) return;
  c.innerHTML = '';
  const cs = getComputedStyle(document.documentElement);
  const colors = ['--g-s', '--g-a', '--g-b', '--g-c'].map(v => cs.getPropertyValue(v).trim() || '#ffc857');
  for (let i = 0; i < 44; i++) {
    const el = document.createElement('div'); el.className = 'confetti';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (Math.random() * 2 + 1.2) + 's';
    el.style.animationDelay = (Math.random() * .4) + 's';
    c.appendChild(el);
  }
  setTimeout(() => { c.innerHTML = ''; }, 3800);
}

// --- 6. RENDER: TODAY ---
function renderUI() {
  const log = ensureDay(currentDate); ensureWeek(currentWeekStr);
  const s = stats(currentDate);
  db.attributes = computeAttributes();

  if ($('date-picker'))$('date-picker').value = currentDate;
  if ($('date-text'))$('date-text').textContent = fromKey(currentDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  if ($('today-btn'))$('today-btn').hidden = currentDate === todayKey();

  renderHUD(s, log);
  renderQuests(s, log);
  renderEnemies(log, s);
  renderBreakdown(s);
  renderProgress();
}

function renderHUD(s, log) {
  const g = s.grade;
  const hud = $('hud');
  if (hud) hud.style.setProperty('--g', `var(--g-${g.toLowerCase()})`);
  if ($('day-grade'))$('day-grade').textContent = g;
  if ($('day-net-xp'))$('day-net-xp').textContent = fmt(s.net);
  const untouched = !Object.keys(log.ticked).length && !log.enemies.length;
  if ($('day-message'))$('day-message').textContent = untouched ? "Let's lock in." : MESSAGES[g];
  if ($('grade-fill'))$('grade-fill').style.width = Math.min(100, s.net / GRADE_MAX * 100) + '%';
  document.querySelectorAll('.meter-marks span').forEach(sp => {
    const thr = GRADES.find(x => x[0] === sp.dataset.g)[1];
    sp.classList.toggle('hit', s.net >= thr);
  });
  if ($('base-xp'))$('base-xp').textContent = `Quest XP ${fmt(s.base)}`;
  const next = GRADES.find(x => x[1] > s.net);
  if ($('next-grade-hint'))$('next-grade-hint').textContent = next ? `${fmt(next[1] - s.net)} XP to ${next[0]}` : 'Top grade reached';
}

const CHEVRON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
const folds = new Map();

function qRow(q, log, key, sectionLocked, kids, open) {
  const done = !!log.ticked[q.id];
  let locked = false, note = '';
  if (q.weeklyOnce) {
    const d = weeklyDoneOn(q.id, key);
    if (d && !done) { locked = true; note = `done ${dayShort(d)}`; }
  }
  if (sectionLocked && !done) locked = true;
  let tag = '';
  if (note) tag = `<span class="q-tag">${esc(note)}</span>`;
  else if (kids && kids.length) {
    const n = kids.filter(k => log.ticked[k.id]).length;
    tag = `<button type="button" class="q-tag q-fold" data-fold="${esc(q.id)}" aria-expanded="${open}" aria-label="Bonus objectives, ${n} of ${kids.length} done">${n}/${kids.length}${CHEVRON_SVG}</button>`;
  } else if (q.weeklyOnce) tag = '<span class="q-tag">once a week</span>';
  const cid = `chk-${esc(q.id)}`;
  return `<div class="q ${done ? 'is-done' : ''} ${locked ? 'is-locked' : ''}"><div class="q-line">
    <label class="q-main">
      <input type="checkbox" class="q-check" id="${cid}" data-id="${esc(q.id)}" ${done ? 'checked' : ''} ${locked ? 'disabled' : ''}>
      <span class="box" aria-hidden="true"></span>
      <span class="q-name">${esc(q.name)}</span>
    </label>${tag}
    <label class="q-xp" for="${cid}">+${q.xp}</label>
  </div></div>`;
}

function questRows(tops, all, log, key, sectionLocked) {
  return tops.map(q => {
    const kids = all.filter(k => k.parent === q.id);
    const open = kids.length > 0 && !!folds.get(q.id);
    let subs = '';
    if (open) {
      const parentDone = !!log.ticked[q.id];
      const kidLocked = sectionLocked || !parentDone;
      subs = `<ul class="subs">${kids.map(k => `<li class="q-wrap">${qRow(k, log, key, kidLocked, null, false)}</li>`).join('')}</ul>`;
    }
    return `<li class="q-wrap">${qRow(q, log, key, sectionLocked, kids, open)}${subs}</li>`;
  }).join('');
}

function renderQuests(s, log) {
  const mq = db.config.mainQuests;
  const req = mainsFor(currentDate);
  if ($('main-count'))$('main-count').textContent = `${req.filter(q => log.ticked[q.id]).length}/${req.length}`;
  if ($('main-quests-list'))$('main-quests-list').innerHTML = questRows(mq.filter(q => !q.parent), mq, log, currentDate, false);

  // Render Optional Extras (Tier 0 - Always Unlocked)
  const optList = $('opt-list');
  if (optList) {
    const optTops = db.config.extras.filter(q => !q.parent && q.tier === 0);
    optList.innerHTML = questRows(optTops, db.config.extras, log, currentDate, false);
  }

  renderTier(1, T1_REQ, s, log);
  renderTier(2, t2Req(currentDate), s, log);
}

function renderTier(n, req, s, log) {
  const all = db.config.extras;
  const tops = all.filter(q => !q.parent && q.tier === n);
  const unlocked = s.base >= req;

  const status = $(`t${n}-status`);
  if (status) {
    status.className = 'badge' + (unlocked ? ' on' : '');
    status.innerHTML = unlocked ? 'Unlocked' : `${LOCK_SVG}${req} XP`;
  }

  const lock = $(`t${n}-lock`);
  if (lock) {
    lock.hidden = unlocked;
    if (!unlocked) {
      lock.innerHTML = `<div class="lock-row"><span>${fmt(req - s.base)} more quest XP to unlock</span><span>${fmt(s.base)} / ${req}</span></div>
        <div class="mini-meter"><i style="width:${Math.min(100, s.base / req * 100)}%"></i></div>`;
    }
  }

  // Tier section fold button
  const foldKey = `sec-tier${n}`;
  const isFoldSet = folds.has(foldKey);
  const open = isFoldSet ? folds.get(foldKey) : unlocked;

  const foldBtn = $(`t${n}-fold-btn`);
  if (foldBtn) {
    foldBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    foldBtn.innerHTML = `${open ? 'Hide' : 'Show'} (${tops.length})${CHEVRON_SVG}`;
  }

  const list = $(`t${n}-list`);
  if (list) {
    list.hidden = !open;
    list.innerHTML = open ? questRows(tops, all, log, currentDate, !unlocked) : '';
  }
}

function enemyPenalty(en, entry) {
  if (!entry) return en.xp;
  return en.isTime ? Math.round(en.xp * ((entry.min != null ? entry.min : 30) / 30)) : en.xp * (entry.n || 1);
}

function renderEnemies(log, s) {
  const enemiesList = $('enemies-list');
  if (!enemiesList) return;
  enemiesList.innerHTML = db.config.enemies.map(en => {
    const entry = log.enemies.find(e => e.id === en.id);
    const on = !!entry;
    const min = entry && entry.min != null ? entry.min : 30;
    const extra = on && !en.isTime && entry.n > 1 ? ` x${entry.n}` : '';
    const pen = enemyPenalty(en, entry);
    const unit = !on && en.isTime ? '<small>/30m</small>' : '';
    const stepper = on && en.isTime ? `<div class="stepper">
        <button class="step" data-id="${esc(en.id)}" data-d="-15" aria-label="15 minutes less">&minus;</button>
        <input class="e-min" type="number" inputmode="numeric" min="5" max="720" step="5" value="${min}" data-id="${esc(en.id)}" aria-label="Minutes lost">
        <span class="e-unit">min</span>
        <button class="step" data-id="${esc(en.id)}" data-d="15" aria-label="15 minutes more">+</button>
      </div>` : '';
    return `<li class="q-wrap"><div class="q enemy ${on ? 'is-hit' : ''}">
      <div class="q-line">
        <label class="q-main">
          <input type="checkbox" class="q-check e-check" id="chk-${esc(en.id)}" data-id="${esc(en.id)}" ${on ? 'checked' : ''}>
          <span class="box" aria-hidden="true"></span>
          <span class="q-name">${esc(en.name)}${extra}</span>
        </label>
        <label class="q-xp" for="chk-${esc(en.id)}">&minus;${pen}${unit}</label>
      </div>${stepper}</div></li>`;
  }).join('');
  const tot = $('enemy-total');
  if (tot) {
    tot.textContent = s.penalty ? `\u2212${fmt(s.penalty)} XP` : 'None today';
    tot.classList.toggle('has', s.penalty > 0);
  }
}

function renderBreakdown(s) {
  const row = (l, v, cls = '') => `<div class="bd-row ${cls}"><span>${l}</span><b>${v}</b></div>`;
  let h = row('Main quests', `+${fmt(s.rawMain)}`);
  if (s.mainBonus > 0) h += row(`Streak bonus x${s.mult}`, `+${fmt(s.mainBonus)}`, 'pos');
  if (s.rawSub) h += row('Bonus objectives', `+${fmt(s.rawSub)}`);
  if (s.rawExtra) h += row('Extras', `+${fmt(s.rawExtra)}`);
  if (s.untouchable) h += row('Untouchable day', '+30', 'pos');
  if (s.penalty) h += row('Enemies', `\u2212${fmt(s.penalty)}`, 'neg');
  h += row('Net XP today', fmt(s.net), 'total');
  if ($('breakdown-content')) $('breakdown-content').innerHTML = h;
}

// --- 7. RENDER: PROGRESS ---
function renderProgress() {
  const si = streakInfo(), todayMult = stats(todayKey()).mult;
  if ($('streak-cur')) $('streak-cur').textContent = si.cur;
  if ($('streak-best')) $('streak-best').textContent = si.best;
  if ($('streak-mult')) $('streak-mult').textContent = 'x' + todayMult;
  renderHeatmap();
  renderWeek();
  renderAttributes();
  renderRank();
  renderAchievements();
}

function renderHeatmap() {
  const today = todayKey();
  let first = db.config.seasonStartDate;
  if (!isKey(first) || first > today) first = today;
  const cap364 = addDays(today, -364); if (first < cap364) first = cap364;
  let html = '<span class="heat-box h-pad"></span>'.repeat((fromKey(first).getDay() + 6) % 7);
  for (let k = first; k <= today; k = addDays(k, 1)) {
    const g = db.logs[k] ? stats(k).grade : 'F';
    html += `<span class="heat-box h-${g}" title="${k}: ${g}"></span>`;
  }
  const c = $('heatmap-container');
  if (c) { c.innerHTML = html; c.scrollLeft = c.scrollWidth; }
}

function renderWeek() {
  const today = todayKey(); let total = 0;
  if ($('week-boxes')) {
    $('week-boxes').innerHTML = weekDays(currentDate).map((k, i) => {
      const st = stats(k), log = db.logs[k];
      total += st.net;
      const has = log && (Object.keys(log.ticked).length || log.enemies.length);
      const g = has ? st.grade : null;
      return `<button class="wd ${k === currentDate ? 'is-sel' : ''} ${k === today ? 'is-today' : ''}" data-date="${k}" style="--g:${g ? `var(--g-${g.toLowerCase()})` : 'var(--faint)'}" aria-label="${dayShort(k)} ${k}">
        <small>${'MTWTFSS'[i]}</small><b>${g || '\u2013'}</b></button>`;
    }).join('');
  }
  if ($('week-xp')) $('week-xp').textContent = `${fmt(total)} XP`;

  const wk = ensureWeek(currentWeekStr);
  if (reviewLoadedFor !== currentWeekStr) {
    ['win', 'enemy', 'rule'].forEach(k => {
      const el = $(`review-${k}`);
      if (el) el.value = wk.review[k] || '';
    });
    reviewLoadedFor = currentWeekStr;
  }
}

function renderAttributes() {
  const attrList = $('attributes-list');
  if (!attrList) return;
  attrList.innerHTML = Object.keys(db.attributes).map(k => {
    const xp = db.attributes[k];
    let lv = 1; ATTR_LEVELS.forEach((t, i) => { if (xp >= t) lv = i + 1; });
    const lo = ATTR_LEVELS[lv - 1], hi = ATTR_LEVELS[lv];
    const pct = hi ? (xp - lo) / (hi - lo) * 100 : 100;
    return `<div class="attr">
      <div class="attr-top"><span class="attr-name">${cap(k)}</span><span class="attr-lv">Lv ${lv} ${ATTR_TITLES[lv - 1]}</span><span class="attr-xp">${fmt(xp)}${hi ? ' / ' + fmt(hi) : ''} XP</span></div>
      <div class="bar"><i style="width:${pct}%"></i></div></div>`;
  }).join('');
}

function renderRank() {
  const lad = ladder();
  let daily = 0; for (const k in db.logs) daily += stats(k).net;
  const bonus = COUNT_BONUS_IN_SEASON ? bonusXP() : 0;
  const total = daily + bonus;
  let idx = 0; lad.forEach((r, i) => { if (total >= r.xp) idx = i; });
  const cur = lad[idx], next = lad[idx + 1];

  if ($('header-rank')) $('header-rank').textContent = cur.label;
  if ($('rank-name')) $('rank-name').textContent = cur.label;
  if ($('season-xp')) $('season-xp').textContent = `${fmt(total)} XP`;
  if ($('rank-progress-fill')) $('rank-progress-fill').style.width = (next ? (total - cur.xp) / (next.xp - cur.xp) * 100 : 100) + '%';
  if ($('rank-progress-text')) $('rank-progress-text').textContent = next ? `${fmt(next.xp - total)} XP to ${next.label}` : 'Highest rank reached';
  if ($('rank-source')) $('rank-source').textContent = bonus ? `${fmt(daily)} from days, ${fmt(bonus)} from reviews and achievements.` : '';

  const ranks = db.config.ranks;
  if ($('rank-segs')) {
    $('rank-segs').innerHTML = ranks.map((r, i) => {
      const start = r.tiers[0], end = ranks[i + 1] ? ranks[i + 1].tiers[0] : null;
      const isNow = r.name === cur.rank;
      const pct = end ? Math.max(0, Math.min(1, (total - start) / (end - start))) * 100 : (total >= start ? 100 : 0);
      return `<div class="${isNow ? 'now' : (pct >= 100 ? 'done' : '')}" title="${esc(r.name)}"><i style="width:${pct}%"></i></div>`;
    }).join('');
  }
}

function renderAchievements() {
  const list = db.config.achievements;
  if ($('ach-count')) $('ach-count').textContent = `${db.unlockedAch.filter(id => list.some(a => a.id === id)).length}/${list.length}`;
  if ($('achievements-list')) {
    $('achievements-list').innerHTML = list.map(a => {
      const on = db.unlockedAch.includes(a.id);
      return `<button class="ach ${on ? 'on' : ''}" data-id="${esc(a.id)}" aria-pressed="${on}"><b>${esc(a.name)}</b><small>+${a.xp} XP</small></button>`;
    }).join('');
  }
}

// --- 8. EVENTS ---
function snapshot() {
  const s = stats(currentDate);
  return { clear: s.isClear, t1: s.base >= T1_REQ, t2: s.base >= t2Req(currentDate) };
}

function onQuestToggle(el) {
  const all = [...db.config.mainQuests, ...db.config.extras];
  const q = all.find(x => x.id === el.dataset.id);
  if (!q) { renderUI(); return; }
  const log = ensureDay(currentDate);
  const before = snapshot();
  if (el.checked) { log.ticked[q.id] = q.xp; folds.delete(q.id); }
  else { delete log.ticked[q.id]; all.filter(x => x.parent === q.id).forEach(c => delete log.ticked[c.id]); }
  saveData();
  const after = snapshot();
  renderUI();
  if (!before.t1 && after.t1) toast('Extras tier 1 unlocked');
  if (!before.t2 && after.t2) toast('Extras tier 2 unlocked');
  if (!before.clear && after.clear) celebrate('Day clear');
}

function onEnemyToggle(el) {
  const en = db.config.enemies.find(x => x.id === el.dataset.id);
  if (!en) { renderUI(); return; }
  const log = ensureDay(currentDate);
  log.enemies = log.enemies.filter(e => e.id !== en.id);
  if (el.checked) log.enemies.push(en.isTime ? { id: en.id, min: 30 } : { id: en.id, n: 1 });
  saveData(); renderUI();
}

function setEnemyMinutes(id, minutes) {
  const log = ensureDay(currentDate);
  const e = log.enemies.find(x => x.id === id); if (!e) return;
  e.min = Math.max(5, Math.min(720, Math.round(minutes) || 30));
  saveData(); renderUI();
}

function switchTab(id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.target === id));
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.id === id));
  window.scrollTo(0, 0);
}

function setDate(key) {
  if (!isKey(key)) return;
  currentDate = key;
  folds.clear();
  currentWeekStr = getWeekStr(key);
  ensureDay(key); ensureWeek(currentWeekStr);
  renderUI();
}

document.addEventListener('change', e => {
  const t = e.target;
  if (t.classList.contains('e-check')) return onEnemyToggle(t);
  if (t.classList.contains('q-check')) return onQuestToggle(t);
  if (t.classList.contains('e-min')) return setEnemyMinutes(t.dataset.id, parseInt(t.value, 10));
  if (t.id === 'date-picker') { if (t.value) setDate(t.value); return; }
  if (t.dataset && t.dataset.f && t.closest('.er')) return onEditField(t);
});

document.addEventListener('click', e => {
  const t = e.target;
  const nav = t.closest('.nav-btn'); if (nav) return switchTab(nav.dataset.target);
  
  // Section Fold
  const secFold = t.closest('[data-sec-fold]');
  if (secFold) {
    const key = `sec-${secFold.dataset.secFold}`;
    const curr = folds.has(key) ? folds.get(key) : (secFold.dataset.secFold === 'tier1' ? stats(currentDate).base >= T1_REQ : stats(currentDate).base >= t2Req(currentDate));
    folds.set(key, !curr);
    return renderUI();
  }

  // Quest Fold
  const fold = t.closest('.q-fold');
  if (fold) { folds.set(fold.dataset.fold, !folds.get(fold.dataset.fold)); return renderUI(); }

  const step = t.closest('.step');
  if (step) {
    const entry = ensureDay(currentDate).enemies.find(x => x.id === step.dataset.id);
    if (entry) setEnemyMinutes(step.dataset.id, (entry.min != null ? entry.min : 30) + parseInt(step.dataset.d, 10));
    return;
  }
  if (t.closest('#prev-day')) return setDate(addDays(currentDate, -1));
  if (t.closest('#next-day')) return setDate(addDays(currentDate, 1));
  if (t.closest('#today-btn')) return setDate(todayKey());
  const wd = t.closest('.wd'); if (wd) return setDate(wd.dataset.date);
  const ach = t.closest('.ach');
  if (ach) {
    const id = ach.dataset.id;
    if (db.unlockedAch.includes(id)) db.unlockedAch = db.unlockedAch.filter(i => i !== id);
    else { db.unlockedAch.push(id); celebrate('Achievement unlocked'); }
    saveData(); renderUI(); return;
  }
  if (t.closest('#save-review')) {
    const wk = ensureWeek(currentWeekStr);
    wk.review = { win: $('review-win').value, enemy: $('review-enemy').value, rule: $('review-rule').value };
    saveData(); renderUI();
    if (reviewDone(wk)) celebrate(`Review saved, +${REVIEW_XP} XP`); else toast('Review cleared');
    return;
  }
  const seg = t.closest('.seg-btn'); if (seg) return setEditCat(seg.dataset.cat);
  const actBtn = t.closest('[data-act]'); if (actBtn && actBtn.closest('.er')) return onEditAction(actBtn);
});

if ($('date-picker')) {
  $('date-picker').addEventListener('click', () => { try { $('date-picker').showPicker(); } catch (e) { /* fallback */ } });
}

// --- 9. EDIT TAB ---
const EDIT_CATS = {
  mainQuests: { arr: 'mainQuests', noun: 'quest' },
  optional: { arr: 'extras', tier: 0, noun: 'quest' },
  tier1: { arr: 'extras', tier: 1, noun: 'quest' },
  tier2: { arr: 'extras', tier: 2, noun: 'quest' },
  enemies: { arr: 'enemies', noun: 'enemy' }
};

function setEditCat(cat) {
  editCat = cat;
  document.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  if ($('btn-add-item')) $('btn-add-item').textContent = `Add ${EDIT_CATS[cat].noun}`;
  renderEditList();
}

function editItems() {
  const c = EDIT_CATS[editCat], arr = db.config[c.arr];
  return c.tier !== undefined ? arr.filter(it => tierOf(it) === c.tier) : arr;
}

function renderEditList() {
  const isEnemy = editCat === 'enemies';
  const items = editItems();
  const editContainer = $('edit-list-container');
  if (!editContainer) return;
  editContainer.innerHTML = items.length ? items.map(it => {
    const sub = !!it.parent;
    const attrSel = (!sub && !isEnemy) ? `<select data-f="attr" aria-label="Attribute"><option value="">No attribute</option>${ATTRS.map(a => `<option value="${a}" ${it.attr === a ? 'selected' : ''}>${cap(a)}</option>`).join('')}</select>` : '';
    const timed = isEnemy ? `<label class="er-timed"><input type="checkbox" data-f="isTime" ${it.isTime ? 'checked' : ''}> per 30 min</label>` : '';
    const addSub = (!sub && !isEnemy) ? '<button class="mini" data-act="add-sub" title="Add bonus objective" aria-label="Add bonus objective">+</button>' : '';
    return `<li class="er ${sub ? 'is-sub' : ''}" data-id="${esc(it.id)}">
      <input type="text" data-f="name" value="${esc(it.name)}" aria-label="Name" autocomplete="off">
      <div class="er-line">
        <input class="er-xp" type="number" inputmode="numeric" min="0" data-f="xp" value="${it.xp}" aria-label="XP" title="XP">
        ${attrSel}${timed}
        <span class="er-actions">${addSub}<button class="mini" data-act="up" aria-label="Move up">&uarr;</button><button class="mini" data-act="down" aria-label="Move down">&darr;</button><button class="mini danger" data-act="del" aria-label="Delete">&times;</button></span>
      </div></li>`;
  }).join('') : '<li class="hint">Nothing here yet.</li>';
}

function findEditItem(el) {
  const row = el.closest('.er'); if (!row) return null;
  const arr = db.config[EDIT_CATS[editCat].arr];
  return { arr, item: arr.find(x => x.id === row.dataset.id) };
}

function onEditField(el) {
  const f = findEditItem(el); if (!f || !f.item) return;
  const k = el.dataset.f;
  if (k === 'xp') { const n = parseInt(el.value, 10); f.item.xp = isNaN(n) || n < 0 ? 0 : n; el.value = f.item.xp; }
  else if (k === 'name') { f.item.name = el.value.trim() || f.item.name; el.value = f.item.name; }
  else if (k === 'attr') { if (el.value) f.item.attr = el.value; else delete f.item.attr; }
  else if (k === 'isTime') f.item.isTime = el.checked;
  saveData(); renderUI();
}

function moveItem(arr, id, dir) {
  const i = arr.findIndex(x => x.id === id); if (i < 0) return;
  const it = arr[i];
  const same = x => x.parent === it.parent && x.tier === it.tier;
  const span = idx => { let e = idx + 1; if (!arr[idx].parent) while (e < arr.length && arr[e].parent === arr[idx].id) e++; return [idx, e]; };
  const [s, e] = span(i);
  if (dir < 0) {
    let k = i - 1; while (k >= 0 && !same(arr[k])) k--;
    if (k < 0) return;
    const block = arr.splice(s, e - s); arr.splice(k, 0, ...block);
  } else {
    let k = e; while (k < arr.length && !same(arr[k])) k++;
    if (k >= arr.length) return;
    const ke = span(k)[1];
    const block = arr.splice(s, e - s); arr.splice(ke - block.length, 0, ...block);
  }
}

function onEditAction(btn) {
  const f = findEditItem(btn); if (!f || !f.item) return;
  const { arr, item } = f, act = btn.dataset.act;
  if (act === 'up' || act === 'down') moveItem(arr, item.id, act === 'up' ? -1 : 1);
  else if (act === 'del') {
    const kids = arr.filter(x => x.parent === item.id);
    if (!confirm(`Delete "${item.name}"${kids.length ? ` and its ${kids.length} bonus objectives` : ''}? Past logs keep their XP.`)) return;
    const gone = new Set([item.id, ...kids.map(k => k.id)]);
    db.config[EDIT_CATS[editCat].arr] = arr.filter(x => !gone.has(x.id));
  } else if (act === 'add-sub') {
    const sub = { id: newId(), parent: item.id, name: 'New bonus', xp: 10 };
    let at = arr.indexOf(item) + 1; while (at < arr.length && arr[at].parent === item.id) at++;
    arr.splice(at, 0, sub);
    saveData(); renderEditList(); renderUI(); focusEditRow(sub.id); return;
  }
  saveData(); renderEditList(); renderUI();
}

function focusEditRow(id) {
  const input = document.querySelector(`.er[data-id="${id}"] input[data-f="name"]`);
  if (input) { input.focus(); input.select(); }
}

if ($('btn-add-item')) {
  $('btn-add-item').addEventListener('click', () => {
    const c = EDIT_CATS[editCat];
    let item;
    if (editCat === 'enemies') item = { id: newId(), name: 'New enemy', xp: 20, isTime: false };
    else {
      item = { id: newId(), name: 'New quest', xp: 10 };
      if (c.tier !== undefined) item.tier = c.tier;
      if (editCat === 'mainQuests') item.from = todayKey();
    }
    db.config[c.arr].push(item);
    saveData(); renderEditList(); renderUI(); focusEditRow(item.id);
  });
}

if ($('btn-reset-defaults')) {
  $('btn-reset-defaults').addEventListener('click', () => {
    if (!confirm('Reset all quests, enemies and ranks to the default rules? Your logged history will not be deleted.')) return;
    db.config = clone(defaultConfig);
    saveData(); renderUI(); renderEditList(); toast('Default rules restored');
  });
}

// --- 10. BACKUP ---
function renderBackupInfo() {
  if ($('last-backup')) {
    $('last-backup').textContent = 'Last backup: ' + (db.lastExport
      ? new Date(db.lastExport).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
      : 'never');
  }
}

if ($('btn-export')) {
  $('btn-export').addEventListener('click', () => {
    db.lastExport = Date.now(); saveData();
    const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `habit-gamified-backup-${todayKey()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    renderBackupInfo(); toast('Backup exported');
  });
}

let pendingImport = null;
if ($('btn-import')) {
  $('btn-import').addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (!parsed || typeof parsed !== 'object' || !parsed.logs || typeof parsed.logs !== 'object') throw new Error('shape');
        pendingImport = normalize(parsed);
        const dlg = $('import-dialog');
        if (dlg) {
          dlg.returnValue = '';
          if (dlg.showModal) dlg.showModal();
          else applyImport(confirm('Merge with current data? OK = Merge, Cancel = Replace all') ? 'merge' : 'replace');
        }
      } catch (err) { toast('That file is not a valid backup.'); }
      e.target.value = '';
    };
    reader.readAsText(file);
  });
}

if ($('import-dialog')) {
  $('import-dialog').addEventListener('close', () => applyImport($('import-dialog').returnValue));
}

const logWeight = l => Object.keys(l.ticked).length + l.enemies.length;
function applyImport(mode) {
  if (!pendingImport || (mode !== 'merge' && mode !== 'replace')) { pendingImport = null; return; }
  const inc = pendingImport; pendingImport = null;
  if (mode === 'replace') db = inc;
  else {
    for (const k in inc.logs) if (!db.logs[k] || logWeight(inc.logs[k]) > logWeight(db.logs[k])) db.logs[k] = inc.logs[k];
    for (const w in inc.weekly) {
      const a = db.weekly[w], b = inc.weekly[w];
      if (!a) db.weekly[w] = b;
      else { if (!reviewDone(a) && reviewDone(b)) a.review = b.review; }
    }
    inc.unlockedAch.forEach(id => { if (!db.unlockedAch.includes(id)) db.unlockedAch.push(id); });
  }
  reviewLoadedFor = null;
  saveData(); setDate(todayKey()); renderEditList(); renderBackupInfo();
  toast(mode === 'replace' ? 'Backup restored' : 'Backup merged');
}

// --- 11. BOOT ---
let bootToday = todayKey();
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible' || todayKey() === bootToday) return;
  const wasOnToday = currentDate === bootToday;
  bootToday = todayKey();
  if (wasOnToday) setDate(bootToday); else renderUI();
});

setEditCat('mainQuests');
renderUI();
renderBackupInfo();
