class Naruto {
    constructor(game) {
        this.spritesheet = ASSET_MANAGER.getAsset("./naruto.png");

        this.x = 100;
        this.y = 100;

        this.facing = 0; // 0 = right, 1 = left
        this.game = game;
        this.animations = [];

        this.animations.push(new Animator(this.spritesheet, 30, 291, 38, 69, 6, 0.2, 82, false, true));

        this.animations.push(new Animator(this.spritesheet, 748, 291, 38, 69, 1, 0.2, 0, false, true));

    }

    draw(ctx) {
        if (this.facing == 0) {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        } else {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        }
    }

    update() {
        if (this.game.left) {
            this.facing = 1;
            this.x -= 10;
        }

        if (this.game.right) {
            this.facing = 0;
            this.x += 10;
        }

        if (this.game.up) {
            this.y -= 10;
        }

        if (this.game.down) {
            this.y += 10;
        }
    }
}