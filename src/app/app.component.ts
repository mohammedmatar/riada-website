import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    // Register svgs
      this._iconRegistry.addSvgIconInNamespace('assets', 'logo',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'));
  }
}
