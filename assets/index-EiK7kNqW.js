var g=Object.defineProperty;var _=(a,e,s)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var u=(a,e,s)=>_(a,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const h=`
  <form class="auth-dialog__form" data-form="login" novalidate>
    <div class="auth-dialog__field">
      <label class="auth-dialog__label" for="login-email">Email Address</label>
      <div class="auth-dialog__input-wrapper">
        <input
          class="auth-dialog__input"
          id="login-email"
          name="email"
          type="email"
          placeholder="e.g. alex@minigames.com"
          autocomplete="email"
          required
        />
      </div>
      <span class="auth-dialog__error" data-error-for="login-email"></span>
    </div>

    <div class="auth-dialog__field">
      <label class="auth-dialog__label" for="login-password">Password</label>
      <div class="auth-dialog__input-wrapper">
        <input
          class="auth-dialog__input"
          id="login-password"
          name="password"
          type="password"
          placeholder="••••••••"
          autocomplete="current-password"
          minlength="8"
          required
        />
        <button type="button" class="auth-dialog__toggle-pwd" data-toggle-pwd="login-password" aria-label="Toggle password visibility">👁</button>
      </div>
      <a href="#" class="auth-dialog__forgot-link">Forgot Password?</a>
      <span class="auth-dialog__error" data-error-for="login-password"></span>
    </div>

    <button type="submit" class="auth-dialog__submit">Login</button>
  </form>

  <div class="auth-dialog__divider"><span>OR</span></div>

  <button type="button" class="auth-dialog__google-btn">
    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="16" height="16" alt="Google" />
    Continue with Google
  </button>
`,b=`
  <form class="auth-dialog__form" data-form="register" novalidate>
    <div class="auth-dialog__field">
      <label class="auth-dialog__label" for="register-name">Username</label>
      <div class="auth-dialog__input-wrapper">
        <input
          class="auth-dialog__input"
          id="register-name"
          name="name"
          type="text"
          placeholder="e.g. CozyGamer_99"
          autocomplete="username"
          required
        />
      </div>
      <span class="auth-dialog__error" data-error-for="register-name"></span>
    </div>

    <div class="auth-dialog__field">
      <label class="auth-dialog__label" for="register-email">Email Address</label>
      <div class="auth-dialog__input-wrapper">
        <input
          class="auth-dialog__input"
          id="register-email"
          name="email"
          type="email"
          placeholder="your.email@domain.com"
          autocomplete="email"
          required
        />
      </div>
      <span class="auth-dialog__error" data-error-for="register-email"></span>
    </div>

    <div class="auth-dialog__field">
      <label class="auth-dialog__label" for="register-password">Password</label>
      <div class="auth-dialog__input-wrapper">
        <input
          class="auth-dialog__input"
          id="register-password"
          name="password"
          type="password"
          placeholder="Min. 8 characters"
          autocomplete="new-password"
          minlength="8"
          required
        />
        <button type="button" class="auth-dialog__toggle-pwd" data-toggle-pwd="register-password" aria-label="Toggle password visibility">👁</button>
      </div>
      <span class="auth-dialog__error" data-error-for="register-password"></span>
    </div>

    <div class="auth-dialog__field">
      <label class="auth-dialog__label" for="register-confirm-password">Confirm Password</label>
      <div class="auth-dialog__input-wrapper">
        <input
          class="auth-dialog__input"
          id="register-confirm-password"
          name="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          autocomplete="new-password"
          minlength="8"
          required
        />
      </div>
      <span class="auth-dialog__error" data-error-for="register-confirm-password"></span>
    </div>

    <button type="submit" class="auth-dialog__submit">Create Account</button>
  </form>

  <div class="auth-dialog__divider"><span>OR</span></div>

  <button type="button" class="auth-dialog__google-btn">
    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="16" height="16" alt="Google" />
    Sign up with Google
  </button>
`;class v{constructor(){u(this,"backdrop");u(this,"dialog");u(this,"mode","login");u(this,"lastFocusedElement",null);this.backdrop=document.createElement("div"),this.backdrop.className="auth-backdrop",this.dialog=document.createElement("div"),this.dialog.className="auth-dialog",this.dialog.setAttribute("role","dialog"),this.dialog.setAttribute("aria-modal","true"),this.dialog.setAttribute("aria-labelledby","auth-dialog-title"),this.backdrop.appendChild(this.dialog),this.renderDialogShell(),this.attachGlobalListeners()}get element(){return this.backdrop}open(e="login"){this.mode=e,this.lastFocusedElement=document.activeElement,this.renderForm(),this.backdrop.classList.add("is-open"),document.body.style.overflow="hidden",window.requestAnimationFrame(()=>this.focusFirstField())}close(){var e;this.backdrop.classList.remove("is-open"),document.body.style.overflow="",(e=this.lastFocusedElement)==null||e.focus()}renderDialogShell(){var e;this.dialog.innerHTML=`
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">✕</button>
      <div class="auth-dialog__switcher" role="tablist" aria-label="Authentication mode">
        <button type="button" class="auth-dialog__switch-btn" role="tab" data-mode="login">
          Login
        </button>
        <button type="button" class="auth-dialog__switch-btn" role="tab" data-mode="register">
          Register
        </button>
      </div>
      <h2 class="auth-dialog__title" id="auth-dialog-title"></h2>
      <p class="auth-dialog__subtitle" data-role="subtitle"></p>
      <div data-role="form-slot"></div>
      <p class="auth-dialog__footer-note" data-role="footer-note"></p>
    `,(e=this.dialog.querySelector(".auth-dialog__close"))==null||e.addEventListener("click",()=>this.close()),this.dialog.querySelectorAll("[data-mode]").forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.mode;this.mode=r,this.renderForm(),this.focusFirstField()})})}renderForm(){var n;const e=this.mode==="login";this.dialog.querySelectorAll("[data-mode]").forEach(c=>{const l=c.dataset.mode===this.mode;c.classList.toggle("is-active",l),c.setAttribute("aria-selected",String(l))});const s=this.dialog.querySelector("#auth-dialog-title"),r=this.dialog.querySelector('[data-role="subtitle"]'),t=this.dialog.querySelector('[data-role="form-slot"]'),o=this.dialog.querySelector('[data-role="footer-note"]');s&&(s.textContent=e?"Welcome Back!":"Create Account"),r&&(r.textContent=e?"Sign in to resume your games and progress.":"Join MiniGames to track your score & streak."),t&&(t.innerHTML=e?h:b),o&&(o.innerHTML=e?`Don't have an account? <button type="button" class="auth-dialog__link-btn" data-switch="register">Register</button>`:'Already have an account? <button type="button" class="auth-dialog__link-btn" data-switch="login">Login</button>'),(n=o==null?void 0:o.querySelector("[data-switch]"))==null||n.addEventListener("click",c=>{const l=c.currentTarget;this.mode=l.dataset.switch,this.renderForm(),this.focusFirstField()}),this.dialog.querySelectorAll("[data-toggle-pwd]").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.togglePwd;if(!l)return;const d=this.dialog.querySelector(`#${l}`);d&&(d.type=d.type==="password"?"text":"password")})});const i=t==null?void 0:t.querySelector("form");i==null||i.addEventListener("submit",c=>this.handleSubmit(c,i))}handleSubmit(e,s){e.preventDefault();let r=!0;s.querySelectorAll("input").forEach(t=>{const o=s.querySelector(`[data-error-for="${t.id}"]`);let i="";t.validity.valueMissing?i="This field is required.":t.validity.typeMismatch?i="Please enter a valid email address.":t.validity.tooShort&&(i=`Must be at least ${t.minLength} characters.`);const n=s.querySelector("#register-password");t.id==="register-confirm-password"&&n&&!i&&t.value!==n.value&&(i="Passwords do not match."),t.setAttribute("aria-invalid",String(!!i)),o&&(o.textContent=i),i&&(r=!1)}),r&&this.close()}focusFirstField(){var e;(e=this.dialog.querySelector("input"))==null||e.focus()}attachGlobalListeners(){this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdrop.classList.contains("is-open")&&this.close()})}}const f=["Home","Library","Categories","Tournaments"],y=["About Us","Contact","Privacy Policy","Terms of Service"];function w(){const a=document.createElement("footer");return a.className="footer",a.innerHTML=`
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
          ${f.map(e=>`<a class="footer__link" href="#/">${e}</a>`).join("")}
        </div>

        <div class="footer__column">
          <h3 class="footer__column-title">Company</h3>
          ${y.map(e=>`<a class="footer__link" href="#/">${e}</a>`).join("")}
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
      <span class="footer__bottom-item footer__credit">
        <span aria-hidden="true">🎓</span> RS School
      </span>
      <span class="footer__bottom-item footer__credit">
        <span aria-hidden="true">&lt;/&gt;</span> @student-nickname
      </span>
      <span class="footer__bottom-item">Designed with love</span>
    </div>
  `,a}class k{constructor(){u(this,"backdrop");u(this,"dialog");u(this,"lastFocusedElement",null);this.backdrop=document.createElement("div"),this.backdrop.className="game-modal-backdrop",this.dialog=document.createElement("div"),this.dialog.className="game-card",this.dialog.setAttribute("role","dialog"),this.dialog.setAttribute("aria-modal","true"),this.backdrop.appendChild(this.dialog),this.render(),this.attachEvents()}get element(){return this.backdrop}open(){this.lastFocusedElement=document.activeElement,this.backdrop.classList.add("is-open"),document.body.style.overflow="hidden"}close(){var e;this.backdrop.classList.remove("is-open"),document.body.style.overflow="",(e=this.lastFocusedElement)==null||e.focus()}render(){this.dialog.innerHTML=`
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
    `}attachEvents(){var e;(e=this.dialog.querySelector("#game-card-close"))==null||e.addEventListener("click",()=>this.close()),this.backdrop.addEventListener("click",s=>{s.target===this.backdrop&&this.close()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&this.backdrop.classList.contains("is-open")&&this.close()})}}const S=[{label:"Home",href:"#/"},{label:"Library",href:"#/"},{label:"Tournaments",href:"#/"},{label:"Community",href:"#/"}];function L({onAuthOpen:a}){var s,r;const e=document.createElement("nav");return e.className="burger-menu",e.setAttribute("aria-label","Mobile"),e.innerHTML=`
    <div class="burger-menu__nav">
      ${S.map(t=>`<a class="burger-menu__nav-link" href="${t.href}">${t.label}</a>`).join("")}
    </div>
    <div class="burger-menu__actions">
      <button type="button" class="burger-menu__login-btn" data-role="login-trigger">
        Log In
      </button>
      <button type="button" class="burger-menu__signup-btn" data-role="signup-trigger">
        Sign Up
      </button>
    </div>
  `,(s=e.querySelector('[data-role="login-trigger"]'))==null||s.addEventListener("click",()=>a("login")),(r=e.querySelector('[data-role="signup-trigger"]'))==null||r.addEventListener("click",()=>a("register")),e}const E=[{label:"Home",href:"/"},{label:"Library",href:"/library"},{label:"Tournaments",href:"/tournaments"},{label:"Community",href:"/community"}];function C({onAuthOpen:a}){const e=document.createElement("div"),s=window.location.pathname,r=document.createElement("header");r.className="header",r.innerHTML=`
    <div class="header__inner">
      <a class="header__logo" href="/" aria-label="MiniGames home">
        <span class="header__logo-mark" aria-hidden="true"></span>
        MiniGames
      </a>

      <nav class="header__nav" aria-label="Primary">
        ${E.map(l=>`<a class="header__nav-link${s===l.href||l.href!=="/"&&s.startsWith(l.href)?" header__nav-link--active":""}" href="${l.href}">${l.label}</a>`).join("")}
      </nav>

      <div class="header__actions">
        <button type="button" class="header__login-btn" data-role="login-trigger">
          Log In
        </button>
        <button type="button" class="header__signup-btn" data-role="signup-trigger">
          Sign Up
        </button>
        <button
          type="button"
          class="header__burger-toggle"
          aria-label="Toggle menu"
          aria-expanded="false"
          aria-controls="burger-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;const t=L({onAuthOpen:a});t.id="burger-menu";const o=r.querySelector(".header__burger-toggle"),i=r.querySelector('[data-role="login-trigger"]'),n=r.querySelector('[data-role="signup-trigger"]'),c=r.querySelectorAll(".header__nav-link");return c.forEach(l=>{l.addEventListener("click",()=>{c.forEach(d=>d.classList.remove("header__nav-link--active")),l.classList.add("header__nav-link--active")})}),o==null||o.addEventListener("click",()=>{const l=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!l)),t.classList.toggle("is-open",!l),document.body.style.overflow=l?"":"hidden"}),i==null||i.addEventListener("click",()=>a("login")),n==null||n.addEventListener("click",()=>a("register")),e.append(r,t),e}function F(a){return a>=1e3?`${(a/1e3).toFixed(1)}K`:String(a)}function A(a){const e=a.coverUrl?` style="background-image: url('${a.coverUrl}')"`:"",s=a.coverAspectRatio??.78,t=a.showInfo??!0?`
      <div class="carousel__card-overlay">
        <h3 class="carousel__card-title">${a.title}</h3>
        <div class="carousel__card-meta">
          <span class="carousel__rating">★ ${a.rating.toFixed(1)}</span>
          <span class="carousel__likes">♥ ${F(a.likes)}</span>
        </div>
      </div>
    `:"";return`
    <article class="carousel__card${a.featured?" carousel__card--featured":""}" style="--card-aspect: ${s}" data-game-id="${a.id}" aria-label="${a.title}">
      <div class="carousel__cover"${e} role="presentation"></div>
      ${t}
    </article>
  `}function P({title:a,games:e,onGameClick:s}){const r=document.createElement("section");r.className="carousel",r.setAttribute("aria-label",a),r.innerHTML=`
    <div class="carousel__inner">
      <div class="carousel__header">
        <h2 class="carousel__title"><span class="carousel__title-accent" aria-hidden="true"></span>${a}</h2>
        <div class="carousel__controls">
          <button type="button" class="carousel__control-btn carousel__control-btn--prev" data-role="prev" aria-label="Previous">‹</button>
          <button type="button" class="carousel__control-btn carousel__control-btn--next" data-role="next" aria-label="Next">›</button>
        </div>
      </div>
      <div class="carousel__track" data-role="track">
        ${e.map(A).join("")}
      </div>
    </div>
  `;const t=r.querySelector('[data-role="track"]'),o=r.querySelector('[data-role="prev"]'),i=r.querySelector('[data-role="next"]'),n=c=>{const l=t==null?void 0:t.querySelector(".carousel__card"),d=((l==null?void 0:l.offsetWidth)??280)+16;t==null||t.scrollBy({left:d*c,behavior:"smooth"})};return o==null||o.addEventListener("click",()=>n(-1)),i==null||i.addEventListener("click",()=>n(1)),s&&r.querySelectorAll(".carousel__card").forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-game-id");d&&s(d)})}),r}function $(){const a=document.createElement("section");return a.className="developer-cta",a.setAttribute("aria-label","For game developers"),a.innerHTML=`
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
  `,a}function G(){const a=document.createElement("section");return a.className="hero",a.setAttribute("aria-label","Introduction"),a.innerHTML=`
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
  `,a}function M(a){return`
    <tr>
      <td class="leaderboard__rank${a.rank===1?" leaderboard__rank--top":""}">#${a.rank}</td>
      <td>
        <div class="leaderboard__player">
          <span class="leaderboard__avatar" style="background-color: ${a.avatarColor}">
            ${a.avatarInitials}
          </span>
          <span class="leaderboard__player-name">${a.playerName}</span>
        </div>
      </td>
      <td>${a.gamesPlayed}</td>
      <td class="leaderboard__score">${a.totalScore.toLocaleString("en-US")}</td>
      <td>
        <span class="leaderboard__streak">🔥 ${a.streakDays} days</span>
      </td>
      <td>
        <span class="leaderboard__game-pill">${a.favoriteGame}</span>
      </td>
    </tr>
  `}function q({entries:a}){const e=document.createElement("section");return e.className="leaderboard",e.setAttribute("aria-label","Leaderboard"),e.innerHTML=`
    <div class="leaderboard__inner">
      <h2 class="leaderboard__title">
        <span class="leaderboard__title-accent" aria-hidden="true"></span>
        Top Players This Week
      </h2>
      <div class="leaderboard__table-wrapper">
        <table class="leaderboard__table">
          <caption class="visually-hidden">Weekly leaderboard rankings</caption>
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Player</th>
              <th scope="col">Games Played</th>
              <th scope="col">Total Score</th>
              <th scope="col">Streak</th>
              <th scope="col">Favorite Game</th>
            </tr>
          </thead>
          <tbody>
            ${a.map(M).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,e}const N=[{id:"g0",title:"Candy Crush",genre:"Puzzle",coverUrl:"/assets/games/candy-crush.png",rating:4.7,likes:41300,coverAspectRatio:.32,showInfo:!1},{id:"g1",title:"Islanders: New Shores",genre:"Simulation",coverUrl:"/assets/games/islanders.png",rating:4.9,likes:54200,coverAspectRatio:.89},{id:"g2",title:"Vacation Cafe Simulator",genre:"Simulation",coverUrl:"/assets/games/vacation-cafe.png",rating:4.8,likes:28700,coverAspectRatio:2.125,featured:!0},{id:"g3",title:"Winter Burrow",genre:"Adventure",coverUrl:"/assets/games/winter-burrow.png",rating:4.9,likes:32400,coverAspectRatio:.89},{id:"g4",title:"Bubble Shooter",genre:"Arcade",coverUrl:"/assets/games/bubble-shooter.png",rating:4.7,likes:23600,coverAspectRatio:.32,showInfo:!1}],T=[{rank:1,playerName:"Alex_Pro99",avatarInitials:"AP",avatarColor:"#F5B942",gamesPlayed:142,totalScore:94250,streakDays:12,favoriteGame:"Heartopia"},{rank:2,playerName:"CozyGamer_x",avatarInitials:"CG",avatarColor:"#8FDDB0",gamesPlayed:118,totalScore:81400,streakDays:8,favoriteGame:"Cat Mail Co."},{rank:3,playerName:"MatchMaster",avatarInitials:"MM",avatarColor:"#8FC6F0",gamesPlayed:98,totalScore:72110,streakDays:5,favoriteGame:"Tiny Glade"},{rank:4,playerName:"BubblePop",avatarInitials:"BP",avatarColor:"#F0A8DC",gamesPlayed:87,totalScore:65900,streakDays:3,favoriteGame:"Whisper of the House"},{rank:5,playerName:"SudokuGod",avatarInitials:"SG",avatarColor:"#C3B4F0",gamesPlayed:74,totalScore:59320,streakDays:2,favoriteGame:"Cat Chess"}];function m(a={}){const e=document.createElement("main");return e.id="main-content",e.append(G(),P({title:"New Games",games:N,onGameClick:a.onGameSelect}),q({entries:T}),$()),e}const H=[{id:"vacation-cafe",title:"Vacation Cafe Simulator",category:"Strategy",price:"Free",rating:4.8,likes:28700,description:"Cozy Italian Vacation Cafe 🍕 No timers, No stress 🤝 cook traditional dishes 🍝 upgrade and customize 🏪 relax and grow your dream cafe",coverUrl:"/assets/games/Game-Screenshot.png"},{id:"winter-burrow",title:"Winter Burrow",category:"Farm",price:"Free",rating:4.9,likes:32400,description:"A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.",coverUrl:"/assets/games/Game-Screenshot(1).png"},{id:"shelve-potions",title:"Shelve the Potions!",category:"Puzzle",price:"Free",rating:4.7,likes:21300,description:"Organize 2000+ potions on shelves after the witch’s cats have knocked them over, using clues around an enchanted cellar.",coverUrl:"/assets/games/Game-Screenshot(2).png"},{id:"heartopia",title:"Heartopia",category:"Strategy",price:"$1.99",rating:4.6,likes:46800,description:"A multiplayer life simulation game crafted for creativity, freedom, and peace. Build your dream home, explore hobbies, and forge warm connections.",coverUrl:"/assets/games/Game-Screenshot(3).png"},{id:"palia",title:"Palia",category:"Strategy",price:"Free",rating:4.8,likes:89500,description:"A free-to-play fantasy life sim adventure where you can craft, explore, and create the life and home of your dreams in a vibrant world.",coverUrl:"/assets/games/Game-Screenshot(4).png"},{id:"cat-mail",title:"Cat Mail Co.",category:"Puzzle",price:"Free",rating:4.9,likes:38200,description:"Run a cozy cat post office. Sort and deliver parcels from the daily boat. At night, the moon reveals hidden truths about packages.",coverUrl:"/assets/games/Game-Screenshot(5).png"}];function x(a){return a>=1e3?`${(a/1e3).toFixed(1)}K`:String(a)}function I(a={}){const e=document.createElement("div");return e.className="library",e.innerHTML=`
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
      ${H.map(r=>`
        <article class="library-card" data-id="${r.id}" style="cursor: pointer;">
          <div class="library-card__cover" style="background-image: url('${r.coverUrl}')"></div>
          <div class="library-card__body">
            <div class="library-card__header">
              <div class="library-card__title-group">
                <h3 class="library-card__title">${r.title}</h3>
                <span class="library-card__badge">${r.category||"Casual"}</span>
              </div>
              <span class="library-card__price">${r.price||"Free"}</span>
            </div>

            <p class="library-card__description">${r.description}</p>

            <div class="library-card__footer">
              <div class="library-card__meta">
                <span class="library-card__rating">★ ${r.rating.toFixed(1)}</span>
                <span class="library-card__likes">♡ ${x(r.likes)}</span>
              </div>
              <button type="button" class="library-card__btn-details" data-id="${r.id}">Details</button>
            </div>
          </div>
        </article>
      `).join("")}
    </div>

    <nav class="library__pagination" aria-label="Pagination">
      <button class="library__page-btn" disabled>‹</button>
      <button class="library__page-btn library__page-btn--active">1</button>
      <button class="library__page-btn">2</button>
      <button class="library__page-btn">3</button>
      <button class="library__page-btn">4</button>
      <button class="library__page-btn">›</button>
    </nav>
  `,e.querySelectorAll(".library-card").forEach(r=>{r.addEventListener("click",()=>{const t=r.getAttribute("data-id");t&&a.onGameSelect&&a.onGameSelect(t)})}),e}class z{constructor(){u(this,"routes",[]);u(this,"notFoundHandler",null)}register(e,s){return this.routes.push({path:e,handler:s}),this}notFound(e){return this.notFoundHandler=e,this}init(){window.addEventListener("hashchange",()=>this.resolve()),window.addEventListener("popstate",()=>this.resolve()),document.addEventListener("click",e=>{const r=e.target.closest("a");if(r&&r.origin===window.location.origin){const t=r.getAttribute("href");t&&!t.startsWith("http")&&(e.preventDefault(),this.navigate(t))}}),this.resolve()}navigate(e){e.startsWith("#")?window.location.hash=e:(window.history.pushState({},"",e),this.resolve())}resolve(){var r;let e=window.location.hash.replace("#","");e||(e=window.location.pathname),e.startsWith("/")||(e=`/${e}`);const s=this.routes.find(t=>t.path===e);if(s){s.handler();return}(r=this.notFoundHandler)==null||r.call(this)}}function p(a){const e=document.createElement("div");return e.className="placeholder-page",e.style.padding="4rem 2rem",e.style.textAlign="center",e.innerHTML=`
    <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">${a}</h1>
    <p style="color: #64748b;">This page is currently under construction.</p>
  `,e}function D(){const a=document.getElementById("app");if(!a)throw new Error("Root #app element not found.");const e=new v,s=new k,r=C({onAuthOpen:n=>e.open(n)}),t=w(),o=document.createElement("div");o.className="page-outlet",a.append(r,o,t,e.element,s.element);const i=new z;i.register("/",()=>{const n=m({onGameSelect:()=>s.open()});o.replaceChildren(n)}),i.register("/library",()=>{const n=I({onGameSelect:()=>s.open()});o.replaceChildren(n)}),i.register("/tournaments",()=>{o.replaceChildren(p("Tournaments Page"))}),i.register("/community",()=>{o.replaceChildren(p("Community Page"))}),i.notFound(()=>{const n=m({onGameSelect:()=>s.open()});o.replaceChildren(n)}),i.init()}document.addEventListener("DOMContentLoaded",D);
