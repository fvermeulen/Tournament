import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Player } from './player/player';
import { PlayerService } from './service/player.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [PlayerService]
})
export class AppComponent {
  title = 'Tournament';
}
