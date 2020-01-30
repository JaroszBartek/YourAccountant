import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'your-accountant';
  loadedFeature = 'invoices';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
