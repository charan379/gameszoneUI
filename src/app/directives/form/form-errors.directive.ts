import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges, } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[formErrors]',
})
export class FormErrorsDirective implements OnChanges {
  @Input() formErrors: ValidationErrors | null = null;
  @Input() formErrorsMessages: Record<string, string> = {};

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateErrorMessage();
  }

  private updateErrorMessage() {
    if (this.formErrors) {
      const errorKeys = Object.keys(this.formErrors);
      if (errorKeys.length > 0) {
        const firstErrorKey = errorKeys[0];
        const errorMessage = this.formErrorsMessages[firstErrorKey] || 'Invalid Field!';
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', errorMessage);
        return;
      }
    }

    // Clear the innerHTML if there are no errors.
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '');
  }
}
