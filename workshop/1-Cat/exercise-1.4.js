// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
class Cat {
    // Add code here
    constructor(name, breed, tiredness, hunger, loneliness){
     this.breed = breed;
     this.name = name;
     this.species = 'cat';
     this.tiredness = tiredness;
     this.hunger = hunger;
     this.loneliness = loneliness;
     this.happiness =0;
     
    }
    wait(minutes){
        this.tiredness += minutes *  4;
        this.hunger += minutes * 5;
        this.loneliness += minutes * 3
        this.updateHappiness();
    }
    sleep(hours){
        let rest = hours * 10;
        if(this.tiredness < rest){
            this.tiredness = 0;
        } else{
            this.tiredness -= rest
        }
        this.updateHappiness()
    }
    eat(kibbles){
        this.hunger -= (kibbles/5)
        this.updateHappiness()
    }

    play(minutes){
        this.loneliness -= (minutes/3)
        this.updateHappiness()
    }
    updateHappiness(){
        this.happiness = (this.hunger * 2) + (this.loneliness) + this.tiredness
    }
     
  }
  let boots = new Cat('boots', 'egypsian', 50, 50, 150);
  boots.wait(5)
  console.log(
      boots
  )