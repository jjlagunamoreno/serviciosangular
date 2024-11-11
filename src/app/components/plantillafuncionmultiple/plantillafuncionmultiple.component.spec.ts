import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFuncionMultipleComponent } from './plantillafuncionmultiple.component';

describe('PlantillaFuncionMultipleComponent', () => {
  let component: PlantillaFuncionMultipleComponent;
  let fixture: ComponentFixture<PlantillaFuncionMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaFuncionMultipleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
