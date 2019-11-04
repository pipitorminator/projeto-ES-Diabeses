<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" @click="$router.push('/')">
          <img style="max-width: 50px;" src="https://1.bp.blogspot.com/-QSbjySRn4d4/V3gNs9X2RhI/AAAAAAAACMo/u-gRAe0SeXohkcfTnTUVjSRJyiABKe-mACKgB/s1600/tumblr_inline_o00mxpTtb51snfyzd_540.png">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
              <b-nav-item active right href="#">login</b-nav-item>
              <b-nav-item active right href="#" >Cadastre-se</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
