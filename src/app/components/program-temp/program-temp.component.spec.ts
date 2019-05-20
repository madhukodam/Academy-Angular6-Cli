import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTempComponent } from './program-temp.component';

describe('ProgramTempComponent', () => {
  let component: ProgramTempComponent;
  let fixture: ComponentFixture<ProgramTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
