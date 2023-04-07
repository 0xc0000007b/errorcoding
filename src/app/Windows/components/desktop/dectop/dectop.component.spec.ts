import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DectopComponent } from './dectop.component';

describe('DectopComponent', () => {
  let component: DectopComponent;
  let fixture: ComponentFixture<DectopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DectopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DectopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
