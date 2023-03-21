import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafeHTML } from '@app/shared/pipes/safe-html.pipe';
import { SafeURLPipe } from '@app/shared/pipes/safe-url.pipe';

@NgModule({
  declarations: [SafeURLPipe, SafeHTML],
  imports: [CommonModule],
  exports: [SafeURLPipe, SafeHTML],
})
export class SharedModule {}
