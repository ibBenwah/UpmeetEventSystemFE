import { TestBed } from '@angular/core/testing';

import { FavoritedEventService } from './favorited-event.service';

describe('FavoritedEventService', () => {
  let service: FavoritedEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritedEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
