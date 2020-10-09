heapify: function(arr, i) {

    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let max = i;

    if (left < arrLength && arr[left] > arr[max]) max = left;
    if (right < arrLength && arr[right] > arr[max]) max = right;

    if (max !== i) {
        this.swap(i, max);
        this.heapify(arr, max);
    }

},

heapSort = (arr) => {
    length = arr.length;

    for (let i = length / 2 - 1; i >= 0; i--) {
        this.heapify(arr);
    }

    for (let i = length - 1; i > 0; i--) {
        this.swap(0, i);
        arr.pop();
        this.heapify(arr, 0);
    }

    return arr;
}