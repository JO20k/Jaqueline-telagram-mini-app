const botUsername = '@your_bot_username';
const stripeLink = 'https://buy.stripe.com/test_';

const telegramButton = document.getElementById('telegramButton');
const checkoutButton = document.getElementById('checkoutButton');
const themeButton = document.getElementById('themeButton');
const botValue = document.getElementById('botValue');

if (botValue) {
  botValue.textContent = botUsername;
}

if (checkoutButton) {
  checkoutButton.href = stripeLink;
}

function applyTelegramTheme() {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;

  const theme = tg.colorScheme || 'dark';
  const root = document.documentElement;

  if (theme === 'light') {
    root.style.setProperty('--bg', '#f5f7ff');
    root.style.setProperty('--panel', 'rgba(255,255,255,0.9)');
    root.style.setProperty('--panel-border', 'rgba(17, 24, 39, 0.08)');
    root.style.setProperty('--text', '#111827');
    root.style.setProperty('--muted', '#4b5563');
  }

  if (tg.themeParams) {
    const params = tg.themeParams;
    if (params.bg_color) root.style.setProperty('--bg', params.bg_color);
    if (params.text_color) root.style.setProperty('--text', params.text_color);
    if (params.hint_color) root.style.setProperty('--muted', params.hint_color);
    if (params.button_color) root.style.setProperty('--accent', params.button_color);
    if (params.button_text_color) root.style.setProperty('--button-text', params.button_text_color);
  }

  tg.ready();
  tg.expand();
}

if (telegramButton) {
  telegramButton.addEventListener('click', () => {
    const tg = window.Telegram?.WebApp;
    if (tg && tg.openTelegramLink) {
      tg.openTelegramLink(`https://t.me/${botUsername.replace('@', '')}`);
      return;
    }

    window.open(`https://t.me/${botUsername.replace('@', '')}`, '_blank', 'noopener,noreferrer');
  });
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.style.getPropertyValue('--bg');
    root.style.setProperty(
      '--bg',
      current === '#0d0d14' ? '#f5f7ff' : '#0d0d14'
    );
    root.style.setProperty(
      '--text',
      current === '#0d0d14' ? '#111827' : '#f5f7ff'
    );
  });
}

applyTelegramTheme();
