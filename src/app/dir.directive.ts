import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDIr]'
})
export class DIrDirective implements OnChanges {
  constructor(private element: ElementRef<HTMLElement>) {
    element.nativeElement
  }
  @Input()
  public appDir: {[key: string]: string} = {};

public ngOnChanges(changes: SimpleChanges): void {
    for (let key in this.appDir) {
      this.element.nativeElement.setAttribute(key, this.appDir[key]);
    }
  }
}
