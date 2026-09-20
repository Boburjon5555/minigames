import './Leaderboard.scss';
import type { LeaderboardEntry } from '@/types/game';

export interface LeaderboardOptions {
  entries: LeaderboardEntry[];
}

function createRow(entry: LeaderboardEntry): string {
  return `
    <tr>
      <td class="leaderboard__rank${entry.rank === 1 ? ' leaderboard__rank--top' : ''}">#${entry.rank}</td>
      <td>
        <div class="leaderboard__player">
          <span class="leaderboard__avatar" style="background-color: ${entry.avatarColor}">
            ${entry.avatarInitials}
          </span>
          <span class="leaderboard__player-name">${entry.playerName}</span>
        </div>
      </td>
      <td>${entry.gamesPlayed}</td>
      <td class="leaderboard__score">${entry.totalScore.toLocaleString('en-US')}</td>
      <td>
        <span class="leaderboard__streak">🔥 ${entry.streakDays} days</span>
      </td>
      <td>
        <span class="leaderboard__game-pill">${entry.favoriteGame}</span>
      </td>
    </tr>
  `;
}

export function createLeaderboard({ entries }: LeaderboardOptions): HTMLElement {
  const section = document.createElement('section');
  section.className = 'leaderboard';
  section.setAttribute('aria-label', 'Leaderboard');
  section.innerHTML = `
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
            ${entries.map(createRow).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  return section;
}
