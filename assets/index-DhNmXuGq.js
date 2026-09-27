var B=Object.defineProperty;var O=(t,e,s)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>O(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const X=`
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
`,j=`
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
`;class K{constructor(){f(this,"backdrop");f(this,"dialog");f(this,"mode","login");f(this,"lastFocusedElement",null);this.backdrop=document.createElement("div"),this.backdrop.className="auth-backdrop",this.dialog=document.createElement("div"),this.dialog.className="auth-dialog",this.dialog.setAttribute("role","dialog"),this.dialog.setAttribute("aria-modal","true"),this.dialog.setAttribute("aria-labelledby","auth-dialog-title"),this.backdrop.appendChild(this.dialog),this.renderDialogShell(),this.attachGlobalListeners()}get element(){return this.backdrop}open(e="login"){this.mode=e,this.lastFocusedElement=document.activeElement,this.renderForm(),this.backdrop.classList.add("is-open"),document.body.style.overflow="hidden",window.requestAnimationFrame(()=>this.focusFirstField())}close(){var e;this.backdrop.classList.remove("is-open"),document.body.style.overflow="",(e=this.lastFocusedElement)==null||e.focus()}renderDialogShell(){var e;this.dialog.innerHTML=`
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
    `,(e=this.dialog.querySelector(".auth-dialog__close"))==null||e.addEventListener("click",()=>this.close()),this.dialog.querySelectorAll("[data-mode]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.mode;this.mode=o,this.renderForm(),this.focusFirstField()})})}renderForm(){var i;const e=this.mode==="login";this.dialog.querySelectorAll("[data-mode]").forEach(c=>{const n=c.dataset.mode===this.mode;c.classList.toggle("is-active",n),c.setAttribute("aria-selected",String(n))});const s=this.dialog.querySelector("#auth-dialog-title"),o=this.dialog.querySelector('[data-role="subtitle"]'),a=this.dialog.querySelector('[data-role="form-slot"]'),r=this.dialog.querySelector('[data-role="footer-note"]');s&&(s.textContent=e?"Welcome Back!":"Create Account"),o&&(o.textContent=e?"Sign in to resume your games and progress.":"Join MiniGames to track your score & streak."),a&&(a.innerHTML=e?X:j),r&&(r.innerHTML=e?`Don't have an account? <button type="button" class="auth-dialog__link-btn" data-switch="register">Register</button>`:'Already have an account? <button type="button" class="auth-dialog__link-btn" data-switch="login">Login</button>'),(i=r==null?void 0:r.querySelector("[data-switch]"))==null||i.addEventListener("click",c=>{const n=c.currentTarget;this.mode=n.dataset.switch,this.renderForm(),this.focusFirstField()}),this.dialog.querySelectorAll("[data-toggle-pwd]").forEach(c=>{c.addEventListener("click",()=>{const n=c.dataset.togglePwd;if(!n)return;const u=this.dialog.querySelector(`#${n}`);u&&(u.type=u.type==="password"?"text":"password")})});const l=a==null?void 0:a.querySelector("form");l==null||l.addEventListener("submit",c=>this.handleSubmit(c,l))}handleSubmit(e,s){e.preventDefault();let o=!0;s.querySelectorAll("input").forEach(a=>{const r=s.querySelector(`[data-error-for="${a.id}"]`);let l="";a.validity.valueMissing?l="This field is required.":a.validity.typeMismatch?l="Please enter a valid email address.":a.validity.tooShort&&(l=`Must be at least ${a.minLength} characters.`);const i=s.querySelector("#register-password");a.id==="register-confirm-password"&&i&&!l&&a.value!==i.value&&(l="Passwords do not match."),a.setAttribute("aria-invalid",String(!!l)),r&&(r.textContent=l),l&&(o=!1)}),o&&this.close()}focusFirstField(){var e;(e=this.dialog.querySelector("input"))==null||e.focus()}attachGlobalListeners(){this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdrop.classList.contains("is-open")&&this.close()})}}const V=["Home","Library","Categories","Tournaments"],Y=["About Us","Contact","Privacy Policy","Terms of Service"];function J(){const t=document.createElement("footer");return t.className="footer",t.innerHTML=`
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
          ${V.map(e=>`<a class="footer__link" href="#/">${e}</a>`).join("")}
        </div>

        <div class="footer__column">
          <h3 class="footer__column-title">Company</h3>
          ${Y.map(e=>`<a class="footer__link" href="#/">${e}</a>`).join("")}
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
  `,t}class I{constructor(e){f(this,"backdrop");f(this,"dialog");f(this,"lastFocusedElement",null);f(this,"game");f(this,"isFavorite",!1);this.game=e,this.backdrop=document.createElement("div"),this.backdrop.className="game-modal-backdrop",this.dialog=document.createElement("div"),this.dialog.className="game-card",this.dialog.setAttribute("role","dialog"),this.dialog.setAttribute("aria-modal","true"),this.backdrop.appendChild(this.dialog),this.render(),this.attachEvents()}get element(){return this.backdrop}open(){this.lastFocusedElement=document.activeElement,requestAnimationFrame(()=>{this.backdrop.classList.add("is-open")}),document.body.style.overflow="hidden"}close(){this.backdrop.classList.add("is-closing"),this.backdrop.classList.remove("is-open"),document.body.style.overflow="",this.lastFocusedElement&&this.lastFocusedElement.focus(),setTimeout(()=>{this.backdrop.classList.remove("is-closing"),this.backdrop.remove()},300)}render(){let e=this.game.coverUrl||"";e&&!e.startsWith("http")&&!e.startsWith("data:")&&(e=`/minigames/${e.replace(/^\.?\//,"")}`);const s="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",o=e||s;this.dialog.innerHTML=`
      <div class="game-card__banner">
        <img src="${o}" alt="${this.game.title}" onerror="this.onerror=null;this.src='${s}';" />
        <button type="button" class="game-card__close" id="game-card-close" aria-label="Close dialog">✕</button>
      </div>

      <div class="game-card__content">
        <div class="game-card__header">
          <div>
            <h2 class="game-card__title">${this.game.title}</h2>
            <span class="game-card__badge">${this.game.category||"Casual"}</span>
          </div>
          <div class="game-card__stats">
            <span class="game-card__stats-rating">★ ${(this.game.rating||5).toFixed(1)}</span>
            <span class="game-card__stats-likes">♡ ${this.game.likes||0}</span>
          </div>
        </div>

        <p class="game-card__description">
          ${this.game.description}
        </p>

        <div class="game-card__info-grid">
          <div class="game-card__info-item">
            <span>Genre</span>
            <strong>${this.game.category||"Casual"}</strong>
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
            <strong>${this.game.price||"Free"}</strong>
          </div>
        </div>

        <div class="game-card__actions">
          <button type="button" class="game-card__btn-play">Play Now</button>
          <button type="button" class="game-card__btn-fav" id="game-card-fav" aria-label="Add to favorites">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>Add to Favorites</span>
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

        <!-- Comments Section (RSS-QS-2-2-6) -->
        <div class="game-card__section-title">Comments</div>
        <div class="game-card__comments">
          <form class="game-card__comments-input-group" id="comment-form">
            <div class="game-card__comments-avatar">U</div>
            <textarea class="game-card__comments-input" id="comment-textarea" placeholder="Write a comment..." rows="1"></textarea>
            <button type="submit" class="game-card__comments-submit" aria-label="Send">
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </form>

          <div class="game-card__comments-list">
            <div class="game-card__comments-card">
              <div class="game-card__comments-card-header">
                <span class="game-card__comments-card-author">Sarah_L</span>
                <span class="game-card__comments-card-date">1 day ago</span>
              </div>
              <p class="game-card__comments-card-text">Such a relaxing game! Love the artwork and smooth controls.</p>
              <button type="button" class="game-card__comments-card-like">
                <span class="like-icon">♡</span> <span class="like-count">14</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `}attachEvents(){var l;(l=this.dialog.querySelector("#game-card-close"))==null||l.addEventListener("click",()=>this.close()),this.backdrop.addEventListener("click",i=>{i.target===this.backdrop&&this.close()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&this.backdrop.classList.contains("is-open")&&this.close()});const e=this.dialog.querySelector("#game-card-fav");e==null||e.addEventListener("click",()=>{this.isFavorite=!this.isFavorite,e.classList.toggle("is-active",this.isFavorite);const i=e.querySelector("span");i&&(i.textContent=this.isFavorite?"In Favorites":"Add to Favorites")});const s=this.dialog.querySelector(".game-card__btn-play");s==null||s.addEventListener("click",i=>i.preventDefault());const o=this.dialog.querySelector("#comment-form");o==null||o.addEventListener("submit",i=>i.preventDefault());const a=this.dialog.querySelector("#comment-textarea");a==null||a.addEventListener("input",()=>{a.style.height="auto",a.style.height=`${Math.min(a.scrollHeight,88)}px`}),this.dialog.querySelectorAll(".game-card__comments-card-like").forEach(i=>{i.addEventListener("click",()=>{const c=i.classList.toggle("is-active"),n=i.querySelector(".like-icon"),u=i.querySelector(".like-count");if(u){let p=parseInt(u.textContent||"0",10);p=c?p+1:p-1,u.textContent=String(p)}n&&(n.textContent=c?"♥":"♡")})})}}const Q=[{label:"Home",href:"#/"},{label:"Library",href:"#/"},{label:"Tournaments",href:"#/"},{label:"Community",href:"#/"}];function Z({onAuthOpen:t}){var s,o;const e=document.createElement("nav");return e.className="burger-menu",e.setAttribute("aria-label","Mobile"),e.innerHTML=`
    <div class="burger-menu__nav">
      ${Q.map(a=>`<a class="burger-menu__nav-link" href="${a.href}">${a.label}</a>`).join("")}
    </div>
    <div class="burger-menu__actions">
      <button type="button" class="burger-menu__login-btn" data-role="login-trigger">
        Log In
      </button>
      <button type="button" class="burger-menu__signup-btn" data-role="signup-trigger">
        Sign Up
      </button>
    </div>
  `,(s=e.querySelector('[data-role="login-trigger"]'))==null||s.addEventListener("click",()=>t("login")),(o=e.querySelector('[data-role="signup-trigger"]'))==null||o.addEventListener("click",()=>t("register")),e}const ee=[{label:"Home",href:"/"},{label:"Library",href:"/library"},{label:"Tournaments",href:"/tournaments"},{label:"Community",href:"/community"}];function te({onAuthOpen:t}){const e=document.createElement("div"),s=window.location.pathname,o=document.createElement("header");o.className="header",o.innerHTML=`
    <div class="header__inner">
      <a class="header__logo" href="/" aria-label="MiniGames home">
        <span class="header__logo-mark" aria-hidden="true"></span>
        MiniGames
      </a>

      <nav class="header__nav" aria-label="Primary">
        ${ee.map(n=>`<a class="header__nav-link${s===n.href||n.href!=="/"&&s.startsWith(n.href)?" header__nav-link--active":""}" href="${n.href}">${n.label}</a>`).join("")}
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
  `;const a=Z({onAuthOpen:t});a.id="burger-menu";const r=o.querySelector(".header__burger-toggle"),l=o.querySelector('[data-role="login-trigger"]'),i=o.querySelector('[data-role="signup-trigger"]'),c=o.querySelectorAll(".header__nav-link");return c.forEach(n=>{n.addEventListener("click",()=>{c.forEach(u=>u.classList.remove("header__nav-link--active")),n.classList.add("header__nav-link--active")})}),r==null||r.addEventListener("click",()=>{const n=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",String(!n)),a.classList.toggle("is-open",!n),document.body.style.overflow=n?"":"hidden"}),l==null||l.addEventListener("click",()=>t("login")),i==null||i.addEventListener("click",()=>t("register")),e.append(o,a),e}function ae(t){return t>=1e3?`${(t/1e3).toFixed(1)}K`:String(t)}function re({title:t,games:e,onGameClick:s}){const o=e.filter(g=>g.featured).slice(0,9),a=o.length;let r=0,l=null,i=!1,c=0,n=!1;const u=document.createElement("section");u.className="carousel",u.setAttribute("aria-label",t),u.innerHTML=`
    <div class="carousel__inner">
      <div class="carousel__header">
        <h2 class="carousel__title"><span class="carousel__title-accent" aria-hidden="true"></span>${t}</h2>
        <div class="carousel__controls">
          <button type="button" class="carousel__control-btn carousel__control-btn--prev" data-role="prev" aria-label="Previous">‹</button>
          <button type="button" class="carousel__control-btn carousel__control-btn--next" data-role="next" aria-label="Next">›</button>
        </div>
      </div>
      <div class="carousel__viewport">
        <div class="carousel__track" data-role="track"></div>
      </div>
    </div>
  `;const p=u.querySelector('[data-role="track"]'),b=u.querySelector('[data-role="prev"]'),E=u.querySelector('[data-role="next"]');(()=>{p.innerHTML="",[...o,...o,...o].forEach((h,L)=>{let y=h.coverUrl||"";y&&!y.startsWith("http")&&!y.startsWith("data:")&&(y=`/minigames/${y.replace(/^\.?\//,"")}`);const w=document.createElement("article");w.className="carousel__card",w.setAttribute("data-game-id",h.id),w.setAttribute("data-index",String(L%a)),w.setAttribute("aria-label",h.title),w.innerHTML=`
        <img src="${y}" alt="${h.title}" class="carousel__cover-img" loading="lazy" />
        <div class="carousel__card-overlay">
          <h3 class="carousel__card-title">${h.title}</h3>
          <div class="carousel__card-meta">
            <span class="carousel__rating">★ ${(h.rating||5).toFixed(1)}</span>
            <span class="carousel__likes">♥ ${ae(h.likes||0)}</span>
          </div>
        </div>
      `,w.addEventListener("click",()=>{!n&&s&&s(h)}),p.appendChild(w)})})();const m=()=>{var M;const g=p.querySelectorAll(".carousel__card");if(g.length===0)return;const h=g[0].offsetWidth||280,y=h+16,G=(((M=u.querySelector(".carousel__viewport"))==null?void 0:M.clientWidth)||1200)/2-h/2,D=-(r+a)*y+G;p.style.transform=`translateX(${D}px)`,g.forEach(q=>{const x=q.getBoundingClientRect(),U=x.left+x.width/2,R=window.innerWidth/2,W=Math.abs(R-U),z=Math.max(.85,1-W/1e3);q.style.transform=`scale(${z})`})},_=(g,h=!0)=>{h?p.style.transition="transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)":p.style.transition="none",r=g,r>=a?setTimeout(()=>{p.style.transition="none",r=0,m()},400):r<0&&setTimeout(()=>{p.style.transition="none",r=a-1,m()},400),m()},d=()=>{v(),l=window.setInterval(()=>{i||_(r+1)},4e3)},v=()=>{l!==null&&(clearInterval(l),l=null)};b==null||b.addEventListener("click",()=>{_(r-1),d()}),E==null||E.addEventListener("click",()=>{_(r+1),d()});const A=g=>{i=!0,n=!1,v(),c="touches"in g?g.touches[0].clientX:g.clientX},k=g=>{if(!i)return;const L=("touches"in g?g.touches[0].clientX:g.clientX)-c;Math.abs(L)>5&&(n=!0)},P=g=>{if(!i)return;i=!1;const L=("changedTouches"in g?g.changedTouches[0].clientX:g.clientX)-c;Math.abs(L)>50&&(L<0?_(r+1):_(r-1)),d()},S=u.querySelector(".carousel__viewport");return S.addEventListener("mousedown",A),S.addEventListener("mousemove",k),S.addEventListener("mouseup",P),S.addEventListener("mouseleave",P),S.addEventListener("touchstart",A,{passive:!0}),S.addEventListener("touchmove",k,{passive:!0}),S.addEventListener("touchend",P),window.addEventListener("resize",()=>m()),setTimeout(()=>{_(0,!1),d()},50),u}function se(){const t=document.createElement("section");return t.className="developer-cta",t.setAttribute("aria-label","For game developers"),t.innerHTML=`
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
  `,t}function oe(){const t=document.createElement("section");return t.className="hero",t.setAttribute("aria-label","Introduction"),t.innerHTML=`
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
  `,t}function ie(t){return`
    <tr>
      <td class="leaderboard__rank${t.rank===1?" leaderboard__rank--top":""}">#${t.rank}</td>
      <td>
        <div class="leaderboard__player">
          <span class="leaderboard__avatar" style="background-color: ${t.avatarColor}">
            ${t.avatarInitials}
          </span>
          <span class="leaderboard__player-name">${t.playerName}</span>
        </div>
      </td>
      <td>${t.gamesPlayed}</td>
      <td class="leaderboard__score">${t.totalScore.toLocaleString("en-US")}</td>
      <td>
        <span class="leaderboard__streak">🔥 ${t.streakDays} days</span>
      </td>
      <td>
        <span class="leaderboard__game-pill">${t.favoriteGame}</span>
      </td>
    </tr>
  `}function le({entries:t}){const e=document.createElement("section");return e.className="leaderboard",e.setAttribute("aria-label","Leaderboard"),e.innerHTML=`
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
            ${t.map(ie).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,e}const $=[{id:"g0",title:"Candy Crush",genre:"Puzzle",coverUrl:"/assets/games/candy-crush.png",rating:4.7,likes:41300,coverAspectRatio:.32,showInfo:!1},{id:"g1",title:"Islanders: New Shores",genre:"Simulation",coverUrl:"/assets/games/islanders.png",rating:4.9,likes:54200,coverAspectRatio:.89},{id:"g2",title:"Vacation Cafe Simulator",genre:"Simulation",coverUrl:"/assets/games/vacation-cafe.png",rating:4.8,likes:28700,coverAspectRatio:2.125,featured:!0},{id:"g3",title:"Winter Burrow",genre:"Adventure",coverUrl:"/assets/games/winter-burrow.png",rating:4.9,likes:32400,coverAspectRatio:.89},{id:"g4",title:"Bubble Shooter",genre:"Arcade",coverUrl:"/assets/games/bubble-shooter.png",rating:4.7,likes:23600,coverAspectRatio:.32,showInfo:!1}],ne=[{rank:1,playerName:"Alex_Pro99",avatarInitials:"AP",avatarColor:"#F5B942",gamesPlayed:142,totalScore:94250,streakDays:12,favoriteGame:"Heartopia"},{rank:2,playerName:"CozyGamer_x",avatarInitials:"CG",avatarColor:"#8FDDB0",gamesPlayed:118,totalScore:81400,streakDays:8,favoriteGame:"Cat Mail Co."},{rank:3,playerName:"MatchMaster",avatarInitials:"MM",avatarColor:"#8FC6F0",gamesPlayed:98,totalScore:72110,streakDays:5,favoriteGame:"Tiny Glade"},{rank:4,playerName:"BubblePop",avatarInitials:"BP",avatarColor:"#F0A8DC",gamesPlayed:87,totalScore:65900,streakDays:3,favoriteGame:"Whisper of the House"},{rank:5,playerName:"SudokuGod",avatarInitials:"SG",avatarColor:"#C3B4F0",gamesPlayed:74,totalScore:59320,streakDays:2,favoriteGame:"Cat Chess"}];function T(t={}){const e=document.createElement("main");return e.id="main-content",e.append(oe(),re({title:"Featured Games",games:$,onGameClick:s=>{t.onGameSelect&&t.onGameSelect(s.id)}}),le({entries:ne}),se()),e}const N=[{id:"vacation-cafe",title:"Vacation Cafe Simulator",category:"Strategy",price:"Free",rating:4.8,likes:28700,description:"Cozy Italian Vacation Cafe 🍕 No timers, No stress 🤝 cook traditional dishes 🍝 upgrade and customize 🏪 relax and grow your dream cafe",coverUrl:"assets/games/Game-Screenshot.png"},{id:"winter-burrow",title:"Winter Burrow",category:"Farm",price:"Free",rating:4.9,likes:32400,description:"A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.",coverUrl:"assets/games/Game-Screenshot(1).png"},{id:"shelve-potions",title:"Shelve the Potions!",category:"Puzzle",price:"Free",rating:4.7,likes:21300,description:"Organize 2000+ potions on shelves after the witch’s cats have knocked them over, using clues around an enchanted cellar.",coverUrl:"assets/games/Game-Screenshot(2).png"},{id:"heartopia",title:"Heartopia",category:"Strategy",price:"$1.99",rating:4.6,likes:46800,description:"A multiplayer life simulation game crafted for creativity, freedom, and peace. Build your dream home, explore hobbies, and forge warm connections.",coverUrl:"assets/games/Game-Screenshot(3).png"},{id:"palia",title:"Palia",category:"Strategy",price:"Free",rating:4.8,likes:89500,description:"A free-to-play fantasy life sim adventure where you can craft, explore, and create the life and home of your dreams in a vibrant world.",coverUrl:"assets/games/Game-Screenshot(4).png"},{id:"cat-mail",title:"Cat Mail Co.",category:"Puzzle",price:"Free",rating:4.9,likes:38200,description:"Run a cozy cat post office. Sort and deliver parcels from the daily boat. At night, the moon reveals hidden truths about packages.",coverUrl:"assets/games/Game-Screenshot(5).png"}];function ce(t){return t>=1e3?`${(t/1e3).toFixed(1)}K`:String(t)}function de(t){if(!t)return"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80";if(t.startsWith("http")||t.startsWith("data:"))return t;const e=t.replace(/^\.?\//,"");return`${"/minigames/".endsWith("/")?"/minigames/":"/minigames//"}${e}`}function ue(t={}){const e=document.createElement("div");e.className="library";let s="All Games",o="rating";e.innerHTML=`
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
  `;const a=e.querySelector("#library-grid"),r=e.querySelectorAll(".library__filter-btn"),l=e.querySelector(".library__sort-select");function i(){let m=[...N];if(s!=="All Games"&&(m=m.filter(d=>(d.category||"Casual").toLowerCase()===s.toLowerCase())),m.sort((d,v)=>o==="rating"?v.rating-d.rating:o==="likes"?v.likes-d.likes:o==="name"?d.title.localeCompare(v.title):0),m.length===0){a.innerHTML='<p class="library__empty">No games found in this category.</p>';return}a.innerHTML=m.map(d=>{const v=de(d.coverUrl);return`
        <article class="library-card" data-id="${d.id}" style="cursor: pointer;">
          <div class="library-card__cover" style="background-image: url('${v}')"></div>
          <div class="library-card__body">
            <div class="library-card__header">
              <div class="library-card__title-group">
                <h3 class="library-card__title">${d.title}</h3>
                <span class="library-card__badge">${d.category||"Casual"}</span>
              </div>
              <span class="library-card__price">${d.price||"Free"}</span>
            </div>

            <p class="library-card__description">${d.description}</p>

            <div class="library-card__footer">
              <div class="library-card__meta">
                <span class="library-card__rating">★ ${d.rating.toFixed(1)}</span>
                <span class="library-card__likes">♡ ${ce(d.likes)}</span>
              </div>
              <button type="button" class="library-card__btn-details" data-id="${d.id}">Details</button>
            </div>
          </div>
        </article>
      `}).join(""),a.querySelectorAll(".library-card").forEach(d=>{d.addEventListener("click",()=>{const v=d.getAttribute("data-id");if(!v)return;const A=N.find(k=>k.id===v);if(A){const k=new I(A);document.body.appendChild(k.element),k.open()}t.onGameSelect&&t.onGameSelect(v)})})}r.forEach(m=>{m.addEventListener("click",()=>{r.forEach(_=>_.classList.remove("library__filter-btn--active")),m.classList.add("library__filter-btn--active"),s=m.getAttribute("data-category")||"All Games",i()})}),l.addEventListener("change",m=>{o=m.target.value,i()});const c=e.querySelectorAll(".library__page-btn"),n=c[0],u=c[c.length-1],p=Array.from(c).slice(1,-1);let b=1;const E=p.length;function C(){p.forEach((m,_)=>{_+1===b?m.classList.add("library__page-btn--active"):m.classList.remove("library__page-btn--active")}),n.disabled=b===1,u.disabled=b===E}return p.forEach((m,_)=>{m.addEventListener("click",()=>{b=_+1,C()})}),n.addEventListener("click",()=>{b>1&&(b--,C())}),u.addEventListener("click",()=>{b<E&&(b++,C())}),C(),i(),e}class me{constructor(){f(this,"routes",[]);f(this,"notFoundHandler",null)}register(e,s){return this.routes.push({path:e,handler:s}),this}notFound(e){return this.notFoundHandler=e,this}init(){window.addEventListener("hashchange",()=>this.resolve()),window.addEventListener("popstate",()=>this.resolve()),document.addEventListener("click",e=>{const o=e.target.closest("a");if(o&&o.origin===window.location.origin){const a=o.getAttribute("href");a&&!a.startsWith("http")&&(e.preventDefault(),this.navigate(a))}}),this.resolve()}navigate(e){e.startsWith("#")?window.location.hash=e:(window.history.pushState({},"",e),this.resolve())}resolve(){var o;let e=window.location.hash.replace("#","");e||(e=window.location.pathname),e.startsWith("/")||(e=`/${e}`);const s=this.routes.find(a=>a.path===e);if(s){s.handler();return}(o=this.notFoundHandler)==null||o.call(this)}}function H(t){const e=document.createElement("div");return e.className="placeholder-page",e.style.padding="4rem 2rem",e.style.textAlign="center",e.innerHTML=`
    <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">${t}</h1>
    <p style="color: #64748b;">This page is currently under construction.</p>
  `,e}function F(t){const e=$.find(o=>o.id===t)||$[0];new I(e).open()}function ge(){const t=document.getElementById("app");if(!t)throw new Error("Root #app element not found.");const e=new K,s=te({onAuthOpen:l=>e.open(l)}),o=J(),a=document.createElement("div");a.className="page-outlet",t.append(s,a,o,e.element);const r=new me;r.register("/",()=>{const l=T({onGameSelect:i=>F(i)});a.replaceChildren(l)}),r.register("/library",()=>{const l=ue({onGameSelect:i=>F(i)});a.replaceChildren(l)}),r.register("/tournaments",()=>{a.replaceChildren(H("Tournaments Page"))}),r.register("/community",()=>{a.replaceChildren(H("Community Page"))}),r.notFound(()=>{const l=T({onGameSelect:i=>F(i)});a.replaceChildren(l)}),r.init()}document.addEventListener("DOMContentLoaded",ge);
