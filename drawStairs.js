https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/solutions/javascript/me/best_practice

function drawStairs(n) {
  return [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n');
}
