import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-counter';
}
