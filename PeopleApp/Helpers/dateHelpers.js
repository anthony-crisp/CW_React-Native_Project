export const getAge = date => {
  var dob = new Date(date);
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
  var age = currentYear - dob.getFullYear();

  if (birthdayThisYear > currentDate) {
    age -= 1;
  }
  return `${age} years old`;
};

export const birthdayThisYear = date => {
  var dob = new Date(date);
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());

  return birthdayThisYear;
};

export const dateDiff = (dt1, dt2) => {
  var ret = { days: 0, months: 0, years: 0 };

  if (dt1 === dt2) return ret;

  if (dt1 > dt2) {
    var dtmp = dt2;
    dt2 = dt1;
    dt1 = dtmp;
  }

  var year1 = dt1.getFullYear();
  var year2 = dt2.getFullYear();

  var month1 = dt1.getMonth();
  var month2 = dt2.getMonth();

  var day1 = dt1.getDate();
  var day2 = dt2.getDate();

  ret['years'] = year2 - year1;
  ret['months'] = month2 - month1;
  ret['days'] = day2 - day1;

  if (ret['days'] < 0) {
    var dtmp1 = new Date(dt1.getFullYear(), dt1.getMonth() + 1, 1, 0, 0, -1);

    var numDays = dtmp1.getDate();

    ret['months'] -= 1;
    ret['days'] += numDays;
  }
  if (ret['months'] < 0) {
    ret['months'] += 12;
    ret['years'] -= 1;
  }
  return `${ret.months}${ret.months === 1 ? ' month ' : ' months '}and ${ret.days}${
    ret.days === 1 ? ' day ' : ' days '
  }until next birthday`;
};
