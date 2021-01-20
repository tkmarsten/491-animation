class Naruto {
    constructor(game) {
        this.spritesheet = ASSET_MANAGER.getAsset("./naruto.png");

        this.x = 100;
        this.y = 100;

        this.facing = 0; // 0 = right, 1 = left
        this.game = game;
        this.animations = [];

        this.animations = new Animator(this.spritesheet, 25, 44, 32, 64, 0, 0, 0, false, false);
    }

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    }

    update() {

    }
}