import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent {
  data!: Observable<number>;
  myArray: number[] = [];
  error!: boolean;
  finished!: boolean;

  fetchData() {
    this.data = new Observable(observer => {
      setTimeout(() => observer.next(10), 1000);
      setTimeout(() => observer.next(20), 2000);
      setTimeout(() => observer.next(30), 3000);
      setTimeout(() => observer.complete(), 5000);
    });

    
  }
}
