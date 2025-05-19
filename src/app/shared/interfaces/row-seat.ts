export interface Seat {
  seatNumber: number;
  reserved: boolean;
}

export interface Row {
  rowNumber: number;
  seats: Seat[];
}