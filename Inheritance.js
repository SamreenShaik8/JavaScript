class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name +" " +"is running")
    }
    shout(){
        console.log(this.name +" "+ "is shouting")
    }
}

class Monkey extends Animal{
    eatsBanana(){ 
        console.log(this.name+" "+"is eating banana")
    }
}

let ani=new Animal("chimpu","black")
let m=new Monkey("simpu","white")
ani.run()
m.shout()
m.eatsBanana()