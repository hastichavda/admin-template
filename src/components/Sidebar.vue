<template>
  <div class="sidebar">
    <div class="formation">
      <router-link to="/dashbord">
        <a class="pages">
          <i class="fa fa-tachometer icon ic"></i>
          Dashbord
        </a>
      </router-link>
      <router-link to="/uielement">
        <a class="pages">
          <i class="fa fa-desktop  icon ic "></i>
          UI Elements
        </a>
      </router-link>
      <router-link to="/charts">
        <a class="pages">
          <i class="fa fa-area-chart  icon ic"></i>
          Charts
        </a>
      </router-link>
      <router-link to="/tabs-panel">
        <a class="pages">
          <i class="fa fa-tasks icon ic"></i>
          Tabs & Panels
        </a>
      </router-link>
      <router-link to="/responsive-table">
        <a class="pages">
          <i class="fa fa-tasks icon ic"></i>
          Responsive Tables
        </a>
      </router-link>
      <router-link to="/forms">
        <a class="pages">
          <i class="fa fa-pencil-square-o icon ic"></i>
          Forms
        </a>
      </router-link>
      <router-link to="/multilevel-dropdown">
        <a class="pages">
          <i class="fa fa-dropbox icon ic"></i>
          Multi-Level Dropdown<i class="fa fa-chevron-left si"></i>
        </a>
      </router-link>
      <router-link to="/empty-page">
        <a class="pages">
          <i class="fa fa-file icon ic"></i>
          Empty Page
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  position: fixed;
  background: #24c0cc;
  width: 18%;
  height: 100%;
  padding-top: 5%;
  overflow: hidden;
}

.sidebar a {
  color: #bbf1e9;
  display: block;
  text-decoration: none;
  padding: 3%;
}
.sidebar a :hover {
  background: #16a0a6;
}
.ic {
  padding-right: 15px;
}
.si {
  padding-left: 58px;
}
@media (max-width: 1164px) {
  .sidebar {
    left: 0;
    transition: 0.8s;
  }
}
@media (max-width: 500px) {
  .sidebar {
    left: -350px;
    transition: 0.8s;
  }
}
</style>
