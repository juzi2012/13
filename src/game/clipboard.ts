module game {
"use strict";
export class Clipboard {
     getText(): string {
         var active: HTMLElement = <HTMLElement>document.activeElement;
         if (active != null) {
             var hidden = document.createElement("textarea");
             document.body.appendChild(hidden);
             hidden.focus();
             document.execCommand('paste', null, '');
             active.focus();
             hidden.remove();
             return hidden.value;
         }
         return "";
    }

     setText(s: string): boolean {
         var active: HTMLElement = <HTMLElement>document.activeElement;
         if (active != null) {
             var hidden = document.createElement("textarea");
             hidden.value = s;
             document.body.appendChild(hidden);
             hidden.select();
             document.execCommand('copy', null, '');
             active.focus();
             hidden.remove();
             return true;
         }
         return false;
    }

}
}