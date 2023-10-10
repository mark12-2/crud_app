import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEditComponent } from './data-edit.component';

describe('DataEditComponent', () => {
  let component: DataEditComponent;
  let fixture: ComponentFixture<DataEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataEditComponent]
    });
    fixture = TestBed.createComponent(DataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
