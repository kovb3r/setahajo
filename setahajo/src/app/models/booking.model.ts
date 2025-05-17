export interface Booking {
    id: number;
    cruiseId: number;
    customerName: string;
    email: string;
    guests: number;
    bookedAt: Date;
  }