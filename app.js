// --- 1. DATA MANAGER & DEFAULTS ---
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
    { id: "e1", tier: 1, name: "Flashcards review, 15 min", xp: 20, attr: "VOICE" },
    { id: "e1a", parent: "e1", name: "Adding new phrases", xp: 15 },
    { id: "e2", tier: 1, name: "Brain dump writing", xp: 20, attr: "SPIRIT" },
    { id: "e2a", parent: "e2", name: "Rewrite 5 sentences by hand", xp: 20 },
    { id: "e3", tier: 1, name: "Tidy your room", xp: 25, attr: "FOCUS" },
    { id: "e4", tier: 1, name: "Pose Try / Draw pose", xp: 20, attr: "CRAFT" },
    { id: "e5", tier: 1, name: "Reaching out to someone", xp: 20, attr: "VOICE" },
    { id: "e6", tier: 1, name: "Read Reddit/Discord phrases", xp: 20, attr: "VOICE" },
    { id: "e7", tier: 1, name: "Clean eating day", xp: 20, attr: "VITALITY" },
    { id: "e8", tier: 2, name: "Rig course progress 30m", xp: 20, attr: "CRAFT" },
    { id: "e8a", parent: "e8", name: "+ 2 hours", xp: 30 },
    { id: "e9", tier: 2, name: "Deep watch productive", xp: 20, attr: "CRAFT" },
    { id: "e9a", parent: "e9", name: "Note the insight learned", xp: 25 },
    { id: "e10", tier: 2, name: "Watch movie/series", xp: 30, attr: "SPIRIT" },
    { id: "e10a", parent: "e10", name: "Write summary/lessons", xp: 20 },
    { id: "e10b", parent: "e10", name: "Save references PureRef", xp: 15 },
    { id: "e10c", parent: "e10", name: "Speak out loud feelings", xp: 15 },
    { id: "e11", tier: 2, name: "Badminton or Swim", xp: 60, attr: "VITALITY", weeklyOnce: true },
    { id: "e12", tier: 2, name: "Long run 5K+", xp: 80, attr: "VITALITY", weeklyOnce: true },
    { id: "e13", tier: 2, name: "Social group activities", xp: 60, attr: "VOICE" },
    { id: "e14", tier: 2, name: "Anim Watch & Analyze 30m", xp: 40, attr: "CRAFT" },
    { id: "e15", tier: 2, name: "Record yourself speaking", xp: 40, attr: "VOICE" },
    { id: "e16", tier: 2, name: "Animate for Yourself 2h", xp: 120, attr: "CRAFT", weeklyOnce: true }
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

let db = { version: 1, config: JSON.parse(JSON.stringify(defaultConfig)), logs: {}, weekly: {}, unlockedAch: [], attributes: { CRAFT:0, VOICE:0, VITALITY:0, SPIRIT:0, FOCUS:0 }, updatedAt: Date.now() };
function loadData() { const saved = localStorage.getItem('habitGamifiedDB'); if(saved) db = JSON.parse(saved); }
function saveData() { db.updatedAt = Date.now(); localStorage.setItem('habitGamifiedDB', JSON.stringify(db)); }
loadData();

// --- 2. CORE LOGIC ---
let currentDate = new Date().toISOString().split('T')[0];
if(!db.logs[currentDate]) db.logs[currentDate] = { ticked: {}, enemies: [], review: {} };

function getWeekStr(dStr) {
  let d = new Date(dStr); d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  let weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}
let currentWeekStr = getWeekStr(currentDate);
if(!db.weekly[currentWeekStr]) db.weekly[currentWeekStr] = { bonuses: {}, boss: false, review: {} };

function celebrate(msg) {
  const c = document.getElementById('confetti-container'); c.innerHTML = '';
  for(let i=0; i<50; i++) {
    let el = document.createElement('div'); el.className = 'confetti';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.backgroundColor = ['#4caf50','#ffd700','#03a9f4','#ff9800'][Math.floor(Math.random()*4)];
    el.style.animationDuration = (Math.random() * 2 + 1) + 's';
    c.appendChild(el);
  }
  setTimeout(() => c.innerHTML='', 3500);
  if(msg) alert(`🎉 ${msg} 🎉`);
}

