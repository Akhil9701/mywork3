import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,
        FormsModule,
        FormGroup,
        FormBuilder,
        FormControl,
        Validators
  
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  languages:string[]=['English','Telugu','French','Hindi','Spanish'];
  myform:FormGroup;

  ngOnInit(){
   this.myform= new FormGroup({
     name:new FormControl({
       firstName:new FormControl(),
       lastName:new FormControl()
     }),
     email:new FormControl(),
     password:new FormControl(),
     languages:new FormControl()

   })
  }
}
