<script>
  let todo = [];
  let task = "";
  let next = "_YEAH_";

  console.log(next);

  function handleChange(e) {
    task = e.target.value;
  }

  function handleAdd() {
    todo = [...todo, task];
  }

  function handleDelete(index) {
    todo.splice(index, 1);
    todo = todo;
  }

  function handleGo() {
    eval(next);
  }
</script>

<div class="todo">
{#each todo as task, i}
  <div>
    {task} <button on:click={(e) => handleDelete(i)}>DEL</button>
  </div>
{/each}
</div>
<hr />
<input type="text" on:change={handleChange} />
<button on:click={handleAdd}>ADD</button>
<hr />
<button on:click={handleGo}>eval next script</button>
<pre class="next">{next}</pre>
