import {Component} from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
  <h1>UpComing Angular Events</h1>
  <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
  `
})

export class EventsListComponent {
    event1 = {
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
