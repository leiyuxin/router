import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buylist',
  templateUrl: './buylist.component.html',
  styleUrls: ['./buylist.component.css']
})
export class BuylistComponent implements OnInit {

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
  }

}
