import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() slideData: string[];
  sliderCount: number = 0;
  public unsubscribe$ = new Subject();

  constructor(private elem: ElementRef,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(param => {
      this.sliderCount = 0
    })
  }

  ngOnInit(): void {
  }
  
  next(): void{
    this.sliderCount++;
    let items = this.elem.nativeElement.querySelectorAll('.slider__item');
    items.forEach(el => {
      el.style.transform = `translateX(-${this.sliderCount*100}%)`
    });
  }

  prev(): void{
    this.sliderCount--;
    let items = this.elem.nativeElement.querySelectorAll('.slider__item');
    items.forEach(el => {
      el.style.transform = `translateX(-${this.sliderCount*100}%)`
    });
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
