const x=25;
let num=prompt("Enter number");
while(num!=x){
    if(num==x){
        alert("congratulations You Got it Right!");
        continue;
    }
if(num>x){
if((num-x)>20){
    alert("Too big , Choose something Less");
    continue;
}
if((num-x)<=10){
    alert("Its near just choose little bit smaller ");
    continue;
}

}
else{
    if((x-num)>20){
        alert("Too Less , Choose something Big");
        continue;
    }
    if((num-x)<=10){
        alert("Its near just choose little bit Bigger ");
        continue;
    } 
}
}