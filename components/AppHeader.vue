<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-content">
        <AppLogo />
        <AppNavigation />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(45, 134, 89, 0.1);
  padding: 1rem 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.app-header.scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

