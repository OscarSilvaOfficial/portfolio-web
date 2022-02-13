<template>
  <footer v-show="enabled">
    <div class="row">
      <div id="go-top">
        <a class="smoothscroll" title="Back to Top" href="#top"
          ><i class="fa fa-long-arrow-up"></i
        ></a>
      </div>
    </div>
    <!-- /row -->
  </footer>
</template>
<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      default: true,
    },
  },
}
</script>