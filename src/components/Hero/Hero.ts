import './Hero.scss';

export function createHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero';
  section.setAttribute('aria-label', 'Introduction');
  section.innerHTML = `
    <div class="hero__frame" role="presentation">
      <div class="hero__card">
        <h1 class="hero__title">Take a Short Break &amp; Have Fun</h1>
        <p class="hero__subtitle">
          Discover hundreds of curated casual mini-games. Play instantly in your browser —
          puzzle, match 3, farm, and board classics.
        </p>
        <button type="button" class="hero__cta">Browse Library</button>
      </div>
    </div>
  `;

  return section;
}
