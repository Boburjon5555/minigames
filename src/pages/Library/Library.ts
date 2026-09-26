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

  let activeCategory = 'All Games';
  let activeSort = 'rating';

  container.innerHTML = `
    <header class="library__header">
      <h1 class="library__title">Game Library</h1>
      <p class="library__subtitle">Browse our collection of casual mini-games</p>
    </header>

    <div class="library__toolbar">
      <div class="library__filters">
        <button class="library__filter-btn library__filter-btn--active" data-category="All Games">All Games</button>
        <button class="library__filter-btn" data-category="Puzzle">Puzzle</button>
        <button class="library__filter-btn" data-category="Card">Card</button>
        <button class="library__filter-btn" data-category="Match">Match</button>
        <button class="library__filter-btn" data-category="Farm">Farm</button>
        <button class="library__filter-btn" data-category="Strategy">Strategy</button>
        <button class="library__filter-btn" data-category="Arcade">Arcade</button>
      </div>

      <div class="library__sort">
        <select class="library__sort-select" aria-label="Sort games">
          <option value="rating">Sort by: Rating ↓</option>
          <option value="likes">Sort by: Popularity ↓</option>
          <option value="name">Sort by: Name</option>
        </select>
      </div>
    </div>

    <div class="library__grid" id="library-grid"></div>

    <nav class="library__pagination" aria-label="Pagination">
      <button class="library__page-btn" disabled aria-label="Previous page">‹</button>
      <button class="library__page-btn library__page-btn--active">1</button>
      <button class="library__page-btn">2</button>
      <button class="library__page-btn">3</button>
      <button class="library__page-btn">4</button>
      <button class="library__page-btn" aria-label="Next page">›</button>
    </nav>
  `;

  const gridElement = container.querySelector<HTMLElement>('#library-grid')!;
  const filterBtns = container.querySelectorAll<HTMLButtonElement>('.library__filter-btn');
  const sortSelect = container.querySelector<HTMLSelectElement>('.library__sort-select')!;

  function renderGames() {
    let filtered = [...mockLibraryGames];

    if (activeCategory !== 'All Games') {
      filtered = filtered.filter(
        (game) => (game.category || 'Casual').toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    filtered.sort((a, b) => {
      if (activeSort === 'rating') return b.rating - a.rating;
      if (activeSort === 'likes') return b.likes - a.likes;
      if (activeSort === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

    if (filtered.length === 0) {
      gridElement.innerHTML = `<p class="library__empty">No games found in this category.</p>`;
      return;
    }

    gridElement.innerHTML = filtered
      .map(
        (game) => `
        <article class="library-card" data-id="${game.id}" style="cursor: pointer;">
          <div class="library-card__cover" style="background-image: url('${import.meta.env.BASE_URL}${game.coverUrl.replace(/^\.\//, '')}')"></div>
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
      .join('');

    const cards = gridElement.querySelectorAll<HTMLElement>('.library-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const gameId = card.getAttribute('data-id');
        if (gameId && options.onGameSelect) {
          options.onGameSelect(gameId);
        }
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('library__filter-btn--active'));
      btn.classList.add('library__filter-btn--active');

      activeCategory = btn.getAttribute('data-category') || 'All Games';
      renderGames();
    });
  });

  sortSelect.addEventListener('change', (e) => {
    activeSort = (e.target as HTMLSelectElement).value;
    renderGames();
  });

  
  const pageBtns = container.querySelectorAll<HTMLButtonElement>('.library__page-btn');
  const prevBtn = pageBtns[0];
  const nextBtn = pageBtns[pageBtns.length - 1];
  const numberBtns = Array.from(pageBtns).slice(1, -1);

  let currentPage = 1;
  const totalPages = numberBtns.length;

  function updatePaginationUI(): void {
    numberBtns.forEach((btn, index) => {
      const pageNum = index + 1;
      if (pageNum === currentPage) {
        btn.classList.add('library__page-btn--active');
      } else {
        btn.classList.remove('library__page-btn--active');
      }
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  numberBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentPage = index + 1;
      updatePaginationUI();
    });
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updatePaginationUI();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePaginationUI();
    }
  });

  updatePaginationUI();


  renderGames();

  return container;
}