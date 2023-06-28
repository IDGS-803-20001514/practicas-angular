import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResitenciasComponent } from './resitencias.component';

describe('ResitenciasComponent', () => {
  let component: ResitenciasComponent;
  let fixture: ComponentFixture<ResitenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResitenciasComponent]
    });
    fixture = TestBed.createComponent(ResitenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
