import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerationService {
  private API_KEY = "sk7137389@gmail.com_Vb7482S3P75KS97fJ735klw9hoAUpBu1T19D43Fq74R59J8IA4r100gYYijY1AZv";
  private SourceUrl: string = "http://en.wikipedia.org/wiki/Main_Page";

  constructor(private http: HttpClient) { }

  generatePdfFromUrl(url: string): Observable<any> {
    const API_URL = 'https://api.pdf.co/v1/pdf/convert/from/url';

    const jsonPayload = {
      name: 'result.pdf',
      url: url
    };

    const options = {
      headers: {
        'x-api-key': this.API_KEY,
        'Content-Type': 'application/json'
      }
    };

    return new Observable<any>((observer) => {
      this.http.post<any>(API_URL, jsonPayload, options).subscribe(
        (response) => {
          if (!response.error) {
            this.downloadPdf(response.url);
            console.log("successfully saved the file")
          }
          observer.next(response);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  downloadPdf(url: string): void {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      if (fileReader.result) {
        const blob = new Blob([fileReader.result], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'result.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        console.error('Failed to read file content.');
      }
    };
    this.http.get(url, { responseType: 'blob' }).subscribe((response) => {
      fileReader.readAsArrayBuffer(response);
    });
  }

}

