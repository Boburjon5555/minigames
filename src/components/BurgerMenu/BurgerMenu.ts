import './BurgerMenu.scss';
import type { AuthMode } from '@/types/game';

export interface BurgerMenuOptions {
  onAuthOpen: (mode: AuthMode) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#/' },
  { label: 'Library', href: '#/' },
  { label: 'Tournaments', href: '#/' },
  { label: 'Community', href: '#/' },
];

export function createBurgerMenu({ onAuthOpen }: BurgerMenuOptions): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'burger-menu';
  nav.setAttribute('aria-label', 'Mobile');
  nav.innerHTML = `
    <div class="burger-menu__nav">
      ${NAV_LINKS.map(
        (link) => `<a class="burger-menu__nav-link" href="${link.href}">${link.label}</a>`,
      ).join('')}
    </div>
    <div class="burger-menu__actions">
      <button type="button" class="burger-menu__login-btn" data-role="login-trigger">
        Log In
      </button>
      <button type="button" class="burger-menu__signup-btn" data-role="signup-trigger">
        Sign Up
      </button>
    </div>
  `;

  nav
    .querySelector('[data-role="login-trigger"]')
    ?.addEventListener('click', () => onAuthOpen('login'));
  nav
    .querySelector('[data-role="signup-trigger"]')
    ?.addEventListener('click', () => onAuthOpen('register'));

  return nav;
}
