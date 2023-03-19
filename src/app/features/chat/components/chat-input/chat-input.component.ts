import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent {
  readonly minHeigth = 24;
  readonly maxHeigth = 200;

  onTextareaInput(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    const newHeight = Math.max(textarea.scrollHeight, this.minHeigth);
    if (newHeight <= this.maxHeigth) {
      textarea.style.height = `${newHeight}px`;
    } else {
      textarea.style.height = `${this.maxHeigth}px`;
    }
  }
}
