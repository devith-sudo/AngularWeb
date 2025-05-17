import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBlockComponent } from './header-block/header-block.component';
import { LeftBlockComponent } from './left-block/left-block.component';
import { RightBlockComponent } from './right-block/right-block.component';
import { ContentBlockComponent } from './content-block/content-block.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderBlockComponent,
    LeftBlockComponent,
    RightBlockComponent,
    ContentBlockComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UnderstandingCompenent';
  isLooggedIn = true;
  user_role = 'guest';
}
