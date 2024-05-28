import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPropiedadesComponent } from './listar-propiedades.component';

describe('ListarPropiedadesComponent', () => {
  let component: ListarPropiedadesComponent;
  let fixture: ComponentFixture<ListarPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPropiedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
