class ArrayPopper {
    constructor(arr) {
      this.arr = arr;
      this.atBeginning = true;
    }
  
    togglePopper() {
      this.atBeginning = !this.atBeginning;
      return this.atBeginning ? this.arr.pop() : this.arr.shift();
    }
  }
  
  const ap = new ArrayPopper([1, 2, 3, 4, 5]);
  
  ap.togglePopper(); //? 1
  ap.togglePopper(); //? 5
  ap.togglePopper(); //? 2
  ap.togglePopper(); //? 4
  ap.togglePopper(); //? 3
 


  const strap = new ArrayPopper(['MD','Selam', 'SD', 'ND']);

  strap.togglePopper(); //? MD
  strap.togglePopper(); //? ND
  strap.arr;            //? [Selam, SD]
  strap.togglePopper(); //? Selam
  strap.togglePopper(); //? SD
  strap.togglePopper(); //? undifened
  strap.arr;            //? []

  //yorum yazildi