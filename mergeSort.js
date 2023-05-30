import { colorChange } from "./util.js";

async function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    var n2 = right - mid;

    let leftTemp = new Array(n1);
    let rightTemp = new Array(n2);

    for (let i = 0; i < n1; i++) leftTemp[i] = arr[left + i];
    for (let j = 0; j < n2; j++) rightTemp[j] = arr[mid + 1 + j];

    let i = 0,
        j = 0,
        k = left;

    while (i < n1 && j < n2) {
        if (leftTemp[i] <= rightTemp[j]) {
            arr[k] = leftTemp[i];
            i++;
        } else {
            arr[k] = rightTemp[j];
            j++;
        }
        bars[k].innerHTML = `<div>${arr[k]}</div>`;
        await colorChange(arr, k);
        k++;
    }
    while (i < n1) {
        arr[k] = leftTemp[i];
        bars[k].innerHTML = `<div>${arr[k]}</div>`;
        await colorChange(arr, k);
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = rightTemp[j];
        bars[k].innerHTML = `<div>${arr[k]}</div>`;
        await colorChange(arr, k);
        j++;
        k++;
    }
    return new Promise((resolve) => {
        resolve();
    });
}

export default async function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    var mid = left + parseInt((right - left) / 2);
    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
    return new Promise((resolve) => {
        resolve();
    });
}
