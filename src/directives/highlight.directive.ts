/**
 * This file is part of the angular2-pagination package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { Directive, ElementRef, Renderer } from '@angular/core';
import {HighlightService} from "../services/highlight.service";

@Directive({ selector: '[pagHighlight], input' })
export class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef, highlightService: HighlightService) {
        renderer.setElementStyle(el.nativeElement, highlightService.styleName, highlightService.styleValue);
    }
}
