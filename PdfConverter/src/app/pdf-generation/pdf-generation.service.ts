import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerationService {
  private API_KEY = "sk7137389@gmail.com_Vb7482S3P75KS97fJ735klw9hoAUpBu1T19D43Fq74R59J8IA4r100gYYijY1AZv";

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

    return this.http.post<any>(API_URL, jsonPayload, options);
  }
}


