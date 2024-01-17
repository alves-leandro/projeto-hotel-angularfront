import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  selectedForm = '';

  // Método para lidar com o evento emitido pela barra lateral
  onFormSelected(formName: string) {
    this.selectedForm = formName;
  }
}
