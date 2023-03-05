export default class bound {
  constructor(upperLeftX, upperLeftY, bottomRightX, bottomRightY) {
    this.upperLeftX = upperLeftX;
    this.upperLeftY = upperLeftY;
    this.bottomRightX = bottomRightX;
    this.bottomRightY = bottomRightY;
  }

  inBound(x, y){
    if (x>this.upperLeftX && x<this.bottomRightX && y>this.upperLeftY && y<this.bottomRightY) {
      return true;
    }
    return false;
  }


}