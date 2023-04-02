import { Component, EventEmitter, Output } from '@angular/core';
import { ChatFacadeService } from '@app/features/chats/services/facade-chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent {
  @Output() onChatValue = new EventEmitter<string>();

  constructor(private chatService: ChatFacadeService) {}

  readonly minHeight = 24;
  readonly maxHeight = 200;

  onInputTextarea(textarea: HTMLTextAreaElement): void {
    textarea.style.height = 'auto';
    const newHeight = Math.max(textarea.scrollHeight, this.minHeight);
    textarea.style.height = `${newHeight}px`;
  }

  onKeydown(event: KeyboardEvent): void {
    const { key, target, shiftKey } = event;
    const textarea = target as HTMLTextAreaElement;
    const isEnterPressed = key === 'Enter';
    const isSubmiting = !shiftKey && isEnterPressed;
    if (isSubmiting) {
      event.preventDefault();
      this.sendValue(textarea);
    }
  }

  onSendClicked(textarea: HTMLTextAreaElement): void {
    this.sendValue(textarea);
  }

  private sendValue(textarea: HTMLTextAreaElement): void {
    const { style, value } = textarea;
    this.onChatValue.emit(value);
    console.log('Sent', value);
    this.chatService.sendMessage(value);
    textarea.value = '';
    style.height = `${this.minHeight}px`;
    textarea.focus();
  }
}
