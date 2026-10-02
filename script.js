// Configuration
const CONFIG = {
  botUsername: 'Jaquelines_Payment_bot',
  stripeUrl: 'https://buy.stripe.com/28EeVch2L2pTbtU7uqgIo00',
  price: '$35.00 USD',
  channelName: 'Jacqueline VIP Club'
};

// DOM Elements
const botValue = document.getElementById('botValue');
const checkoutButton = document.getElementById('checkoutButton');
const telegramButton = document.getElementById('telegramButton');
const themeButton = document.getElementById('themeButton');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initTelegramWebApp();
  setUpEventListeners();
  applyStoredTheme();
});

/**
 * Initialize Telegram WebApp
 */
function initTelegramWebApp() {
  const tg = window.Telegram?.WebApp;
  if (!tg) {
    console.log('Not running in Telegram WebApp context');
    return;
  }

  // Expand the WebApp to fill the screen
  tg.expand();
  tg.enableClosingConfirmation();

  // Apply Telegram theme
  applyTelegramTheme(tg);

  // Notify Telegram that the WebApp is ready
  tg.ready();

  // Handle theme changes
  if (tg.onThemeChanged) {
    tg.onThemeChanged(() => {
      applyTelegramTheme(tg);
    });
  }
}

/**
 * Apply Telegram theme colors
 */
function applyTelegramTheme(tg) {
  const themeParams = tg.themeParams;
  const root = document.documentElement;

  if (themeParams) {
    if (themeParams.bg_color) root.style.setProperty('--bg', themeParams.bg_color);
    if (themeParams.text_color) root.style.setProperty('--text', themeParams.text_color);
    if (themeParams.hint_color) root.style.setProperty('--muted', themeParams.hint_color);
    if (themeParams.button_color) root.style.setProperty('--accent', themeParams.button_color);
    if (themeParams.button_text_color) root.style.setProperty('--button-text', themeParams.button_text_color);
  }
}

/**
 * Set up event listeners
 */
function setUpEventListeners() {
  // Telegram button
  if (telegramButton) {
    telegramButton.addEventListener('click', openTelegramBot);
  }

  // Checkout button
  if (checkoutButton) {
    checkoutButton.href = CONFIG.stripeUrl;
    checkoutButton.addEventListener('click', (e) => {
      logEvent('checkout_clicked');
    });
  }

  // Theme toggle
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }

  // Update bot value
  if (botValue) {
    botValue.textContent = `@${CONFIG.botUsername}`;
  }
}

/**
 * Open Telegram bot
 */
function openTelegramBot() {
  const tg = window.Telegram?.WebApp;
  const botLink = `https://t.me/${CONFIG.botUsername}`;

  logEvent('telegram_button_clicked');

  if (tg && tg.openTelegramLink) {
    // Running inside Telegram WebApp
    tg.openTelegramLink(botLink);
  } else {
    // Fallback: open in new tab
    window.open(botLink, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Toggle theme
 */
function toggleTheme() {
  const body = document.body;
  const isDark = !body.classList.contains('light-theme');
  
  if (isDark) {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }

  logEvent('theme_toggled', { theme: isDark ? 'light' : 'dark' });
}

/**
 * Apply stored theme preference
 */
function applyStoredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    document.body.classList.add('light-theme');
  }
}

/**
 * Log event (for analytics)
 */
function logEvent(eventName, data = {}) {
  const tg = window.Telegram?.WebApp;
  if (tg && tg.sendData) {
    tg.sendData(JSON.stringify({ event: eventName, ...data }));
  }
  console.log(`Event: ${eventName}`, data);
}

// Detect if running in Telegram
window.isTelegramWebApp = () => {
  return typeof window.Telegram !== 'undefined' && window.Telegram.WebApp;
};
