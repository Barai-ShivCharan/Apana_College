// const student = {
//   fullName: "ShivCharan Barai",
//   marks: 94.5,
//   printMarks: function () {
//     console.log("MArks =", this.marks);
//   },
// };

// class ToytoCar {
//   start() {
//     constructor(){
//       console.log('Creating new oblject');

//     }
//   }
//   stop() {
//     console.log("stop");
//   }
//   setBrand(brand) {
//     this.BrandName = brand;
//   }
// }
// let fortuner = new ToytoCar();
// fortuner.setBrand("FortunerBRand");
// let texus = new ToytoCar();



//Inheritance
/*
class Parent {
  hello() {
    console.log("Hello");
  }
}

class Child extends Parent {}
let obj = new Child();*/


class Person{
  eat(){
    console.log('eat');
    
  }
  sleep(){

    console.log("Sleep");
    
  }
}

class Engineer extends Person{
  work(){
    console.log('Solve Problems,BUild Somthing New');
    
  }
}
class Doctor extends Person{
  work(){
    console.log("treat Patients");
    
  }
}

let ShivObj=new Engineer()
