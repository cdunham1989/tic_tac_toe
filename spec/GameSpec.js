'use strict';

describe('Game', function() {
    var game;

    beforeEach(function() {
        game = new Game("Me", "You");
    })

    it('should create an instance of the game class', function() {
        expect(game instanceof(Game)).toBe(true);
    });

    it('should have a board associated with it', function() {
        expect(game.board).toBeDefined();
    });

    it('should have two players associated with it', function() {
        expect(game.player1).toBeDefined();
        expect(game.player2).toBeDefined();
    })
});