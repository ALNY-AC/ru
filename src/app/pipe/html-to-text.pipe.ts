import { Pipe, PipeTransform } from '@angular/core';
import highlight from 'highlight.js';

@Pipe({
  name: 'htmlToText'
})
export class HtmlToTextPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let a = highlight.highlightAuto(value).value;
    return a;
  }

}