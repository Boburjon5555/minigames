import './Carousel.scss';
import type { Game } from '@/types/game';

export interface CarouselOptions {
  title: string;
  games: Game[];
  onGameClick?: (game: Game) => void;
}

function formatCount(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return String(value);
}

export function createCarousel({ title, games, onGameClick }: CarouselOptions): HTMLElement {

  const featuredGames = games.filter((g) => g.featured).slice(0, 9);
  const total = featuredGames.length;

  let currentIndex = 0;
  let autoplayTimer: number | null = null;
  let isInteracting = false;
  let startX = 0;
  let isDragging = false;

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
      <div class="carousel__viewport">
        <div class="carousel__track" data-role="track"></div>
      </div>
    </div>
  `;

  const track = section.querySelector<HTMLDivElement>('[data-role="track"]')!;
  const prevBtn = section.querySelector<HTMLButtonElement>('[data-role="prev"]');
  const nextBtn = section.querySelector<HTMLButtonElement>('[data-role="next"]');

  
  const renderCards = (): void => {
    track.innerHTML = '';
    const loopGames = [...featuredGames, ...featuredGames, ...featuredGames];

    loopGames.forEach((game, index) => {
      let coverUrl = game.coverUrl;
      if (coverUrl) {
        const cleanPath = coverUrl.replace(/^\.\//, '');
        coverUrl = `${import.meta.env.BASE_URL}${cleanPath}`;
      }
      const coverStyle = coverUrl ? `background-image: url('${coverUrl}')` : '';

      const card = document.createElement('article');
      card.className = 'carousel__card';
      card.setAttribute('data-game-id', game.id);
      card.setAttribute('data-index', String(index % total));
      card.setAttribute('aria-label', game.title);

      card.innerHTML = `
        <div class="carousel__cover" style="${coverStyle}" role="presentation"></div>
        <div class="carousel__card-overlay">
          <h3 class="carousel__card-title">${game.title}</h3>
          <div class="carousel__card-meta">
            <span class="carousel__rating">★ ${(game.rating || 5.0).toFixed(1)}</span>
            <span class="carousel__likes">♥ ${formatCount(game.likes || 0)}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (!isDragging && onGameClick) {
          onGameClick(game);
        }
      });

      track.appendChild(card);
    });
  };

  renderCards();

  
  const updatePosition = (): void => {
    const cards = track.querySelectorAll<HTMLElement>('.carousel__card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth || 280;
    const gap = 16;
    const step = cardWidth + gap;

    const viewportWidth = section.querySelector('.carousel__viewport')?.clientWidth || 1200;
    const centerOffset = viewportWidth / 2 - cardWidth / 2;

    const targetTranslate = -(currentIndex + total) * step + centerOffset;
    track.style.transform = `translateX(${targetTranslate}px)`;

    
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const screenCenter = window.innerWidth / 2;
      const distanceFromCenter = Math.abs(screenCenter - cardCenter);

      const scale = Math.max(0.85, 1 - distanceFromCenter / 1000);
      card.style.transform = `scale(${scale})`;

      if (rect.width < 288) {
        card.classList.add('is-compact');
      } else {
        card.classList.remove('is-compact');
      }
    });
  };

  const goToIndex = (index: number, smooth = true): void => {
    if (smooth) {
      track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    } else {
      track.style.transition = 'none';
    }

    currentIndex = index;

    if (currentIndex >= total) {
      setTimeout(() => {
        track.style.transition = 'none';
        currentIndex = 0;
        updatePosition();
      }, 400);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        track.style.transition = 'none';
        currentIndex = total - 1;
        updatePosition();
      }, 400);
    }

    updatePosition();
  };

  
  const startAutoplay = (): void => {
    stopAutoplay();
    autoplayTimer = window.setInterval(() => {
      if (!isInteracting) {
        goToIndex(currentIndex + 1);
      }
    }, 4000);
  };

  const stopAutoplay = (): void => {
    if (autoplayTimer !== null) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  
  prevBtn?.addEventListener('click', () => {
    goToIndex(currentIndex - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    goToIndex(currentIndex + 1);
    startAutoplay();
  });

  
  const handlePointerDown = (e: MouseEvent | TouchEvent): void => {
    isInteracting = true;
    isDragging = false;
    stopAutoplay();

    startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handlePointerMove = (e: MouseEvent | TouchEvent): void => {
    if (!isInteracting) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diffX = currentX - startX;

    if (Math.abs(diffX) > 5) {
      isDragging = true;
    }
  };

  const handlePointerUp = (e: MouseEvent | TouchEvent): void => {
    if (!isInteracting) return;
    isInteracting = false;

    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as MouseEvent).clientX;
    const diffX = endX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX < 0) {
        goToIndex(currentIndex + 1);
      } else {
        goToIndex(currentIndex - 1);
      }
    }

    startAutoplay();
  };

  const viewport = section.querySelector<HTMLDivElement>('.carousel__viewport')!;

  viewport.addEventListener('mousedown', handlePointerDown);
  viewport.addEventListener('mousemove', handlePointerMove);
  viewport.addEventListener('mouseup', handlePointerUp);
  viewport.addEventListener('mouseleave', handlePointerUp);

  viewport.addEventListener('touchstart', handlePointerDown, { passive: true });
  viewport.addEventListener('touchmove', handlePointerMove, { passive: true });
  viewport.addEventListener('touchend', handlePointerUp);

  window.addEventListener('resize', () => updatePosition());

  setTimeout(() => {
    goToIndex(0, false);
    startAutoplay();
  }, 50);

  return section;
}