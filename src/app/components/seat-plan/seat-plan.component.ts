import { Component } from '@angular/core';
import { Row } from '../../shared/interfaces/row-seat';
import { Seat } from '../../shared/interfaces/row-seat';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seat-plan',
  imports: [CommonModule],
  templateUrl: './seat-plan.component.html',
  styleUrl: './seat-plan.component.css'
})
export class SeatPlanComponent { 
  
  seatingPlan: Row[] = [];

  constructor() {
    this.createSeatingPlan(10, 20);
  }

  createSeatingPlan(rows: number, seatsPerRow: number) {
    this.seatingPlan = [];

    for (let r = 1; r <= rows; r++) {
      const seats: Seat[] = [];

      for (let s = 1; s <= seatsPerRow; s++) {
        seats.push({
          seatNumber: s,
          reserved: false
        });
      }

      this.seatingPlan.push({
        rowNumber: r,
        seats
      });
    }
  }

  toggleSeat(rowIndex: number, seatIndex: number) {
  const seat = this.seatingPlan[rowIndex].seats[seatIndex];
  seat.reserved = !seat.reserved;  // Toggle true/false on each click
}

formatRowNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

}
