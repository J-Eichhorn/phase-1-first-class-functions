function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function sayHi(){
        console.log('Hi!');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'It works';
    }
}