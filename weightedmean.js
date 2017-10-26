//Input Format

//The first line contains an integer, N, denoting the number of elements in arrays X(elements) and W(weights). 
//The second line contains N space-separated integers describing the respective elements of array X. 
//The third line contains N space-separated integers describing the respective elements of array W.

//Sample Input
//5
//10 40 30 50 20
//1 2 3 4 5

function processData(input) {
    var temp = input.split('\n');
    var n = temp[0];
    var arr = temp[1].split(' ').map(Number);
    var weights = temp[2].split(' ').map(Number);
    var sum = 0;
    var sumWeights = 0;
    // loop both arrays 
    for(var i = 0;i < arr.length ; i++){
        // sum of numbers and weights
        sum += arr[i] * weights[i];
        // sum of weights
        sumWeights += weights[i];
    }
    // divide the sum of numbers x weights by sum of weights to get weighted mean
    var wMean = parseFloat(sum / sumWeights).toFixed(1) ; 
    console.log(wMean);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
