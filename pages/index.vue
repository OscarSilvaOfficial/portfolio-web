<template>
  <div id="top">
    <BaseHeader :enabled="false"/>
    <Intro />
    <About />
    <Resume />
    <Portfolio />
    <Services />
    <Contact />
    <BaseFooter />
    <BasePreloader />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
