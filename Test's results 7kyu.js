Description:
It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function
that will:

Calculate the average mark of the whole class and round it to 3 decimal places.
Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. High marks
are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
Return list [class_average, dictionary] if there are different type of marks, or [class_average, dictionary,
"They did well"] if there are only high marks.
Examples
[10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

[5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]

SOLUTION//

function testResult(array) {
const average = +(array.reduce((el, acc)=> el + acc) / array.length).toFixed(3);
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 6) {
      array[i] = 'l'
    }
    if (array[i] <= 8) {
      array[i] = 'a'
    } if (array[i] <= 10) {
      array[i] = 'h'
    }
  }
let obj = {};
for (let i = 0; i < array.length; i++) {
  if (!obj[array[i]]) {
    obj[array[i]] = 1;
  } else {
    obj[array[i]] += 1;
  }
}
  if (!obj.h) {
    obj.h = 0;
  } if (!obj.a) {
    obj.a = 0;
  } if (!obj.l) {
    obj.l = 0
  }
  return obj.a === 0 && obj.l === 0? [average, obj, 'They did well' ] : [average, obj]

}