import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-builder-regist',
  templateUrl: './reactive-builder-regist.component.html',
  styleUrls: ['./reactive-builder-regist.component.css']
})
export class ReactiveBuilderRegistComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: [''],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
