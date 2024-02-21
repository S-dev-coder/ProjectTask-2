import { Component } from '@angular/core';
import { PdfGenerationService } from './pdf-generation.service';
import { delay } from 'rxjs';

@Component({
  selector: 'pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrl: './pdf-generator.component.css'
})

export class PdfGeneratorComponent {
  url: string = '';
  loading: boolean = false;
  error: string | null = null;

  constructor(private pdfService: PdfGenerationService) { }

  generatePdf() {
    console.log("Url" + this.url)
    if (!this.url.trim()) {
      this.error = 'Please enter a valid URL';
      return;
    }

    this.loading = true;
    this.error = null;
    

    this.pdfService.generatePdfFromUrl(this.url).pipe(
      delay(7000) // Delay for 2000 milliseconds (2 seconds)
    ).subscribe(
      () => {
        this.loading = false;
        this.url = '';
        confirm("Pdf Generated Successfully");
      },
      () => {
        this.error = 'An error occurred while generating the PDF';
        this.loading = false;
      }
    );
    
    console.log("Successfully Converted!!");
  }
}
