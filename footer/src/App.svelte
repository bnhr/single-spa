<script>
  import { sayHi } from '@bnhr/fakestate';
  const people = 'frontend team';
</script>

<div class="footers">
  <div class="card card-svelte">
    <p class="para">Henlo from Svelte</p>
    <p>{sayHi(people)}</p>
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
</style>
