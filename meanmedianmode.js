//Input Format
//The first line contains an integer, N, denoting the number of elements in the array. 
//The second line contains N space-separated integers describing the array's elements.
//Sample Input
//10
//64630 11735 14216 99233 14470 4978 73429 38120 51135 67060

function processData(input) {
    //Enter your code here
    var temp = input.split('\n');
    var n = temp[0]
    var temparr = temp[1];
    // create a number array from string
    var arr = temparr.split(' ').map(Number);
    // sort the number array in ascending order
    var arrAsc = arr.sort((a, b) => a - b );
    var arrDsc = arr.reverse();
    
    // get the sum of array
    var arrSum = arr.reduce((a, b) => a + b, 0);
    var mean = arrSum / n;
    console.log(mean);
    
    var median = 0;
    // check if length of array is odd or even
    if(arr.length % 2 == 0){
        var middle1 = arrDsc[Math.round(arr.length/2)-1];
        var middle2 = arrDsc[arr.length/2];
        median = (middle1 + middle2)/2;
    }
    else{
        // median is the middle value if array is odd
        median = arrAsc[Math.round((arr.length)/2)];
    }
    console.log(median);
    
    // create object to store occurannces of each number in array
    var obj = { };
        for (var i = 0, j = arr.length; i < j; i++) {
            obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        }
    // find the max value in object i.e the maximum occurance
    var maxKeyCount = Object.keys(obj).map(k => obj[k]).reduce((a, b) => a > b ? a : b );
    // the mode is the the key with max value
    console.log(Object.keys(obj).find(key => obj[key] === maxKeyCount));
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
