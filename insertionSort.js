import { colorChange, sleep } from "./util.js";
export default async function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
            bars[j + 1].style.backgroundColor = "red";
            bars[j + 1].innerHTML = `<div>${array[j + 1]}</div>`;
            await sleep(speedFactor);
            bars[j + 1].style.backgroundColor = "green";
            j = j - 1;
        }
        array[j + 1] = key;
        bars[j + 1].innerHTML = `<div>${array[j + 1]}</div>`;
        await colorChange(array, j + 1);
    }
    return new Promise((resolve) => {
        resolve(array);
    });
}
