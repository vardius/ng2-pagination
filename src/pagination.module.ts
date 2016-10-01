import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from "./pagination.component";

@NgModule({
    imports: [CommonModule],
    declarations: [PaginationComponent],
    exports: [PaginationComponent]
})
export class PaginationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PaginationModule,
            providers: []
        };
    }
}
