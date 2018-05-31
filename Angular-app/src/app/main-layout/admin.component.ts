import {Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'admin-root',
  templateUrl: './admin-component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit{
  public images: string[] = [
     'assets/img/slider/slide4.jpg',
     'assets/img/slider/slide5.jpg',
     'assets/img/slider/slide6.jpg'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
  ngOnInit() {
    
  }
  title = 'app';
}

