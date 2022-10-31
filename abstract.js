// class auto{
//     constructor( name,type,color,maxSpeed) {
//         this.name = name;
//         this.type = type;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//     }
//     startEngine() {
//         console.log(`${this.name} engine started`);
        

//     }
// }

// class carS extends auto{
//     constructor(name,type,color,maxSpeed){
//         super(name,type,color,engine)
//         this.maxSpeed = maxSpeed;
//     }


// }
// const cars = new auto('e34','bmw','black',250);
// console.log(cars);
// cars.startEngine();




class ship{
    constructor( name,type,color,maxSpeed) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
    startEngine() {
        console.log(`${this.name} engine started`);
        

    }
}

class ships extends ship{
    constructor(name,type,color,maxSpeed){
        super(name,type,color,engine)
        this.maxSpeed = maxSpeed;
    }


}
const shipS = new ship('t-86','titanik','white',40);
console.log(ships);
shipS.startEngine();
