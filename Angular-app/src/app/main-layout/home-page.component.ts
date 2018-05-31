import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page-root',
  template: ' <router-outlet></router-outlet>',
  styleUrls: []
})
export class HomePageComponent implements OnInit{
  ngOnInit() {
  }
  title = 'app';
}
