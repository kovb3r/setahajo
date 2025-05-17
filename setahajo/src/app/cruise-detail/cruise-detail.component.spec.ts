import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseDetailComponent } from './cruise-detail.component';

describe('CruiseDetailComponent', () => {
  let component: CruiseDetailComponent;
  let fixture: ComponentFixture<CruiseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CruiseDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
