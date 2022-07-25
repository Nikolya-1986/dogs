import { ContentChild, Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[toolTipDirective]'
})
export class ToolTipDirective {

  constructor(
    private _render_2: Renderer2,
    private _elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
  ) { }

  @Input() parametr!: TemplateRef<any>;
  @ContentChild('toolTipTemplate') private _toolTipTemplateRef!: TemplateRef<Object>;

  @HostListener('mouseenter') onMouseEnter(): void {
    const view = this._viewContainerRef.createEmbeddedView(this._toolTipTemplateRef);
    view.rootNodes.forEach(node => {
      this._render_2.appendChild(this._elementRef.nativeElement, node);
    });
  };

  @HostListener('mouseleave') onMouseLeave(): void {
    if(this._viewContainerRef) {
      this._viewContainerRef.clear();
    }
  };

}
