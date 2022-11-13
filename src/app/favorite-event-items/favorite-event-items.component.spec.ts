import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteEventItemsComponent } from './favorite-event-items.component';

describe('FavoriteEventItemsComponent', () => {
  let component: FavoriteEventItemsComponent;
  let fixture: ComponentFixture<FavoriteEventItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteEventItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteEventItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
