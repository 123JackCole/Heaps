const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

const heapify = (arr, length, i) => {

    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let max = i;

    if (left < length && arr[left] > arr[max]) max = left;
    if (right < length && arr[right] > arr[max]) max = right;

    if (max !== i) {
        swap(arr, i, max);
        heapify(arr, length, max);
    }

}

const heapSort = (arr) => {
    length = arr.length;

    for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
        heapify(arr, length, i);
    }

    for (let i = length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }

    return arr;
}

const array = [5, 88, 47, 17, 48, 9, 1, 8, 99, 33, 26];

console.log(array);
console.log(heapSort(array));