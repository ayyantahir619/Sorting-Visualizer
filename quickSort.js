import { swap } from "./util.js";

async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    console.log(low, high);
    console.log(pivot - 1);
    bars[high].style.backgroundColor = "red";
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            await swap(arr, i, j);
        }
    }
    await swap(arr, i + 1, high);
    bars[high].style.backgroundColor = "green";
    return new Promise((resolve) => {
        resolve(i + 1);
    });
}

export default async function quickSort(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
    return new Promise((res) => res());
}
