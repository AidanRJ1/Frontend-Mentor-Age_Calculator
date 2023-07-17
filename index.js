//const variables
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDay = date.getDate();
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');

// assign bounds to year input
yearInput.min = currentYear - 115;
yearInput.max = currentYear - 1;

dayInput.max = months[currentMonth];

// Validation
yearInput.addEventListener('change', (event) => {
  const isValid = event.target.checkValidity();
  if (!isValid) {
    document.getElementsByClassName(
      'invalidError'
    )[2].style.visibility = 'visible';
    document.getElementsByClassName(
      'emptyError'
    )[2].style.visibility = 'hidden';
  } else {
    document.getElementsByClassName(
      'invalidError'
    )[2].style.visibility = 'hidden';
  }
});

monthInput.addEventListener('change', (event) => {
  const isValid = event.target.checkValidity();
  if (!isValid) {
    document.getElementsByClassName(
      'invalidError'
    )[1].style.visibility = 'visible';
    document.getElementsByClassName(
      'emptyError'
    )[1].style.visibility = 'hidden';
  } else {
    document.getElementsByClassName(
      'invalidError'
    )[1].style.visibility = 'hidden';
  }
});

dayInput.addEventListener('change', (event) => {
  const isValid = event.target.checkValidity();
  if (!isValid) {
    document.getElementsByClassName(
      'invalidError'
    )[0].style.visibility = 'visible';
    document.getElementsByClassName(
      'emptyError'
    )[0].style.visibility = 'hidden';
  } else {
    document.getElementsByClassName(
      'invalidError'
    )[0].style.visibility = 'hidden';
  }
});

function noInput() {
  const yearIsValid = yearInput.checkValidity();
  const monthIsValid = monthInput.checkValidity();
  const dayIsValid = dayInput.checkValidity();

  if (!yearIsValid) {
    document.getElementsByClassName(
      'emptyError'
    )[2].style.visibility = 'visible';
    document.getElementsByClassName(
      'invalidError'
    )[2].style.visibility = 'hidden';
  } else {
    document.getElementsByClassName(
      'emptyError'
    )[2].style.visibility = 'hidden';
  }

  if (!monthIsValid) {
    document.getElementsByClassName(
      'emptyError'
    )[1].style.visibility = 'visible';
    document.getElementsByClassName(
      'invalidError'
    )[1].style.visibility = 'hidden';
  } else {
    document.getElementsByClassName(
      'emptyError'
    )[1].style.visibility = 'hidden';
  }

  if (!dayIsValid) {
    document.getElementsByClassName(
      'emptyError'
    )[0].style.visibility = 'visible';
    document.getElementsByClassName(
      'invalidError'
    )[0].style.visibility = 'hidden';
  } else {
    document.getElementsByClassName(
      'emptyError'
    )[0].style.visibility = 'hidden';
  }
}

//calculating age
function calculateAge() {
  let birthYear = yearInput.value;
  let birthMonth = monthInput.value;
  let birthDay = dayInput.value;

  const isValid = dayInput.checkValidity();

  if (birthDay >= 1 && isValid) {
    diffYear = currentYear - birthYear;
    diffMonth = currentMonth - birthMonth;
    diffDay = currentDay - birthDay;

    if (birthMonth > currentMonth) {
      diffMonth = diffMonth + 12;
      diffYear = diffYear - 1;
    }

    if (birthDay > currentDay) {
      diffDay = diffDay + months[birthMonth - 1];
    }

    document.getElementsByClassName(
      'calc-result__value'
    )[0].innerHTML = diffYear;
    document.getElementsByClassName(
      'calc-result__value'
    )[1].innerHTML = diffMonth;
    document.getElementsByClassName(
      'calc-result__value'
    )[2].innerHTML = diffDay;
  }
}

// submittion
let submitButton = document.getElementsByClassName('submit')[0];
submitButton.addEventListener('click', noInput);
submitButton.addEventListener('click', calculateAge);
