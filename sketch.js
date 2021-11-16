function preload() {
bgImage= loadImage("bg.jpg")
snowmanImage= loadImage("snowman.png")
}
function setup() {
snowman = createSprite(200,200,20,20);
snowman.addImage("sgdh,",snowmanImage)
}
function draw() {
background(bgImage)
drawSprites()
}