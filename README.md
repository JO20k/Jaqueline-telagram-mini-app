const CONFIG = {
  botUsername: 'Jaquelines_Payment_bot',
  stripeUrl: 'https://buy.stripe.com/28EeVch2L2pTbtU7uqgIo00',
  subscriptionPrice: '$35.00',
  ppvItems: [
    { title: 'Content Pack 01', price: '$9', url: 'https://buy.stripe.com/28EeVch2L2pTbtU7uqgIo00' },
    { title: 'Content Pack 02', price: '$15', url: 'https://buy.stripe.com/28EeVch2L2pTbtU7uqgIo00' },
    { title: 'Content Pack 03', price: '$25', url: 'https://buy.stripe.com/28EeVch2L2pTbtU7uqgIo00' }
  ]
};

const botValue = document.getElementById('botValue');
const telegramButton = document.getElementById('telegramButton');
const subscriptionButton = document.getElementById('subscriptionButton');
const themeButton = document.getElementById('themeButton');

init();

function init() {
  setText();
  setupButtons();
  applyStoredTheme();
  initTelegramWebApp();
}

function setText() {
  if (botValue) {
    botValue.textContent = '@' + CONFIG.botUsername;
  }

  if (subscriptionButton) {
    subscriptionButton.href = CONFIG.stripeUrl;
  }
}

function setupButtons() {
  if (telegramButton) {
    telegramButton.addEventListener('click', openTelegramBot);
  }

  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }
}

function openTelegramBot() {
  const botLink = `https://t.me/${CONFIG.botUsername}`;
  const tg = window.Telegram?.WebApp;

  if (tg && tg.openTelegramLink) {
    tg.openTelegramLink(botLink);
    return;
  }

  window.open(botLink, '_blank', 'noopener,noreferrer');
}

function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function applyStoredTheme() {
  const current = localStorage.getItem('theme');
  if (current === 'light') {
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
  const themeParams = tg.themeParams;
  const root = document.documentElement;

  if (!themeParams) return;

  if (themeParams.bg_color) root.style.setProperty('--bg', themeParams.bg_color);
  if (themeParams.text_color) root.style.setProperty('--text', themeParams.text_color);
  if (themeParams.hint_color) root.style.setProperty('--muted', themeParams.hint_color);
  if (themeParams.button_color) root.style.setProperty('--accent', themeParams.button_color);
  if (themeParams.button_text_color) root.style.setProperty('--button-text', themeParams.button_text_color);
}

window.isTelegramWebApp = function () {
  return typeof window.Telegram !== 'undefined' && !!window.Telegram.WebApp;
};


























































































































































































































































































































































































































































