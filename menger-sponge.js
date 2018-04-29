class MengerSponge {
  constructor(x, y, z, size) {
    let baseCube = new Cube(x, y, z, size);
    this.cubes = [baseCube];
  }

  show() {
    this.cubes.forEach((cube) => {
      cube.show();
    });
  }

  generate() {
    let nextCubes = [];
    this.cubes.forEach((cube) => {
      nextCubes.push(...cube.generate());
    });
    this.cubes = nextCubes;
  }
}
