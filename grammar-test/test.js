function Person(){

}
var person1=new Person()
console.log(person1.__proto__===Person.prototype)
console.log(person1.constructor===Person)
console.log(Person.__proto__===Function.prototype)
console.log(Person.prototype.constructor===Person)
console.log(Person.prototype.constructor===Person)

console.log(person1.prototype)
console.log(Person.prototype)
