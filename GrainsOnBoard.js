https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/javascript

function squaresNeeded(grains){
  if (grains <= 2) return grains;
  if (grains > 2) {
    let i = 0;
    while (2 ** i <= grains)
      i++;
    return i;
  }