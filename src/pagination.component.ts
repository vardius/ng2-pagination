/**
 * This file is part of the ng2-pagination package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Component, Input, EventEmitter, Output, Optional} from '@angular/core';
import {Config} from "./config";

declare var _: any;

@Component({
    selector: 'vardius-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss']
})
export class PaginationComponent {
    @Input() limits: number[] = [];
    @Input() total: number = 0;
    @Input() limit: number = 1;
    @Input() page: number = 1;
    @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
    @Output() setLimit: EventEmitter<number> = new EventEmitter<number>();

    constructor(@Optional() config: Config) {
        if (config && this.limits.length === 0) {
            this.limits = config.limits;
        }
        if (this.limits.length === 0) {
            this.limits = [10, 50, 100];
        }
    }

    totalPages() {
        return Math.ceil(this.total / this.limit);
    }

    limitClicked(val: number) {
        this.limit = val;
        this.setLimit.next(val);
    }

    rangeStart() {
        let prev = this.page - 1;
        return prev < 1 ? 1 : prev;
    }

    rangeEnd() {
        let next = this.page + 1;
        return (next > this.totalPages() ? this.totalPages() : next) + 1;
    }

    pagesRange() {
        return _.range(this.rangeStart(), this.rangeEnd());
    }

    prevPage(allow: boolean) {
        if (allow) {
            return Math.max(1, this.page - 1);
        }
    }

    nextPage(allow: boolean) {
        if (allow) {
            return Math.min(this.page + 1, this.totalPages());
        }
    }

    pageClicked(page: number) {
        if (page && page !== this.page) {
            this.goTo.next(page);
        }
    }
}
