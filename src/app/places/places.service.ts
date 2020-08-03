import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://www.toureiffel.paris/sites/default/files/actualite/image_principale/IMG_20200526_123909.jpg',
      comments: ['Lugar increible', 'Solo es una antena']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://turismo.org/wp-content/uploads/2015/05/11a.png',
      comments: ['Lugar increible', 'Feliz dia de la libertad']
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageURL: 'https://turismo.org/wp-content/uploads/2015/05/11a.png',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title: title,
      imageURL: imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
