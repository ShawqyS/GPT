import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: 'event-detail.component.html',
  styleUrls: ['event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  event: any;
  events = [
    { id: 1, title: 'Muziekfestival', date: new Date(2023, 6, 10), location: 'Amsterdam', description: 'Een bruisend muziekfestival met diverse artiesten.', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Kunsttentoonstelling', date: new Date(2023, 6, 15), location: 'Rotterdam', description: 'Ontdek prachtige kunstwerken van lokale kunstenaars.', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Tech Conferentie', date: new Date(2023, 7, 5), location: 'Utrecht', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Boekenbeurs', date: new Date(2023, 7, 20), location: 'Den Haag', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Marathon', date: new Date(2023, 8, 10), location: 'Eindhoven', image: 'https://via.placeholder.com/150' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const eventId = params['eventId'];
      this.event = this.events.find(event => event.id === parseInt(eventId));
    });
  }
}
