// 1.ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
  }
  console.log(user.studentstatus);

// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი; (for, while ციკლების საშუალებით);
let fruit = ['apple','strawberry','peach','lemon']

for (let i=0; i<fruit.length; i++) {
    console.log(fruit[i]);
}

let x = 0;
while (x < fruit.length) {
    console.log(fruit[x]);
    x++;
}

// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let M in numbers)
 if (numbers[M] > 5) {
     console.log(numbers[M])
 }


//  4.მოცემული მაისივიდან კონსოლში გამოვიტანოთ მარტო ის ობიექტი რომლის status მნიშვნელობა არის true;

let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];

for ( let a in users)
if (users[a].status === true) {
    console.log(users[a]);
}

// 5. მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];





// 6. რას დააუბრუნებს 6 === “6”? (true ან false) ახსენით რატო?

console.log( 6 === '6');
// დააბრუნებს 'false' , რადგან === შედარებისას კონვერტაცია არ ხდება და შესაბამისად string და number შედარებისას დააბრუნებს false.


// 7.მოცემულია მასივი: ამოიღეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა 5-ზე მეტია და მოიცავენ ‘ava’-ს;

let array = ["html", "css", "bootstrap", "javascript","python"];


  
for (let a of array)
 if (a.length > 5 && a.includes('ava')) {
     console.log(a)
 }

//  8.მოცემულია ობიექტი: 
// თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის გიორგის მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


let person = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

 if (person.age >18 && person.studentstatus === 'active') {
     console.log('hello');
 }
 if (person.name === 'giorgi') {
     console.log('hello Giorgi');
 }
 if (person.studentstatus === 'active' || person.age < 25) {
     console.log('hello world');
 }
 else {
     console.log('error');
 }


//  9.მოცემულია მასივი:  გამოიტანეთ მარტო სრტინგები;

let itm = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

for (let items of itm) {
    if(typeof items == 'string') {
        console.log(items);
    }


}



 


