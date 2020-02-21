new Vue({

    el: '#app',

    data: {
        humanHealth: 100,
        computerHealth: 100,
        gameIsRunning: false,
    },

    methods:{

        startGame(){
            this.gameIsRunning = true,
            this.humanHealth = 100,
            this.computerHealth = 100
        },

        attack(){
            
            this.computerHealth -= this.calculateDamage(3,10);

            if (this.checkWin()){

                return;

            }

            this.monsterAttack();

        },

        specialAttack(){

            this.computerHealth -= this.calculateDamage(10,20);

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
            
            this.monsterAttack();

        },

        giveUp(){


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

            this.humanHealth -= this.calculateDamage(5,12);

            this.checkWin();

        }
    }


    
});