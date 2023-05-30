import { createRandomArray } from "./util.js";
import bubbleSort from "./bubbleSort.js";
import quickSort from "./quickSort.js";
import insertionSort from "./insertionSort.js";
import mergeSort from "./mergeSort.js";
import heapSort from "./heapSort.js";
import countSort from "./countSort.js";
import radixSort from "./radixSort.js";
import bucketSort from "./bucketSort.js";
import MQS from "./modifiedQuickSort.js";
window.speedFactor = 100;
window.max = 100;
window.heightFactor = (4 / max) * 100;
console.log("height", heightFactor);
window.bars = document.getElementsByClassName("bar");
let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let select_algo = document.getElementById("algo");
let slider = document.getElementById("slider");
let length_input = document.getElementById("length");
let time = document.getElementById("time");
let file_input = document.getElementById("file");
let numOfBars = 50;
let unsorted_array = new Array(numOfBars);
let algo = "";

file_input.addEventListener("change", function () {
    let file = file_input.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function () {
        let buffer = reader.result.split(",");
        var numberArray = buffer.map(Number);
        bars_container.innerHTML = "";
        unsorted_array = numberArray;
        numOfBars = unsorted_array.length;
        renderBars(unsorted_array);
    });
    reader.readAsText(file, "utf-8");
});
time.addEventListener("click", function () {
    window.location = "/Benchmark.html";
});

slider.addEventListener("change", function () {
    speedFactor = 150 - slider.value;
    console.log(speedFactor);
});
length_input.addEventListener("input", function () {
    numOfBars = length_input.value;
    bars_container.innerHTML = "";
    unsorted_array = createRandomArray(numOfBars, 1, max);
    renderBars(unsorted_array);
});

select_algo.addEventListener("change", function () {
    if (select_algo.value === "range") {
        window.location = "/range.html";
    } else algo = select_algo.value;
});

document.addEventListener("DOMContentLoaded", function () {
    unsorted_array = createRandomArray(numOfBars, 1, max);
    renderBars(unsorted_array);
});

function renderBars(array) {
    console.log("file array", array, numOfBars);
    for (let i = 0; i < numOfBars; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.innerHTML = `<div>${array[i]}</div>`;
        bar.style.height = array[i] * heightFactor + "px";
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function () {
    unsorted_array = createRandomArray(numOfBars, 1, max);
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
});

sort_btn.addEventListener("click", function () {
    switch (algo) {
        case "bubble":
            bubbleSort(unsorted_array);
            break;
        case "merge":
            mergeSort(unsorted_array, 0, unsorted_array.length - 1);
            break;
        case "heap":
            heapSort(unsorted_array);
            break;
        case "insertion":
            insertionSort(unsorted_array);
            break;
        case "quick":
            quickSort(unsorted_array, 0, unsorted_array.length - 1);
            break;
        case "count":
            countSort(unsorted_array);
            break;
        case "radix":
            radixSort(unsorted_array, unsorted_array.length);
            break;
        case "bucket":
            bucketSort(unsorted_array, 5);
            break;
        case "MQS":
            MQS(unsorted_array, 0, unsorted_array.length - 1);
            break;
        default:
            bubbleSort(unsorted_array);
            break;
    }
});
