import quickSort from "./TimeAlgos/quickSort.js";
import bubbleSort from "./TimeAlgos/bubbleSort.js";
import mergeSort from "./TimeAlgos/mergeSort.js";
import insertionSort from "./TimeAlgos/insertionSort.js";
import heapSort from "./TimeAlgos/heapSort.js";
import countSort from "./TimeAlgos/countSort.js";
import radixSort from "./TimeAlgos/radixSort.js";
import bucketSort from "./TimeAlgos/bucketSort.js";
import MQS from "./TimeAlgos/MQS.js";
let file_input = document.getElementById("file");
let select_algo = document.getElementById("algo");
let calculate = document.getElementById("calc");
let ans = document.getElementById("ans");
let sorted = document.getElementById("arr");
let algo;
let unsorted_array = new Array();

file_input.addEventListener("change", function () {
    let file = file_input.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function () {
        let buffer = reader.result.split(",");
        var numberArray = buffer.map(Number);
        unsorted_array = numberArray;
    });
    reader.readAsText(file, "utf-8");
});

select_algo.addEventListener("change", function () {
    algo = select_algo.value;
});

calculate.addEventListener("click", function () {
    let start,
        end,
        array = new Array();
    switch (algo) {
        case "bubble":
            array = unsorted_array;
            start = performance.now();
            bubbleSort(array, array.length);
            end = performance.now();
            ans.innerHTML = `Bubble Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "merge":
            console.log(unsorted_array);
            array = unsorted_array;
            start = performance.now();
            mergeSort(array, 0, array.length - 1);
            end = performance.now();
            ans.innerHTML = `Merge Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "heap":
            array = unsorted_array;
            start = performance.now();
            console.log("before", array);
            heapSort(array);
            end = performance.now();
            ans.innerHTML = `Heap Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "insertion":
            array = unsorted_array;
            start = performance.now();
            insertionSort(array, array.length);
            end = performance.now();
            ans.innerHTML = `Insertion Sort took ${
                end - start
            } milliseconds on ${array.length} numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "quick":
            array = unsorted_array;
            start = performance.now();
            console.log("length", array.length);
            quickSort(array, 0, array.length - 1);
            end = performance.now();
            ans.innerHTML = `Quick Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "count":
            array = unsorted_array;
            start = performance.now();
            console.log("length", array.length);
            countSort(array);
            end = performance.now();
            ans.innerHTML = `Count Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "radix":
            array = unsorted_array;
            start = performance.now();
            console.log("length", array.length);
            radixSort(array, array.length);
            end = performance.now();
            ans.innerHTML = `Radix Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(
                `Call to doSomething took ${Math.floor(
                    end - start
                )} milliseconds`
            );
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "bucket":
            array = unsorted_array;
            start = performance.now();
            console.log("length", array.length);
            bucketSort(array);
            end = performance.now();
            ans.innerHTML = `Bucket Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        case "MQS":
            array = unsorted_array;
            start = performance.now();
            console.log("length", array.length);
            MQS(array, 0, array.length - 1);
            end = performance.now();
            ans.innerHTML = `Modified Quick Sort took ${
                end - start
            } milliseconds on ${array.length} numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
        default:
            array = unsorted_array;
            start = performance.now();
            bubbleSort(array, array.length);
            end = performance.now();
            ans.innerHTML = `Bubble Sort took ${end - start} milliseconds on ${
                array.length
            } numbers`;
            console.log(`Call to doSomething took ${end - start} milliseconds`);
            if (array.length <= 1000) {
                sorted.innerText = array;
            } else {
                sorted.innerText = "";
            }
            break;
    }
});
