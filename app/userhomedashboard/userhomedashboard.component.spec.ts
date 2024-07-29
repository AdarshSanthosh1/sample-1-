import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomedashboardComponent } from './userhomedashboard.component';

describe('UserhomedashboardComponent', () => {
  let component: UserhomedashboardComponent;
  let fixture: ComponentFixture<UserhomedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhomedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserhomedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
