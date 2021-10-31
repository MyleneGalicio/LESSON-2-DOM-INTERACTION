new Vue ({
    el: '#assignment',
    data: {
        counter: 0,
        timer: 5000,
        value: 0,
        
    },
    watch: {
        counter(value) {
            if(value > 37) {
                const that =this;
                setTimeout(function() {
                    that.counter = 0;
                }, 5000)
            }
        }
    },
    methods: {
        
        add() {
            this.counter = this.counter +5;
          
        },
        Add() {
            this.counter = this.counter +1;
        },
        result() {
            if (this.counter == 0) {
                return this.counter;
            }
            else if (this.counter > 0 && this.counter < 37) {
                return'Almost there! Add more!';
            }
            else if (this.counter > 37){
                return "That's too much!";
            }
            return this.counter;
            
        },
        
    },

});