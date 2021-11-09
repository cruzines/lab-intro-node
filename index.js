class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((first, second) => {
      return first - second;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] != undefined) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0;
    if (!this.items.length) {
      return 0;
    } else {
      this.items.forEach((ele) => (sum += ele));
    }
    return sum;
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;