import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePokemonComponent } from './detalle-pokemon.component';

describe('DetallePokemonComponent', () => {
  let component: DetallePokemonComponent;
  let fixture: ComponentFixture<DetallePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
