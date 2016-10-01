# Angular2 Pagination Module
## Installation
```bash
$ npm install ng2-vardius-pagination --save-dev
```
## Usage
**Pagination Component**
```typescrip
@Component({
    selector: 'my-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit, OnChanges {
    protected pageStream = new Subject<number>();
    protected items$: Observable<Item[]>;
    protected total$: Observable<number>;
    protected page: number = 1;
    protected limit: number = 10;
    
    constructor(private itemService: ItemService) {}

    ngOnInit() {    
        this.total$ = this.jobService.total$;
        
        const pageSource = this.pageStream.map(pageNumber => {
            this.page = pageNumber;
            return {page: pageNumber};
        });
        
        pageSource
            .startWith({page: this.page})
            .subscribe((params: {page: number}) => {
                let query = {page: params.page, limit: this.limit};
                this.itemService.loadAll(query);
                this.items$ = this.itemService.entities$;
            });
    }

    goToPage(page: number) {
        this.pageStream.next(page);
    }
    
    setLimit(limit: number) {
        this.limit = limit;
        this.pageStream.next(1);
    }
}
```
```html
<table class="table table-bordered table-responsive">
    <thead>
        <tr>
            <th>ID</th>
        </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of ( items$ | async ) ">
        <td>{{ item.id }}</td>
    </tr>
    </tbody>
</table>

<vardius-pagination [total]="total$ | async" [page]="page" [limit]="limit" (setLimit)="setLimit($event)" (goTo)="goToPage($event)" class="text-center"></my-pagination>
```
