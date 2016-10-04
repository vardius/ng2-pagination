import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {PaginationComponent} from './pagination.component';
import {By} from "@angular/platform-browser";
import {Component} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";
import {HighlightService} from "./highlight.service";

@Component({
    template: `<vardius-pagination [total]="total" [page]="page" [limit]="limit" (setLimit)="setLimit($event)" (goTo)="goToPage($event)" class="text-center"></vardius-pagination>`
})
class TestHostComponent {
    total:number = 100;
    page :number= 1;
    limit:number = 10;
    setLimit(limit: number) { this.limit = limit; }
    goToPage(page: number) { this.page = page; }
}

describe('PaginationComponent', () => {
    let fixture:ComponentFixture<TestHostComponent>;
    let testHost:TestHostComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, PaginationComponent, HighlightDirective],
            providers: [HighlightService]
        });
    }));

    beforeEach(() => {
        fixture  = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display page', () => {
        let currentPage   = fixture.debugElement.query(By.css('.hero'));
        expect(currentPage.nativeElement.textContent).toContain(testHost.page);
    });

    it('should raise goTo event when clicked', () => {
        let lastPage  = fixture.debugElement.query(By.css('.last'));
        lastPage.triggerEventHandler('click', null);
        expect(testHost.page).toBe(lastPage.nativeElement.textContent);
    });

    it('should raise setLimit event when clicked', () => {
        let limit  = fixture.debugElement.query(By.css('.pagination li:first'));
        limit.triggerEventHandler('click', null);
        expect(testHost.limit).toBe(limit.nativeElement.textContent);
    });
});
