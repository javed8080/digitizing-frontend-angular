import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Observable, Subscription } from 'rxjs';
import { COMPANYDB, CompanyDB } from 'src/app/shared/data/tables/company';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/NgbdSortableHeader';
import { Orders } from 'src/app/shared/model/order.model';
import { TableService } from 'src/app/shared/services/table.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent {


  public files1: File[] = [];
  public files2: File[] = [];

  public type: string = "digitizing"

  public selected = [];
  data: Orders[];
  error: any;
  private subscription: Subscription;
  validationForm: FormGroup;

  constructor(public orderService: OrderService, private fb: FormBuilder) {

  }

  ngOnInit() {
    // this.validationForm = this.fb.group({
    //   firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
    //   lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
    //   username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   zip: ['', Validators.required]
    // })
  }


  onSelect1(event) {
    if (this.files1.length >= 1) {
      alert("No more files please!")
    } else {
      this.files1.push(...event.addedFiles);
    }
  }

  onRemove1(event: File) {
    this.files1.splice(this.files1.indexOf(event), 1);
  }

  onSelect2(event: NgxDropzoneChangeEvent) {
    this.files2.push(...event.addedFiles);
  }

  onRemove2(event: File) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }

  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config2: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public config3: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    acceptedFiles: '.pdf'
  };


  public onUploadInit(args: any): void { }

  public onUploadError(args: any): void { }

  public onUploadSuccess(args: any): void { }

  // insert  orders
  orders(type: string) {
    this.subscription = this.orderService.insert(type).subscribe(
      (data: Orders[]) => {
        console.log('Data received:', data);
        this.data = data;
        // If needed, you can call additional methods or services here
      },
      (error) => {
        this.error = error;
        console.error('Error occurred:', error);
        // Handle error in the component as needed
      }
    );
  }


  selectType(event) {
    this.type = event.target.value;
  }


}