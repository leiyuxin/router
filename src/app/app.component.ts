import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  route_link = '';
  route_text = 'test';
  param = { test: 434, dsds: 43, id: 42};
  // tslint:disable-next-line:one-line
  constructor(private router: Router){

  }
  toStockDetail() {
    this.router.navigate(['/']);
  }
}
