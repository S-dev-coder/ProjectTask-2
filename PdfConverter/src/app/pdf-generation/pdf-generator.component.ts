import { Component } from '@angular/core';
import { PdfGenerationService } from './pdf-generation.service';

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
    if (!this.url.trim()) {
      this.error = 'Please enter a valid URL';
      return;
    }

    this.loading = true;
    this.error = null;

    this.pdfService.generatePdfFromUrl(this.url).subscribe(
      (pdfBlob: Blob) => {
        this.downloadPdf(pdfBlob);
        this.loading = false;
      },
      (      error: any) => {
        this.error = 'An error occurred while generating the PDF';
        this.loading = false;
      }
    );
  }

  downloadPdf(pdfBlob: Blob) {
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(pdfBlob);
    downloadLink.download = 'generated_pdf.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
