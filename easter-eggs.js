/* ============================================================
   easter-eggs.js — for prernamishraa.github.io
   add before </body>:  <script src="easter-eggs.js"></script>
   no other changes needed. everything is self-contained.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- shared: toast + injected styles ---------- */
  const style = document.createElement("style");
  style.textContent = `
    .egg-toast {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(20px);
      background: #111; color: #fafafa; padding: 10px 18px; border-radius: 999px;
      font-size: 14px; opacity: 0; transition: all .35s ease; z-index: 9999;
      pointer-events: none; max-width: 90vw; text-align: center;
      font-family: inherit; letter-spacing: .01em;
    }
    .egg-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

    .egg-smog {
      position: fixed; inset: 0; pointer-events: none; z-index: 9998;
      background: radial-gradient(ellipse at 50% 120%, rgba(160,150,130,.55), rgba(180,170,150,.25) 60%, transparent);
      opacity: 0; transition: opacity 2s ease;
    }
    .egg-smog.show { opacity: 1; }

    .egg-knight-cursor, .egg-knight-cursor * { cursor: none !important; }
    .egg-knight {
      position: fixed; z-index: 9999; pointer-events: none; font-size: 26px;
      transform: translate(-50%, -50%); transition: transform .05s linear;
    }

    @keyframes egg-fall {
      to { transform: translateY(110vh) rotate(720deg); opacity: .9; }
    }
    .egg-confetti {
      position: fixed; top: -5vh; z-index: 9999; pointer-events: none;
      animation: egg-fall linear forwards;
    }

    @keyframes egg-wobble {
      0%,100% { transform: rotate(0deg); } 25% { transform: rotate(1.2deg); } 75% { transform: rotate(-1.2deg); }
    }
    .egg-party * { animation: egg-wobble .4s ease-in-out infinite; }
  `;
  document.head.appendChild(style);

  let toastEl = null;
  function toast(msg, ms = 3200) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "egg-toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(() => toastEl.classList.add("show"));
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove("show"), ms);
  }

  /* ---------- 1. console note for fellow snoopers ---------- */
  console.log(
    "%chi, curious one.",
    "font-size:20px; font-weight:bold;"
  );
  console.log(
    "%cyou opened the console on a personal website — we'd probably get along.\n" +
    "try typing these anywhere on the page (not here): delhi · chess · 2am\n" +
    "or click my name a few times. or press ↑↑↓↓←→←→BA.\n" +
    "say hi: prernamishra2803@gmail.com",
    "font-size:13px; color:#888;"
  );

  /* ---------- 2. typed keywords (delhi / chess / 2am) ---------- */
  let buffer = "";
  const KEYWORDS = {
    "delhi": () => {
      let smog = document.querySelector(".egg-smog");
      if (!smog) {
        smog = document.createElement("div");
        smog.className = "egg-smog";
        document.body.appendChild(smog);
      }
      const on = smog.classList.toggle("show");
      toast(on ? "aqi 400+ has entered the chat. type it again to breathe." : "air quality restored. purely fictional.");
    },
    "chess": () => toggleKnightCursor(),
    "2am": () => toast("this is usually when the essays get sent. you get it."),
  };

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, [contenteditable]")) return;
    if (e.key.length === 1) buffer = (buffer + e.key.toLowerCase()).slice(-12);
    for (const word in KEYWORDS) {
      if (buffer.endsWith(word)) {
        buffer = "";
        KEYWORDS[word]();
      }
    }
  });

  /* ---------- 3. knight cursor (type "chess") ---------- */
  let knight = null, knightOn = false;
  function toggleKnightCursor() {
    knightOn = !knightOn;
    document.documentElement.classList.toggle("egg-knight-cursor", knightOn);
    if (knightOn && !knight) {
      knight = document.createElement("div");
      knight.className = "egg-knight";
      knight.textContent = "♞";
      document.body.appendChild(knight);
      document.addEventListener("mousemove", moveKnight);
    }
    if (knight) knight.style.display = knightOn ? "block" : "none";
    toast(knightOn ? "knight takes cursor. type 'chess' again to resign." : "good game.");
  }
  function moveKnight(e) {
    if (knight) { knight.style.left = e.clientX + "px"; knight.style.top = e.clientY + "px"; }
  }

  /* ---------- 4. click the name 5 times → confetti + note ---------- */
  const nameEl = document.querySelector('a[href="#home"]'); // the "Prerna" logo link
  if (nameEl) {
    let clicks = 0, timer = null;
    nameEl.addEventListener("click", () => {
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => (clicks = 0), 1500);
      if (clicks === 5) {
        clicks = 0;
        confetti();
        toast("you clicked my name five times. persistence compounds too. 🎉", 4000);
      }
    });
  }
  function confetti() {
    const colors = ["#e63946", "#f4a261", "#2a9d8f", "#457b9d", "#ffb703"];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement("div");
      c.className = "egg-confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.width = c.style.height = 6 + Math.random() * 6 + "px";
      c.style.background = colors[i % colors.length];
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      c.style.animationDuration = 2 + Math.random() * 2 + "s";
      c.style.animationDelay = Math.random() * 0.6 + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
  }

  /* ---------- 5. konami code → brief dance party ---------- */
  const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let kIdx = 0;
  document.addEventListener("keydown", (e) => {
    kIdx = (e.key === KONAMI[kIdx]) ? kIdx + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (kIdx === KONAMI.length) {
      kIdx = 0;
      document.body.classList.add("egg-party");
      confetti();
      toast("↑↑↓↓←→←→BA — you absolute legend.", 3500);
      setTimeout(() => document.body.classList.remove("egg-party"), 3500);
    }
  });

  /* ---------- 6. late-night visitors get a nod ---------- */
  const hr = new Date().getHours();
  if (hr >= 0 && hr < 5) {
    setTimeout(() => toast("reading personal websites at " + hr + "am? respect. go to sleep though."), 2500);
  }

  /* ---------- 7. select the big question → it answers back ---------- */
  document.addEventListener("mouseup", () => {
    const sel = (window.getSelection() + "").toLowerCase();
    if (sel.includes("outlive them")) {
      toast("still figuring that one out. tell me if you crack it first.");
    }
  });

  /* ---------- 8. cheeky bookmark intercept (Ctrl/Cmd + D) ---------- */
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") {
      // don't preventDefault — let them actually bookmark, just wink at them
      toast("bookmarking me? flattered. also — Ctrl+D is a whole community, check experiments.");
    }
  });

  /* ---------- 9. tab-away title change ---------- */
  const originalTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "come back, i was mid-thought —" : originalTitle;
  });
})();
