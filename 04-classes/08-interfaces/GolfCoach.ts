import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkout(): string {
        return "Practice your putting hole for 30 minutes.";
    }
    
}