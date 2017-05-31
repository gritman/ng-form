import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {



  // 代表整个表单,或者表单字段的固定的子集
  formModel: FormGroup = new FormGroup({
    // 模板式表单的ngModel指令会为input标签自动创建一个FormControl指令
    username: new FormControl('aaa'), // 参数是初始值
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    // 代表可以增长的字段集合,比如工作经历,获奖经历
    // 没有key只有序号
    emails: new FormArray([
      new FormControl('a@a.com'),
      new FormControl('b@b.com')
    ])
  });



  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
