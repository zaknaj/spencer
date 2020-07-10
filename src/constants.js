const months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");

const padZero = (val) => (String(val).length < 2 ? "0" + val : val);

const getDaysValues = () => {
  const res = [];
  for (let i = 1; i <= 31; i++) {
    res.push(i);
  }
  return res;
};

const getYearsValues = () => {
  const res = [];
  for (let i = 1; i <= 15; i++) {
    res.push(2018 + i);
  }
  return res;
};

const getHoursValues = () => {
  const res = [];
  for (let i = 0; i <= 23; i++) {
    res.push(padZero(i));
  }
  return res;
};

const getMinutesValues = () => {
  const res = [];
  for (let i = 0; i <= 59; i++) {
    res.push(padZero(i));
  }
  return res;
};

export const daysValues = getDaysValues();
export const monthsValues = months;
export const yearsValues = getYearsValues();
export const hoursValues = getHoursValues();
export const minutesValues = getMinutesValues();
