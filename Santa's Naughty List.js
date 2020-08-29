Christmas is coming, and Santa has a long list to go through,
to find who deserves presents for the big day. Go through a list of children,
and return a list containing every child who appeared on Santa's list.
Do not add any child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only
one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

function findChildren(a, b) {
let arr = [];
  for (let el of a) {
    for (let name of b) {
      if (el === name && !(arr.includes(el)))
        arr.push(el);
    }
  }
  return arr.sort();
}

// OR
function findChildren(santasList, children) {
  return Array.from(new Set(children.filter(child => santasList.indexOf(child) !== -1).sort()))
}