import './DeveloperCta.scss';

export function createDeveloperCta(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'developer-cta';
  section.setAttribute('aria-label', 'For game developers');
  section.innerHTML = `
    <div class="developer-cta__inner">
      <div class="developer-cta__illustration" role="presentation"></div>
      <div class="developer-cta__card">
        <h2 class="developer-cta__title">Are You a Game Developer?</h2>
        <p class="developer-cta__subtitle">
          Want to see your game on MiniGames? We're always looking for fun,
          engaging mini games to add to our platform. Submit your game
          and reach thousands of players!
        </p>
        <button type="button" class="developer-cta__cta">
          <span aria-hidden="true">⬆</span> Submit Form
        </button>
        <p class="developer-cta__contact">
          or contact us at <a href="mailto:developers@minigames.com">developers@minigames.com</a>
        </p>
      </div>
    </div>
  `;

  return section;
}
