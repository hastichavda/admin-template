<template>
  <div>
    <button @click="showModal()" class="btn btn-primary">
      View Modal
    </button>
    <div v-if="Modal" class="bg2 ">
      <div class="modal-header bold">
        Modal Example
      </div>
      <div class="modal-body">
        <h4>Hello</h4>
      </div>
      <div class="modal-footer">
        <button @click="showModal()" class="btn btn-primary">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Modal: false
    };
  },
  methods: {
    showModal() {
    if (this.Modal == false)
    {
    this.Modal = true;
    }
    else
    {
    this.Modal = false;
    }
    }
  }
};
</script>

<style>
.bg2 {
  background: lightblue;
  width: 20%;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.09s;
}
.bold {
  font-weight: bold;
}
</style>
