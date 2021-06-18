import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardFormComponent } from './post-card-form.component';

describe('PostCardFormComponent', () => {
  let component: PostCardFormComponent;
  let fixture: ComponentFixture<PostCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
