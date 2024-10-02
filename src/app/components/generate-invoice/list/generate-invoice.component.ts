import { Component, OnInit, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { Quote } from 'src/app/shared/model/quote.model';
import { QuoteService } from 'src/app/shared/services/quote/quote.service';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { TableColumn, SortType } from '@swimlane/ngx-datatable';
import { TableService } from 'src/app/shared/services/table.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/NgbdSortableHeader';


@Component({
  selector: 'generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit, OnDestroy {
  data: any;
  error: any;
  private subscription: Subscription;

  public tableItem$: Observable<Quote[]>;
  public searchText: string = '';
  total$: Observable<number>;

  public tableItem: Quote[];
  public total: number;

  SortType = SortType;

 

  public params : any = {name:'', page: 1, pageSize: 10, sort: 'name', order: 'desc' , limit:10 }
  private searchSubject: Subject<string> = new Subject<string>();


  public page = 1;
  public pageSize = 10;
  public sort = 'name';
  public order = 'asc';
  public limit = 10
  public type: string = "digitizing" 



  // Server-side sorting properties
  serverSort: boolean = false;
  serverSortBy: string = '';
  serverSortOrder: string = 'asc'; // or 'desc'
  public columns: any;

  constructor(public service: TableService, public quoteService: QuoteService) {

    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // this.getQuotes('digitizing');

    // Subscribe to the searchSubject for debouncing
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(searchText => {
        this.searchText = searchText;
        this.getQuotes(this.type);
      });
    this.loadColumns();
  }

  getQuotes(type: string) {


    const params = { ...this.params, name: this.searchText };
    this.subscription = this.quoteService
      .getAll(type, params)
      .subscribe(
        (res: any) => {
          
          const data  = res.data;
          this.tableItem = data.results;
          this.total = data.totalCount;
          // Update TableService with server-side data
          // this.service.setUserData(this.data);
        },
        (error) => {
          this.error = error;
          console.error('Error occurred:', error);
        }
      );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onPage(event: any) {
    const { offset, limit, sort } = event;
    this.getQuotes('digitizing');
  }

  updateFilter(value: any) {
    this.getQuotes('digitizing');
  }

  loadColumns() {
    this.columns = [
      { name: 'S.N', prop: '_id', cellClass: 'custom-cell', sortable: true },
      { name: 'Quote No', prop: 'orderNumber', cellClass: 'custom-cell', sortable: true },
      { name: 'Quote Name', prop: 'name', cellClass: 'custom-cell', sortable: true },
      { name: 'Received Date', prop: 'date', cellClass: 'custom-cell', sortable: true },
      { name: 'Released Dates', prop: 'sendDateTime', cellClass: 'custom-cell', sortable: true },
      { name: 'Price', prop: 'price', cellClass: 'custom-cell', sortable: true },
      { name: 'Convert To Order', prop: 'convert', cellClass: 'custom-cell', sortable: true }
      // { name: 'Quote Details', prop: 'quoteName', cellClass: 'custom-cell', sortable: false }
      // Add more columns as needed
    ];
  }


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;

  }

  public onSelect(selected) {
    this.service.deleteSingleData(selected);
  }


  selectType(event) {
    this.type = event.target.value;
    this.getQuotes(this.type);
  }

  search(){
    this.searchSubject.next(this.searchText);
  }



  // onSort(event: any) {
  //   console.log(event, 'eventevent');
  //   // Handle server-side sorting here
  //   // Update serverSortBy and serverSortOrder
  //   this.serverSortBy = event.sorts[0].prop;
  //   this.serverSortOrder = event.sorts[0].dir;
  //   this.serverSort = true;

  //   // Fetch data with server-side sorting
  //   this.getQuotes('digitizing');
  // }


}
