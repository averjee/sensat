import { Component, OnInit } from '@angular/core';
import data from '../data/converted.json';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  chart = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {    

    let reading_ts = [];
    let reading = [];
    data.forEach(element => {
      reading_ts.push(element.reading_ts);
      reading.push(element.reading);
    });

    
    setTimeout(() => {
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: reading_ts,
          datasets: [
            {
              data: reading,
              borderColor: '#3c53ba',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
      }
    });
  });  
}
}
