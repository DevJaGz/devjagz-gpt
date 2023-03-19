import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent {
  readonly minHeight = 24;
  readonly maxHeight = 200;

  onTextareaInput(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    const newHeight = Math.max(textarea.scrollHeight, this.minHeight);
    textarea.style.height = `${newHeight}px`;
    // if (newHeight <= this.maxHeigth) {
    //   textarea.style.height = `${newHeight}px`;
    // } else {
    //   textarea.style.height = `${this.maxHeigth}px`;
    // }
  }
}
