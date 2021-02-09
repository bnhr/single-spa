<script>
  import { sayHi, nope } from '@bnhr/fakestate';
  const people = 'frontend team';
</script>

<div class="footers">
  <div class="card card-svelte">
    <p class="para">Henlo from Svelte</p>
    <p>{sayHi(people)}</p>
    <button on:click={nope}>click me</button>
  </div>
</div>

<style>
  .card-svelte {
    border-color: #ff3e00;
    flex-direction: column;
  }
  p {
    margin-bottom: 1.2rem;
  }
  .para {
    font-size: 3.5rem;
    color: #ff3e00;
  }
  button {
    padding: 0.7rem 1.4rem;
    border: 1px solid #ff3e00;
    color: #ff3e00;
    border-radius: 1.2rem;
  }
</style>
