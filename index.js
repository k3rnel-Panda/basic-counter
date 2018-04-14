class Counter {
	constructor( target ) {
		this.container = document.querySelector( target );
		this.decrement = this.container.querySelector( '.counter-decrement' );
		this.increment = this.container.querySelector( '.counter-increment' );
		this.display = this.container.querySelector( '.counter-display' );
		this.reset = this.container.querySelector( '.counter-reset' );
		this.count = 0;

		this.updateDisplay = this.updateDisplay.bind( this );
		this.decrementCount = this.decrementCount.bind( this );
		this.incrementCount = this.incrementCount.bind( this );
		this.resetCount = this.resetCount.bind( this );

		this.increment.addEventListener( 'click', this.incrementCount );
		this.decrement.addEventListener( 'click', this.decrementCount );
		this.reset.addEventListener( 'click', this.resetCount );
	}

	updateDisplay() {
		this.display.innerHTML = this.count;
	}

	decrementCount() {
		this.count --;
		this.updateDisplay();
	};

	incrementCount() {
		this.count++;
		this.updateDisplay();
	};

	resetCount() {
		this.count = 0;
		this.updateDisplay();
	}


}

new Counter( '.counter-1' );
new Counter( '.counter-2' );

