import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingRoomComponent } from './gaming-room.component';

describe('GamingRoomComponent', () => {
  let component: GamingRoomComponent;
  let fixture: ComponentFixture<GamingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
