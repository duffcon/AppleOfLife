import { Component, OnInit } from '@angular/core';
import * as bodymovin from 'bodymovin';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css']
})
export class EComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var animation = bodymovin.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/datboi.json'
  });


  }

}
