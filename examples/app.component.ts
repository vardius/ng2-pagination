/**
 * This file is part of the ng2-pagination package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    total: number = 100;
    page: number = 1;
    limit: number = 10;

    setLimit(limit: number) {
        this.limit = limit;
    }

    goToPage(page: number) {
        this.page = page;
    }
}
