// class MyError extends Error{
//     constructor(args){
//         super(args);
//         this.name = 'My';
//    }
// }

// class Vehicle {
//     constructor(make, model){
//         this.make = make;
//         this.model = model
//     }
// }

// class Bike extends Vehicle{
//     constructor(make, model, isMountain=false){
//         super(make, model);
//         this.isMountain = isMountain
//     }
// }

// class Bus extends Vehicle{
//     constructor()
// }

// Error: {message: <string>, name: "Error"}

class CustomError extends Error {
    constructor(args){
        super(args);
        this.name = 'Custom Error';
    }
}

function throwGenericError(){
    throw new Error ('Generic error')  
}
console.log("Force generic error")
try{
    console.log("Generic error try block")
    throwGenericError();
}
catch(err){
    console.log("Generic error catch block")
    console.log(err.name, ":",err.message)
}
finally{
    console.log("Generic error finally block")
}

function throwCustomError(){
    throw new CustomError ('Custom error')
}
console.log("Force custom error")
try{
    console.log("Custom error try block")
    throwCustomError();
}
catch(err){
    console.log("Custom error catch block")
    console.log(err.name, ":",err.message)
}
finally{
    console.log("Custom error finally block")

}
//throw new MyError('Custom error message');

// try{
//     throw new MyError('Generic error')
// } catch (err){
//     console.log('${err.name}: ${err.message}');
// }

// try{
//     throw new MyError('test custom error object')
// } catch (err){
//     console.log('${err.name}: ${err.message}');
// }