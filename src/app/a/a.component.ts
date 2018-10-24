import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var morphing = anime({
        targets: '.polymorph',
        points: [
          { value: "327.67 49.37 127.67 49.37 27.67 222.58 127.67 395.78 327.67 395.78 427.67 222.58 327.67 49.37" },
          { value: "248 2.91 18 66.24 0 282.24 180 324.24 301.58 439.19 466 165.58 248 2.91"},
          { value: "400 49.37 139.73 0 85.33 222.58 124.67 428.91 382.67 368.91 366.67 214.91 400 49.37" },
          { value: "327.67 49.37 127.67 49.37 27.67 222.58 127.67 395.78 327.67 395.78 427.67 222.58 327.67 49.37" }
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true
      });
  }

}
