var TETRIS = TETRIS || {};
var Block = TETRIS.Block = function(x, y) {
  this.x = x;
  this.y = y;

  this.rotate = function(pivotX, pivotY, degree) {

    // If not on a central axis
    if (pivotX !== this.x && pivotY !== this.y) {
      // console.log('off center')
      this.offCenterRotate(pivotX, pivotY)
    } else if (pivotX === this.x && pivotY === this.y) {
      console.log('i am the pivot ' + pivotX + ' '+ pivotY)
    } else {
      this.rotateRight(pivotX, pivotY)
    }// else {
    //   console.log('roate lefts')
    //   this.rotateLeft(pivotX, pivotY)
    // }
  }

  // May not need this at all
  // this.rotateLeft = function(pivotX, pivotY) {
  //   // explicit logic
  //   var leftOrAtPivot = this.x <= pivotX;
  //   var rightOrAtPivot = this.x >= pivotX;
  //   var belowOrAtPivot = this.y <= pivotY;


  //   // if on -x or -y axis, increase x coord
  //   // otherwise decrease
  //   if (leftOrAtPivot && belowOrAtPivot) {
  //     console.log('-x or -y')
  //     this.x++
  //   } else {
  //     console.log('+x or +y')
  //     this.x--
  //   }

  //   // if on -y or +x axis, decrease y coord (visually move up)
  //   if (belowOrAtPivot && rightOrAtPivot) {
  //     console.log('+x or -y')
  //     this.y--
  //   } else {
  //     console.log('-x or +y')
  //     this.y++
  //   }
  // }

  this.rotateRight = function(pivotX, pivotY) {
    // explicit logic
    // console.log('in rotate right')
    var leftOrAtPivot = this.x <= pivotX;
    var rightOrAtPivot = this.x >= pivotX;
    var aboveOrAtPivot = this.y <= pivotY; // visually above
    var belowOrAtPivot = this.y >= pivotY; // visually below
    // console.log('before x, y ' + this.x + ' ' +this.y)
    

    // if on -x or -y axis, decrease y coord (visually move up)
    // otherwise decrease
    if (leftOrAtPivot && belowOrAtPivot) {
      // console.log('-x or -y')
      this.y--
    } else {
      // console.log('+x or +y')
      this.y++
    }

    // if on -y or +x axis, decrease x coord
    if (belowOrAtPivot && rightOrAtPivot) {
      // console.log('+x or -y')
      // console.log('my x: ' + this.x)
      // console.log('my y: ' + this.y)
      this.x--
    } else {
      // console.log('-x or +y')
      this.x++
    }
    // console.log('after x, y ' + this.x + ' ' + this.y)

  }

  this.offCenterRotate = function(pivotX, pivotY) {
    var toLeft = this.x < pivotX
    var above = this.y < pivotY //visually
    var toRight = this.x > pivotX
    var below = this.y > pivotY // visually

    if (toRight && above) {
      // console.log('upperright')
      this.y += 2
    } else if (toRight && below){
      // console.log('lerright')
      this.x -= 2
    } else if (toLeft && below) {
      // console.log('lowerleft')
      this.y -= 2
    } else if (toLeft && above) {
      // console.log('upperleft')
      this.x += 2
    } else {
      console.log('something went wrong')
    }
  }
}