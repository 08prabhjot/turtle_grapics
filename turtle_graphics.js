class Turtle {
  constructor (x, y) {
      this.x = x || 0;
      this.y = y || 0;
      this.direction = 'east';
      this.angle = 0;
      this.steps = [
          [this.x, this.y]
      ];
  };

  forward (step) {
    for (let i = 0; i < step; i++) {
        if (this.angle === 0) {
            this.x++;
        } else if (this.angle === 90) {
            this.y--;
        } else if (this.angle === 180) {
            this.x--;
        } else if (this.angle === 270) {
            this.y++;
        } else {
            return this;
        }
        this.steps.push([this.x, this.y]);
    }
    return this;
  }

  right () {
    this.angle += 90;
    if (this.angle === 90) {
        this.direction = 'south';
    } else if (this.angle === 180) {
        this.direction = 'west';
    } else if (this.angle === 270) {
        this.direction = 'north';
    } else {
        this.direction = 'east';
        this.angle = 0;
    }
    return this;
  };

  left () {
    this.angle -= 90;
    if (this.angle === 90) {
        this.direction = 'south';
    } else if (this.angle === 180) {
        this.direction = 'west';
    } else if (this.angle === -90 || this.angle === 270) {
        this.angle = 270;
        this.direction = 'north';
    } else {
        this.direction = 'east';
        this.angle = 0;
    }
    return this;
  };

  allPoints () {
    return this.steps;
  };

  print () {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    for (let step of this.steps) {
        if (step[0] > maxX) {
            maxX = step[0];
        }
        if (step[1] > maxY) {
            maxY = step[1];
        }
        if (step[0] < minX) {
            minX = step[0];
        }
        if (step[1] < minY) {
            minY = step[1];
        }
    };

    const turtleFootprint = (x, y) => {
      for (let step of this.steps) {
          if (step[0] === x && step[1] === y)
          return true;
      }
      return false;
    };
    
    for (let y = maxY + 1; y >= minY; y--) {
      let row = '';
      for (let x = minX; x <= maxX + 1; x++ ) {
          if (turtleFootprint (x, y)) {
            row += ' ○ ';
          } else {
            row += ' - ';
          }
      }
      console.log(row);
    }
  };
};

const tango = new Turtle();
tango.forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();