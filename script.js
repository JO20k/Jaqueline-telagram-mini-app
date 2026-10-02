:root {
  --bg-dark: #130b15;
  --bg-mid: #1b101d;
  --panel: rgba(23, 16, 28, 0.96);
  --panel-border: rgba(214, 176, 255, 0.14);
  --text: #f7f0ff;
  --muted: #d9c7ea;
  --gold: #f0d39a;
  --gold-soft: #d9b77f;
  --lavender: #d7b9ff;
  --lavender-strong: #b57ef8;
  --button-text: #171018;
  --card-bg: rgba(255,255,255,0.025);
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(181, 126, 248, 0.25), transparent 30%),
    radial-gradient(circle at bottom, rgba(240, 211, 154, 0.08), transparent 25%),
    linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-mid) 100%);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 16px 40px;
}

.page-shell {
  width: min(100%, 500px);
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
}

.brand-mark {
  color: var(--gold);
  font-size: 1.3rem;
}

.theme-btn,
.cta-button,
.telegram-button {
  border: none;
  border-radius: 14px;
  font: inherit;
  cursor: pointer;
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.theme-btn:hover,
.cta-button:hover,
.telegram-button:hover {
  transform: translateY(-1px);
}

.theme-btn {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 10px 12px;
}

.luxury-card {
  background: linear-gradient(180deg, rgba(31, 21, 36, 0.97), rgba(19, 13, 23, 0.98));
  border: 1px solid var(--panel-border);
  border-radius: 28px;
  padding: 24px 18px 20px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.25);
}

.hero-copy {
  text-align: center;
  padding-bottom: 8px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: #efdfff;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.68rem;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(214, 176, 255, 0.08);
  border: 1px solid rgba(214, 176, 255, 0.18);
}

h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 7vw, 3.4rem);
  line-height: 0.94;
  letter-spacing: 0.02em;
}

.hero-copy p {
  margin: 12px auto 0;
  max-width: 28ch;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.96rem;
}

.membership-panel {
  margin-top: 24px;
  background: linear-gradient(180deg, rgba(37,27,43,0.96), rgba(18,12,21,0.98));
  border: 1px solid rgba(214,176,255,0.18);
  border-radius: 22px;
  padding: 18px 16px 20px;
}

.plan-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
}

.micro-label {
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
}

.plan-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  line-height: 0.9;
  font-weight: 700;
}

.plan-meta {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.78rem;
}

.feature-list {
  margin: 18px 0 20px;
  padding-left: 18px;
  display: grid;
  gap: 10px;
  color: var(--muted);
  font-size: 0.84rem;
}

.feature-list li::marker {
  color: var(--gold);
}

.cta-button,
.telegram-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 54px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
}

.cta-button.primary {
  background: linear-gradient(135deg, var(--gold) 0%, var(--lavender) 100%);
  color: var(--button-text);
  box-shadow: 0 10px 26px rgba(214,176,255,0.22);
}

.ppv-section {
  margin-top: 28px;
}

.section-heading {
  margin-bottom: 12px;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  font-weight: 700;
}

.ppv-item {
  background: var(--card-bg);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 18px;
  padding: 16px 14px;
  margin-bottom: 12px;
}

.ppv-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.ppv-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(214,176,255,0.09);
  border: 1px solid rgba(214,176,255,0.18);
  color: #eedbff;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ppv-price {
  color: var(--gold);
  font-weight: 800;
  font-size: 1.5rem;
}

.ppv-item h2 {
  margin: 12px 0 8px;
  font-size: 1.2rem;
}

.ppv-item p {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.84rem;
}

.cta-button.secondary,
.telegram-button {
  background: rgba(255,255,255,0.04);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.08);
}

.meta-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.meta-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 14px 12px;
  text-align: center;
}

.meta-box span {
  display: block;
  margin-bottom: 6px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.66rem;
}

.meta-box strong {
  font-size: 0.9rem;
}

.cta-row {
  margin-top: 18px;
}

body.light-theme {
  background:
    radial-gradient(circle at top, rgba(181, 126, 248, 0.12), transparent 25%),
    linear-gradient(180deg, #f9f4ff 0%, #efe8ff 100%);
}

body.light-theme {
  --bg-dark: #f9f4ff;
  --bg-mid: #efe8ff;
  --panel: rgba(255,255,255,0.92);
  --panel-border: rgba(120,78,154,0.14);
  --text: #1d1528;
  --muted: #574760;
  --gold: #a9771a;
  --gold-soft: #8f6717;
  --lavender: #bd89ff;
  --lavender-strong: #8b4ae6;
  --button-text: #fff;
  --card-bg: rgba(115,78,136,0.02);
}

@media (max-width: 420px) {
  body { padding-inline: 12px; }
  .luxury-card { padding-inline: 14px; }
  .meta-row { grid-template-columns: 1fr; }
  .ppv-top { flex-direction: column; align-items: flex-start; }
}
