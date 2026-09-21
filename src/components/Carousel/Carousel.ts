import './Carousel.scss';
import type { Game } from '@/types/game';

export interface CarouselOptions {
  title: string;
  games: Game[];
  onGameClick?: (gameId: string) => void;
}

function formatCount(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return String(value);
}

function createCard(game: Game): string {
  // Vite BASE_URL ni biriktiramiz
  let coverUrl = game.coverUrl;
  if (coverUrl) {
    const cleanPath = coverUrl.replace(/^\.\//, '');
    coverUrl = `${import.meta.env.BASE_URL}${cleanPath}`;
  }

  const coverStyle = coverUrl ? ` style="background-image: url('${coverUrl}')"` : '';
  const aspect = game.coverAspectRatio ?? 0.78;
  const showInfo = game.showInfo ?? true;

  const overlay = showInfo
    ? `
      <div class="carousel__card-overlay">
        <h3 class="carousel__card-title">${game.title}</h3>
        <div class="carousel__card-meta">
          <span class="carousel__rating">★ ${game.rating.toFixed(1)}</span>
          <span class="carousel__likes">♥ ${formatCount(game.likes)}</span>
        </div>
      </div>
    `
    : '';

  return `
    <article class="carousel__card${game.featured ? ' carousel__card--featured' : ''}" style="--card-aspect: ${aspect}" data-game-id="${game.id}" aria-label="${game.title}">
      <div class="carousel__cover"${coverStyle} role="presentation"></div>
      ${overlay}
    </article>
  `;
}

export function createCarousel({ title, games, onGameClick }: CarouselOptions): HTMLElement {
  const section = document.createElement('section');
  section.className = 'carousel';
  section.setAttribute('aria-label', title);
  section.innerHTML = `
    <div class="carousel__inner">
      <div class="carousel__header">
        <h2 class="carousel__title"><span class="carousel__title-accent" aria-hidden="true"></span>${title}</h2>
        <div class="carousel__controls">
          <button type="button" class="carousel__control-btn carousel__control-btn--prev" data-role="prev" aria-label="Previous">‹</button>
          <button type="button" class="carousel__control-btn carousel__control-btn--next" data-role="next" aria-label="Next">›</button>
        </div>
      </div>
      <div class="carousel__track" data-role="track">
        ${games.map(createCard).join('')}
      </div>
    </div>
  `;

  const track = section.querySelector<HTMLDivElement>('[data-role="track"]');
  const prevBtn = section.querySelector<HTMLButtonElement>('[data-role="prev"]');
  const nextBtn = section.querySelector<HTMLButtonElement>('[data-role="next"]');

  const scrollByCard = (direction: 1 | -1): void => {
    const card = track?.querySelector<HTMLElement>('.carousel__card');
    const distance = (card?.offsetWidth ?? 280) + 16;
    track?.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  prevBtn?.addEventListener('click', () => scrollByCard(-1));
  nextBtn?.addEventListener('click', () => scrollByCard(1));

  if (onGameClick) {
    const cards = section.querySelectorAll<HTMLElement>('.carousel__card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const gameId = card.getAttribute('data-game-id');
        if (gameId) {
          onGameClick(gameId);
        }
      });
    });
  }

  return section;
}