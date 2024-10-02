import { Component, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { Observable, Subscription } from 'rxjs';
import { Quote } from 'src/app/shared/model/quote.model';
import { QuoteService } from 'src/app/shared/services/quote/quote.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/shared/services/loader.service';


@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteAddComponent {


  public files1: File[] = [];
  public files2: File[] = [];

  public type: string = "digitizing"

  public selected = [];
  data: Quote[];
  error: any;
  private subscription: Subscription;
  validationForm: FormGroup;

  constructor(public quoteService: QuoteService, private fb: FormBuilder , private loaderService: LoaderService) {

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

  // insert  quotes
  quotes(type: string) {

    this.loaderService.show(); // Show loader before making the request

    this.subscription = this.quoteService.insert(type).subscribe(
      (data: Quote[]) => {
        console.log('Data received:', data);
        this.data = data;

        this.loaderService.hide()
        // If needed, you can call additional methods or services here
      },
      (error) => {
        this.error = error;
        console.error('Error occurred:', error);
        this.loaderService.hide()
        // Handle error in the component as needed
      }
    );
  }


  selectType(event) {
    this.type = event.target.value;
  }


  submitForm(formData: any) {


    this.loaderService.show();
    this.quoteService.insert(formData).subscribe(
      // (data: Quote[]) => {
      (data: any) => {
        console.log('Data received:', data);
        this.data = data;

        this.loaderService.hide();

        // this.randomQuote = quote;
        // console.log('Received new quote:', quote);
        // If needed, you can call additional methods or services here
      },
      (error) => {
        this.error = error;
        console.error('Error occurred js:', error);
        this.loaderService.hide();
        // Handle error in the component as needed
      }
    );
    console.log('Form Data:', formData);
    // Here you can perform actions with the form data, e.g., send it to a service or API
  }


}