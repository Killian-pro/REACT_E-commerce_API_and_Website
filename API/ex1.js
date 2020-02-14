let fruits = ["pomme","poire","banane","mangue"];

console.log(fruits);


fruits.splice("3","0","kiwi");

console.log(fruits);

console.log(fruits[0]);

for(let i = 0; i < fruits.length;i++){
    if(fruits[i] === "poire")
        fruits.splice(i,1)
}

console.log(fruits);


for(let fruit of fruits){
    if(fruit.includes('a'))
        console.log(fruit)
}

