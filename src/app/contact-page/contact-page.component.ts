import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  classes = [ 'Bridal Bouquet Arrangement',
              'Japanese Flower Arrangement',
              'Vase Floral Arrangement',
              'Western Flower Arrrangement'
];

}
