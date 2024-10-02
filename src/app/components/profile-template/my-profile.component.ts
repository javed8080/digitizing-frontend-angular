import { Component } from "@angular/core";
declare var require;
const Swal = require("sweetalert2");

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrl: "./my-profile.component.scss",
})
export class MyProfileComponent {
  // Basic Alert
  basicAlert() {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Updated!",
          "Your Profile is successfully updated.",
          "success"
        );
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      }
    });
  }
  // A warning message, with a function attached to the "Confirm"-button...
  withConfirmation() {}
}
