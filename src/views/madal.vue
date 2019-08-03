<template>
  <div id="modal">
    <p>
      <a href="#cancel-modal">Open Modal</a>
    </p>
    <modal name="cancel-modal">
      <h1 class="font-bold text-left mb-2">Leaving So soon?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </modal>
  </div>
</template>

<script>
import modal from "../components/modalComponent";
export default {
  components: {
    modal
  }
};
</script>

<style>

</style>

