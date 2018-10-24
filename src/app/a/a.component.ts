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

    var heartValues= [
      [
        { id:"#heart", d:"M257.93,367s-77.15-66.69-99.85-91.91c-10.21-11.35-19.29-29.5-19.29-61.28,0-37.44,28.37-66.27,59-65.81,38,.57,58.44,31.21,60.14,36.31,2.84-5.1,21-35.74,59-35.17,55.64.83,61.27,53.33,61.27,65.81s-2.74,38-17,54.46C346.44,286.44,257.93,367,257.93,367Z"}
      ]
      ];
      
      var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

      heartValues.forEach(function(path){
      path.forEach(function(frame, index){
      timeline
      .add({
      targets:frame.id,
        d: {
          value: frame.d,
          duration: 789,
          easing: 'easeInOutQuad'
        },
          offset: 0 + (789 * index),
        });
        })
      });

      var avals= [
        [
          { id:"#a", d:"M49.5,140.5s-34-57,109-89c229.68-51.4,163.86-42.11,251,3,85,44-8.79,255,5,350,9,62-307,71-350,5C-27.68,268,68.5,259.5,49.5,140.5Z"},
          { id:"#a", d:"M49.5,140.5s-40-105,109-89c234,25.13,155.54-19.73,251,3,147,35-65.23,240.76,5,350,36,56-222,75-299,34C-33.55,359.13,68.5,259.5,49.5,140.5Z"},
          { id:"#a", d:"M49.5,140.5s.35-192.21,109-89c140,133,155.54-19.73,251,3,147,35-159,290,5,350,62.52,22.87-247,114-237,63C210,301.79,68.5,259.5,49.5,140.5Z"}
        ]
        ];


        var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

        avals.forEach(function(path){
        path.forEach(function(frame, index){
        timeline
        .add({
        targets:frame.id,
          d: {
            value: frame.d,
            duration: 789,
            easing: 'easeInOutQuad'
          },
            offset: 0 + (789 * index),
          });
          })
        });



      var bvals= [
        [
          { id:"#b", d:"M365.5,44.5c51.94-68.56,129.72,228.93,56,298-111,104-95,17-92,108,3.09,93.69-285-184-266-227,25.72-58.21-47-155,12-171C238.48,8.3,290.5,143.5,365.5,44.5Z"}
        ]
        ];


        var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

        bvals.forEach(function(path){
        path.forEach(function(frame, index){
        timeline
        .add({
        targets:frame.id,
          d: {
            value: frame.d,
            duration: 789,
           // easing: 'easeInOutQuad'
          },
            offset: 0 + (789 * index),
          });
          })
        });
        



        var timeLineValues= [
          [
            { id:"#path0", d:"M231,329c17.51-23.11,208-57,188.92-2.29C396.1,395,387.46,459.39,355,453c-66-13-21-67-52-75-20.78-5.36-65,45.26-67,22C231.07,343.28,205.71,362.38,231,329Z"}
          ],
          [
            { id:"#path1", d:"M124,80c17.51-23.11,43.88-49,71-12,55,75-37,71-69,100-23.42,21.22-73,9-63-22,6.59-20.42,2-43.74,0-67C58.07,22.28,98.71,113.38,124,80Z"}
          ]
          ];

          


          var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

timeLineValues.forEach(function(path){
path.forEach(function(frame, index){
timeline
.add({
targets:frame.id,
	d: {
		value: frame.d,
		duration: 789,
		easing: 'linear'
	},
		offset: 1000 + (789 * index),
	});
	})
});
        

  }

}
