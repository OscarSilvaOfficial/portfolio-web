<template>
  <header v-show="enabled">
    <div class="row">
      <div class="top-bar">
        <a class="menu-toggle" href="#"><span>Menu</span></a>

        <div class="logo">
          <a href="index.html">KARDS</a>
        </div>

        <nav id="main-nav-wrap">
          <ul class="main-navigation">
            <li class="current">
              <a class="smoothscroll" href="#intro" title="">Home</a>
            </li>
            <li><a class="smoothscroll" href="#about" title="">About</a></li>
            <li>
              <a class="smoothscroll" href="#resume" title="">Resume</a>
            </li>
            <li>
              <a class="smoothscroll" href="#portfolio" title="">Portfolio</a>
            </li>
            <li>
              <a class="smoothscroll" href="#services" title="">Services</a>
            </li>
            <li>
              <a class="smoothscroll" href="#contact" title="">Contact</a>
            </li>
            <li><a href="styles.html" title="">Style Demo</a></li>
          </ul>
        </nav>
      </div>
      <!-- /top-bar -->
    </div>
    <!-- /row -->
  </header>
</template>
<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      default: true
    }
  }
}
</script>


