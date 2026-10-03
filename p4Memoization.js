// Memoization
function memoize(fn){
    const cache = {} ;
    return function(...args){
        const key = JSON.stringify(args) ;
        if(cache[key]){
            return cache[key] ;
        }
        const result = fn(...args);
        cache[key] = result ;
        return result ;
    }
}
// Example :fibonacci with memoization
const fib = memoize(function(n){
    if(n<2) return n ;
    return fib(n-1) + fib(n-2) ;

});

console.log(fib(10)) ;