import { Component } from '@angular/core';
import { NgForm ,FormArray,FormGroup,FormControl,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-forms';
  year:String=""
  feed: any
  branch:any
  email:any
  name:any
  ngOnInit(): void { }
  onSubmit(form:NgForm){

   console.log(form.value);
    alert("Submission Successfull;")
    
  }
}
