import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArrendatariosComponent } from './listar-arrendatarios.component';

describe('ListarArrendatariosComponent', () => {
  let component: ListarArrendatariosComponent;
  let fixture: ComponentFixture<ListarArrendatariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarArrendatariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarArrendatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
