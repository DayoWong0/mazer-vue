<template>
  <div id="app">
      <div id="sidebar" class="active">
        <Sidebar></Sidebar>
      </div>
      <div id="main">
        <Header></Header>
          <router-view></router-view>
        <Footer></Footer>
      </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Layouts/Sidebar";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
export default {
  components: {Footer, Header, Sidebar}
}
</script>
