import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefruitComponentComponent } from './singlefruit.component';

describe('SinglefruitComponentComponent', () => {
  let component: SinglefruitComponentComponent;
  let fixture: ComponentFixture<SinglefruitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglefruitComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglefruitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
