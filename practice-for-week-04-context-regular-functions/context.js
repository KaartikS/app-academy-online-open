function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ? - undefined


/********************************* Scenario 2 *********************************/
// nemo.eat = eat; 
// nemo.eat(); // ?


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ? - undefined because "this" refers to the global object in this case


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ? - nemo swims in the water


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim; - throws error 
// swim(); // ?