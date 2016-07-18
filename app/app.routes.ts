import { provideRouter, RouterConfig }  from '@angular/router';

import { CreateTournament } from './createTournament/createTournament.component';
import { Tournament } from './tournament/tournament.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/tournament',
    pathMatch: 'full'
  },
  {
    path: 'newTournament',
    component: CreateTournament
  },
  {
    path: 'tournament',
    component: Tournament
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
