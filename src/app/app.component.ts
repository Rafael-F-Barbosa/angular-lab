import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MockHtmlService } from './mock-html.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   // <-- should be style**s**Url**s**
})
export class AppComponent {
  title = 'angular-lab';
  serverHtml?: SafeHtml;

  constructor(
    private mockHtml: MockHtmlService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.mockHtml.getHtml().subscribe(html => {
      this.serverHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    });
  }
}
