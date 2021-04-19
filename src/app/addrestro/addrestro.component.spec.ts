import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrestroComponent } from './addrestro.component';

describe('AddrestroComponent', () => {
  let component: AddrestroComponent;
  let fixture: ComponentFixture<AddrestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
