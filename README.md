const CONFIG = {
  botUsername: 'Jaquelines_Payment_bot',
  stripeUrl: 'https://buy.stripe.com/28EeVch2L2pTbtU7uqgIo00',
  botLink: 'https://t.me/Jaquelines_Payment_bot',
  subscriptionLabel: '$35.00 USD / month'
};

const botValue = document.getElementById('botValue');
const telegramButton = document.getElementById('telegramButton');
const subscriptionButton = document.getElementById('subscriptionButton');
const themeButton = document.getElementById('themeButton');

init();

function init() {
  setValues();
  bindEvents();
  applyStoredTheme();
  initTelegramWebApp();
}

function setValues() {
  if (botValue) {
    botValue.textContent = '@' + CONFIG.botUsername;
  }

  if (subscriptionButton) {
    subscriptionButton.href = CONFIG.stripeUrl;
  }
}

function bindEvents() {
  if (telegramButton) {
    telegramButton.addEventListener('click', openTelegramBot);
  }

  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }
}

function openTelegramBot() {
  const tg = window.Telegram?.WebApp;

  if (tg && tg.openTelegramLink) {
    tg.openTelegramLink(CONFIG.botLink);
    return;
  }

  window.open(CONFIG.botLink, '_blank', 'noopener,noreferrer');
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function applyStoredTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-theme');
  }
}

function initTelegramWebApp() {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;

  tg.expand();
  tg.ready();

  if (tg.onThemeChanged) {
    tg.onThemeChanged(() => applyTelegramTheme(tg));
  }

  applyTelegramTheme(tg);
}

function applyTelegramTheme(tg) {
  const root = document.documentElement;
  const theme = tg.themeParams;

  if (!theme) return;

  if (theme.bg_color) root.style.setProperty('--bg', theme.bg_color);
  if (theme.text_color) root.style.setProperty('--text', theme.text_color);
  if (theme.hint_color) root.style.setProperty('--muted', theme.hint_color);
  if (theme.button_color) root.style.setProperty('--accent', theme.button_color);
  if (theme.button_text_color) root.style.setProperty('--button-text', theme.button_text_color);
}

window.isTelegramWebApp = function () {
  return typeof window.Telegram !== 'undefined' && !!window.Telegram.WebApp;
};
