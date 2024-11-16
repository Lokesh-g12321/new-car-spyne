import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent implements OnInit {
  bmwCars: any[] = [
    {
      title: 'BMW M3',
      description: 'The BMW M3 is a high-performance version of the 3 Series, offering incredible power, handling, and luxury.',
      tags: ['Performance', 'Luxury', 'Sports'],
      images: [
        'assets/bmw1.jpeg',
        'assets/bmw2.jpeg',
        'assets/bmw3.jpeg'
      ]
    },
    {
      title: 'BMW X5',
      description: 'The BMW X5 is a luxury SUV that combines performance with comfort and advanced technology.',
      tags: ['SUV', 'Luxury', 'Comfort'],
      images: [
        'assets/bmw4.jpeg',
        'assets/bmw5.jpeg',
        'assets/bmw1.jpeg'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
