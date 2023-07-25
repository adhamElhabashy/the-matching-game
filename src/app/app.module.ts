import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserOptsComponent } from './user-opts/user-opts.component';
import { GameCardComponent } from './game-card/game-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsService } from './services/icons.service';
@NgModule({
  declarations: [AppComponent, UserOptsComponent, GameCardComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [IconsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
