(function(exports) {
    
    function Game(player1, player2, board = new Board()) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
    }

    exports.Game = Game;

})(this);