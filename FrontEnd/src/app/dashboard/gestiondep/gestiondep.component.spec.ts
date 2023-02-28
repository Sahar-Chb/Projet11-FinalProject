import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondepComponent } from './gestiondep.component';

describe('GestiondepComponent', () => {
  let component: GestiondepComponent;
  let fixture: ComponentFixture<GestiondepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestiondepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
