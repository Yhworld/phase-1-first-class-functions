const receivesAFunction = callback => callback();

function returnsANamedFunction () {
    return function fn() {
        console.log("Helloooooo")
    }
}

function returnsAnAnonymousFunction() {
    return function (){
        console.log('yaaaaay')
    }
}