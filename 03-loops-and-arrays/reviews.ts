let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(`Review ${i + 1}: ${reviews[i]}`);
    total += reviews[i];
}

let average: number = total / reviews.length;

console.log(`Total Reviews: ${reviews.length}`);
console.log(`Average Review: ${average.toFixed(2)}`);