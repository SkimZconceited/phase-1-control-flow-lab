function scuberGreetingForFeet(x){
  // Write your code here!
  if (x <= 400) {
    return 'This one is on me!'
  } else if (x > 2000 & x < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(y){
  // Write your code here!
  return y === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(t){
  // Write your code here!
  switch (t) {
    case 'generous':
      return 'Thank you so much.'
      break;

    case 'not as generous':
      return 'Thank you.'
      break;

    default:
      return 'Bye.'
      break;
  }
}