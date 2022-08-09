let num = prompt("Enter Number");
num = parseInt(num);
let reverse = 0;
let c;
while(num!=0){
    c = num%10;
    reverse = reverse*10 + c;
    num = Math.floor(num/10);
}
console.log("Reverse number is " + reverse);
