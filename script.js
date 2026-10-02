:root {
  --bg: #120b16;
  --panel: rgba(26, 18, 31, 0.94);
  --panel-border: rgba(214, 176, 255, 0.14);
  --text: #f9f1ff;
  --muted: #d9c7ea;
  --accent: #d9b8ff;
  --accent-strong: #a95cf2;
  --soft-gold: #f0d39a;
  --button-text: #1a1026;
  --card-bg: rgba(255,255,255,0.025);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(169, 92, 242, 0.24), transparent 30%),
    linear-gradient(180deg, #0d0811 0%, #120b16 100%);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 16px 40px;
}

.shell {
  width: min(100%, 480px);
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.brand-mark {
  color: var(--soft-gold);
  font-size: 1.2rem;
}

.theme-toggle,
.primary-button,
.secondary-button,
.telegram-button {
  border: none;
  border-radius: 14px;
  font: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.theme-toggle:hover,
.primary-button:hover,
.secondary-button:hover,
.telegram-button:hover {
  transform: translateY(-1px);
}

.theme-toggle {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px 12px;
}

.panel {
  background: linear-gradient(180deg, rgba(27, 18, 35, 0.96), rgba(23, 16, 29, 0.98));
  border: 1px solid var(--panel-border);
  border-radius: 28px;
  padding: 22px 18px 20px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.22);
}

.hero {
  text-align: center;
  padding: 6px 4px 10px;
}

.eyebrow {
  display: inline-block;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(214, 176, 255, 0.08);
  border: 1px solid rgba(214, 176, 255, 0.18);
  color: #efdfff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.68rem;
  margin-bottom: 14px;
}

h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.3rem, 7vw, 3rem);
  line-height: 0.96;
  letter-spacing: 0.02em;
}

.hero p {
  margin: 12px auto 0;
  max-width: 28ch;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.6;
}

.box {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 18px 16px;
  margin-top: 22px;
}

.box-label {
  color: var(--soft-gold);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.price {
  margin-top: 10px;
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1;
  font-family: 'Cormorant Garamond', serif;
}

.subtext {
  color: var(--muted);
  font-size: 0.8rem;
  margin-top: 6px;
}

.box ul {
  margin: 18px 0 18px;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 8px;
  font-size: 0.82rem;
}

.primary-button,
.secondary-button,
.telegram-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 18px;
  text-decoration: none;
  font-weight: 700;
}

.primary-button {
  background: linear-gradient(135deg, var(--soft-gold) 0%, var(--accent) 100%);
  color: var(--button-text);
  box-shadow: 0 10px 26px rgba(214, 176, 255, 0.25);
}

.ppv-section {
  margin-top: 28px;
}

.section-title {
  margin-bottom: 12px;
  color: var(--soft-gold);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.ppv-item {
  background: var(--card-bg);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 18px;
  padding: 16px 14px;
  margin-bottom: 12px;
}

.ppv-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.tag {
  display: inline-block;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(214,176,255,0.08);
  border: 1px solid rgba(214,176,255,0.18);
  color: #eedbff;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ppv-price {
  color: var(--soft-gold);
  font-size: 1.5rem;
  font-weight: 800;
}

.ppv-item h2 {
  margin: 12px 0 8px;
  font-size: 1.15rem;
}

.ppv-item p {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.6;
}

.secondary-button,
.telegram-button {
  background: rgba(255,255,255,0.04);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.08);
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.meta-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  text-align: center;
  padding: 14px 12px;
}

.meta-box span {
  display: block;
  color: var(--muted);
  margin-bottom: 6px;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-box strong {
  font-size: 0.9rem;
}

.cta-row {
  margin-top: 18px;
}

body.light-theme {
  background:
    radial-gradient(circle at top, rgba(169, 92, 242, 0.1), transparent 28%),
    linear-gradient(180deg, #f9f4ff 0%, #f1ebff 100%);
}

body.light-theme {
  --bg: #f9f4ff;
  --panel: rgba(255,255,255,0.9);
  --panel-border: rgba(120, 78, 154, 0.12);
  --text: #1d1528;
  --muted: #4e425d;
  --accent: #b36cf7;
  --accent-strong: #7d38d8;
  --soft-gold: #b57e19;
  --button-text: #fff;
  --card-bg: rgba(115, 78, 136, 0.02);
}

@media (max-width: 420px) {
  body {
    padding-inline: 12px;
  }

  .panel {
    padding-inline: 14px;
  }

  .meta-grid {
    grid-template-columns: 1fr;
  }

  .ppv-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
