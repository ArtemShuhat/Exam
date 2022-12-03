"use script";
class Machine {
  constructor() {
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }
  run() {
    this.state = "started";
    document.write("Начинаю работу...");
    document.write("Время приготовления - " + this.time + " ");
    this.interval = setInterval(() => {
      document.write(" | ");
    }, 1000);
    //this.onReady.bind(this);
    this.timer = setTimeout(this.onReady, this.time);
    document.write(this.state);
  }
  onReady = () => {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("Готово! ");
    this.state = "stopped";
    document.write(this.state);
  };
  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("'Принудительное выключение!  ");
    this.state = "stopped";
    document.write(this.state);
  }
}

class CoffeeMachine extends Machine {
  constructor() {
    super();
    this.drink = "вода";
  }
  run(drink) {
    if (drink != undefined) this.drink = drink;
    document.write("Приготовление: " + this.drink + " ");
    if (this.drink == "латте") {
      this.time = 5000;
    }
    if (this.drink == "espresso") {
      this.time = 3000;
    }
    super.run();
  }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.run("латте");
