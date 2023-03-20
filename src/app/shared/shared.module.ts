import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecureURLPipe } from '@app/shared/pipes/secure-url.pipe';

@NgModule({
  declarations: [SecureURLPipe],
  imports: [CommonModule],
  exports: [SecureURLPipe],
})
export class SharedModule {}
