// SimpleCalendar.js
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import "../style/calendar.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // Obtén los días del mes actual
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <div className="simple-calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>Previous Month</button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth}>Next Month</button>
      </div>

      <div className="calendar-body">
        <div className="grid-container">
          {daysInMonth.map((day) => (
            <div
              key={day.toISOString()}
              className={`grid-item ${isToday(day) ? 'today' : ''} ${isSameMonth(day, currentMonth) ? '' : 'other-month'}`}
            >
              {format(day, 'd')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
