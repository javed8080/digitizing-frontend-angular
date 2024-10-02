import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


  myForm: FormGroup;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  loginCred() {
    console.log('Form submitted with data:', this.myForm.value);
    // Add your logic to handle the form data
  }

}
