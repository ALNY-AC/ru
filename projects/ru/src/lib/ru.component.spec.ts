import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuComponent } from './ru.component';

describe('RuComponent', () => {
  let component: RuComponent;
  let fixture: ComponentFixture<RuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
