import {swap} from './util.js'
export default async function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) 
                await swap(array,j,j+1);
        }
    }
    return array;
}
