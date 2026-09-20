import './AuthDialog.scss';
import type { AuthMode } from '@/types/game';

const LOGIN_FORM_HTML = `
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
`;

const REGISTER_FORM_HTML = `
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
`;

export class AuthDialog {
  private backdrop: HTMLDivElement;
  private dialog: HTMLDivElement;
  private mode: AuthMode = 'login';
  private lastFocusedElement: HTMLElement | null = null;

  constructor() {
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'auth-backdrop';

    this.dialog = document.createElement('div');
    this.dialog.className = 'auth-dialog';
    this.dialog.setAttribute('role', 'dialog');
    this.dialog.setAttribute('aria-modal', 'true');
    this.dialog.setAttribute('aria-labelledby', 'auth-dialog-title');

    this.backdrop.appendChild(this.dialog);
    this.renderDialogShell();
    this.attachGlobalListeners();
  }

  public get element(): HTMLElement {
    return this.backdrop;
  }

  public open(mode: AuthMode = 'login'): void {
    this.mode = mode;
    this.lastFocusedElement = document.activeElement as HTMLElement | null;
    this.renderForm();
    this.backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => this.focusFirstField());
  }

  public close(): void {
    this.backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    this.lastFocusedElement?.focus();
  }

  private renderDialogShell(): void {
    this.dialog.innerHTML = `
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
    `;

    this.dialog.querySelector('.auth-dialog__close')?.addEventListener('click', () => this.close());

    this.dialog.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextMode = btn.dataset.mode as AuthMode;
        this.mode = nextMode;
        this.renderForm();
        this.focusFirstField();
      });
    });
  }

  private renderForm(): void {
    const isLogin = this.mode === 'login';

    this.dialog.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((btn) => {
      const active = btn.dataset.mode === this.mode;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    const title = this.dialog.querySelector<HTMLElement>('#auth-dialog-title');
    const subtitle = this.dialog.querySelector<HTMLElement>('[data-role="subtitle"]');
    const formSlot = this.dialog.querySelector<HTMLElement>('[data-role="form-slot"]');
    const footerNote = this.dialog.querySelector<HTMLElement>('[data-role="footer-note"]');

    if (title) title.textContent = isLogin ? 'Welcome Back!' : 'Create Account';
    if (subtitle) {
      subtitle.textContent = isLogin
        ? 'Sign in to resume your games and progress.'
        : 'Join MiniGames to track your score & streak.';
    }
    if (formSlot) formSlot.innerHTML = isLogin ? LOGIN_FORM_HTML : REGISTER_FORM_HTML;
    if (footerNote) {
      footerNote.innerHTML = isLogin
        ? `Don't have an account? <button type="button" class="auth-dialog__link-btn" data-switch="register">Register</button>`
        : `Already have an account? <button type="button" class="auth-dialog__link-btn" data-switch="login">Login</button>`;
    }

    footerNote?.querySelector('[data-switch]')?.addEventListener('click', (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      this.mode = target.dataset.switch as AuthMode;
      this.renderForm();
      this.focusFirstField();
    });

    // Toggle Password View Logic
    this.dialog.querySelectorAll<HTMLButtonElement>('[data-toggle-pwd]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const inputId = btn.dataset.togglePwd;
        if (!inputId) return;
        const input = this.dialog.querySelector<HTMLInputElement>(`#${inputId}`);
        if (input) {
          input.type = input.type === 'password' ? 'text' : 'password';
        }
      });
    });

    const form = formSlot?.querySelector<HTMLFormElement>('form');
    form?.addEventListener('submit', (event) => this.handleSubmit(event, form));
  }

  private handleSubmit(event: SubmitEvent, form: HTMLFormElement): void {
    event.preventDefault();
    let isValid = true;

    form.querySelectorAll<HTMLInputElement>('input').forEach((input) => {
      const errorEl = form.querySelector<HTMLElement>(`[data-error-for="${input.id}"]`);
      let message = '';

      if (input.validity.valueMissing) {
        message = 'This field is required.';
      } else if (input.validity.typeMismatch) {
        message = 'Please enter a valid email address.';
      } else if (input.validity.tooShort) {
        message = `Must be at least ${input.minLength} characters.`;
      }

      const confirmInput = form.querySelector<HTMLInputElement>('#register-password');
      if (input.id === 'register-confirm-password' && confirmInput && !message) {
        if (input.value !== confirmInput.value) {
          message = 'Passwords do not match.';
        }
      }

      input.setAttribute('aria-invalid', String(Boolean(message)));
      if (errorEl) errorEl.textContent = message;
      if (message) isValid = false;
    });

    if (!isValid) return;

    this.close();
  }

  private focusFirstField(): void {
    this.dialog.querySelector<HTMLInputElement>('input')?.focus();
  }

  private attachGlobalListeners(): void {
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
