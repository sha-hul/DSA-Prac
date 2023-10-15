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
function grade(params) {
    debugger;
    n=5;
    arr = [49,55,61,77,79]
    target_sum =94; 
    
        var left=0;
        var right=n-1;
        while(left<right){
            if((arr[left]+arr[right])==target_sum){
                console.log( 'Present');
            }
            else  if((arr[left]+arr[right])<target_sum){
                left++;
            }
            else if((arr[left]+arr[right])>target_sum){
                right--;
            }
        }
        console.log( 'Not Present')
}

