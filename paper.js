class Paper {

    constructor(x, y, radius) {

        var options = {

            isStatic: false,

            restitution: 0.3,

            friction: 0.5,

            density: 1.2

        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);

    }


    display() {

        rectMode(CENTER);
        strokeWeight(0);
        fill('#E62020');

        rect(0, 0, this.width, this.height);
        
    }

}
