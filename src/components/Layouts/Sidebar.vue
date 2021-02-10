<template>
  <div class="sidebar-wrapper active">
    <div class="sidebar-header">
      <div class="d-flex justify-content-between">
        <div class="logo">
          <router-link to="/"><img data-src="~assets/images/logo/logo.png" v-lazy-load alt="Logo" srcset="">
          </router-link>
        </div>
        <div class="toggler">
          <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
        </div>
      </div>
    </div>
    <div class="sidebar-menu">
      <ul class="menu">
        <template v-for="item in $store.state.sideBarItems">
          <li class="sidebar-title" v-if="item.isTitle" :key="item.key">
            {{ item.name }}
          </li>
          <li class="sidebar-item"
              :class="{ 'active' : isActive(item.url) || subIsActive(item), 'has-sub' : isHasSub(item) }" v-else
              :key="item.key">
            <template v-if="isHasSub(item)">
              <a class="sidebar-link">
                <i :class="`bi bi-${item.icon}`"></i>
                <span>{{ item.name }}</span>
              </a>
              <ul class="submenu" :class="{ 'active' : subIsActive(item) } ">
                <template v-for="sub in item.submenu">
                  <li class="submenu-item" :class="{ 'active' : isActive(sub.url) } " :key="sub.key">
                    <nuxt-link :to="sub.url">{{ sub.name }}</nuxt-link>
                  </li>
                </template>
              </ul>
            </template>
            <template v-else>
              <nuxt-link class="sidebar-link" :to="item.url">
                <i :class="`bi bi-${item.icon}`"></i>
                <span>{{ item.name }}</span>
              </nuxt-link>
            </template>
          </li>
        </template>
      </ul>
    </div>
    <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>