// Stats Calculators
function calcDayStats(dateStr) {
  const log = db.logs[dateStr]; if(!log) return { base:0, net:0, grade:'F', isClear:false, rawMain:0, untouchable:false };
  let mains = db.config.mainQuests.filter(q => !q.parent);
  let mainIds = mains.map(q => q.id);
  let isClear = mainIds.every(id => log.ticked[id]);
  
  let rawMain = 0, rawSub = 0, rawExtra = 0;
  for(let key in log.ticked) {
    let pts = log.ticked[key];
    if(mainIds.includes(key)) rawMain += pts;
    else if(db.config.mainQuests.find(q => q.id === key)) rawSub += pts;
    else rawExtra += pts;
  }
  
  let baseTotal = rawMain + rawSub + rawExtra;
  let penalty = 0;
  log.enemies.forEach(e => {
    let enConfig = db.config.enemies.find(c => c.id === e.id);
    if(!enConfig) return;
    if(enConfig.isTime) penalty += (enConfig.xp * (e.min / 30));
    else penalty += enConfig.xp;
  });

  let mult = 1.0;
  // Calculate streak backwards from this date
  let streak = 0, tempD = new Date(dateStr); tempD.setDate(tempD.getDate() - 1);
  while(true) {
    let dStr = tempD.toISOString().split('T')[0];
    if(!db.logs[dStr]) break;
    let prevMains = mains.every(m => db.logs[dStr].ticked[m.id]);
    if(prevMains) streak++; else break;
    tempD.setDate(tempD.getDate() - 1);
  }
  if(streak >= 14) mult = 1.5; else if(streak >= 7) mult = 1.25; else if(streak >= 3) mult = 1.1;
  
  // Second wind simplified: if streak 0 but clear today, 1.2x (unless shields used, simplified to just broken streak)
  if(streak === 0 && isClear && db.logs[dateStr].ticked) mult = Math.max(mult, 1.2); 
  
  let untouchable = isClear && log.enemies.length === 0;
  let netXP = Math.floor(rawMain * mult) + rawSub + rawExtra + (untouchable ? 30 : 0) - penalty;
  if(netXP < 0) netXP = 0;

  let grade = 'F';
  if(netXP >= 650) grade = 'S'; else if(netXP >= 500) grade = 'A'; else if(netXP >= 350) grade = 'B'; 
  else if(netXP >= 220) grade = 'C'; else if(netXP >= 100) grade = 'D';

  return { base: baseTotal, net: netXP, grade, isClear, rawMain, untouchable, mult, streak };
}

function getTier2Req() {
  let m = new Date(currentDate).getMonth();
  return m === 9 ? 400 : (m === 10 ? 425 : 450); // Oct=9
}

