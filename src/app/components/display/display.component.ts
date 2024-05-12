import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../../services/display.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {
  count: number = 0;

  constructor(private displayService: DisplayService) {}

  ngOnInit(): void {
    this.displayService.subscriber$.subscribe(data => {
      this.count = data;
    });
  }
}
