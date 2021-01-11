import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldurSectionComponent } from './saldur-section.component';

describe('SaldurSectionComponent', () => {
  let component: SaldurSectionComponent;
  let fixture: ComponentFixture<SaldurSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldurSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldurSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
