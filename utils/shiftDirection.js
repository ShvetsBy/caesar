function checkAction(action) {
  let shiftDirection = '';

  if (action === 'encode') {
    shiftDirection = '+';
    return shiftDirection;
  } else if (action === 'decode') {
    shiftDirection = '-';
    return shiftDirection;
  } else {
    console.log('Enter Encode or Decode to procced');
  }
}

module.exports = checkAction;
