import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
      mobile: ['', this.mobileValidator],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      }, {validator: this.equalValidator})
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
    console.log(this.formModel.value);
  }

  mobileValidator(control: FormControl): any {
    const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const valid = myreg.test(control.value);
    console.log('mobile的校验结果是: ' + valid);
    return valid ? null : {mobile: true};
  }

  equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const pconfirm: FormControl = group.get('pconfirm') as FormControl;
    const valid: boolean = password.value === pconfirm.value;
    console.log('密码校验结果: ' + valid);
    return valid ? null : {equal: true};
  }
}
