<template>
  <div class="topnav">
    <h2 class="logo"><i class="fa fa-cog set s-i"></i>HYBRID</h2>
    <a href="#">
      <i class="fa fa-user i1 i-i"></i>
      <i class="fa fa-caret-down"></i>
    </a>
    <a href="#">
      <i class="fa fa-bell i1 i-i"></i>
      <i class="fa fa-caret-down"></i>
    </a>
    <a href="#">
      <i class="fa fa-bars i1 i-i"></i>
      <i class="fa fa-caret-down "></i>
    </a>
    <a href="#">
      <i class="fa fa-envelope i1 i-i"></i>
      <i class="fa fa-caret-down"></i>
    </a>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.topnav {
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  z-index: 10;
}
.topnav a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 25px 10px 10px 10px;
  text-decoration: none;
  font-size: 15px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.logo {
  float: left;
  color: white;
}
.s-i {
  padding: 5px;
}
.i-i {
  padding: 5px;
}
</style>
