<template>
  <div>
    <Sidebar />
    <Header />
    <Content class="content-padd"/>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";

export default {
  components: {
    Sidebar,
    Header,
    Content
  }
};
</script>

<style>
.content-padd{
  padding-top:5%;
  padding-left:50px;
  margin-left:18%;
  height:100%;
 
}
</style>
