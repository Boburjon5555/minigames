import './GameDetails.scss';

export class GameDetailsModal {
  private backdrop: HTMLDivElement;
  private dialog: HTMLDivElement;
  private lastFocusedElement: HTMLElement | null = null;

  constructor() {
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
  }

  private render(): void {
    this.dialog.innerHTML = `
      <div class="game-card__banner">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" alt="Tukoni: Forest Keepers" />
        <button type="button" class="game-card__close" id="game-card-close" aria-label="Close dialog">✕</button>
      </div>

      <div class="game-card__content">
        <div class="game-card__header">
          <h2 class="game-card__title">Tukoni: Forest Keepers</h2>
          <div class="game-card__stats">
            <span class="game-card__stats-rating">★ 4.9</span>
            <span class="game-card__stats-likes">♡ 31.2K</span>
          </div>
        </div>

        <p class="game-card__description">
          Tukoni: Forest Keepers — a cozy hand-drawn puzzle-adventure. You are Traveller, a little forest spirit on an important mission. Wander storybook meadows, visit mushroom villages, meet adorable inhabitants, solve gentle hand-crafted puzzles, brew herbal teas and help the Tukoni forest prepare peacefully for the coming winter.
        </p>

        <div class="game-card__info-grid">
          <div class="game-card__info-item">
            <span>Genre</span>
            <strong>Puzzle</strong>
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
            <strong>Free</strong>
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
          <div class="game-card__record-item">
            <div class="game-card__record-item-user"><span>🪴</span> HerbalistPath</div>
            <div>
              <span class="game-card__record-item-score">308,900 pts</span>
              <span class="game-card__record-item-date">1 week ago</span>
            </div>
          </div>
        </div>

        <div class="game-card__section-title">Comments (2)</div>
        <div class="game-card__comments">
          <div class="game-card__comments-input-group">
            <div class="game-card__comments-avatar">U</div>
            <input type="text" class="game-card__comments-input" placeholder="Write a comment..." />
            <button type="button" class="game-card__comments-submit" aria-label="Send">
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>

          <div class="game-card__comments-list">
            <div class="game-card__comments-card">
              <div class="game-card__comments-card-header">
                <div class="game-card__comments-card-author">
                  <div class="game-card__comments-avatar" style="background-color: #93c5fd;">F</div>
                  ForestDweller
                </div>
                <span class="game-card__comments-card-date">3 hours ago</span>
              </div>
              <p class="game-card__comments-card-text">
                The hand-drawn art is absolutely magical 🍄 Every location feels like a page from a children's storybook.
              </p>
              <button type="button" class="game-card__comments-card-like">♡ 12</button>
            </div>
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
