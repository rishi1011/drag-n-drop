const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty => {
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('drop', drop);
})

function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = '', 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragOver(e) {
    e.preventDefault();
}

function drop() {
    this.className = 'empty';
    this.append(fill);
}

