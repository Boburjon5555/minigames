import '@/styles/main.scss';
import { AuthDialog } from '@/components/AuthDialog/AuthDialog';
import { createFooter } from '@/components/Footer/Footer';
import { GameDetailsModal } from '@/components/GameDetails/GameDetails';
import { createHeader } from '@/components/Header/Header';
import { createHomePage } from '@/pages/Home/Home';
import { createLibraryPage } from '@/pages/Library/Library';
import { Router } from '@/router/router';
import type { Game } from '@/types/game';
import { featuredGames } from '@/utils/mock-data';

function createPlaceholderPage(title: string): HTMLElement {
  const container = document.createElement('div');
  container.className = 'placeholder-page';
  container.style.padding = '4rem 2rem';
  container.style.textAlign = 'center';
  container.innerHTML = `
    <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">${title}</h1>
    <p style="color: #64748b;">This page is currently under construction.</p>
  `;
  return container;
}

function openGameDetails(gameId: string): void {
  const selectedGame = featuredGames.find((g) => g.id === gameId) || featuredGames[0];
  const modal = new GameDetailsModal(selectedGame as Game);
  modal.open();
}

function bootstrap(): void {
  const root = document.getElementById('app');
  if (!root) throw new Error('Root #app element not found.');

  const authDialog = new AuthDialog();

  const header = createHeader({ onAuthOpen: (mode) => authDialog.open(mode) });
  const footer = createFooter();

  const pageOutlet = document.createElement('div');
  pageOutlet.className = 'page-outlet';

  root.append(header, pageOutlet, footer, authDialog.element);

  const router = new Router();

  // 1. Home Sahifasi
  router.register('/', () => {
    const homePage = createHomePage({
      onGameSelect: (gameId) => openGameDetails(gameId),
    });
    pageOutlet.replaceChildren(homePage);
  });

  // 2. Library Sahifasi
  router.register('/library', () => {
    const libraryPage = createLibraryPage({
      onGameSelect: (gameId) => openGameDetails(gameId),
    });
    pageOutlet.replaceChildren(libraryPage);
  });

  // 3. Tournaments Sahifasi
  router.register('/tournaments', () => {
    pageOutlet.replaceChildren(createPlaceholderPage('Tournaments Page'));
  });

  // 4. Community Sahifasi
  router.register('/community', () => {
    pageOutlet.replaceChildren(createPlaceholderPage('Community Page'));
  });

  // Topilmagan sahifa (404) uchun Home sahifasini ko'rsatish
  router.notFound(() => {
    const homePage = createHomePage({
      onGameSelect: (gameId) => openGameDetails(gameId),
    });
    pageOutlet.replaceChildren(homePage);
  });

  router.init();
}

document.addEventListener('DOMContentLoaded', bootstrap);
