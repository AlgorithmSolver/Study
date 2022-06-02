const arr = [1,2,3,4,5];
for( const n of arr){
    if( n%2 !== 0 ) continue;
    console.log(n);
}