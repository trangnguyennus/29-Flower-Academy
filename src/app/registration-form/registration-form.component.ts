import { Component } from '@angular/core';
import { User } from '../user';
import { MinLengthValidator } from '@angular/forms';
import {RegistrationService} from '../services/registration-services/registration.service'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  
  classes = [ 'Bridal Bouquet Arrangement',
              'Japanese Flower Arrangement',
              'Vase Floral Arrangement',
              'Western Flower Arrrangement'
            ];

  classesHasError = true;
  
  submitted = false;

  showMessage = false;

  userModel = new User('','', null ,'','','', null);
  
  constructor(private _registrationService: RegistrationService){}

  validateClasses(value){
    if(value === 'default'){
      this.classesHasError = true;
    }
    else {
      this.classesHasError = false;
    }
  }

  onSubmit(){
    console.log(this.userModel);
    this.submitted = true;
    this.showMessage = true;
    this._registrationService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }
}

