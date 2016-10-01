import {TestBed, async} from '@angular/core/testing';
import {PaginationComponent} from './pagination.component';

describe('PaginationComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaginationComponent],
        }).compileComponents();
    }));

    it('should work', () => {
        let fixture = TestBed.createComponent(PaginationComponent);
        expect(fixture.componentInstance instanceof PaginationComponent).toBe(true, 'should create PaginationComponent');
    });
});
