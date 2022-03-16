import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input()
  name='card name';
  @Input()
  number='1111 2222 3333 4444';
  @Input()
  amount= '15 000RUB';
  @Input()
  expirationDate= '03/12';

  constructor() { }

  ngOnInit(): void {
  }

}

