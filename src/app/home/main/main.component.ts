import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private lat: number = 51.678418;
  private lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
