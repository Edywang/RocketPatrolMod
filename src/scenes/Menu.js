// Phaser Scene Steps:
// 1. init() - Prepare data for scene (Specifically for little bits of data like variables passed between scenes)
// 2. preload() - Prepare assets for scene (Specifically for assets)
// 3. create() - Add assets to scene
// 4. update() - Loops continuously for duration of scene at chosen frame rate

class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    create(){
        console.log(this);
        // Add text to this at x coordinate 20 pixels, y coordinate 20 pixels (From the top left), with string "Rocket Patrol Menu"
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");   
    }
}