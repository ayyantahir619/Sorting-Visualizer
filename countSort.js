import { sleep } from "./util.js";

export default async function countSort(inputArr) {
    let n = inputArr.length;
    let k = Math.max(...inputArr);
    let t;

    const temp = new Array(k + 1).fill(0);

    for (let i = 0; i < n; i++) {
        t = inputArr[i];
        temp[t]++;
    }
    for (let i = 1; i <= k; i++) {
        temp[i] = temp[i] + temp[i - 1];
    }

    const outputArr = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let t = inputArr[i];
        outputArr[temp[t] - 1] = t;
        bars[temp[t] - 1].style.height = t * heightFactor + "px";
        bars[temp[t] - 1].style.backgroundColor = "#0040FF";
        bars[temp[t] - 1].innerHTML = `<div>${t}</div>`;
        await sleep(speedFactor);
        bars[temp[t] - 1].style.backgroundColor = "green";
        temp[t] = temp[t] - 1;
    }
    return outputArr;
}
