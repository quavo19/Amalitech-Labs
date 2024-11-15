// JavaScript Hero: Object Mastery



// Object Creation Basics
const superhero = {
    name: "Shadow Panther",
    secretIdentity: "Eric Black",
    powers: ["invisibility", "super strength", "night vision"],
    weakness: "bright light"
  };
  
  console.log(superhero);
  

  // Methods and Functionality
superhero.usePower = function (powerName) {
    if (this.powers.includes(powerName)) {
      console.log(`${this.name} uses ${powerName}!`);
    } else {
      console.log(`${this.name} doesn't have the power: ${powerName}.`);
    }
  };
  
  superhero.revealIdentity = function () {
    console.log(`${this.name}'s secret identity is ${this.secretIdentity}.`);
  };
  
  superhero.usePower("invisibility");
  superhero.revealIdentity();

  
  // Object Constructors
function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
  }
  
  Superhero.prototype.usePower = function (powerName) {
    if (this.powers.includes(powerName)) {
      console.log(`${this.name} uses ${powerName}!`);
    } else {
      console.log(`${this.name} doesn't have the power: ${powerName}.`);
    }
  };
  
  Superhero.prototype.revealIdentity = function () {
    console.log(`${this.name}'s secret identity is ${this.secretIdentity}.`);
  };
  
  const hero1 = new Superhero("Iron Wing", "David Steel", ["flight", "laser vision"], "heavy metals");
  hero1.usePower("flight"); 
  hero1.revealIdentity();

  

  // Prototypal Inheritance
function TechHero(name, secretIdentity, powers, weakness, gadgets) {
    Superhero.call(this, name, secretIdentity, powers, weakness);
    this.gadgets = gadgets;
  }
  
  TechHero.prototype = Object.create(Superhero.prototype);
  TechHero.prototype.constructor = TechHero;
  
  TechHero.prototype.useGadget = function (gadgetName) {
    if (this.gadgets.includes(gadgetName)) {
      console.log(`${this.name} uses gadget: ${gadgetName}!`);
    } else {
      console.log(`${this.name} doesn't have the gadget: ${gadgetName}.`);
    }
  };
  
  const techHero = new TechHero("Cyber Falcon", "Sophia Light", ["hacking", "super speed"], "water", ["cyber wings", "laser gun"]);
  techHero.usePower("hacking");
  techHero.useGadget("cyber wings");

  

  // Object Iteration and Transformation
const characters = [
    { name: "Donald", type: "hero" },
    { name: "Eben", type: "hero" },
    { name: "Alalinga", type: "villain" },
    { name: "Mubaric", type: "villain" }
  ];
  
  const heroes = characters.filter(character => character.type === "hero");
  console.log("Heroes:", heroes);
  
  const characterNames = characters.map(character => character.name);
  console.log("Character Names:", characterNames);
  
  characters.forEach(character => console.log(`${character.name} is a ${character.type}.`));
  