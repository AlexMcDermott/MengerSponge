class Cube {
  constructor(x, y, z, size) {
    this.pos = createVector(x, y, z);
    this.size = size;
  }

  show() {
    push();
    translate(this.pos);
    ambientMaterial(255);
    box(this.size);
    pop();
  }

  generate() {
    let cubes = [];
    let newSize = this.size / 3;
    for (let z = -1; z <= 1; z++) {
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          let sum = abs(x) + abs(y) + abs(z);
          if (sum > 1) {
            let newX = this.pos.x + x * (newSize);
            let newY = this.pos.y + y * (newSize);
            let newZ = this.pos.z + z * (newSize);
            let c = new Cube(newX, newY, newZ, newSize);
            cubes.push(c);
          }
        }
      }
    }

    return cubes;
  }
}
