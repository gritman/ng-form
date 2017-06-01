/**
 * Created by Edwin on 2017/6/1.
 */

import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

export function mobileValidator(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreg.test(control.value);
  console.log('mobile的校验结果是: ' + valid);
  return valid ? null : {mobile: true};
}

export function mobileAsyncValidator(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreg.test(control.value);
  console.log('mobile的校验结果是: ' + valid);
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = password.value === pconfirm.value;
  console.log('密码校验结果: ' + valid);
  return valid ? null : {equal: {desc: '两次密码不匹配'}};
}


