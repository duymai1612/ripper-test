import { Booking, DateSection, SportType } from '../types';
import { format, addDays, parse, isValid } from 'date-fns';

const SPORTS: SportType[] = ['Acrobatics', 'Dance', 'Archery', 'Yoga'];

// Generate a random time in 5-minute intervals (HH:MM)
const generateRandomTime = (startHour = 0, startMinute = 0): string => {
  // Generate a random hour between startHour and 23
  const hour = startHour + Math.floor(Math.random() * (24 - startHour));
  
  // Generate a random minute in 5-minute intervals
  // If we're at the startHour, we need to ensure minutes are >= startMinute
  let possibleMinutes: number[] = [];
  
  if (hour === startHour) {
    // Round startMinute up to the next 5-minute interval
    const roundedStartMinute = Math.ceil(startMinute / 5) * 5;
    
    // Generate possible minutes from roundedStartMinute to 55, in steps of 5
    for (let m = roundedStartMinute; m < 60; m += 5) {
      possibleMinutes.push(m);
    }
  } else {
    // For other hours, use all 5-minute intervals
    possibleMinutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  }
  
  // If no possible minutes (happens when startMinute > 55), move to the next hour
  if (possibleMinutes.length === 0) {
    return generateRandomTime(startHour + 1, 0);
  }
  
  const minute = possibleMinutes[Math.floor(Math.random() * possibleMinutes.length)];
  
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

// Parse time string to hours and minutes
const parseTime = (timeString: string): { hours: number; minutes: number } => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return { hours, minutes };
};

// Generate a random booking
const generateBooking = (date: Date, index: number): Booking => {
  const sportIndex = Math.floor(Math.random() * SPORTS.length);
  const sport = SPORTS[sportIndex];
  
  const formattedDate = format(date, 'yyyy-MM-dd');
  const startTime = generateRandomTime();
  
  // Parse the start time to generate a valid end time (must be after start time)
  const { hours: startHours, minutes: startMinutes } = parseTime(startTime);
  
  // Generate end time (must be after start time on the same day)
  const endTime = generateRandomTime(startHours, startMinutes);
  
  return {
    id: `${formattedDate}-${sport}-${index}`,
    sport,
    startDate: formattedDate,
    startTime,
    endDate: formattedDate,
    endTime,
  };
};

// Generate bookings for a specific date
const generateBookingsForDate = (date: Date): Booking[] => {
  const bookingsCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 bookings per date
  const bookings: Booking[] = [];
  
  for (let i = 0; i < bookingsCount; i++) {
    bookings.push(generateBooking(date, i));
  }
  
  return bookings;
};

// Get bookings for a specified number of days, starting from a specific date
export const getBookings = (startDate: Date, days: number): Promise<DateSection[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const dateSections: DateSection[] = [];
      
      for (let i = 0; i < days; i++) {
        const currentDate = addDays(startDate, i);
        const formattedDate = format(currentDate, 'dd/MM/yyyy');
        
        const bookings = generateBookingsForDate(currentDate);
        
        dateSections.push({
          date: formattedDate,
          bookings,
          data: bookings, // Set data to the same bookings array for SectionList
        });
      }
      
      resolve(dateSections);
    }, 500); // Simulate a 500ms network delay
  });
};

// Format date based on the requirement: starting date is December 16, 2024
export const getInitialDate = (): Date => {
  // Parse the date string to create a Date object
  const initialDate = parse('16/12/2024', 'dd/MM/yyyy', new Date());
  
  // Check if the date is valid
  if (!isValid(initialDate)) {
    // Fallback to current date if parsing fails
    console.error('Invalid initial date, using current date instead');
    return new Date();
  }
  
  return initialDate;
}; 