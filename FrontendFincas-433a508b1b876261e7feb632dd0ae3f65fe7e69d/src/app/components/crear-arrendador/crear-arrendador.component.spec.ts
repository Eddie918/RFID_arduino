import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArrendadorComponent } from './crear-arrendador.component';

describe('CrearArrendadorComponent', () => {
  let component: CrearArrendadorComponent;
  let fixture: ComponentFixture<CrearArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
