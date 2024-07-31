let num1 =["hy"  , "hello", "name","g", "fr"]
num1.pop()
console.log(num1);
let hy = num1.push("as")
let oo = num1.shift()
let fy = num1.unshift(34)

let num2 =["by","nhi","hn","kia","q"]
num2.pop()
console.log(num2);
let by = num2.push("is")
let og = num2.shift()
let dd = num2.unshift(23)


let num3 =["nh","hyxd","hsgdi","vsyd","vdhw"]
num3.pop()
console.log(num3);
let bhi =num3.push(98)
let gg = num3.shift()
let hh = num3.unshift("ji")


let num4 =["kia","bhcdha","cha","nhi","maz"]
num4.pop()
console.log(num4);
let nhi = num4.push(true)
let jj = num4.shift()
let kk = num4.unshift("hy")


let num5 =["oo","nhi","fa","ja","nhi"]
num5.pop()
console.log(num5);
let q = num5.push(8)
let qq = num5.shift()
let kia = num5.unshift("by")







let num1$ =["kia","ji","ki",74,true]
let q = num1$.slice(1,4)
console.log(num1$);
console.log(q);

let num2$ =["hy","g","kia",56,true]
let hyxd = num2$.slice(3,5)
console.log(num2$);
console.log(hyxd);

let num3$ =["ho","hn","hal",349,true]
let by = num3$.slice(2,5)
console.log(num3$);
console.log(by);

let num4$ =["raha","nhi","q",85,true]
let qnhi = num4$.splice(0,3)
console.log(num4$);
console.log(qnhi);

let num5$ =["why","wohi","wah",32,true]
let kl = num5$.slice(2,5)
console.log(num5$);
console.log(kl);


let obj1 = {
    name1:"hfwKVBV",
    name2:"hbdjvry",
    name3:"hvcuydfv",
    name4:"gghxvc",
    name5:"tfffgg"
}
console.log(obj1);
console.log(obj1.name4);
let obj2 = {
    name1:"ytrfcxvb",
    name2:"tdrshdyett",
    name3:"fdrtwdeu",
    name4:"hgyueyfgf",
    name5:"uetygbhvf"
}
console.log(obj2);
console.log(obj2.name2);

let obj3 = {
    name1:"kia",
    name2:"jui",
    name3:"hy",
    name4:"tou",
    name5:"gybja"
}
console.log(obj3);
console.log(obj3.name2);

let obj4 = {
    name1:"gsgh",
    name2:"hfagl",
    name3:"hdsgafli",
    name4:"gKFHGWYI",
    name5:"hsaljhvfbv"
}
console.log(obj4);
console.log(obj4.name3);

let obj5 = {
    name1:"hsbajhv",
    name2:"vcasjdh",
    name3:"jhcvsdjvh",
    name4:"hsbvjshjs",
    name5:"hvhvfj"
}
console.log(obj5);
console.log(obj5.name5);

let obj6 = {
    name1:true,
    name2:true,
    name3:true,
    name4:true,
    name5:true
}
console.log(obj6);
console.log(obj6.name2);

let obj7 = {
    name1:true,
    name2:false,
    name3:true,
    name4:true,
    name5:false
}
console.log(obj7);
console.log(obj7.name2);

let obj8 = {
    name1:784,
    name2:3729,
    name3:484,
    name4:8789,
    name5:1235
}
console.log(obj8);
console.log(obj8.name2);

let obj9 = {
    name1:747,
    name2:451,
    name3:894,
    name4:879,
    name5:464,
}
console.log(obj9);
console.log(obj9.name4);

let obj10 = {
    name1:7894,
    name2:786,
    name3:451,
    name4:4687,
    name5:7894
}
console.log(obj10);
console.log(obj10.name4);





