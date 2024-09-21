interface FutureDayProps {
  currentDayOfWeek: string;
  days: string[];
  numberOfDaysAhead: number;
}

export const getFutureDayString = ({ currentDayOfWeek, days, numberOfDaysAhead }: FutureDayProps ): string => {
  // Get the index of the current day
  const currentIndex = days.indexOf(currentDayOfWeek);

  // Calculate the future index by adding the number of days and applying modulo to wrap around
  const futureIndex = (currentIndex + numberOfDaysAhead) % days.length;

  // Return the future day from the days array
  return days[futureIndex];
}