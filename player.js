function Player(name) {
	this.name = new String;
	this.hand = new Object;
	this.total = new Number;
	this.busted = false;
	this.stand = false;
	this.blackjack = false;
	
	this.addCard = function(deck){
		this.hand.add(deck.getNextCard());
	}
	
	this.getCard = function(cardNum){
		return this.hand.cards[cardNum];
	}
	/* Constructor Function */
	this.name = name;
	this.hand = new Hand;
}