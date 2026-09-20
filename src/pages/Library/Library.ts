import './Library.scss';
import type { Game } from '@/types/game';

interface LibraryPageOptions {
  onGameSelect?: (gameId: string) => void;
}

const mockLibraryGames: Game[] = [
  {
    id: 'vacation-cafe',
    title: 'Vacation Cafe Simulator',
    category: 'Strategy',
    price: 'Free',
    rating: 4.8,
    likes: 28700,
    description:
      'Cozy Italian Vacation Cafe 🍕 No timers, No stress 🤝 cook traditional dishes 🍝 upgrade and customize 🏪 relax and grow your dream cafe',
    coverUrl: './assets/games/Game-Screenshot.png',
  },
  {
    id: 'winter-burrow',
    title: 'Winter Burrow',
    category: 'Farm',
    price: 'Free',
    rating: 4.9,
    likes: 32400,
    description:
      'A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.',
    coverUrl: './assets/games/Game-Screenshot(1).png',
  },
  {
    id: 'shelve-potions',
    title: 'Shelve the Potions!',
    category: 'Puzzle',
    price: 'Free',
    rating: 4.7,
    likes: 21300,
    description:
      'Organize 2000+ potions on shelves after the witch’s cats have knocked them over, using clues around an enchanted cellar.',
    coverUrl: './assets/games/Game-Screenshot(2).png',
  },
  {
    id: 'heartopia',
    title: 'Heartopia',
    category: 'Strategy',
    price: '$1.99',
    rating: 4.6,
    likes: 46800,
    description:
      'A multiplayer life simulation game crafted for creativity, freedom, and peace. Build your dream home, explore hobbies, and forge warm connections.',
    coverUrl: './assets/games/Game-Screenshot(3).png',
  },
  {
    id: 'palia',
    title: 'Palia',
    category: 'Strategy',
    price: 'Free',
    rating: 4.8,
    likes: 89500,
    description:
      'A free-to-play fantasy life sim adventure where you can craft, explore, and create the life and home of your dreams in a vibrant world.',
    coverUrl: './assets/games/Game-Screenshot(4).png',
  },
  {
    id: 'cat-mail',
    title: 'Cat Mail Co.',
    category: 'Puzzle',
    price: 'Free',
    rating: 4.9,
    likes: 38200,
    description:
      'Run a cozy cat post office. Sort and deliver parcels from the daily boat. At night, the moon reveals hidden truths about packages.',
    coverUrl: './assets/games/Game-Screenshot(5).png',
  },
];

function formatCount(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return String(value);
}

export function createLibraryPage(options: LibraryPageOptions = {}): HTMLElement {
  const container = document.createElement('div');
  container.className = 'library';

  container.innerHTML = `
    <header class="library__header">
      <h1 class="library__title">Game Library</h1>
      <p class="library__subtitle">Browse our collection of casual mini-games</p>
    </header>

    <div class="library__toolbar">
      <div class="library__filters">
        <button class="library__filter-btn library__filter-btn--active">All Games</button>
        <button class="library__filter-btn">Puzzle</button>
        <button class="library__filter-btn">Card</button>
        <button class="library__filter-btn">Match</button>
        <button class="library__filter-btn">Farm</button>
        <button class="library__filter-btn">Strategy</button>
        <button class="library__filter-btn">Arcade</button>
      </div>

      <div class="library__sort">
        <select class="library__sort-select">
          <option value="rating">Sort by: Rating ↓</option>
          <option value="likes">Sort by: Popularity ↓</option>
          <option value="name">Sort by: Name</option>
        </select>
      </div>
    </div>

    <div class="library__grid" id="library-grid">
      ${mockLibraryGames
        .map(
          (game) => `
        <article class="library-card" data-id="${game.id}" style="cursor: pointer;">
        <div class="library-card__cover">
        <img src="${game.coverUrl}" alt="${game.title}" class="library-card__cover-img" />
      </div>
          <div class="library-card__body">
            <div class="library-card__header">
              <div class="library-card__title-group">
                <h3 class="library-card__title">${game.title}</h3>
                <span class="library-card__badge">${game.category || 'Casual'}</span>
              </div>
              <span class="library-card__price">${game.price || 'Free'}</span>
            </div>

            <p class="library-card__description">${game.description}</p>

            <div class="library-card__footer">
              <div class="library-card__meta">
                <span class="library-card__rating">★ ${game.rating.toFixed(1)}</span>
                <span class="library-card__likes">♡ ${formatCount(game.likes)}</span>
              </div>
              <button type="button" class="library-card__btn-details" data-id="${game.id}">Details</button>
            </div>
          </div>
        </article>
      `,
        )
        .join('')}
    </div>

    <nav class="library__pagination" aria-label="Pagination">
      <button class="library__page-btn" disabled>‹</button>
      <button class="library__page-btn library__page-btn--active">1</button>
      <button class="library__page-btn">2</button>
      <button class="library__page-btn">3</button>
      <button class="library__page-btn">4</button>
      <button class="library__page-btn">›</button>
    </nav>
  `;

  // Butun kartochkaga va Details tugmasiga bosilganda Modalni ochish
  const cards = container.querySelectorAll<HTMLElement>('.library-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const gameId = card.getAttribute('data-id');

      if (gameId && options.onGameSelect) {
        options.onGameSelect(gameId);
      }
    });
  });

  return container;
}