function renderUI() {
  const log = db.logs[currentDate];
  const stats = calcDayStats(currentDate);
  const t2Req = getTier2Req();
  
  // Header
  document.getElementById('date-picker').value = currentDate;
  
  // Today Tab
  document.getElementById('day-net-xp').innerText = `${stats.net} XP`;
  document.getElementById('day-grade').innerText = stats.grade;
  document.getElementById('day-grade').style.color = `var(--${stats.grade.toLowerCase()}-color)`;
  let mains = db.config.mainQuests.filter(q => !q.parent);
  let clearCount = mains.filter(q => log.ticked[q.id]).length;
  document.getElementById('main-quest-count').innerText = `Main quests ${clearCount}/${mains.length}`;
  
  let progPct = Math.min(100, (stats.base / (t2Req+100)) * 100);
  document.getElementById('day-progress-fill').style.width = `${progPct}%`;
  
  const msgs = {S:"Legendary. Unstoppable.", A:"Strong day. Almost perfect.", B:"Good solid day.", C:"You showed up. Baseline met.", D:"Partial. Second Wind tomorrow.", F:"Reset. We go again."};
  document.getElementById('day-message').innerText = msgs[stats.grade];

  // Render Quests
  const renderQList = (containerId, items, isLockedSection) => {
    let html = '';
    items.forEach(q => {
      let isSub = !!q.parent;
      let isChecked = !!log.ticked[q.id];
      let locked = false;
      if(isSub) locked = !log.ticked[q.parent];
      if(q.weeklyOnce && db.logs) {
         // Check if done earlier this week
         for(let i=0; i<7; i++) {
           let d = new Date(currentDate); d.setDate(d.getDate()-i);
           if(getWeekStr(d.toISOString().split('T')[0]) !== currentWeekStr) break;
           let dLog = db.logs[d.toISOString().split('T')[0]];
           if(dLog && dLog.ticked[q.id] && d.toISOString().split('T')[0] !== currentDate) locked = true;
         }
      }
      if(isLockedSection) locked = true;
      html += `<label class="quest-item ${isSub?'sub-quest':''} ${locked?'locked-section':''}">
        <input type="checkbox" data-id="${q.id}" class="q-check" ${isChecked?'checked':''} ${locked?'disabled':''}>
        <span class="custom-check"></span> <span>${q.name}</span>
        <span class="quest-meta">${q.xp} XP</span>
      </label>`;
    });
    document.getElementById(containerId).innerHTML = html;
  }
  
  renderQList('main-quests-list', db.config.mainQuests, false);
  
  let t1Unlocked = stats.base >= 220;
  document.getElementById('t1-lock').style.display = t1Unlocked ? 'none' : 'block';
  document.getElementById('t1-lock').innerText = `Unlocks at 220 Base XP. You have ${stats.base}.`;
  renderQList('t1-list', db.config.extras.filter(e => e.tier === 1), !t1Unlocked);
  
  let t2Unlocked = stats.base >= t2Req;
  document.getElementById('t2-lock').style.display = t2Unlocked ? 'none' : 'block';
  document.getElementById('t2-lock').innerText = `Unlocks at ${t2Req} Base XP. You have ${stats.base}.`;
  renderQList('t2-list', db.config.extras.filter(e => e.tier === 2), !t2Unlocked);

  // Enemies
  let eHtml = '';
  db.config.enemies.forEach(en => {
    let hits = log.enemies.filter(e => e.id === en.id).length;
    eHtml += `<div class="enemy-item">
      <span>${en.name} (-${en.xp} XP${en.isTime?'/30m':''}) <strong>x${hits}</strong></span>
      <div>
        ${en.isTime ? `<input type="number" placeholder="min" class="enemy-input" id="min-${en.id}">` : ''}
        <button class="btn-small enemy-hit" data-id="${en.id}">+ Hit</button>
      </div>
    </div>`;
  });
  document.getElementById('enemies-list').innerHTML = eHtml;

  // Breakdown
  let bHtml = `<p>Main XP: ${stats.rawMain} x ${stats.mult} multiplier</p>`;
  if(stats.untouchable) bHtml += `<p style="color:var(--accent)">+ Untouchable Day: 30</p>`;
  bHtml += `<hr><p>Net XP: <strong>${stats.net}</strong></p>`;
  document.getElementById('breakdown-content').innerHTML = bHtml;

  updateProgressTab();
}

