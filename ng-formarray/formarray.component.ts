import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  eventForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.eventForm = this.fb.group({
      forms: this.fb.array([this.createForm()])
    })
  }
  
  ngOnInit() {
    
  }
  createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      imgName: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
addForm() {
 const timeline = this.createForm();
 const list = this.eventForm.get('forms') as FormArray;
 list.push(timeline);
}
onSubmit(){
  console.log(this.eventForm.value.forms)
}
 
}
