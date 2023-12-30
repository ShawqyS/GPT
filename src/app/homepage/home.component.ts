import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  events = [
    { id: 1, title: 'Muziekfestival', date: new Date(2023, 6, 10), location: 'Amsterdam', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Kunsttentoonstelling', date: new Date(2023, 6, 15), location: 'Rotterdam', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Tech Conferentie', date: new Date(2023, 7, 5), location: 'Utrecht', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Boekenbeurs', date: new Date(2023, 7, 20), location: 'Den Haag', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Marathon', date: new Date(2023, 8, 10), location: 'Eindhoven', image: 'https://via.placeholder.com/150' }
  ];

  constructor(private router: Router) {}

  navigateToEventDetail(event: any) {
    this.router.navigate(['/event-detail'], { queryParams: { eventId: event.id } });
  }
}
