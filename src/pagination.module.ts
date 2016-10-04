import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from "./pagination.component";
import {HighlightService, HighlightServiceConfig} from "./highlight.service";
import {HighlightDirective} from "./highlight.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [PaginationComponent, HighlightDirective],
    exports: [PaginationComponent]
})
export class PaginationModule {
    static forRoot(config: HighlightServiceConfig): ModuleWithProviders {
        return {
            ngModule: PaginationModule,
            providers: [
                HighlightService,
                {provide: HighlightServiceConfig, useValue: config }
            ]
        };
    }
}
