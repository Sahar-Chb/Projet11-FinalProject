import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedepComponent } from './createdep.component';

describe('CreatedepComponent', () => {
  let component: CreatedepComponent;
  let fixture: ComponentFixture<CreatedepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
