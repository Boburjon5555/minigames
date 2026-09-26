import { createCarousel } from '@/components/Carousel/Carousel';
import { createDeveloperCta } from '@/components/DeveloperCta/DeveloperCta';
import { createHero } from '@/components/Hero/Hero';
import { createLeaderboard } from '@/components/Leaderboard/Leaderboard';
import type { Game } from '@/types/game';
import { featuredGames, leaderboard } from '@/utils/mock-data';

interface HomePageOptions {
  onGameSelect?: (gameId: string) => void;
}

export function createHomePage(options: HomePageOptions = {}): HTMLElement {
  const main = document.createElement('main');
  main.id = 'main-content';

  main.append(
    createHero(),
    createCarousel({
      title: 'Featured Games',
      games: featuredGames,
      onGameClick: (game: Game) => {
        if (options.onGameSelect) {
          options.onGameSelect(game.id);
        }
      },
    }),
    createLeaderboard({ entries: leaderboard }),
    createDeveloperCta(),
  );

  return main;
}
