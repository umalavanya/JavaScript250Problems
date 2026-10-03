const myModule = (() =>{
    let privateData = 'secret' ;
    function privateMethod(){
        return privateData ;
    }
    return ()=>{
        privateData() ;
    }
})() ;

console.log(myModule()) ;