let tableNum = +prompt("Enter your table number")
let startPoint = +prompt("Enter your start point")
let endPoint = +prompt("Enter your end point")
for (let a = startPoint; a <= endPoint; a++) {
    console.log( `${tableNum} * ${a} = ${a*tableNum}` );  
    }
    
    let tableNum = +prompt("Enter your table number")
    let startPoint = +prompt("Enter your start point")
    let endPoint = +prompt("Enter your end point")
    
    for(let b = startPoint; b <= endPoint; b++){
            console.log(`${tableNum} * ${b} = ${b*tableNum}`);
        }
        
        let tableNum = +prompt("Enter your table number")
        let startPoint = +prompt("Enter your start point")
        let endPoint = +prompt("Enter your end point")
        for(let c = startPoint; c <= endPoint; c++){
                console.log(`${tableNum} * ${c} = ${c*tableNum}`);
            }
            
            let tableNum = +prompt("Enter your table number")
            let startPoint = +prompt("Enter your start point")
            let endPoint = +prompt("Enter your end  point")
            for(let d = startPoint; d <= endPoint; d++){
                    console.log(`${tableNum} * ${d} = ${d*tableNum}`);
                }
                
                let tableNum = +prompt("Enter you table number")
                let startPoint = +prompt("Enter your start point")
                let endPoint = +prompt("Enter your end point")
                
                
                 revece loop
                for (let e = 10; e >= 1; --e){ 
                        console.log(e);
                    console.log(`${tableNum} * ${e} = ${e*tableNum}`);
                    }
                    
                    
                    
                    
                    
                    
let num1$ =["kia","ji","ki",74,true,
    ["hy","g","kia",56,true],
    ["ho","hn","hal",349,true],
    ["raha","nhi","q",85,true,
        ["why","wohi","wah",32,true]
    ],
]
let a = num1$.slice(0 ,3)
for (let i = 0; i < a.length; i++) {
    console.log(a[i].toUpperCase()); 
}

let b = num1$[5].slice(0,3)
for (let i = 0; i < b.length; i++){
    console.log(b[i].toUpperCase());
}

let c = num1$[5].slice(0,3)
for (let i = 0; i < c.length; i++){
    console.log(c[i].toUpperCase());
}

let d = num1$[6].slice(0,3)
for (let i = 0; i < d.length; i++){
    console.log(d[i].toUpperCase());
}
                    
let e = num1$[7].slice(0,3)
for (let i = 0; i < e.length; i++){
    console.log(e[i].toUpperCase());   
}

let developers = [
    { name: "John", age: 25, languages: ["JavaScript", "Python"] },
    { name: "Kelly", age: 37, languages: ["Ruby", "Python", "C", "C++"] },
    { name: "Zack", age: 45, languages: ["Go", "C#"] },
  ];
  console.log(developers[0].languages);
  console.log(developers[1].languages);
  console.log(developers[2].languages);

 function names(a) {
console.log(a)
    

}
names(20) 
 
function names(b) {
    console.log(b)

}
  names(31)

function names(c) {
  console.log(c);

}
  names(78)

function names (d){
    console.log(d)
}
names(456)

function names (e){
    console.log(e)
}
names(48)


let greet = function () { 
    console.log("hy"); 
}; 

greet();

let nam = function ( ) {
 for ( let i = 0; i <= 10; i++ ){
    console.log(i);
 }
}
nam()
 
let num = ( ) => {
    for ( let i = 0; i <= 10; i++){
        console.log(i)
    }
}
num()

function User(fnames,lnames){
    this.firstname = fnames,
    this.lastname = lnames
}
let myData = new User("hanzala","ahmed")
console.log(myData);



 function My(cname,aname){
    this.citynames = cname,
    this.areanames = aname
 }
let myCity = new My("karachi","F area");
console.log(myCity);


let names = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

console.log(names)

console.log(email)
console.log(password)
let button = document.querySelector("#btn")
button.addEventListener("click",function(){
    console.log(names.value);
    console.log(email.value);
    console.log(password.value);
// })
function User(names,email,password){
    this.names = names,
    this.email = email,
    this.password = password

} 

let hanzala = new User(document.querySelector("#name").value,
document.querySelector("#email").value,
document.querySelector("#password").value)
console.log(hanzala);

