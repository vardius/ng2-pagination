import {Component, Input, EventEmitter, Output} from '@angular/core';
declare var _: any;

@Component({
    selector: 'vardius-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss']
})
export class PaginationComponent {
    @Input() total: number = 0;
    @Input() limit: number = 1;
    @Input() page: number = 1;
    @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
    @Output() setLimit: EventEmitter<number> = new EventEmitter<number>();

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
