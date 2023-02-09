const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
console.log(agreement.value);

const disabled = () => {
  if (agreement.checked === false) {
    btnSubmit.setAttribute('disabled', false);
  }
};
disabled();

const able = () => {
  if (agreement.checked === true) {
    btnSubmit.disabled = false;
  } else if (agreement.checked === false) {
    btnSubmit.setAttribute('disabled', false);
  }
};

const req4 = (event) => {
  event.preventDefault();
  console.log('oi');
};

agreement.addEventListener('click', able);
btnSubmit.addEventListener('click', req4);