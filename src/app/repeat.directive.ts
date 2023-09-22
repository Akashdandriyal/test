import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  exportAs: 'repeat,changeText'
})
export class RepeatDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  repeatElement(count: number) {
    for(let i = 0; i < count; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  changeText() {
    let elements = document.getElementsByTagName('p');
    for(let i = 0; i < elements.length; i++) {
      elements[i].innerText = 'Text changed';
    }
  }
}
