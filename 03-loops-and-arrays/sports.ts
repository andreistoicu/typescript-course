let sports: string[] = ["Soccer", "Basketball", "Tennis", "Baseball", "Hockey"];

/*
for (let i = 0; i < sports.length; i++) {
    console.log(`Sport ${i + 1}: ${sports[i]}`);
}

for (let sport of sports) {
    console.log(`Sport: ${sport}`);
}
*/

for (let sport of sports) {
    if (sport === "Tennis") {
        console.log(`Found my favorite sport: ${sport}`);
        break; // Exit the loop when the sport is found
    } else {
        console.log(`Not my favorite sport: ${sport}`);
    }
}