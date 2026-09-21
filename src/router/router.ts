export type RouteHandler = () => void;

interface Route {
  path: string;
  handler: RouteHandler;
}

export class Router {
  private routes: Route[] = [];
  private notFoundHandler: RouteHandler | null = null;

  public register(path: string, handler: RouteHandler): this {
    this.routes.push({ path, handler });
    return this;
  }

  public notFound(handler: RouteHandler): this {
    this.notFoundHandler = handler;
    return this;
  }

  public init(): void {
    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('popstate', () => this.resolve());

    // Link (<a>) bosilganda sahifa refresh bo'lishini oldini olish
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.origin === window.location.origin) {
        const href = anchor.getAttribute('href');
        if (href && !href.startsWith('http')) {
          e.preventDefault();
          this.navigate(href);
        }
      }
    });

    this.resolve();
  }

  public navigate(path: string): void {
    if (path.startsWith('#')) {
      window.location.hash = path;
    } else {
      window.history.pushState({}, '', path);
      this.resolve();
    }
  }

  private resolve(): void {
    let currentPath = window.location.hash.replace('#', '');
    if (!currentPath) {
      currentPath = window.location.pathname;
    }

    if (!currentPath.startsWith('/')) {
      currentPath = `/${currentPath}`;
    }

    const match = this.routes.find((route) => route.path === currentPath);

    if (match) {
      match.handler();
      return;
    }

    this.notFoundHandler?.();
  }
}
