import { Component } from '@angular/core';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'matching-game';
  endingGameProp: boolean = false;
  constructor(private iconsServiceFromApp: IconsService) {}
  changeEndingProp(prop: boolean) {
    if (prop === true) {
      this.endingGameProp = prop;
      clearInterval(this.iconsServiceFromApp.minutesIntervale);
      clearInterval(this.iconsServiceFromApp.secondIntervale);
    }
  }
  resetTheGame() {
    this.iconsServiceFromApp.resetGame();
    this.endingGameProp = false;
  }
}
