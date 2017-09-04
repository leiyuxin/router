import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stockId: any;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.stockId = this.routeInfo.queryParamMap['source']['_value'];
    console.log(this.stockId);
  }

}
