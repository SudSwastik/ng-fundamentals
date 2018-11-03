import {Component} from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event = {
      id: 1,
      name: 'angular',
      date: '9/26/1996',
      time: '10:00 am',
      price: '599.99',
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1044',
        city : 'London',
        country: 'England'
      }
    };
}
