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

      
    var timeLineValues= [
      [
        { id:"#polygon0", points:"88.74 151.49 1.74 1.49 175.74 1.49 88.74 151.49"}
      ],
      [
        { id:"#polygon1", points:"262.74 151.99 175.74 1.99 349.74 1.99 262.74 151.99"}
      ],
      [
        { id:"#polygon2", points:"175.74 1.99 262.74 151.99 88.74 151.99 175.74 1.99"}
      ],
      [
        { id:"#polygon3", points:"175.74 301.99 88.74 151.99 262.74 151.99 175.74 301.99"}
      ]
      ];
      
      
      var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

      timeLineValues.forEach(function(polygon, index2){
      polygon.forEach(function(frame, index){
      timeline
      .add({
      targets:frame.id,
        points: {
          value: frame.points,
          duration: 1000,
          easing: 'easeInOutSine'
        },
          offset: 0 + (75 * index2),
        });
        })
      });

  }

}
