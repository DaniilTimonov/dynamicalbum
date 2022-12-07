import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedcardComponent } from './openedcard.component';

describe('OpenedcardComponent', () => {
  let component: OpenedcardComponent;
  let fixture: ComponentFixture<OpenedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenedcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
