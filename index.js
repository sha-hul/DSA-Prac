function show(marks){
    debugger;
    switch(true){
        case marks<25 : return 'F' ;
        break;
        case marks>=25 && marks<45 : return 'E' ;
        break;
        case marks>=45 && marks<50 : return 'D' ;
        break;
        case marks>=50 && marks<60 : return 'C' ;
        break;
        case marks>=60 && marks<80 : return 'B' ;
        break;
        default : return 'A'
        break;
    
      }
}
function indices() {
    //1) Brute force

    // var n=nums.length;
    // for(var i=0;i<n-1;i++){
    //     for(var j=1;j<n;j++){
    //         if(nums[i]+nums[j] == target){
    //             return [i,j];
    //         }
    //     }
    // }

    //2)Optimal solution Linear 

    //Initializing HashMap
    debugger;
    target= 9;
    nums= [4,1,9,5];
    let map = new Map();
    let n = nums.length;
    //Linear loop upto last before digit
    for (let i = 0; i <= n - 1; i++) {
        let value = target - nums[i];
        //check
        if (map.has(value)) {
            return [map.get(value), i];
        }
        map.set(nums[i], i);
    }
    return null
}

function Print(data,n) {
    for (let i = 0; i < n; i++) {
        if (n==data) {
            break
        }
    }    
    for (let i = 0; i < 10; i++) {
            break
    }    
}