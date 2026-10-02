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
  --safe-area-top: max(24px, env(safe-area-inset-top));
  --safe-area-bottom: max(24px, env(safe-area-inset-bottom));
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top, rgba(141, 92, 246, 0.25), transparent 30%),
    linear-gradient(180deg, #090910 0%, #0f1021 100%);
  color: var(--text);
  overflow-x: hidden;
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
  margin-bottom: 20px;
  gap: 12px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.brand-mark {
  font-size: 1.4rem;
  display: block;
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
  -webkit-tap-highlight-color: transparent;
}

.ghost-button:active,
.primary-button:active,
.secondary-button:active,
.ppv-button:active {
  transform: scale(0.98);
}

.ghost-button {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  padding: 10px 14px;
  font-size: 1.2rem;
}

.card {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 28px;
  backdrop-filter: blur(12px);
  padding: 28px 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 0 1px rgba(141, 92, 246, 0.1);
}

.hero-section {
  text-align: center;
  margin-bottom: 28px;
}

.hero-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(141, 92, 246, 0.2) 0%, rgba(141, 92, 246, 0.1) 100%);
  color: #d9caff;
  border: 1px solid rgba(141, 92, 246, 0.4);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 7vw, 3rem);
  line-height: 1.05;
  background: linear-gradient(135deg, #f5f7ff 0%, #d9caff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.feature-list {
  margin: 28px 0;
  display: grid;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.feature-item .icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: rgba(141, 92, 246, 0.15);
  border-radius: 12px;
  font-size: 1.3rem;
}

.feature-item strong {
  display: block;
  margin-bottom: 3px;
  font-size: 0.95rem;
}

.feature-item p {
  margin: 0;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.5;
}

.pricing-section {
  margin: 20px 0 28px;
}

.pricing-panel {
  padding: 22px 18px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(141, 92, 246, 0.1) 0%, rgba(141, 92, 246, 0.05) 100%);
  border: 1px solid rgba(141, 92, 246, 0.25);
  text-align: center;
}

.price-label {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
}

.price-amount {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8d5cf6 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.price-subtext {
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.price-benefits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 14px;
  margin-bottom: 18px;
}

.benefit {
  font-size: 0.82rem;
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
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  cursor: pointer;
}

.primary-button {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: var(--button-text);
  box-shadow: 0 8px 24px rgba(141, 92, 246, 0.35);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.ppv-section {
  margin: 24px 0 28px;
}

.section-title {
  margin-bottom: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.ppv-card {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  padding: 16px 14px;
  margin-bottom: 12px;
}

.ppv-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 8px;
}

.ppv-tag {
  display: inline-block;
  background: rgba(141, 92, 246, 0.12);
  color: #d9caff;
  border: 1px solid rgba(141, 92, 246, 0.32);
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.ppv-card h2 {
  margin: 0;
  font-size: 1.1rem;
}

.ppv-price {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8d5cf6 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ppv-card p {
  margin: 10px 0 14px;
  font-size: 0.86rem;
  color: var(--muted);
  line-height: 1.6;
}

.ppv-button {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-decoration: none;
}

.bot-info {
  margin: 28px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}

.info-badge {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 14px 12px;
  text-align: center;
}

.badge-label {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 6px;
}

.info-badge strong {
  display: block;
  font-size: 0.9rem;
  word-break: break-all;
}

.button-group {
  margin: 10px 0 0;
}

.footer {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  text-align: center;
  font-size: 0.8rem;
  color: var(--muted);
}

.footer p {
  margin: 6px 0;
}

.security-note {
  color: var(--success);
  font-weight: 500;
}

body.light-theme {
  background:
    radial-gradient(circle at top, rgba(141, 92, 246, 0.15), transparent 30%),
    linear-gradient(180deg, #f5f7ff 0%, #e8ecff 100%);
}

body.light-theme {
  --bg: #f5f7ff;
  --panel: rgba(255, 255, 255, 0.92);
  --panel-border: rgba(17, 24, 39, 0.1);
  --text: #111827;
  --muted: #4b5563;
}

@media (max-width: 420px) {
  .card {
    padding: 20px 16px;
    border-radius: 24px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .price-amount {
    font-size: 2.4rem;
  }

  .ppv-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

