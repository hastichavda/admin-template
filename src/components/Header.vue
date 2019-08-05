<template>
  <div class="navbar">
    <h2 class="logo"><i class="fa fa-cog set s-i"></i>HYBRID</h2>
    <div class="dropdown">
      <button class="dropbtn">
        <i class="fa fa-user i1 i-i"></i>
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        <i class="fa fa-bell i1 i-i"></i>
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        <i class="fa fa-bars i1 i-i"></i>
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        <i class="fa fa-envelope i1 i-i"></i>
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.navbar {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  z-index: 1;
}
.navbar a {
  float: right;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.navbar-toggle {
  padding: 10px;
  margin: 25px 15px 25px 0;
}
.dropdown {
  float: right;
}
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.navbar a:hover,.dropdown:hover .dropbtn {
  background-color: gray;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 20;
  opacity: 0.8;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
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
.button-modal {
  padding-top: 15px;
}
</style>
