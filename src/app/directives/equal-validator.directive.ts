import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {equalValidator} from '../validator/validators';

@Directive({
  selector: '[appEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: equalValidator,
      multi: true // 表示一个token下面可以挂多个值
    }
  ]
})
export class EqualValidatorDirective {

  constructor() { }

}
