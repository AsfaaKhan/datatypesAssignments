//data types primitive datatypes  
//string
//number
//boolean ==> true and false
//undefined
//null
//symbol
//any (agr data mh dengy value assign na ki ho) 
//bigint(number ki limit hoti ha git me agr imit se ziyda likhna ho number toh bignit me likhte han num)

 

//EXAMPLE NO 1 (STRING)
let Name : string = "Asfaa Khan ";
console.log("Hi, " + Name + "Do you like to learn some typescript?");

//EXAMPLE NO 2 (NUMBER )
let Number1:number = 56;
let Number2 :number = 78;
let result = Number1+Number2;
console.log("The Result Of Addition is " + result);

let personAge :number = 38;
let finalage :number = personAge + 2;
console.log("Person's age is " + finalage); 


//EXAMPLE NO 3 (BOOLEAN)
let n1 :number = 23 

if (  n1==22 ){
 console.log(true);
 
}
else {
    console.log(false);
    
}

//EXAMPLE NO 4 (UNDEFINED)
let b :undefined = undefined;
console.log(b);


//EXAMPLE NO 5 (NULL)
let c : null = null;
console.log(c);
 
//EXAMPLE NO 6 (bigint)
let f :BigInt = 
BigInt(5479523657e1);
console.log(f);