https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript

Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

function replaceCommon(string, letter) {
let arr = string.split('').filter(el=> el !== ' ')

  let obj = {};
  for (let i = 0; i < arr. length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]] += 1;
  }

let arr1 = Object.entries(obj).sort((a, b) => b[1] - a[1])

let num = arr1[0][1]

  let lett = '';
  for (let key in obj) {
    if (obj[key] === num) {lett = key; break}
  }
  let reg = new RegExp(lett, "g");
return string.replace(reg, letter)
}