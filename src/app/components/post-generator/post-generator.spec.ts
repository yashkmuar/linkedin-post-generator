import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGenerator } from './post-generator';

describe('PostGenerator', () => {
  let component: PostGenerator;
  let fixture: ComponentFixture<PostGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
