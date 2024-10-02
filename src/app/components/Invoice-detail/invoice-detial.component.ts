import { Component,ViewEncapsulation} from "@angular/core";
declare var require
const Swal = require('sweetalert2')

@Component({
  selector: "app-invoice-detial",
  templateUrl: "./invoice-detial.component.html",
  styleUrl: "./invoice-detial.component.scss",
  encapsulation: ViewEncapsulation.None
})
export class InvoiceDetialComponent {
  public active = 1;
  selectedOption: any = "0";

  // Basic Alert
  basicAlert() {
    Swal.fire({
      title: 'Are you sure?',
      // text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Generate it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Sent!',
          'Thanks For Generating Invoice <br>Invoice has been sent to your email.',
          'success'
        )
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    })
  }
  // A warning message, with a function attached to the "Confirm"-button...
  withConfirmation() {
    
  }
}

