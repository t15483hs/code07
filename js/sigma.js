const N10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squareSum(Number) {
    var x = Number;
    var i = 1;
    var sum = 0;
    while (i<=x){
        sum = sum +i*i;
        i = i+1;
        }
 return (sum);
}

function squareSum2(Number){
    var x = Number;
    var i = 1;
    if(x<1){
        i=x;
        x=1;
    }
    var sum = 0;
    while (i<=x){
        sum = sum +i*i;
        i = i+1;
        }
 return (sum);
}


function squareSum2_2(Number){
    var x = Number;
 if(x>=1){
    var i = 1;
    var sum = 0;
    while (i<=x){
        sum = sum +i*i;
        i = i+1;
        }
    return (sum);
}
  else{
    var i = x;
    var sum = 0;
    while (i<=1){
        sum = sum +i*i;
        i = i+1;
    return (sum);   
    }
  }
}


function sum (list){
    var i = 0 ;
    var sum = 0;
    var n = list.length
    while(i<n){
        sum = sum + list[i];
        i = i+1;
    }
    return (sum);
}