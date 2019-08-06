<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand " href="#">
          <h4 class="title"><i class="fa fa-cog"></i>HYBRID</h4>
        </a>
      </div>
      <div id="navbar" class="navbar-right navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li>
            <a href="#">
              <dropdown icon="fa fa-envelope menu">
                <ul class="dropdown-content">
                  <li>link 1</li>
                  <li>link 2</li>
                  <li>link 3</li>
                </ul>
              </dropdown>
            </a>
          </li>
          <li>
            <a href="#">
              <dropdown icon="fa fa-bars menu">
                <ul class="dropdown-content">
                  <li>link 1</li>
                  <li>link 2</li>
                  <li>link 3</li>
                </ul>
              </dropdown>
            </a>
          </li>
          <li>
            <a href="#contact">
              <dropdown icon="fa fa-bell menu">
                <ul class="dropdown-content">
                  <li>link 1</li>
                  <li>link 2</li>
                  <li>link 3</li>
                </ul>
              </dropdown>
            </a>
          </li>
          <li>
            <a href="#contact">
              <dropdown icon="fa fa-user menu">
                <ul class="dropdown-content">
                  <li>link 1</li>
                  <li>link 2</li>
                  <li>link 3</li>
                </ul>
              </dropdown>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import dropdown from "./Drop";
export default {
  components: {
    dropdown
  }
};
</script>

<style>
.navbar {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
.title {
  color: white;
  font-size: 20px;
  margin: 0 0 10px 0;
}
.menu {
  color: white;
}
.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  color: black;
  z-index: 20;
  opacity: 0.8;
  padding: 5px;
}
ul li {
  list-style: none;
}
ul li {
  list-style: none;
}
</style>
