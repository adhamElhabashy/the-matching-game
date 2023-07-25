import { Injectable } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class IconsService {
  icons: any[] = [
    { mainIcon: faGear, tested: false, confirmed: false },
    { mainIcon: faTruckFast, tested: false, confirmed: false },
    { mainIcon: faCameraRetro, tested: false, confirmed: false },
    { mainIcon: faGift, tested: false, confirmed: false },
    { mainIcon: faLock, tested: false, confirmed: false },
    { mainIcon: faUmbrella, tested: false, confirmed: false },
    { mainIcon: faBook, tested: false, confirmed: false },
    { mainIcon: faPrint, tested: false, confirmed: false },
    { mainIcon: faGear, tested: false, confirmed: false },
    { mainIcon: faTruckFast, tested: false, confirmed: false },
    { mainIcon: faCameraRetro, tested: false, confirmed: false },
    { mainIcon: faGift, tested: false, confirmed: false },
    { mainIcon: faLock, tested: false, confirmed: false },
    { mainIcon: faUmbrella, tested: false, confirmed: false },
    { mainIcon: faBook, tested: false, confirmed: false },
    { mainIcon: faPrint, tested: false, confirmed: false },
  ];
  // these will be used properties in checking icons logic
  iconNames: string = '';
  elementId: string = '';
  // // // // // // // // //
  numberOfMoves: number = 0;
  numberOfStars: number = 3;
  minutes: number = 0;
  seconds: number = 0;
  minutesIntervale;
  secondIntervale;
  shuffleArr(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  // this function is used in "user-opts.component.ts"
  secondIntervaleFunc() {
    this.secondIntervale = setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }
  // this function is used in "user-opts.component.ts"
  minutesIntervaleFunc() {
    this.minutesIntervale = setInterval(() => {
      this.minutes += 1;
      this.seconds = 0;
    }, 60000);
  }
  resetChecking() {
    this.icons.forEach((icon) => {
      icon.confirmed = false;
      icon.tested = false;
    });
  }
  resetTimer() {
    clearInterval(this.minutesIntervale);
    clearInterval(this.secondIntervale);
    this.minutes = 0;
    this.seconds = 0;
  }
  resetTheCheckingProps() {
    this.iconNames = '';
    this.elementId = '';
  }
  // this function is used in "app.component.ts", "user-opts.component.ts"
  resetGame() {
    this.resetChecking();
    this.resetTheCheckingProps();
    this.resetTimer();
    this.numberOfMoves = 0;
    this.numberOfStars = 3;
    this.shuffleArr(this.icons);
  }
  /* function parameters:
    == the icon name of the clicked element,
    == the clicked element,
    == the id of the clicked element.
    the main logic: it will manipulate the properties that shows the icons by give them true
    or false depending on the conditions below
    main service properties:
    == iconNames: saves the clicked icon name and compare it with the next clicked icon name
    == elementId: saves the clicked element id and compare it with the next clicked element id
    this function is used in "game-card.component.ts"
   */
  checkIconName(iconName: string, element: HTMLElement, index: number) {
    if (this.minutes === 0 && this.seconds === 0) {
      this.seconds = 1;
      this.secondIntervaleFunc();
      this.minutesIntervaleFunc();
    }
    this.icons[index].tested = true;
    if (this.iconNames === '' && !this.icons[index].confirmed) {
      this.iconNames = iconName;
      this.elementId = element.id;
    } else if (this.iconNames !== iconName && !this.icons[index].confirmed) {
      this.resetTheCheckingProps();
      setTimeout(() => {
        let preEle = this.icons.filter((e) => e.tested == true);
        preEle.forEach((e) => (e.tested = false));
      }, 1000);
      this.numberOfMoves += 1;
      this.numberOfStars !== 0 ? --this.numberOfStars : this.numberOfStars;
    } else if (this.iconNames === iconName && element.id !== this.elementId) {
      this.resetTheCheckingProps();
      let preEle = this.icons.filter((e) => e.tested == true);
      preEle.forEach((e) => {
        e.tested = false;
        e.confirmed = true;
      });
      this.numberOfMoves += 1;
      this.numberOfStars !== 3 ? ++this.numberOfStars : this.numberOfStars;
    }
  }
  constructor() {}
}
