function hasDuplicate(nums){
    
    const seen = new Set() ;
    for(const num of nums){
        if(seen.has(num)){
            return true ;
        }
        seen.add(num) ;
    }
    return false ;
}

const nums = [1,2,4,5,6,3] ;
console.log(hasDuplicate(nums));