import { AlertService } from './core/services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';

  constructor( private alertService: AlertService){
      // How you can use alert service to display message to user
      this.alertService.show({type: 'info', message: 'Bienvenue sur l\'appli de test chez INFI'});
  }



}
