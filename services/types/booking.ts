export type SportType = 'Acrobatics' | 'Dance' | 'Archery' | 'Yoga';

export interface Booking {
  id: string;
  sport: SportType;
  startDate: string; // ISO format
  startTime: string; // HH:MM format
  endDate: string; // ISO format
  endTime: string; // HH:MM format
}

export interface DateSection {
  date: string;
  bookings: Booking[];
  data: Booking[]; // Adding this property for SectionList compatibility
} 