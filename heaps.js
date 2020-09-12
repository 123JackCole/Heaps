function Heap() {
    this.content = [];
}

Heap.prototype = {

    insert: function(data) {

        this.content.push(data);
        moveUp(this.content.length - 1);

    },

    remove: function(data = null) {

        if (!data) {
            let last = this.content.pop();

            if (this.content.length) {
                this.content.unshift(last);
                this.moveDown(0);
            }

            return true;
        }
        
        let length = this.content.length;

        for (let i = 0; i < length; i++) {

            if (this.content[i] !== data) continue;

            let last = this.content.pop();
            if (i === length - 1) return true;

            this.content[i] = last;
            moveUp(i);
            moveDown(i);

        }
    }

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

let h = new Heap;
h.insert()