import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SindaComponent } from './sinda.component';

describe('SindaComponent', () => {
  let component: SindaComponent;
  let fixture: ComponentFixture<SindaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SindaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
