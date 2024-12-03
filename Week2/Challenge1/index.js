// : Building with Closures and this keyword




// Object Methods and this
const Person = {
    name: "Alalinga",
    age: 95,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  Person.greet();
  
  //Event Handlers and this
  const button = document.getElementById("myButton");
  

  const arrowHandleClick = () => {
    console.log(this.id); 
    console.log(this.textContent);
  }
  function handleClick() {
    arrowHandleClick()
    console.log(this.id); 
    console.log(this.textContent);
  }

  button.addEventListener("click", handleClick);


  // Private Data with Closures and this
function createCounter() {
    let count = 0;
  
    return {
      increment() {
        count++;
        console.log(`Current count: ${count}`);
      },
      getCount() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  
  counter.increment(); 
  counter.increment();
  console.log(`Final count: ${counter.getCount()}`);
  

  
  // Timer Component with Closure and this
  function createTimer(duration, elementId) {
    let remainingTime = duration; 
  
    const element = document.getElementById(elementId);
  
    function updateTimer() {
      if (remainingTime > 0) {
        remainingTime--;
        element.textContent = remainingTime;
      } else {
        clearInterval(intervalId);
        console.log("Timer finished!");
      }
    }
  
    const intervalId = setInterval(updateTimer, 1000);
  }
  
  createTimer(10, 'timerDisplay');
  