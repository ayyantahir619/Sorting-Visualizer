import { sleep } from "./util.js";
async function insertionSort(array) {
    var length = array.length;

    for (var i = 1; i < length; i++) {
        var temp = array[i];
        for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return new Promise((res) => {
        res();
    });
}

export default async function bucketSort(array, bucketSize) {
    if (array.length === 0) {
        return array;
    }

    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;

    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    });

    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);

    for (i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
            currentVal
        );
    });

    array.length = 0;
    for (let i = 0; i < allBuckets.length; i++) {
        await insertionSort(allBuckets[i]);
        for (let j = 0; j < allBuckets[i].length; j++) {
            let index = array.push(allBuckets[i][j]) - 1;
            bars[index].style.height = array[index] * heightFactor + "px";
            bars[index].style.backgroundColor = "#0040FF";
            bars[index].innerHTML = `<div>${array[index]}</div>`;
            await sleep(speedFactor);
            bars[index].style.backgroundColor = "green";
        }
    }
    return array;
}
