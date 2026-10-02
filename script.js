:root {
  --bg: #0d0d14;
  --panel: rgba(19, 20, 31, 0.86);
  --panel-border: rgba(255, 255, 255, 0.08);
  --text: #f5f7ff;
  --muted: #c8cde0;
  --accent: #8d5cf6;
  --accent-strong: #6c3ce1;
  --success: #26d07c;
  --button-text: #ffffff;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(141, 92, 246, 0.25), transparent 30%),
    linear-gradient(180deg, #090910 0%, #0f1021 100%);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 16px 40px;
}

.app-shell {
  width: min(100%, 440px);
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
  font-size: 1.05rem;
  font-weight: 700;
}

.brand-mark {
  font-size: 1.4rem;
}

.ghost-button,
.primary-button,
.secondary-button,
.ppv-button {
  border: none;
  border-radius: 14px;
  font: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.ghost-button:hover,
.primary-button:hover,
.secondary-button:hover,
.ppv-button:hover {
  transform: translateY(-1px);
}

.ghost-button {
  background: rgba(255,255,255,0.08);
  color: var(--text);
  padding: 10px 14px;
}

.card {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 28px;
  backdrop-filter: blur(12px);
  padding: 26px 20px 20px;
  box-shadow: 0 18px 45px rgba(0,0,0,0.25);
}

.hero-section {
  text-align: center;
}

.hero-badge {
  display: inline-block;
  background: rgba(141, 92, 246, 0.12);
  color: #d9caff;
  border: 1px solid rgba(141, 92, 246, 0.35);
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 14px;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 6vw, 2.8rem);
  line-height: 1.05;
}

.subtitle {
  margin-top: 14px;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.feature-list {
  margin-top: 22px;
  display: grid;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 10px;
  border-radius: 16px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
}

.feature-item .icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  background: rgba(141, 92, 246, 0.12);
  border-radius: 12px;
  font-size: 1.2rem;
}

.feature-item strong {
  display: block;
  margin-bottom: 4px;
  font-size: 0.98rem;
}

.feature-item p {
  margin: 0;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.5;
}

.pricing-panel {
  margin-top: 22px;
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
}

.price-label {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.price-amount {
  margin-top: 8px;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
}

.price-subtext {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.8rem;
}

.price-benefits {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
}

.benefit {
  font-size: 0.78rem;
  color: var(--success);
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
  margin-top: 16px;
}

.primary-button {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: var(--button-text);
}

.ppv-section {
  margin-top: 26px;
}

.section-title {
  margin-bottom: 12px;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.ppv-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 18px;
  padding: 16px 14px;
  margin-bottom: 12px;
}

.ppv-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.ppv-tag {
  display: inline-block;
  background: rgba(141,92,246,0.12);
  color: #d9caff;
  border: 1px solid rgba(141,92,246,0.35);
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ppv-card h2 {
  margin: 10px 0 0;
  font-size: 1.1rem;
}

.ppv-card p {
  margin: 10px 0 12px;
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.84rem;
}

.ppv-price {
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--success);
}

.ppv-button,
.secondary-button {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.08);
}

.meta-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.meta-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  text-align: center;
  padding: 14px 12px;
}

.meta-label {
  display: block;
  margin-bottom: 6px;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-box strong {
  display: block;
  font-size: 0.92rem;
}

.button-group {
  margin-top: 18px;
}

.footer {
  margin-top: 22px;
  text-align: center;
  color: var(--muted);
  font-size: 0.72rem;
}

.security-note {
  margin-top: 6px;
}

@media (max-width: 420px) {
  .card {
    padding: 20px 16px 18px;
  }

  .ppv-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
