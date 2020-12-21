controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.buttonTeal], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 8 f . . . . 
    . . f f e e e e f 8 8 8 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 8 8 8 8 e f . . 
    . . f e 8 8 8 f f f f e 8 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 6 6 e b f 6 6 e e f . . 
    . f e e 6 d 6 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 6 d d e 6 e f . . . . 
    . . . . f e d d e 8 8 f . . . . 
    . . . f f f e e f 9 9 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        1 8 8 1 1 8 8 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        1 8 8 1 1 8 8 1 
        1 8 8 1 1 8 8 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        1 8 8 1 1 8 8 1 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
game.onUpdateInterval(3300, function () {
    projectile = sprites.createProjectileFromSide(img`
        1 8 8 1 1 8 8 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        1 8 8 1 1 8 8 1 
        1 8 8 1 1 8 8 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        1 8 8 1 1 8 8 1 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
forever(function () {
    music.playMelody("C F E F D G E F ", 120)
})
