
import { Component } from '@angular/core';
import { FormTableComponent } from './components/form-table/form-table.component'; // ✅ Corrected path

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Ensure standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormTableComponent] // ✅ Import standalone component
})
export class AppComponent {
  title = 'dynamic-form-table';
}



