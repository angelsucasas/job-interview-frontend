import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFiguresComponent } from './background-figures.component';

describe('BackgroundFiguresComponent', () => {
  let component: BackgroundFiguresComponent;
  let fixture: ComponentFixture<BackgroundFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundFiguresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
