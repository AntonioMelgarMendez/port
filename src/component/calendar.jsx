// SimpleCalendar.js
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import '../style/calendar.css';

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

  const today = new Date();

  return (
    <div className='containergloblal'>
      <div className="calendar-container">
        <div className="simple-calendar">
          <div className="calendar-header">
            <span className="month">{format(currentMonth, 'MMMM')}</span>
            <span className="year">{format(currentMonth, 'yyyy')}</span>
          </div>
          <div className="calendar-body">
            <div className="grid-container weekdays">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={index} className="grid-item">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid-container days">
              {daysInMonth.map((day) => (
                <div
                  key={day.toISOString()}
                  className={`grid-item ${isToday(day) ? 'today' : ''} ${
                    isSameMonth(day, currentMonth) ? '' : 'other-month'
                  }`}
                >
                  {format(day, 'd')}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='simple-calendar1'>
        <h2 className="mes">{format(today, 'MMMM')}</h2>
        <h2 className='numero'>{format(today, 'd')}</h2>
        <h3 className='dia-semana'>{format(today, 'EEEE')}</h3>
      </div>
    </div>
  );
};

export default Calendar;
