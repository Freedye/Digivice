import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonCardsComponent } from './digimon-cards.component';

describe('DigimonCardsComponent', () => {
  let component: DigimonCardsComponent;
  let fixture: ComponentFixture<DigimonCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
