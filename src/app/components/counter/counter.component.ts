import { Component } from '@angular/core';
import { DisplayService } from '../../services/display.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = 0;

  constructor(private displayService: DisplayService) { }

  increment() {
    this.count++;
    this.emitCountNumber();
  }

  reset() {
    this.count = 0;
    this.emitCountNumber();
  }

  private emitCountNumber() {
    this.displayService.emit(this.count);
  }
}
