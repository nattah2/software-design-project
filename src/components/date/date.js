import React from 'react';

const today = new Date()

function formateDate(date) {
  return new Intl.DateTimeFormat(
    'en-us',
    {weekday: 'long' }
  ).format(date);
}

export default function MyDate() {
  return (
    <h1>To do list for {formateDate(today)}</h1>
  );
}
