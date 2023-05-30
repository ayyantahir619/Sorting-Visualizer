let a = document.getElementById("A");
let b = document.getElementById("B");
let button = document.getElementById("btn");
let answer = document.getElementById("answer");
let output_array = document.getElementById("array");
let randomize = document.getElementById("random-btn");
let file_input = document.getElementById("file");

let n = 100;
let array = new Array(n);
array = createRandomArray(array, n);
randomize.addEventListener("click", function () {
    array = createRandomArray(array, n);
    console.log(array);
});

button.addEventListener("click", function () {
    run();
});

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray(array, n) {
    for (let i = 0; i < n; i++) {
        array[i] = randomNum(1, 1000);
    }

    return array;
}
file_input.addEventListener("input", function () {
    let file = file_input.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function () {
        let buffer = reader.result.split(",");
        var numberArray = buffer.map(Number);
        console.log(numberArray);
        array = numberArray;
        output_array.innerHTML = "";
        output_array.innerHTML += `Given Array: ${array}`;
    });
    reader.readAsText(file, "utf-8");
});
function run() {
    console.log(a.value, b.value);
    if (a.value === null || b.value === null) return;
    console.log(array);
    findRange(array, a.value, b.value);
}
function findRange(arr, a, b) {
    console.log(arr);
    if (b < a) return;
    let n = arr.length;
    let k = Math.max(...arr);
    if (b > k) b = k;
    const temp = new Array(k + 1).fill(0);
    for (let i = 0; i < n; i++) temp[arr[i]]++;
    for (let i = 1; i <= k; i++) {
        temp[i] += temp[i - 1];
    }
    let output = `Numbers in given range of A and B are  ${temp[b] - temp[a]}`;
    answer.innerHTML = " ";
    answer.innerHTML += output;
    console.log(answer);
    output_array.innerHTML = "";
    output_array.innerHTML += `Given Array: ${arr}`;
}
