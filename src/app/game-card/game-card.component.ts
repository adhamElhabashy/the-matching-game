import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconsService } from '../services/icons.service';
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  icons: any[];

  constructor(private iconsServiceFromCard: IconsService) {}
  ngOnInit() {
    this.icons = this.iconsServiceFromCard.shuffleArr(
      this.iconsServiceFromCard.icons
    );
  }

  get theEndOfGame() {
    return this.icons.filter((e) => e.confirmed).length === this.icons.length;
  }
  @Output() endingEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  displayEvent() {
    this.endingEvent.emit(this.theEndOfGame);
  }
  // receive the arguments from the game-card view and pass it to checkIconName
  displayTheCheck(icon: string, ele: HTMLElement, index: number) {
    this.iconsServiceFromCard.checkIconName(icon, ele, index);
    this.displayEvent();
  }
}
