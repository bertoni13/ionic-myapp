import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
@Injectable()
export class YoutubePipe{

	constructor(private sanitizer: DomSanitizer){

	}
  transform(value: string, ...args) {
    // return value.toLowerCase();
    console.info(value);
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
