@sealed  
class Person {  
    msg: string;  
    constructor(message: string) {  
        this.msg = message;  
    }  
    show() {  
        return "Hello, " + this.msg;  
    }  
}  

function sealed(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}