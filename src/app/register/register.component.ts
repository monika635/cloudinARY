import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {



  categoryForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  })



  submit() {
    console.log(this.categoryForm.value);
  }



}
