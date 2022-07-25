import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[stopPropagationDirective]'
})
export class StopPropagationDirective implements AfterViewInit {

  constructor(
    private _elementRef: ElementRef,
  ) { }

  public ngAfterViewInit(): void {
    fromEvent<MouseEvent>(this._elementRef.nativeElement, 'click', { capture: false })
    .subscribe(event => {
      console.log('catched');
      event.stopPropagation();
    })
  };

}
