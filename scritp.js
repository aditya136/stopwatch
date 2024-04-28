const stopwatch = {
    start_Time: 0,
    stop_Time: 0,
    timer_runing: false,
    start: function(){
        if (this.timer_runing === true){
            console.log("Your timer is runing. Press stop to stop the timer!");
            document.getElementById("time").innerText = "Your timer is runing. Press stop to stop the timer!"
        }
        else{
            this.timer_runing = true;
            this.start_Time = new Date();
            console.log("started");
            document.getElementById("time").innerText = "Your timer has started"
        }       
    },
    stopTime: function(){
        if(this.timer_runing === false && this.start_Time !== 0){
            console.log("First reset your timer!");
            document.getElementById("time").innerText = "First, reset your timer to use it again!"
        } 
        else if(this.timer_runing === false && this.start_Time === 0){
            console.log("First start your timer!");
            document.getElementById("time").innerText = "First start your timer!"
        }
        else{
            this.stop_Time = new Date();
            console.log("stoped");
            let timeElapsed = this.stop_Time - this.start_Time;
            console.log("Your time: " + timeElapsed + " milliseconds");
            document.getElementById("time").innerText = timeElapsed + " milliseconds"
            this.timer_runing = false;
        }
    },
    reset: function(){
        if(this.timer_runing === true){
            console.log("First, stop your timer to reset it!");
            document.getElementById("time").innerText = "First, stop your timer to reset it!"
        }
        else{
        this.start_Time = 0;
        this.stop_Time = 0;
        console.log("Time reseted...");
        document.getElementById("time").innerText = "Your time will show here!"
        }
    }
};


function startStopwatch(){
    stopwatch.start();
}

function stopStopwatch(){
    stopwatch.stopTime();
}

function resetStopwatch(){
    stopwatch.reset();
}