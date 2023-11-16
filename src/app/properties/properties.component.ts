import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ZillowService } from '../zillow.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit{
  constructor(private post: ZillowService){}
  title = 'ReactiveForms';
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      address: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      zipcode: new FormControl(null),
    });
  }

  onSubmit(){
    if (this.reactiveForm.valid) {
      // console.log(this.reactiveForm.value);
      this.post.savePostData(this.reactiveForm.value).subscribe((result)=>{
        console.log(result);
      });
      this.reactiveForm.reset();
    }
  }
}
