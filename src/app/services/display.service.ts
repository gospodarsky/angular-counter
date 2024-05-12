import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DisplayService {
  // Observable number source
  private observer = new Subject<number>();
  // Observable number stream
  public subscriber$ = this.observer.asObservable();

  emit(data: number) {
    this.observer.next(data);
  }
}
