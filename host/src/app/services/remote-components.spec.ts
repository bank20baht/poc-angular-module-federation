import { TestBed } from '@angular/core/testing';

import { RemoteComponents } from './remote-components';

describe('RemoteComponents', () => {
  let service: RemoteComponents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteComponents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
