import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDesctopComponent } from './base-desctop.component';

describe('BaseDesctopComponent', () => {
  let component: BaseDesctopComponent;
  let fixture: ComponentFixture<BaseDesctopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDesctopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDesctopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
