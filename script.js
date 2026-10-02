:root {
  --bg: #120b16;
  --panel: rgba(24, 16, 29, 0.9);
  --panel-border: rgba(214, 176, 255, 0.14);
  --text: #f9f1ff;
  --muted: #d9c7ea;
  --accent: #d4a7ff;
  --accent-strong: #a95cf2;
  --soft-gold: #f0d39a;
  --button-text: #1b1028;
  --success: #c9f2d1;
  --safe-area-top: max(24px, env(safe-area-inset-top));
  --safe-area-bottom: max(24px, env(safe-area-inset-bottom));
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
    radial-gradient(circle at bottom, rgba(240, 211, 154, 0.08), transparent 25%),
    linear-gradient(180deg, #0d0811 0%, #120b16 100%);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: var(--safe-area-top) 16px var(--safe-area-bottom);
}

.app-shell {
  width: 100%;
  max-width: 500px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.brand-mark {
  color: var(--soft-gold);
  font-size: 1.2rem;
}

.ghost-button,
.primary-button,
.secondary-button,
.ppv-button {
  border: none;
  border-radius: 14px;
  font: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
}

.ghost-button:hover,
.primary-button:hover,
.secondary-button:hover,
.ppv-button:hover {
  transform: translateY(-1px);
}

.ghost-button {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 10px 14px;
  min-width: 42px;
}

.card {
  background: linear-gradient(180deg, rgba(27, 18, 35, 0.96) 0%, rgba(26, 18, 31, 0.92) 100%);
  border: 1px solid var(--panel-border);
  border-radius: 28px;
  backdrop-filter: blur(12px);
  padding: 24px 18px 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

.hero-block {
  text-align: center;
  padding: 6px 6px 10px;
}

.hero-kicker {
  display: inline-block;
  margin-bottom: 14px;
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(212, 167, 255, 0.08);
  border: 1px solid rgba(212, 167, 255, 0.18);
  color: #efdbff;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 7vw, 3rem);
  line-height: 0.95;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 0.02em;
}

.subtitle {
  margin: 12px auto 0;
  max-width: 30ch;
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.6;
}

.feature-row {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 18px;
  padding: 14px 12px;
}

.feature-icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(212, 167, 255, 0.12);
  color: var(--soft-gold);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.feature-item strong,
.feature-item span {
  display: block;
}

.feature-item strong {
  margin-bottom: 4px;
  font-size: 0.94rem;
}

.feature-item span {
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.5;
}

.pricing-section {
  margin-top: 26px;
}

.pricing-panel {
  background: linear-gradient(180deg, rgba(37,25,42,0.9) 0%, rgba(21,15,27,0.96) 100%);
  border: 1px solid rgba(212, 167, 255, 0.24);
  border-radius: 24px;
  padding: 18px 16px 20px;
  box-shadow: inset 0 0 0 1px rgba(240,211,154,0.06);
}

.plan-label {
  color: var(--soft-gold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.72rem;
  margin-bottom: 10px;
}

.plan-price {
  font-size: 2.8rem;
  line-height: 1;
  font-weight: 800;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 4px;
}

.plan-meta {
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 16px;
}

.plan-list {
  list-style: none;
  margin: 0 0 18px;
  padding: 0;
  text-align: left;
  display: grid;
  gap: 10px;
}

.plan-list li {
  position: relative;
  padding-left: 18px;
  color: var(--muted);
  font-size: 0.84rem;
}

.plan-list li::before {
  content: '✦';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--soft-gold);
}

.primary-button,
.secondary-button,
.ppv-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 18px;
  text-decoration: none;
  font-weight: 700;
}

.primary-button {
  background: linear-gradient(135deg, #f0d39a 0%, #d4a7ff 100%);
  color: var(--button-text);
  box-shadow: 0 10px 28px rgba(212, 167, 255, 0.23);
}

.secondary-button {
  background: rgba(255,255,255,0.05);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.1);
}

.ppv-section {
  margin-top: 28px;
}

.section-header {
  margin-bottom: 12px;
  color: var(--soft-gold);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.ppv-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 18px;
  padding: 16px 14px;
  margin-bottom: 12px;
}

.ppv-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.ppv-tag {
  display: inline-block;
  border-radius: 999px;
  padding: 5px 8px;
  background: rgba(212, 167, 255, 0.09);
  border: 1px solid rgba(212, 167, 255, 0.16);
  color: #ebd8ff;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ppv-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--soft-gold);
}

.ppv-card h2 {
  margin: 12px 0 8px;
  font-size: 1.2rem;
  font-weight: 700;
}

.ppv-card p {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.6;
}

.ppv-button {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--text);
  text-decoration: none;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 26px;
}

.meta-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 14px 12px;
  text-align: center;
}

.meta-label {
  display: block;
  margin-bottom: 6px;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-card strong {
  display: block;
  font-size: 0.92rem;
}

.cta-row {
  margin-top: 18px;
}

.footer {
  margin-top: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

body.light-theme {
  background:
    radial-gradient(circle at top, rgba(169, 92, 242, 0.12), transparent 28%),
    linear-gradient(180deg, #f9f4ff 0%, #f2ecff 100%);
}

body.light-theme {
  --bg: #f9f4ff;
  --panel: rgba(255, 255, 255, 0.9);
  --panel-border: rgba(121, 76, 154, 0.12);
  --text: #1d1528;
  --muted: #534760;
  --accent: #be88ff;
  --accent-strong: #8b4ae6;
  --soft-gold: #b17a1d;
  --button-text: #fef9ff;
}

@media (max-width: 420px) {
  .card {
    border-radius: 24px;
    padding: 20px 14px 18px;
  }

  .ppv-topline {
    flex-direction: column;
    align-items: flex-start;
  }

  .meta-grid {
    grid-template-columns: 1fr;
  }
}
