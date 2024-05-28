import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresPropiedadesComponent } from './mejores-propiedades.component';

describe('MejoresPropiedadesComponent', () => {
  let component: MejoresPropiedadesComponent;
  let fixture: ComponentFixture<MejoresPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MejoresPropiedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MejoresPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
