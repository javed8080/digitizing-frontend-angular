import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { COMPANYDB, CompanyDB } from 'src/app/shared/data/tables/company';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/NgbdSortableHeader';
import { TableService } from 'src/app/shared/services/table.service';


@Component({
  selector: 'app-quote-update',
  templateUrl: './quote-update.component.html',
  styleUrls: ['./quote-update.component.scss']
})
export class QuoteUpdateComponent {

  public selected = [];

  public tableItem$: Observable<CompanyDB[]>;
  public searchText;
  total$: Observable<number>;

  constructor(public service: TableService) {

    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
    this.service.setUserData(COMPANYDB)

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


  ngOnInit() {
    console.log("selected", this.tableItem$);
  }


}