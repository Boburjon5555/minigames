import './Header.scss';
import type { AuthMode } from '@/types/game';

import { createBurgerMenu } from '../BurgerMenu/BurgerMenu';

export interface HeaderOptions {
  onAuthOpen: (mode: AuthMode) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Library', href: '/library' },
  { label: 'Tournaments', href: '/tournaments' },
  { label: 'Community', href: '/community' },
];

export function createHeader({ onAuthOpen }: HeaderOptions): HTMLElement {
  const wrapper = document.createElement('div');

  const currentPath = window.location.pathname;

  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="header__inner">
      <a class="header__logo" href="/" aria-label="MiniGames home">
        <span class="header__logo-mark" aria-hidden="true"></span>
        MiniGames
      </a>

      <nav class="header__nav" aria-label="Primary">
        ${NAV_LINKS.map((link) => {
          const isActive =
            currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
          return `<a class="header__nav-link${isActive ? ' header__nav-link--active' : ''}" href="${link.href}">${link.label}</a>`;
        }).join('')}
      </nav>

      <div class="header__actions">
        <button type="button" class="header__login-btn" data-role="login-trigger">
          Log In
        </button>
        <button type="button" class="header__signup-btn" data-role="signup-trigger">
          Sign Up
        </button>
        <button
          type="button"
          class="header__burger-toggle"
          aria-label="Toggle menu"
          aria-expanded="false"
          aria-controls="burger-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  const burgerMenu = createBurgerMenu({ onAuthOpen });
  burgerMenu.id = 'burger-menu';

  const burgerToggle = header.querySelector<HTMLButtonElement>('.header__burger-toggle');
  const loginTrigger = header.querySelector<HTMLButtonElement>('[data-role="login-trigger"]');
  const signupTrigger = header.querySelector<HTMLButtonElement>('[data-role="signup-trigger"]');

  // Linklar bosilganda faol (active) stilni yangilash
  const navLinks = header.querySelectorAll<HTMLAnchorElement>('.header__nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((l) => l.classList.remove('header__nav-link--active'));
      link.classList.add('header__nav-link--active');
    });
  });

  burgerToggle?.addEventListener('click', () => {
    const isOpen = burgerToggle.getAttribute('aria-expanded') === 'true';
    burgerToggle.setAttribute('aria-expanded', String(!isOpen));
    burgerMenu.classList.toggle('is-open', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });

  loginTrigger?.addEventListener('click', () => onAuthOpen('login'));
  signupTrigger?.addEventListener('click', () => onAuthOpen('register'));

  wrapper.append(header, burgerMenu);
  return wrapper;
}
