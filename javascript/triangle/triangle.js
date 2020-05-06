export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sides = [sideOne, sideTwo, sideThree].sort((a, b) => a - b);
  }

  isEquilateral() {
    return (
      this.sides[0] > 0 &&
      this.sides[0] === this.sides[1] &&
      this.sides[0] === this.sides[2]
    );
  }

  isIsosceles() {
    return (
      this.sides[0] > 0 &&
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      (this.sides[0] === this.sides[1] ||
        this.sides[0] === this.sides[2] ||
        this.sides[1] === this.sides[2])
    );
  }

  isScalene() {
    return (
      this.sides[0] > 0 &&
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      this.sides[0] !== this.sides[1] &&
      this.sides[0] !== this.sides[2] &&
      this.sides[1] !== this.sides[2]
    );
  }
}
