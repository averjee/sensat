import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SensorProperties} from './models/model';
import data from './data/converted.json';

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
  } 

}

  

