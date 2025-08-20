import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MockHtmlService {
    private readonly http = inject(HttpClient);

    getHtml(): Observable<string> {
        // Simulating an API returning HTML
        const mockHtml = `
      <h2 style="color: purple;">Server Response</h2>
      <p>This <strong>HTML</strong> came from the server.</p>
    `;
        // return of(mockHtml); // returns an observable (like HttpClient would)
        const url = "http://127.0.0.1:5000/example"

        return this.http.get<any>(url);
    }
}
