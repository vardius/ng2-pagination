/**
 * This file is part of the angular2-pagination package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {PaginationModule} from "ng2-vardius-pagination";

@NgModule({
    imports: [
        BrowserModule,
        PaginationModule.forRoot({styleName: 'backgroundColor', styleValue: 'powderblue'})
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
