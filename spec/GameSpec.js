'use strict';

describe('Game', function() {
    var game;

    beforeEach(function() {
        game = new Game();
    })

    it('should create an instance of the game class', function(){
        expect(game instanceof(Game)).toBe(true)
    });
});