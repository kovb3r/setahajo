import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseListComponent } from './cruise-list.component';

describe('CruiseListComponent', () => {
  let component: CruiseListComponent;
  let fixture: ComponentFixture<CruiseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CruiseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
