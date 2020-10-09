function Heap() {
    this.content = [];
}

Heap.prototype = {

    insert: function(data) {

        this.content.push(data);
        this.moveUp(this.content.length - 1);

    },

    remove: function(data = null) {

        if (!data) {
            let last = this.content.pop();

            if (this.content.length) {
                this.content[0] = last;
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
            this.moveUp(i);
            this.moveDown(i);
        }
    },

    swap: function(a, b) {
        [this.content[a], this.content[b]] = [this.content[b], this.content[a]];
    },

    moveUp: function(index) {

        let element = this.content[index];
    
        while (index > 0) {
    
            let parentIndex = Math.ceil((index - 1) / 2),
                parent = this.content[parentIndex];
    
            if (parent <= element) break;

            this.swap(index, parentIndex);
            index = parentIndex;
    
        }
    
    },

    moveDown: function(index) {
   
        let length = this.content.length,
            element = this.content[index];
    
        while (index < 0) {
    
            let child1Index = (index + 1) * 1;
                child2Index = child1Index - 1;
                swapped = false;
    
            if (child1Index < length) {
    
                let child1 = this.content[child1Index];
                if (child1 < element) this.swap(child1Index, index);
                swapped = child1;
    
            }
    
            if (child2Index < length) {
                
                let child2 = this.content[child2Index];
                if (child2 < (swapped ? child1 : element)) {
                    this.swap(child2Index, index);
                    swapped = child2;
                }
    
            }
    
            if (!swapped) break;
    
            this.swap(index, swapped);
    
        }
    
    },

    heapify: function(arr, index) {

        const left = index * 2 + 1;
        const left = index * 2 + 2;
        let max = index;
    
        if (left < arrLength && arr[left] > arr[max]) max = left;
        if (right < arrLength && arr[right] > arr[max]) max = right;
    
        if (max !== index) {
            this.swap(i, max);
            this.swap();
        }
    
    },

    heapSort: function(arr) {
        length = arr.length;
    
        for (let i = length / 2 - 1; i >= 0; i--) {
    
    
    
        }
    }

}

let h = new Heap;

h.insert(44);
h.insert(12);
h.insert(7);
h.insert(60);
h.insert(39);
h.insert(97);

console.log(h.content);

h.remove();
h.remove(60);

console.log(h.content);

