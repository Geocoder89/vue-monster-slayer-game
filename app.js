new Vue ({
    el:'#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },

    methods: {
       startGame: function () {
           this.gameIsRunning =true;
           this.playerHealth = 100;
           this.monsterHealth = 100;
           this.turns = [];
       },
       attack: function ()
       {
        // we set the initial minimum and maximum attack values in this case 10 and 2 and hence we set a variable to check for damage and in this case we seek for a random value,the initial values range from 0 to .99 and hence to be as close to our maximum value we multiply it by our maximum value this will give us values between 0-9 when we then floor it but to get values up to 10 we add 1 to it and then use the maximum math function which will select the random number if greater than 2 our minimum number or the minimum number if less than 2

        var damage =  this.calculateDamage(2,10);

        this.monsterHealth -= damage;
        this.turns.unshift({
            isPlayer: true,
            text: `Player hits Monster for ${damage} points`
        })

        if(this.checkWin()) {
            return;
        }

        this.monsterAttacks();

       },

       specialAttack: function () {
        var damage =  this.calculateDamage(10,20);
        this.monsterHealth -= damage;
        this.turns.unshift({
            isPlayer: true,
            text: `Player's special attack hits Monster for ${damage} points`
        })
        if(this.checkWin()) {
            return;
        }

        this.monsterAttacks();
       },

       heal: function () {
        if(this.playerHealth <= 90) {
            this.playerHealth += 10
        } else {
            this.playerHealth = 100;
        }
        this.turns.unshift({
            isPlayer: true,
            text: `Player heals for 10 points`
        })

       },
       giveUp: function () {
        this.gameIsRunning = false;
       },
       monsterAttacks: function () {
    // monsterattack logic
        var damage = this.calculateDamage(5,12);
        this.playerHealth -= damage;
        this.turns.unshift({
            isPlayer: false,
            text: `Monster hits Player for ${damage} points`
        })

        this.checkWin();
       },

       calculateDamage: function (minimum,maximum) {
       return Math.max(Math.floor(Math.random()* maximum) + 1,minimum);
       },
       checkWin: function () {
        if(this.monsterHealth <=0) {
            if(confirm('You won,New game?')){
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
            return true;
        } else if (this.playerHealth <=0) {
            if(confirm('You lost,New game?')){
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
            return true;
        }
        return false;
       }
    }

})

/*

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

function sumPrimes(num) {
  return num;
}

sumPrimes(10);

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

// function sumPrimes(num) {
//   var sumArr = [];
//   for (var i = 0; i <= num; i++) {
//     if (isPrime(i)) 
//     sumArr.push(i);
//   }

//   sumArr = sumArr.reduce(function (a, b) {
//     return a + b;
//   });

//   return sumArr;
// }

// function isPrime(num) {
//   if (num < 2) return false;

//   for (let i = 2; i < num; i++) {
//     var primeDivide = num % i;
//     if (primeDivide === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// // }

// console.log(sumPrimes(10));
