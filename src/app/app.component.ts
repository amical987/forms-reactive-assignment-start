import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenProjectNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    return null;
  }
}
