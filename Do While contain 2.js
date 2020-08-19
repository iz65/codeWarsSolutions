
Дано целое положительное число. Определите, содержит ли данное число цифру "2".

Напишите функцию с именем doesNumberContain2, которая принимает в качестве аргумента число n и возвращает true, если число содержит цифру 2, и false - в противном случае. Запрещено использование методов строк и массивов. В решении используйте цикл do while.

Примеры:

функция doesNumberContain2(1520) должна возвратить true;
функция doesNumberContain2(114876) должна возвратить false;
функция doesNumberContain2(22222) должна возвратить true.

function doesNumberContain2(n){
let digit;
do {
digit = n % 10;
let num = n - digit;
n = Math.floor(n / 10);
if (digit === 2) break;}
while (n > 0); return digit===2? true: false;}