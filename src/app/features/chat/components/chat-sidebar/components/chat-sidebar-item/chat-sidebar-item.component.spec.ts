import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSidebarItemComponent } from './chat-sidebar-item.component';

describe('ChatSidebarItemComponent', () => {
  let component: ChatSidebarItemComponent;
  let fixture: ComponentFixture<ChatSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSidebarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
