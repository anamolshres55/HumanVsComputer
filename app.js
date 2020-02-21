new Vue({

    el: '#app',

    data: {
        humanHealth: 100,
        computerHealth: 100,
        gameIsRunning: false,
        turns: []
    },

    methods:{

        startGame(){
            this.gameIsRunning = true,
            this.humanHealth = 100,
            this.computerHealth = 100,
            this.turns = []
        },

        attack(){
            
            var damage = this.calculateDamage(3,10);
            this.computerHealth -= damage

            this.turns.unshift({
                isHuman: true,
                text: 'Human kicks Computer for ' + damage
            });

            if (this.checkWin()){

                return;

            }

            this.monsterAttack();

        },

        specialAttack(){

            var damage = this.calculateDamage(10,20);

            this.computerHealth -= damage;

            this.turns.unshift({
                isHuman: true,
                text: 'Human flying kicks Computer for ' + damage
            });

            if (this.checkWin()){

                return;

            }

            this.monsterAttack();

        },

        heal(){

            if(this.humanHealth <= 90) {

                this.humanHealth += 10;
            }

            else{

                this.humanHealth = 100;
            }

            this.turns.unshift({
                isHuman: true,
                text: 'Human blesses himself with 10hp '
            });

            this.monsterAttack();

        },

        giveUp(){
            
            this.startGame();
            this.gameIsRunning = false;
        },

        calculateDamage(min, max){

            return Math.max(Math.floor(Math.random() * max) + 1, min);

        },

        checkWin(){

            if(this.computerHealth <= 0){

                if(confirm('You won! Another Round?')){

                    this.startGame();

                }
                else{

                    this.gameIsRunning = false;

                }
                return true;
            }

            else if(this.humanHealth <= 0){
                if(confirm('You lost, jokes on you! Another Round?')){

                    this.startGame();

                }
                else{

                    this.gameIsRunning = false;

                }
                return true;
            }
            
            return false;
        },

        monsterAttack(){

            var damage = this.calculateDamage(5,12);
            this.humanHealth -= damage

            this.checkWin();

            this.turns.unshift({
                isHuman: false,
                text: 'Computer kicks Human for ' + damage
            });

        }
    }


    
});