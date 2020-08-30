<template>
  <div>
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav"/>
    <TheSidenav
      :show="displaySideNav"
      @close="displaySideNav = false"
    />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data () {
    return {
      displaySideNav: false,
    }
  }
}
</script>

<style>
  html {
    font-family: 'Lato', sans-serif;
  }

  body {
    margin: 0;
  }
</style>
