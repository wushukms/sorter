class Sorter {
    constructor() {
        this.arr = [];
        this.criteria = (a, b) => a - b;
        // your implementation
    }

    add(element) {
        this.arr.push(element);
        // your implementation
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
        // your implementation
    }

    toArray() {
        return this.arr.valueOf();
        // your implementation
    }

    sort(indices) {
        let elements_number = indices.length;
        let arr2 = [];
        for (let i = 0 ; i < elements_number; i++){
            arr2.push(this.arr[indices[i]]);
            //this.arr[elements_number[i]]
        }
        indices.sort((a, b) => a - b);
        arr2.sort(this.criteria);
        for (let i = 0 ; i < elements_number; i++){
            this.arr[indices[i]]=arr2[i];
        }
        // your implementation
    }

    setComparator(compareFunction) {
        this.criteria = compareFunction;
        // your implementation
    }
}

module.exports = Sorter;