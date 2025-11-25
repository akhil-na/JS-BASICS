document.write("Hello World!")
console.log("This is a statement")
console.warn("Warning")
console.error("Error")
//variable declaration
/*
these
are
commented
*/
//let const var
let name1="akhilna"
console.log(name1)
let salary = 75000
console.log(salary)
console.log(typeof(salary))
salary = 90000
console.log(salary)
const pi=3.14
console.log(pi)


// cannot reassign a const value
// pi=3.1418
// console.log(pi) 

var isValid = false
console.log(isValid)

isValid = true
console.log(isValid)

let myAge
console.log(myAge)//undefined
 
console.log(100+200)
console.log(100-200)
console.log(100*200)
console.log(100/200)

console.log(10%5) //modulus operator
console.log(5**2) //exponent

let a =10
let b = 20
let c

c = a+b
console.log(`Sum of ${a} and ${b} is ${c}`)

c= a++
console.log(c)

let d= ++a
console.log(d)

let x = 5
// x = x+5 
x+=5
console.log(x)

let y = 6
y*=6
console.log(y)
// logical operator
// OR  ||
// AND  &&
// NOT !
let flag1= true
let flag2= false
// comparison operator
console.log(flag1 == flag2) // value comparison
console.log(flag1 === flag2) // value and type comparison

console.log((flag1 !=flag2) || (2<3))
console.log((flag1 !=flag2) && (2<3))

// conditional statements

if (5>3) 
    {
    console.log("5 is greater than 3")
}
else if (5==3)
    {
    console.log("5 is equal to 3")
}
else{
    console.log("5 is equal to 3")
}

let time = new Date().getHours()
console.log(time)

if(time<12){
    console.log("Good morning")
}
else if(time <= 18){
    console.log("Good Evening")
}
else{
    console.log("Good Night")
}

//loops
let sum = 0
for(let i=0;i<=10;i++){
    sum+=i
    
}

console.log(sum)

let product = 1
for(let i=1;i<=10;i++){
    product*=i
}
console.log(product)

// reference types
// objects
let student = {
    name:"hari",
    age:22,
    hobby:"Music"
}
console.log(student)
console.log(student.name)
console.log(student.age)

const internship = {
    course_by_forage:"skyscanner",
    number_of_cources:50,
    skill_enhanced:"boarding rules etc"

}
console.log(internship)
console.log(internship.course_by_forage)
console.log(internship.number_of_cources)

//functions
// function definiton
function add(){
    let a =10
    let b = 20
    let c
    
    c = a+b
    console.log(`Sum of ${a} and ${b} is ${c}`)
    
}
// function call
add()

function addNumbers(num1,num2){
    return num1+num2
}
let result = addNumbers(45,34)
console.log(result)
console.log(addNumbers(40,30))

//Arrays
let seasons = ["winter","summer","rainy"]
console.log(seasons)
console.log(seasons[0])
console.log(seasons[1])
console.log(seasons[2])

for(let i=0;i<seasons.length;i++){
    console.log(seasons[i])
}
