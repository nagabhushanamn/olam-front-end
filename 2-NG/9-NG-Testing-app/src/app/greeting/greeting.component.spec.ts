import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title greeting', () => {
    const fixture = TestBed.createComponent(GreetingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-header').textContent).toContain('greeting');
  });

  it('should have default greeting message as good morning', () => {
    const fixture = TestBed.createComponent(GreetingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-body').textContent).toContain('good morning');
  });

  it('should have goog-evening after change', () => {
    const fixture = TestBed.createComponent(GreetingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const appGreeting = fixture.debugElement.componentInstance;
    appGreeting.changeMessage('good evening');
    fixture.detectChanges();
    expect(compiled.querySelector('.card-body').textContent).toContain('good evening');
  });



});
