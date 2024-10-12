import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSimillaryComponent } from './grid-simillary.component';

describe('GridSimillaryComponent', () => {
  let component: GridSimillaryComponent;
  let fixture: ComponentFixture<GridSimillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSimillaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSimillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
