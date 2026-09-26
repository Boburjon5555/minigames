import './GameDetails.scss';
import type { Game } from '@/types/game';

export class GameDetailsModal {
  private backdrop: HTMLDivElement;
  private dialog: HTMLDivElement;
  private lastFocusedElement: HTMLElement | null = null;
  private game: Game;

  constructor(game: Game) {
    this.game = game;

    this.backdrop = document.createElement('div');
    this.backdrop.className = 'game-modal-backdrop';

    this.dialog = document.createElement('div');
    this.dialog.className = 'game-card';
    this.dialog.setAttribute('role', 'dialog');
    this.dialog.setAttribute('aria-modal', 'true');

    this.backdrop.appendChild(this.dialog);
    this.render();
    this.attachEvents();
  }

  public get element(): HTMLElement {
    return this.backdrop;
  }

  public open(): void {
    this.lastFocusedElement = document.activeElement as HTMLElement | null;
    this.backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  public close(): void {
    this.backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    this.lastFocusedElement?.focus();
    setTimeout(() => {
      this.backdrop.remove();
    }, 200);
  }

  private render(): void {
    const coverUrl = this.game.coverUrl
      ? `${import.meta.env.BASE_URL}${this.game.coverUrl.replace(/^\.\//, '')}`
      : 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';

    this.dialog.innerHTML = `
      <div class="game-card__banner">
        <img src="${coverUrl}" alt="${this.game.title}" />
        <button type="button" class="game-card__close" id="game-card-close" aria-label="Close dialog">✕</button>
      </div>

      <div class="game-card__content">
        <div class="game-card__header">
          <h2 class="game-card__title">${this.game.title}</h2>
          <div class="game-card__stats">
            <span class="game-card__stats-rating">★ ${(this.game.rating || 5.0).toFixed(1)}</span>
            <span class="game-card__stats-likes">♡ ${this.game.likes || 0}</span>
          </div>
        </div>

        <p class="game-card__description">
          ${this.game.description}
        </p>

        <div class="game-card__info-grid">
          <div class="game-card__info-item">
            <span>Genre</span>
            <strong>${this.game.category || 'Casual'}</strong>
          </div>
          <div class="game-card__info-item">
            <span>Players</span>
            <strong>Solo</strong>
          </div>
          <div class="game-card__info-item">
            <span>Duration</span>
            <strong>40-90 min</strong>
          </div>
          <div class="game-card__info-item">
            <span>Price</span>
            <strong>${this.game.price || 'Free'}</strong>
          </div>
        </div>

        <div class="game-card__actions">
          <button type="button" class="game-card__btn-play">Play Now</button>
          <button type="button" class="game-card__btn-fav">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            Add to Favorites
          </button>
        </div>

        <div class="game-card__section-title">🥇 Top Records</div>
        <div class="game-card__records">
          <div class="game-card__record-item">
            <div class="game-card__record-item-user"><span>🔥</span> ForestSpirit</div>
            <div>
              <span class="game-card__record-item-score">356,700 pts</span>
              <span class="game-card__record-item-date">2 days ago</span>
            </div>
          </div>
          <div class="game-card__record-item">
            <div class="game-card__record-item-user"><span>🫖</span> TeaBrewer</div>
            <div>
              <span class="game-card__record-item-score">332,400 pts</span>
              <span class="game-card__record-item-date">5 days ago</span>
            </div>
          </div>
        </div>

        <div class="game-card__section-title">Comments</div>
        <div class="game-card__comments">
          <div class="game-card__comments-input-group">
            <div class="game-card__comments-avatar">U</div>
            <input type="text" class="game-card__comments-input" placeholder="Write a comment..." />
            <button type="button" class="game-card__comments-submit" aria-label="Send">
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private attachEvents(): void {
    this.dialog.querySelector('#game-card-close')?.addEventListener('click', () => this.close());

    this.backdrop.addEventListener('click', (event) => {
      if (event.target === this.backdrop) this.close();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.backdrop.classList.contains('is-open')) {
        this.close();
      }
    });
  }
}
