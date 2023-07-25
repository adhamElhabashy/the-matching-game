import { Component, DoCheck } from '@angular/core';
import { IconsService } from '../services/icons.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-opts',
  templateUrl: './user-opts.component.html',
  styleUrls: ['./user-opts.component.scss'],
})
export class UserOptsComponent implements DoCheck {
  numberOfMoves: number = 8;
  numberOfStars: any = [];
  star = faStar;
  minutes: number = 0;
  seconds: number = 0;
  constructor(private iconServiceFromOpt: IconsService) {}

  ngDoCheck(): void {
    if (this.numberOfMoves !== this.iconServiceFromOpt.numberOfMoves) {
      this.numberOfMoves = this.iconServiceFromOpt.numberOfMoves;
    }
    if (this.numberOfStars.length !== this.iconServiceFromOpt.numberOfStars) {
      this.numberOfStars.length = this.iconServiceFromOpt.numberOfStars;
      this.numberOfStars.fill(this.star);
    }
    if (
      this.minutes !== this.iconServiceFromOpt.minutes ||
      this.seconds !== this.iconServiceFromOpt.seconds
    ) {
      this.minutes = this.iconServiceFromOpt.minutes;
      this.seconds = this.iconServiceFromOpt.seconds;
    }
  }
  resetTheGame(): void {
    this.iconServiceFromOpt.resetGame();
  }
}
