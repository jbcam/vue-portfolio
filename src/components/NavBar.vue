<template>
  <div class="navbar-glass fixed-top">
    <!-- Logo -->
    <router-link to="/" class="navbar-item navbar-link">Océane Sohier</router-link>
    <!-- Right Navigation -->
    <div class="navbar-right d-none d-sm-flex">
      <router-link to="/portrait" class="navbar-item navbar-link">Portrait</router-link>
      <router-link to="/projets" class="navbar-item navbar-link">Projets</router-link>
      <router-link to="/Inspirations" class="navbar-item navbar-link">Inspirations</router-link>
      <router-link to="/contact" class="navbar-item navbar-link">Contact</router-link>
<!--       <a href="" class="navbar-item navbar-link">Portrait</a>
      <a href="" class="navbar-item navbar-link">Projets</a>
      <a href="" class="navbar-item navbar-link">Inspirations</a>
      <a href="" class="navbar-item navbar-link">Contact</a> -->
    </div>
    <!-- Dropdown appearing on mobile only -->
    <div class="navbar-wagon-item d-sm-none">
      <div class="dropdown">
        <i class="fas fa-bars dropdown-toggle" data-toggle="dropdown" role="button"></i>
        <ul class="dropdown-menu dropdown-menu-right navbar-wagon-dropdown-menu">
          <li><a href="#">Portrait</a></li>
          <li><a href="#">Projets</a></li>
          <li><a href="#">Inspirations</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function initUpdateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar-glass');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
          navbar.classList.add('navbar-white');
        } else {
          navbar.classList.remove('navbar-white');
        }
      });
    }
  }
}

</script>
<!-- Using the `scoped` attribute -->
<style lang='scss' scoped>
//@import "../styles/_variables.scss";

/* Main navbar */
.navbar-glass {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07), 0 1px 0 0 rgba(0, 0, 0, 0.03);
  background: transparent;
  transition: all 0.3s ease;
  height: 70px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s background-color ease;
}

.navbar-white {
  background-color: white;
  .navbar-link {
    color: $mint;
    font-size: 14px;
  }

  .navbar-brand {
  text-decoration: none;
  color: $mint;

}

}

.navbar-brand {
  text-decoration: none;
  color: white;

}

/* Right section */
.navbar-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Basic navbar item */
.navbar-item {
  cursor: pointer;
  padding: 0 20px;
}

/* Navbar link */
.navbar-link {
  color: white;
  font-size: 14px;
}

.navbar-link:hover {
  color: $gray;
  text-decoration: none;
}

/* Dropdown menu */
.navbar-wagon-dropdown-menu {
  margin-top: 15px;
  box-shadow: 1px 1px 4px #E6E6E6;
  border-color: #E6E6E6;
}

.navbar-wagon-dropdown-menu li>a {
  transition: color 0.3s ease;
  font-weight: lighter !important;
  color: #999999 !important;
  font-size: 15px !important;
  line-height: 22px !important;
  padding: 10px 20px;
}

.navbar-wagon-dropdown-menu li>a:hover {
  background: transparent !important;
  color: black !important;
}

.navbar-wagon-dropdown-menu:before {
  content: ' ';
  height: 10px;
  width: 10px;
  position: absolute;
  right: 10px;
  top: -6px;
  background-color: white;
  transform: rotate(45deg);
  border-left: 1px solid #E6E6E6;
  border-top: 1px solid #E6E6E6;
}

</style>
