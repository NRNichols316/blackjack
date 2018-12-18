function Dealer(game){
	this.deck = new Object;
	this.game = new Object;
	
	this.getDeck = function(){
		this.deck = new Deck();
		this.deck.shuffle();
	};
	this.dealCard = function(player){
		player.addCard(this.deck);
		return true;
	};

	this.play = function(displayObj){
		var dealer = this.game.players[0];
		var handTotal = dealer.hand.evaluate();
		var highest = false;
		var lowest = false;
	
		if(dealer.bust == true || dealer.blackjack == true) {
			return;	
		}
		// Dealer must hit
		// Both ways is less than 17.
		if(handTotal[0] < 17 && handTotal[1] < 17)
		{
			return displayObj.hit(dealer);
		} 
		
		// figures out which one is higher
		if(handTotal[1] > handTotal[0]) { 
			highest = handTotal[1]
			lowest = handTotal[0];
		} else {
			highest = handTotal[0]
			lowest = handTotal[1];
		}

		// One way bust, one way under 17
		if(highest > 21 && lowest < 17) {
			return displayObj.hit(dealer);
		}
		
		// Dealer stands
		return displayObj.stand(dealer);
	

	};
	/* Constructor Function */
	this.game = game;
	game.addPlayer("Dealer");
	return this;
}
