import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private routes = [
    { title: 'الرئيسية', icon: 'add', route: '#home' },
    { title: 'خدماتنا', icon: 'add', route: '#services' },
    { title: 'شركاؤنا', icon: 'add', route: '#partners' },
    { title: 'اتصل بنا', icon: 'add', route: '#contact' }

  ];
  constructor() { }

  ngOnInit() {
  }

}
