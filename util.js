function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    bars[leftIndex].style.height = items[leftIndex] * heightFactor + "px";
    bars[leftIndex].style.backgroundColor = "#0040FF";
    bars[leftIndex].innerHTML = `<div>${items[leftIndex]}</div>`;
    bars[rightIndex].style.height = items[rightIndex] * heightFactor + "px";
    bars[rightIndex].style.backgroundColor = "#0040FF";
    bars[rightIndex].innerHTML = `<div>${items[rightIndex]}</div>`;
    await sleep(speedFactor);
    bars[rightIndex].style.backgroundColor = "green";
    bars[leftIndex].style.backgroundColor = "green";
}
async function colorChange(arr, k) {
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "#0040FF";
    await sleep(speedFactor);
    bars[k].style.backgroundColor = "green";
    return new Promise((resolve) => {
        resolve();
    });
}
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray(numOfBars, minRange, maxRange) {
    let array = new Array(numOfBars);
    for (let i = 0; i < numOfBars; i++) {
        array[i] = randomNum(minRange, maxRange);
    }

    return array;
}
export { sleep, swap, colorChange, createRandomArray };
