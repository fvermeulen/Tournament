import { provideRouter, RouterConfig }  from '@angular/router';

import { CreateTournament } from './createTournament/createTournament.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/tournament',
    pathMatch: 'full'
  },
  {
    path: 'newTournament',
    component: CreateTournament
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
