:root {
  --bg: #0d0d12;
  --panel: #171821;
  --panel-alt: #1d1d29;
  --text: #f4f1ff;
  --muted: #c6bfd9;
  --accent: #b68ef9;
  --accent-2: #f1d593;
  --button: #8d5cf6;
  --button-text: #ffffff;
  --success: #4ade80;
  --border: rgba(255,255,255,0.08);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  padding: 18px 14px 32px;
}

.app {
  max-width: 440px;
  margin: 0 auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.brand {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.brand-mark {
  color: var(--accent-2);
}

.card {
  background: linear-gradient(180deg, #191924, #11131a);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 20px 16px 18px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.22);
}

.eyebrow {
  display: inline-block;
  background: rgba(182, 142, 249, 0.12);
  border: 1px solid rgba(182, 142, 249, 0.3);
  color: #ebd9ff;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 7px 12px;
  margin-bottom: 10px;
}

h1 {
  margin: 0;
  font-size: clamp(2.1rem, 8vw, 2.6rem);
  line-height: 1.05;
}

.subtitle {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.section {
  margin-top: 22px;
}

.panel {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
}

.price-label {
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.price {
  margin-top: 8px;
  font-size: 2.7rem;
  font-weight: 800;
  line-height: 1;
}

.price-sub {
  margin-top: 4px;
  color: var(--muted);
  font-size: 0.8rem;
}

.checklist {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.checklist li {
  color: var(--muted);
  font-size: 0.82rem;
}

.checklist li::before {
  content: "✓ ";
  color: var(--success);
  font-weight: bold;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 18px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 18px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.primary {
  background: linear-gradient(135deg, var(--accent), var(--button));
  color: var(--button-text);
}

.secondary {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  color: var(--text);
}

.ppv {
  margin-top: 28px;
}

.ppv-title {
  margin-bottom: 12px;
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.ppv-item {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  margin-bottom: 12px;
}

.ppv-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.ppv-tag {
  display: inline-block;
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f0dcff;
  background: rgba(182,142,249,0.12);
  border: 1px solid rgba(182,142,249,0.3);
  border-radius: 999px;
  padding: 5px 8px;
}

.ppv-price {
  color: var(--accent-2);
  font-weight: 800;
  font-size: 1.4rem;
}

.ppv-item h2 {
  margin: 10px 0 6px;
  font-size: 1.2rem;
}

.ppv-item p {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.55;
}

.meta {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 12px;
}

.meta-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 14px;
  text-align: center;
  padding: 12px 8px;
}

.meta-label {
  display: block;
  margin-bottom: 4px;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer {
  margin-top: 18px;
  text-align: center;
  color: var(--muted);
  font-size: 0.7rem;
}

@media (max-width: 420px) {
  .ppv-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
