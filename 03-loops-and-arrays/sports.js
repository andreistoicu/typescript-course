var sports = ["Soccer", "Basketball", "Tennis", "Baseball", "Hockey"];
/*
for (let i = 0; i < sports.length; i++) {
    console.log(`Sport ${i + 1}: ${sports[i]}`);
}

for (let sport of sports) {
    console.log(`Sport: ${sport}`);
}
*/
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport === "Tennis") {
        console.log("Found my favorite sport: ".concat(sport));
        break; // Exit the loop when the sport is found
    }
    else {
        console.log("Not my favorite sport: ".concat(sport));
    }
}
