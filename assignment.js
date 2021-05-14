function kilometerToMeter(km){
    if(km<0){
        console.log('Enter valid number');
    }
    else{
        var meter=km*1000;
        return meter;
    }
}
var result=kilometerToMeter(10);
console.log('Converted meter is : ',result);

function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        console.log('enter valid number');
    }
    else{
        var watchCost=50*watch;
        var phoneCost=100*phone;
        var laptopCost=500*laptop;
        var sum=watchCost+phoneCost+laptopCost;
        return sum;
    }
}
var result2=budgetCalculator(5,3,2);
console.log('Total budget is : ', result2);

function hotelCost(days){
    if(days>0 && days<=10){
        var cost=days*100;
    }
    else if(days>10 && days<=20){
        var dayFirst=days-10;
        var cost=1000+800*dayFirst;
    }
    else if(days>20){
        var dayFirst=days-20;
        var cost=1000+800+50*dayFirst;
    }
    else{
        console.log('enter a valid number');
    }
    return cost;       
}
var result3=hotelCost(25);
console.log(result3);

function megaFriend(arr){
    var maxiLength=arr[0].length;
    var maxiName=arr[0];

    for(var i=0;i<arr.length;i++){
        
        if(arr[i].length>maxiLength){
            maxiLength=arr[i].length;
            maxiName=arr[i];     
        }
    }
    return maxiName;
}
var arr=["tushar","qayes","charles"];
var result4=megaFriend(arr);
console.log(result4);