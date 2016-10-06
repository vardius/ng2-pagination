/**
 * This file is part of the ng2-pagination package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from "./pagination.component";
import {HighlightService} from "./services/highlight.service";
import {HighlightDirective} from "./directives/highlight.directive";
import {Config} from "./config";

@NgModule({
    imports: [CommonModule],
    declarations: [PaginationComponent, HighlightDirective],
    exports: [PaginationComponent]
})
export class PaginationModule {
    static forRoot(config: Config): ModuleWithProviders {
        return {
            ngModule: PaginationModule,
            providers: [
                HighlightService,
                {provide: Config, useValue: config }
            ]
        };
    }
}
