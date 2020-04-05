let passcode = "secret passcode";  
  
class Student4 
{  
    private _fullName: string;  
  
    get fullName(): string {  
        return this._fullName;  
    }  
  
    set fullName(newName:string) {  
        if (passcode == "secret passcode") {  
            this._fullName = newName;  
        }  
        else {  
            console.log("Unauthorized update of student detail!");  
        }  
    }  
}  
  
let stud = new Student4();  
stud.fullName = "Virat Kohli";  
if (stud.fullName) {  
    console.log(stud.fullName);  
}  