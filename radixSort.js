import { colorChange } from "./util.js";

async function countSort(arr, n, exp) {
    let output = new Array(n);
    let i;
    let count = new Array(10);
    for (let i = 0; i < 10; i++) count[i] = 0;

    for (i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;
    for (i = 1; i < 10; i++) count[i] += count[i - 1];

    for (i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (i = 0; i < n; i++) {
        arr[i] = output[i];
        bars[i].innerHTML = `<div>${arr[i]}</div>`;
        await colorChange(arr, i);
    }
    return new Promise((resolve) => {
        resolve();
    });
}

export default async function radixsort(arr, n) {
    let m = Math.max(...arr);
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        await countSort(arr, n, exp);
    }
}
