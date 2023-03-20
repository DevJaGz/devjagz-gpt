import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'secureURL' })
export class SecureURLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    console.log('url', value);
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
}
