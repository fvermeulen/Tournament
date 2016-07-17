import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'Tournament';
  playerName = '';
  playerList: string[] = [];

  addPlayer() {
    if (this.playerName.trim()) {
      this.playerList.push(this.playerName.trim());
      this.playerName = '';
    }
  }
}
