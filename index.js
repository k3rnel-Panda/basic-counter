let el = {
  lessBtn: document.getElementById('remove-btn'),
  repeatBtn: document.getElementById('reset-btn'),
  moreBtn: document.getElementById('add-btn'),
  count: document.getElementById('count')
};

let count = 0; 

function add() {
  count = count + 1;
  el.count.innerText = count;
}
el.moreBtn

function remove() {
  count--;
  el.count.innerText = count;
}

function reset() {
  count = 0;
  el.count.innerText = count;
}

el.moreBtn.addEventListener('click', function() {
  add();
}, false);

el.lessBtn.addEventListener('click', function() {
  remove();
}, false);

el.repeatBtn.addEventListener('click', function() {
  reset();
}, false);