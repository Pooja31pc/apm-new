import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent implements OnChanges {

  ngOnChanges(): void {
    this.cropWidth = this.rating * 130/7;
  }
  @Input() rating: number = 0;
  cropWidth: number = 130;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
  }
}
