import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { myAgeValidator, myAgeValidatorWithRange, emailCompare } from './custom-validators';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  private employeeForm: FormGroup;

  /*  
   private formBuilder: FormBuilder;
   constructor(formBuilder: FormBuilder) {
     this.formBuilder = formBuilder;
   } 
   */
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    //way-1: ( manual form-group construction )

    // this.employeeForm = new FormGroup({
    //   firstName: new FormControl(null),
    //   lastName: new FormControl(null)
    // });

    //way-2:  ( thru build , we can construct complex form-group )

    /*  
    this.employeeForm = this.formBuilder.group({
       firstName: '',
       lastName: '',
     }); 
     */
    // or
    /*  
     this.employeeForm = this.formBuilder.group({
       firstName: { value: 'Olam', disabled: false },
       lastName: { value: 'chennai', disabled: true },
     }); 
     */
    // or
    /*  
       this.employeeForm = this.formBuilder.group({
       firstName: [{ value: 'Olam', disabled: false }],
       lastName: [{ value: 'chennai', disabled: true }],
     }); 
     */
    // or
    this.employeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      age: [25, [Validators.required, myAgeValidatorWithRange(20, 30)]],
      emailGroup: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        cEmail: ['', [Validators.required, Validators.email]],
      }, { validator: emailCompare }),
      phone: [''],
      noti: ['email'],
    });


  }

  changeNoti(noti) {
    let phoneControl = this.employeeForm.get('phone');
    if (noti === 'sms') {
      phoneControl.setValidators([Validators.required, Validators.pattern(/\d{10}/)])
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  loadEmployee(e) {
    // fire req to server-side to load employee model
    let model = { firstName: 'Olam', lastName: 'channai' };
    // this.employeeForm.setValue(model);
    // or
    this.employeeForm.patchValue(model);
  }

  handleFormSubmit(e) {
    if (this.employeeForm.valid) {
      console.dir(this.employeeForm.value);
    } else {
      alert("invalid Form")
    }
  }

  resetForm(e) {
    this.employeeForm.reset();
  }

} 
