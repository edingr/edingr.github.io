function Ai() {
    this.init = function() {
        // This method is called when AI is first initialized.
    }

    this.restart = function() {
        // This method is called when the game is reset.
    }

    this.step = function(grid) {
        // This method is called on every update.
        // Return one of these integers to move tiles on the grid:
        // 0: up, 1: right, 2: down, 3: left

        // Parameter grid contains current state of the game as Tile objects stored in grid.cells.
        // Top left corner is at grid.cells[0][0], top right: grid.cells[3][0], bottom left: grid.cells[0][3], bottom right: grid.cells[3][3].
        // Tile objects have .value property which contains the value of the tile. If top left corner has tile with 2, grid.cells[0][0].value == 2.
        // Array will contain null if there is no tile in the slot (e.g. grid.cells[0][3] == null if bottom left corner doesn't have a tile).

        // Grid has 2 useful helper methods:
        // .copy()    - creates a copy of the grid and returns it.
        // .move(dir) - can be used to determine what is the next state of the grid going to be if moved to that direction.
        //              This changes the state of the grid object, so you should probably copy() the grid before using this.
        //              Naturally the modified state doesn't contain information about new tiles.
        //              Method returns true if you can move to that direction, false otherwise.

        // sample AI:
        var runter = 0;
        var rechts = 0;
        var tempcopy = grid.copy();
        var x = 0;
        var y = 0;
        console.log (tempcopy);
    
        for (i = 0; i < 4; ++i) { 
            for (j = 0; j < 3; ++j) { 
                k = j + 1;
                x = 0;
                y = 0;
                if (grid.cells[3][j] != null) {
                    x = grid.cells[3][j].value;
                }
                if (grid.cells[3][k] != null) {
                    y = grid.cells[3][k].value;
                }
                
                if (x > 0 || y > 0) {
                    if (x == y) {
                        runter = runter + 3;
                        console.log("Runter: " + runter);
                    } else {
                        rechts = rechts + 1;
                        console.log("Rechts: " + rechts);
                    } 
                }

                
                /*if (grid.cells[i][j] != null) {
                    console.log("x: " + i + " y: " + j + " value: " + grid.cells[i][j].value);
                } else {
                    console.log("x: " + i + " y: " + j + " value: 0");
                }*/
            };
        };

        
        /*if (this.foo == null) this.foo = 0;
        if (this.bar == null) this.bar = 0;
        this.foo = Math.random();
        this.foo = this.foo/3*10;
        this.bar = Math.round(this.foo);*/
        
        for (i = 0; i < 4; ++i) { 
            for (j = 0; j < 4; ++j) {
                if (tempcopy.cells[i][j] != null && grid.cells[i][j] != null) {
                    if (tempcopy.cells[i][j].value != grid.cells[i][j].value) {
                        different = 1;
                        console.log(different);
                    }
                }
            }
        }
        
        console.log("Runter: " + runter + " Rechts: " + rechts);
        if (rechts >= runter) {
            this.bar = 1;
            return this.bar;   
        } else {
            this.bar = 2;
            return this.bar;
        }
        
    }
}
