let choice = prompt("AM/PM or MilitaryTime?");
function Clock(seconds,minutes,hours){
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.setTime = function(){
       let currentTime = new Date();
       //12-hour format
       let amOrPm = document.write(currentTime.toLocaleTimeString('en-US'));
       //24-hour format
       let militaryTime = document.write(currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());  
    };
    this.displayTime = function(){
        switch (choice) {
            case "AM".toLowerCase():
            case "PM".toLowerCase():  
                const time = this.setTime(); //function call
                document.write(time.amOrPm);           
                break; 
            case "MilitaryTime":
                const military = this.setTime(); //functon call
                document.write(military.militaryTime);
                break;
            default:
                alert("make a choice!");
                break;
        }
    };
}
const hermanClock = new Clock();
document.write(hermanClock.displayTime());
