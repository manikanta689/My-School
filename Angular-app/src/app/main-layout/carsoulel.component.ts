import {Component, OnInit} from '@angular/core';
// import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './carousel-config.html'
  // providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig implements OnInit {
  images: Array<string>;

  // constructor(config: NgbCarouselConfig, private _http: HttpClient) {
  //   // customize default values of carousels used by this component tree
  //   config.interval = 10000;
  //   config.wrap = false;
  //   config.keyboard = false;
  // }
constructor(){
  
}
  ngOnInit() {
      this.images =  [
     'assets/img/slider/slide4.jpg',
     'assets/img/slider/slide5.jpg',
     'assets/img/slider/slide6.jpg'
  ];
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}