function updateProgressTab() {
  const stats = calcDayStats(currentDate);
  document.getElementById('streak-stats').innerText = `Current Streak: ${stats.streak} | Multiplier: ${stats.mult}x`;
  
  // Heatmap
  let hm = ''; let d = new Date(db.config.seasonStartDate); let end = new Date();
  while(d <= end) {
    let dStr = d.toISOString().split('T')[0];
    let g = db.logs[dStr] ? calcDayStats(dStr).grade : 'F';
    hm += `<div class="heat-box heat-${g}" title="${dStr}: ${g}"></div>`;
    d.setDate(d.getDate()+1);
  }
  document.getElementById('heatmap-container').innerHTML = hm;

  // This Week
  let weekXP = 0; let clears = 0; let wHtml = '';
  for(let i=6; i>=0; i--) {
    let wD = new Date(currentDate); wD.setDate(wD.getDate() - wD.getDay() + 1 + i - 7); // Rough approx for week view
    // A proper Mon-Sun iter:
    let curr = new Date(currentDate); 
    let dayIdx = curr.getDay() || 7; 
    curr.setDate(curr.getDate() - dayIdx + 1 + (6-i));
    let dStr = curr.toISOString().split('T')[0];
    let dStats = calcDayStats(dStr);
    weekXP += dStats.net;
    if(dStats.isClear) clears++;
    wHtml += `<div class="week-box heat-${dStats.grade}">${['M','T','W','T','F','S','S'][6-i]}</div>`;
  }
  document.getElementById('week-boxes').innerHTML = wHtml;
  
  // Weekly Systems
  let wk = db.weekly[currentWeekStr];
  document.getElementById('weekly-score').innerText = `Base XP: ${weekXP}`;
  document.getElementById('boss-check').checked = wk.boss;
  
  ['win','enemy','rule'].forEach(k => document.getElementById(`review-${k}`).value = wk.review[k] || '');

  // Attributes
  let aHtml = '';
  for(let k in db.attributes) {
    let xp = db.attributes[k];
    let lv = xp>=7000?5 : xp>=4500?4 : xp>=2500?3 : xp>=1000?2 : 1;
    let title = ['Novice','Apprentice','Adept','Expert','Master'][lv-1];
    aHtml += `<div class="flex-between"><small>${k} (Lv ${lv} ${title})</small><small>${xp} XP</small></div>
              <div class="attr-bar"><div class="attr-fill" style="width:${(xp/(lv*2000))*100}%"></div></div>`;
  }
  document.getElementById('attributes-list').innerHTML = aHtml;

  // Ranks
  let seasonXP = 0; 
  for(let l in db.logs) seasonXP += calcDayStats(l).net;
  let currRank = db.config.ranks[0], currDiv = 1, nextXP = db.config.ranks[0].tiers[1];
  for(let r of db.config.ranks) {
    for(let i=0; i<3; i++) {
      if(seasonXP >= r.tiers[i]) { currRank = r; currDiv = i+1; nextXP = r.tiers[i+1] || r.tiers[i]; }
    }
  }
  let rankStr = `${currRank.name} ${['I','II','III'][currDiv-1]}`;
  document.getElementById('header-rank').innerText = rankStr;
  document.getElementById('rank-progress-text').innerText = `${rankStr} — ${seasonXP} / ${nextXP} XP`;
  document.getElementById('rank-progress-fill').style.width = nextXP ? `${(seasonXP/nextXP)*100}%` : '100%';

  // Achievements
  let achHtml = '';
  db.config.achievements.forEach(a => {
    let unl = db.unlockedAch.includes(a.id);
    achHtml += `<div class="ach-card ${unl?'unlocked':''}" onclick="toggleAch('${a.id}')">
      <strong>${a.name}</strong><br><small>${a.xp} XP</small>
    </div>`;
  });
  document.getElementById('achievements-list').innerHTML = achHtml;
}

window.toggleAch = function(id) {
  if(db.unlockedAch.includes(id)) db.unlockedAch = db.unlockedAch.filter(i=>i!==id);
  else { db.unlockedAch.push(id); celebrate('Achievement Unlocked!'); }
  saveData(); updateProgressTab();
}

// Event Listeners
document.addEventListener('change', e => {
  if(e.target.classList.contains('q-check')) {
    let id = e.target.getAttribute('data-id');
    if(e.target.checked) {
      let q = [...db.config.mainQuests, ...db.config.extras].find(x => x.id === id);
      db.logs[currentDate].ticked[id] = q.xp;
      
      // Add attribute XP
      let attr = q.attr;
      if(!attr && q.parent) {
         let p = [...db.config.mainQuests, ...db.config.extras].find(x => x.id === q.parent);
         if(p) attr = p.attr;
      }
      if(attr) db.attributes[attr] = (db.attributes[attr]||0) + q.xp;
      
      let s = calcDayStats(currentDate);
      if(s.isClear && db.config.mainQuests.filter(mq=>!mq.parent).length === Object.keys(db.logs[currentDate].ticked).filter(k=>db.config.mainQuests.find(m=>m.id===k && !m.parent)).length) {
        celebrate("Day Clear!"); // Only on the exact moment of clear
      }
    } else {
      delete db.logs[currentDate].ticked[id];
      // Untick children
      let children = [...db.config.mainQuests, ...db.config.extras].filter(x => x.parent === id);
      children.forEach(c => delete db.logs[currentDate].ticked[c.id]);
    }
    saveData(); renderUI();
  }
  if(e.target.id === 'boss-check') {
    db.weekly[currentWeekStr].boss = e.target.checked;
    if(e.target.checked) celebrate("Boss Defeated!");
    saveData(); updateProgressTab();
  }
});

