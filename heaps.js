function Heap() {
    this.content = [];
}

Heap.prototype = {

    push

}

const swap = (a, b) => {
    [this.content[a], this.content[b]] = [this.content[b], this.content[a]];
}

const moveUp = (index) => {

    let element = this.content[index];

    while (index > 0) {

        let parentIndex = Math.floor((index + 1) / 2) - 1, // Math.floor((index + 1) / 2)
            parent = this.content[parentIndex];

        if (parent >= element) return true;

        swap(parentIndex, index);
        index = parentIndex;

    }

    return false;

}

const moveDown = (index) => {
   
    

}