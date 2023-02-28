import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdepComponent } from './editdep.component';

describe('EditdepComponent', () => {
  let component: EditdepComponent;
  let fixture: ComponentFixture<EditdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
