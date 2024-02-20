import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PdfGeneratorComponent } from './pdf-generation/pdf-generator.component';
import { PdfGenerationService } from './pdf-generation/pdf-generation.service';
// Import the missing component

@NgModule({
  declarations: [
    AppComponent,
    PdfGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PdfGenerationService], // Provide PdfGenerationService here
  bootstrap: [AppComponent]
})
export class AppModule { }
