import { CovalentCoreModule, CovalentLayoutModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CovalentCoreModule,
    CommonModule,
    RouterModule,
    CovalentLayoutModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDt1f3lIJhOfAxkw6mzJ5CQoAhrfOTHWys'
    }),
  ],
  declarations: [HomeComponent, MainComponent]
})
export class HomeModule { }
