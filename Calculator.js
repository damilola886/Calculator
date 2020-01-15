
function squareNumber(n){
    result=n*n;
    console.log("the result of squaring the number"
    +" "+ n +" is "+ result);
    return result;
}
console.log (squareNumber(10));



function halfNumber(k){
    result=k/2;
    
    console.log ("half of " + k +" is " + result);
    return result;
}
halfNumber(7);


function percentOf(x,y){
    z=x/y;
    result=z*100;
   
    console.log(x + " is " + result +"% of " + y);
    return result;
}
percentOf(50,5);


function areaOfCircle(r){
    q1=22/7;
    pie=q1.toFixed(2);
    radius=r*r;
    area=pie*radius;
    console.log ("The area of a circle with radius "+
     r + " is " + area);
    return area;
}
areaOfCircle(8);


function calculator(n){
     halfvalue = halfNumber(n);
     let squarevalue = squareNumber(halfvalue);
     let  areavalue = areaOfCircle(squarevalue);
     let result = percentOf(areavalue,squarevalue);
     console.log(result);
}

calculator(10);
