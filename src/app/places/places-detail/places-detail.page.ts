import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit {

  place: Place

  constructor(private activateRouter: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
    })
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: '¿Estás seguro de querer eliminar este lugar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.placesService.deletePlace(this.place.id)
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    await alertElement.present()
  }

}
