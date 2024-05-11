import { Component } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';

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
