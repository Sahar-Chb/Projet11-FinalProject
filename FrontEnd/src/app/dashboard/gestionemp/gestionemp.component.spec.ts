import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionempComponent } from './gestionemp.component';

describe('GestionempComponent', () => {
  let component: GestionempComponent;
  let fixture: ComponentFixture<GestionempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
