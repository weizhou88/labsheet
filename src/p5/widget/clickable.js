export default class clickable {
  constructor(p, bound) {
    this.p = p;
    this.bound = bound;  
    this.isHovered = false;
  
    //when mouse move, call this function to check if the mouse is in the bound
    this.p.mouseMoved = (event) => {
      if (this.bound.inBound(this.p.mouseX, this.p.mouseY)) {
        this.isHovered = true;
      }
      else{
        this.isHovered = false;
      }
      return false;
    }   
  } 
}