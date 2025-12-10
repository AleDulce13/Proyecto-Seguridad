import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesencriptarComponent } from './desencriptar.component';

describe('DesencriptarComponent', () => {
  let component: DesencriptarComponent;
  let fixture: ComponentFixture<DesencriptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesencriptarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesencriptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
