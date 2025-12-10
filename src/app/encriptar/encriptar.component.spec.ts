import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptarComponent } from './encriptar.component';

describe('EncriptarComponent', () => {
  let component: EncriptarComponent;
  let fixture: ComponentFixture<EncriptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncriptarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncriptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
