import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class StarRating {
  @Input() value: number = 0;              
  @Input() max: number = 5;               
  @Output() valueChange = new EventEmitter<number>();

  setRating(star: number) {
    this.value = star;
    this.valueChange.emit(this.value);
  }

}
