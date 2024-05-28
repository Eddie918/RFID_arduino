import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArrendadoresComponent } from './listar-arrendadores.component';

describe('ListarArrendadoresComponent', () => {
  let component: ListarArrendadoresComponent;
  let fixture: ComponentFixture<ListarArrendadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarArrendadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarArrendadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
