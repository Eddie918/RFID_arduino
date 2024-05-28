import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArrendatarioComponent } from './crear-arrendatario.component';

describe('CrearArrendatarioComponent', () => {
  let component: CrearArrendatarioComponent;
  let fixture: ComponentFixture<CrearArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
