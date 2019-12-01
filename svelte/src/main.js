import Todo from './Todo.svelte';

var todo = new Todo({
	target: document.querySelector(".app")
});

export default todo;
