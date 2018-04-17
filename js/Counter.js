class Counter {
	constructor( label ) {
    this.count = 0;
    this.label = label;

    this.counterCount = document.createElement('p');
    this.counterCount.className = 'count-display';

		this.decrementCount = this.decrementCount.bind( this );
		this.incrementCount = this.incrementCount.bind( this );
		this.resetCount = this.resetCount.bind( this );
  }
  
  renderCounter() {
    let counterComponent = document.createElement('li');
    counterComponent.className = 'list-group-item';

    let counterLabel = document.createElement('p');
    counterLabel.innerText = this.label;
    counterComponent.appendChild(counterLabel);

    this.counterCount.innerText = this.count;
    counterComponent.appendChild(this.counterCount);

    let buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-group';

    let decrementButton = document.createElement('button');
    decrementButton.className = 'btn btn-danger counter-decrement';
    decrementButton.innerHTML = '<span class="glyphicon glyphicon-arrow-down" style="font-size: 25px"></span>';
    decrementButton.addEventListener('click', this.decrementCount, false);
    buttonGroup.appendChild(decrementButton);
    
    let resetButton = document.createElement('button');
    resetButton.className = 'btn btn-secondary counter-reset';
    resetButton.innerHTML = '<span class="glyphicon glyphicon-refresh" style="font-size: 25px"></span>';
    resetButton.addEventListener('click', this.resetCount, false);
    buttonGroup.appendChild(resetButton);

    let incrementButton = document.createElement('button');
    incrementButton.className = 'btn btn-primary counter-increment';
    incrementButton.innerHTML = '<span class="glyphicon glyphicon-arrow-up" style="font-size: 25px"></span>';
    incrementButton.addEventListener('click', this.incrementCount, false);
    buttonGroup.appendChild(incrementButton);

    counterComponent.appendChild(buttonGroup);

    document.getElementById('counter-list').appendChild(counterComponent);
  }

  updateCount() {
    this.counterCount.innerText = this.count;
  }

	decrementCount() {
    this.count --;
    this.updateCount();
	};

	incrementCount() {
    this.count++;
    this.updateCount();
	};

	resetCount() {
    this.count = 0;
    this.updateCount();
	}
}
