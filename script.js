//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species(){
		 return this._species;
	}
	makeSound(){
		console.log("The " + this._species + " makes a sound");	
	}
}

class Dog extends Animal {
	bark(){
	console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
	console.log("purr");
	}
}


let cat=new Cat("Siamese");

cat.purr();
cat.makeSound();

let dog=new Dog("Golden Retrieve");

dog.bark();
dog.makeSound();



Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
