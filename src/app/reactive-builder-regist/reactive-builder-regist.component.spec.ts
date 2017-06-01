import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBuilderRegistComponent } from './reactive-builder-regist.component';

describe('ReactiveBuilderRegistComponent', () => {
  let component: ReactiveBuilderRegistComponent;
  let fixture: ComponentFixture<ReactiveBuilderRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveBuilderRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveBuilderRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
