import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SensorProperties} from './models/model';
import data from './data/converted.json';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sensat Table';
  displayedColumns: string[] = ['id', 'box_id', 'sensor_type', 'name', 'range_l', 'range_u', 'longitude', 'latitude', 'reading', 'unit', 'reading_ts'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  chart = [];
  ELEMENT_DATA: SensorProperties[] = data;
  dataSource = new MatTableDataSource<SensorProperties>(this.ELEMENT_DATA);

  constructor(){ }

  ngOnInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    // let reading_ts = [];
    // let reading = [];
    // data.forEach(element => {
    //   reading_ts.push(element.reading_ts);
    //   reading.push(element.reading);
    // });

    // console.log(this.sort);
    
    // // console.log (reading_ts);
    // // console.log (reading);
    
    // this.chart = new Chart('canvas', {
    //     type: 'line',
    //     data: {
    //       labels: reading_ts,
    //       datasets: [
    //         {
    //           data: reading,
    //           borderColor: '#3cba9f',
    //           fill: false
    //         }
    //       ]
    //     },
    //     options: {
    //       legend: {
    //         display: false
    //       },
    //       scales: {
    //         xAxes: [{
    //           display: true
    //         }],
    //         yAxes: [{
    //           display: true
    //         }]
    //       }
    //   }
    // });
    
  } 

}

  

