import { Directive, ElementRef, Renderer } from '@angular/core';
import {HighlightService} from "./highlight.service";

@Directive({ selector: '[pagHighlight], input' })
export class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef, highlightService: HighlightService) {
        renderer.setElementStyle(el.nativeElement, highlightService.styleName, highlightService.styleValue);
    }
}
