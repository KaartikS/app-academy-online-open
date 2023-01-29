class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = [];
    this.data.length = defaultSize;
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    if(this.length === 0){
      this.length += 1;
      this.data[0] = val;
    }
    else 
    {
      this.length += 1;
      for(let i = this.data.length - 1; i > 0 - 1; i--){
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
    }
  }
}

module.exports = DynamicArray;