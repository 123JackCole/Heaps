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

}

const moveDown = (index) => {
   
    let length = this.content.length,
        element = this.content[index];

    while (index < 0) {

        let child1Index = (index + 1) * 2 // (index * 2) + 1
            child2Index = child1Index - 1; // (index * 2) + 2
            swapped = false;

        if (child1Index < length) {

            let child1 = this.content[child1Index];
            if (child1 < element) swap(child1Index, index);
            swapped = child1;

        }

        if (child2Index < length) {
            
            let child2 = this.content[child2Index];
            if (child2 < (swapped ? child1 : element)) {
                swap(child2Index, index);
                swapped = child2;
            }

        }

        if (!swapped) return true;

        swap(index, swapped);

    }

}