document.addEventListener('click', e => {
  if(e.target.classList.contains('nav-btn')) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(e.target.getAttribute('data-target')).classList.add('active');
  }
  if(e.target.classList.contains('enemy-hit')) {
    let id = e.target.getAttribute('data-id');
    let minInput = document.getElementById(`min-${id}`);
    let min = minInput ? (parseInt(minInput.value) || 30) : 30;
    db.logs[currentDate].enemies.push({ id, min });
    if(minInput) minInput.value = '';
    saveData(); renderUI();
  }
  if(e.target.id === 'prev-day') { let d = new Date(currentDate); d.setDate(d.getDate()-1); setDate(d); }
  if(e.target.id === 'next-day') { let d = new Date(currentDate); d.setDate(d.getDate()+1); setDate(d); }
  if(e.target.id === 'today-btn') { setDate(new Date()); }
  if(e.target.id === 'save-review') {
    db.weekly[currentWeekStr].review = {
      win: document.getElementById('review-win').value,
      enemy: document.getElementById('review-enemy').value,
      rule: document.getElementById('review-rule').value
    };
    saveData(); celebrate("Weekly Review Saved!");
  }
});

document.getElementById('date-picker').addEventListener('change', e => {
  if(e.target.value) setDate(new Date(e.target.value));
});

function setDate(d) {
  currentDate = d.toISOString().split('T')[0];
  currentWeekStr = getWeekStr(currentDate);
  if(!db.logs[currentDate]) db.logs[currentDate] = { ticked: {}, enemies: [], review: {} };
  if(!db.weekly[currentWeekStr]) db.weekly[currentWeekStr] = { bonuses: {}, boss: false, review: {} };
  renderUI();
}

// Data & Export
document.getElementById('btn-export').addEventListener('click', () => {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db));
  let dl = document.createElement('a'); dl.setAttribute("href", dataStr);
  dl.setAttribute("download", `habit-gamified-backup-${new Date().toISOString().split('T')[0]}.json`);
  dl.click();
  document.getElementById('last-backup').innerText = `Last export: Just now`;
});

document.getElementById('btn-import').addEventListener('change', e => {
  let file = e.target.files[0];
  if(!file) return;
  let reader = new FileReader();
  reader.onload = (ev) => {
    try {
      let imported = JSON.parse(ev.target.result);
      if(confirm("Merge logs (keep newest) or Replace all?\nOK = Merge, Cancel = Replace")) {
        Object.assign(db.logs, imported.logs); // Simple merge
      } else {
        db = imported;
      }
      saveData(); setDate(new Date()); alert("Import successful!");
    } catch(err) { alert("Invalid backup file."); }
  };
  reader.readAsText(file);
});

// Edit Mode Logic (Simple list rendering)
document.getElementById('edit-category').addEventListener('change', renderEditList);
function renderEditList() {
  let cat = document.getElementById('edit-category').value;
  let items = db.config[cat];
  let html = items.map((it, idx) => `
    <div class="edit-row">
      <input type="text" value="${it.name}" onchange="updateConfig('${cat}',${idx},'name',this.value)" style="flex:1" class="input-full" style="margin:0;">
      <input type="number" value="${it.xp}" onchange="updateConfig('${cat}',${idx},'xp',this.value)" style="width:60px" class="input-full" style="margin:0;">
      <button class="btn-small" onclick="moveConfig('${cat}',${idx},-1)">↑</button>
      <button class="btn-small" onclick="moveConfig('${cat}',${idx},1)">↓</button>
    </div>
  `).join('');
  document.getElementById('edit-list-container').innerHTML = html;
}
window.updateConfig = function(cat, idx, field, val) {
  db.config[cat][idx][field] = field==='xp'?parseInt(val):val; saveData(); renderUI();
}
window.moveConfig = function(cat, idx, dir) {
  let arr = db.config[cat];
  if(idx+dir < 0 || idx+dir >= arr.length) return;
  let temp = arr[idx]; arr[idx] = arr[idx+dir]; arr[idx+dir] = temp;
  saveData(); renderEditList(); renderUI();
}
document.getElementById('btn-reset-defaults').addEventListener('click', () => {
  if(confirm("Reset all quests and rules to exact document defaults? Your logged history will NOT be deleted.")) {
    db.config = JSON.parse(JSON.stringify(defaultConfig));
    saveData(); renderUI(); renderEditList();
  }
});
document.getElementById('btn-add-item').addEventListener('click', () => alert("To add new complex items, please edit the JSON via export/import for now to ensure IDs match up properly."));

// Boot
renderUI(); renderEditList();