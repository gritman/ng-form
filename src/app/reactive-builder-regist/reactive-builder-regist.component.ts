import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileValidator} from '../validator/validators';

@Component({
  selector: 'app-reactive-builder-regist',
  templateUrl: './reactive-builder-regist.component.html',
  styleUrls: ['./reactive-builder-regist.component.css']
})
export class ReactiveBuilderRegistComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // 校验字段,某个字段的所有校验器都是true,才为true
    const isValid: boolean = this.formModel.get('username').valid;
    console.log('username的校验结果: ' + isValid);
    const errors: any = this.formModel.get('username').errors;
    console.log('username的错误信息: ' + JSON.stringify(errors));

    // 必须表单里所有校验器为true才true
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
