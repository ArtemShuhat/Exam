window.onload = function () {
  function Machine(info) {
    this.info = info;
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }

  Machine.prototype.run = function () {
    try {
      if (this.state == "started") {
        throw new Error("Машина зайнята!");
      } else {
        this.state = "started";
        this.info.innerHTML += "Починаю роботу...";
        this.info.innerHTML += "Час приготування - " + this.time + " ";
        this.interval = setInterval(
          function () {
            this.info.innerHTML += " | ";
          }.bind(this),
          1000
        );
        this.timer = setTimeout(this.onReady.bind(this), this.time);
        this.info.innerHTML += this.state;
      }
    } catch (ex) {
      this.info.innerHTML += ex.message;
    }
  };

  Machine.prototype.onReady = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.info.innerHTML += "Готово!";
    this.state = "stopped";
    this.info.innerHTML += this.state;
  };

  Machine.prototype.stop = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.info.innerHTML = "Примусове вимкнення!";
    this.state = "stopped";
    this.info.innerHTML += this.state;
  };

  function CofeeMachine(info) {
    this.drink = "вода";
    Machine.call(this, info);
  }

  CofeeMachine.prototype = Object.create(Machine.prototype);
  CofeeMachine.prototype.constructor = CofeeMachine;

  CofeeMachine.prototype.run = function (drink) {
    try {
      if (this.state == "started") {
        throw new Error("Машина зайнята!");
      } else {
        if (drink != undefined) {
          this.drink = drink;
        }
        this.info.innerHTML = "Приготування: " + this.drink + " ";
        if (this.drink == "latte") {
          this.time = 5000;
        }
        if (this.drink == "espresso") {
          this.time = 3000;
        }
        if (this.drink == "cappuccino") {
          this.time = 4000;
        }
        if (this.drink == "makachino") {
          this.time = 2000;
        }
        Machine.prototype.run.apply(this);
      }
    } catch (ex) {
      this.info.innerHTML += ex.message;
    }
  };

  // Buttons
  let info = document.getElementById("info");
  let stop = document.getElementById("stop");
  let latte = document.getElementById("latte");
  let makachino = document.getElementById("makachino");
  let cappuccino = document.getElementById("cappuccino");
  let espresso = document.getElementById("espresso");

  let sup = document.getElementById("sup");
  let steak = document.getElementById("steak");
  let boiledFish = document.getElementById("boiled_fish");
  let borsch = document.getElementById("borsch");
  
  let coffeeMachine = new CofeeMachine(info);

  latte.addEventListener("click", function () {
    coffeeMachine.run("latte");
  });

  espresso.addEventListener("click", function () {
    coffeeMachine.run("espresso");
  });

  cappuccino.addEventListener("click", function () {
    coffeeMachine.run("cappuccino");
  });

  makachino.addEventListener("click", function () {
    coffeeMachine.run("makachino");
  });

  stop.addEventListener("click", function () {
    coffeeMachine.stop();
  });

  function Multivare(info) {
    this.food = "Нічого";
    Machine.call(this, info);
  }

  Multivare.prototype = Object.create(Machine.prototype);
  Multivare.prototype.constructor = Multivare;

  Multivare.prototype.run = function (food) {
    try {
      if (this.state == "started") {
        throw new Error("Мультиварка зайнята!");
      } else {
        if (food != undefined) {
          this.food = food;
        }
        this.info.innerHTML = "Приготування: " + this.food + " ";
        if (this.food == "sup") {
          this.time = 5000;
        }
        if (this.food == "steak") {
          this.time = 3000;
        }
        if (this.food == "boiled fish") {
          this.time = 4000;
        }
        if (this.food == "borsch") {
          this.time = 2000;
        }
        Machine.prototype.run.apply(this);
      }
    } catch (ex) {
      this.info.innerHTML += ex.message;
    }
  };

  let multivare = new Multivare(info);

  borsch.addEventListener("click", function () {
    multivare.run("borsch");
  });

  boiledFish.addEventListener("click", function () {
    multivare.run("boiled fish");
  });

  steak.addEventListener("click", function () {
    multivare.run("steak");
  });

  sup.addEventListener("click", function () {
    multivare.run("sup");
  });

  stop.addEventListener("click", function () {
    multivare.stop();
  });
};
