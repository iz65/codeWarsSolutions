https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls){
  let  bag=[];
for (let element of dolls) {
  if (element === "Hello Kitty" || element === "Barbie doll") {  bag.push(element);;}
else continue;
  if (bag.length >= 3 ) break;
}
  return bag;
}