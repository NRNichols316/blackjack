function Deck() {
	this.cards = new Array;
	this.defaultCardValues = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
	this.reset = function(){
		this.cards = new Array();
	};
	this.count =  function(){
		return this.cards.length;
	};
	this.getNextCard = function(){
		return this.cards.shift();
	};
	this.shuffle = function(){
	  var i = this.cards.length;
	  if ( i == 0 ) return false;
	  while ( --i ) {
	     var newKey = Math.floor( Math.random() * ( i + 1 ) );
	     var oldCard = this.cards[i];
	     var newCard = this.cards[newKey];	 
	     this.cards[i] = newCard;
	     this.cards[newKey] = oldCard;
	   }
	};
	this.completeDeck = function(){
		this.reset();
		this.createSuit("spades","&spades;");
		this.createSuit("hearts", "&hearts;");
		this.createSuit("clubs", "&clubs;");
		this.createSuit("diams", "&diams;");
		return this.cards;
	};
	this.createSuit = function(suit, suitIcon){
		for(var i in this.defaultCardValues)
		{
			this.cards.push(new Card(this.defaultCardValues[i], suit, suitIcon));
		}
		return true;
	};	
	this.show = function(){
		for(var i in this.cards) { this.cards[i].draw();}
	}
	//Constructor Function
	this.completeDeck();
};