import { TestBed } from '@angular/core/testing';

import { PokemonIdServiceService } from './pokemon-id-service.service';

describe('PokemonIdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonIdServiceService = TestBed.get(PokemonIdServiceService);
    expect(service).toBeTruthy();
  });
});
