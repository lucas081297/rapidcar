import { AfterViewInit, Component, Directive, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { cars } from 'src/data/cars';

@Component({
  selector: 'app-carselect',
  templateUrl: './carselect.component.html',
  styleUrls: ['./carselect.component.css'],

})
export class CarselectComponent implements AfterViewInit {

  @ViewChild('swiper') swiper : any;

  cars = cars

  carClass = 1
  @Input() blur!:boolean

  toggleCarClass(carClass: number){
    this.carClass = carClass
    this.swiper.nativeElement.swiper.slideTo(0)
  }

  ngAfterViewInit(): void {
    const shadowRoot = this.swiper.nativeElement.shadowRoot;
    shadowRoot.querySelector('.swiper-button-next').style.color = '#5f3d21'
    shadowRoot.querySelector('.swiper-button-next').style.width = '15px'
    shadowRoot.querySelector('.swiper-button-next').style.right = '28%'
    shadowRoot.querySelector('.swiper-button-prev').style.color = '#5f3d21'
    shadowRoot.querySelector('.swiper-button-prev').style.width = '15px'
  }

}
