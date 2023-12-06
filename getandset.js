class Animal{
    constructor(name){
        this._name=name
    }
    fly(){
        console.log(this.name+" " +"is flying")
    }
    get name(){
         return this._name

    }
    set name(newName){
        this._name=newName

    }
}

let a=new Animal("chimpu")
let b=56
a.fly()
console.log(a)
a.name="jack"
console.log(a)
console.log(a instanceof Animal)
console.log(b instanceof Animal)