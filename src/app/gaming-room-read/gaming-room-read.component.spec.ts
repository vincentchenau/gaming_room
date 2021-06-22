import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingRoomReadComponent } from './gaming-room-read.component';

describe('GamingRoomReadComponent', () => {
  let component: GamingRoomReadComponent;
  let fixture: ComponentFixture<GamingRoomReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingRoomReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingRoomReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
