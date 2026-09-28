import './Footer.scss';

const EXPLORE_LINKS = ['Home', 'Library', 'Categories', 'Tournaments'];
const COMPANY_LINKS = ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'];

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="footer__logo-mark" aria-hidden="true">+</span>
          MiniGames
        </div>
        <p class="footer__tagline">
          Take a short break and have fun. Hundreds of curated casual mini-games
          right in your web browser. No download required.
        </p>
      </div>

      <div class="footer__columns">
        <div class="footer__column">
          <h3 class="footer__column-title">Explore</h3>
          ${EXPLORE_LINKS.map((link) => `<a class="footer__link" href="#/">${link}</a>`).join('')}
        </div>

        <div class="footer__column">
          <h3 class="footer__column-title">Company</h3>
          ${COMPANY_LINKS.map((link) => `<a class="footer__link" href="#/">${link}</a>`).join('')}
        </div>

        <div class="footer__column">
          <h3 class="footer__column-title">Community</h3>
          <div class="footer__socials">
            <a class="footer__social-btn" href="#/" aria-label="Share MiniGames">↗</a>
            <a class="footer__social-btn" href="#/" aria-label="Community chat">💬</a>
            <a class="footer__social-btn" href="#/" aria-label="RSS feed">📶</a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <span class="footer__bottom-item">© ${new Date().getFullYear()} MiniGames. All rights reserved.</span>

      <a class="footer__bottom-item footer__credit" href="https://rs.school/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/games/rs-logo.png" alt="RS School Logo" class="footer__rs-logo" />
        RS School
      </a>

      <a class="footer__bottom-item footer__credit" href="https://github.com/Boburjon5555" target="_blank" rel="noopener noreferrer">
        <span class="footer__github-icon" aria-hidden="true">&lt;/&gt;</span>
        @Boburjon5555
      </a>

      <span class="footer__bottom-item">Designed with love</span>
    </div>
  `;

  return footer;
}