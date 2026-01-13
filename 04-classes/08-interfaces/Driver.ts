import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//declare an array of Coach objects
let theCoaches: CricketCoach[] = [];

//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}