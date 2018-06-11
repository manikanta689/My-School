import { Component, OnInit, ViewChild, ElementRef,HostListener, Directive } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

@Directive({
  selector: '.menu-item'
})
export class HomeComponent implements OnInit {
  selectedItem : any = '';

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }

@HostListener('click', ['$event.target']) onClick(event) {
  this.selectedItem = event.textContent? event.textContent : event.parentElement.textContent;
}

}
