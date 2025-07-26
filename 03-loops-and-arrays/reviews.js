var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log("Review ".concat(i + 1, ": ").concat(reviews[i]));
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Total Reviews: ".concat(reviews.length));
console.log("Average Review: ".concat(average.toFixed(2)));
