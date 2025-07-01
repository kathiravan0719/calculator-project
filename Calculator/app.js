


// select the id

let display = document.getElementById('display');



// function of display the values 

function appendValue(value) {
  display.value += value;
}

// fuction of clear display the values

function clearDisplay() {
  display.value = '';
}

// function of calculate the values

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
