<template>
  <div class="app-logo">
    <NuxtLink to="/" class="logo-link">
      <img 
        src="/images/logo.png" 
        alt="深谷爬虫類館ロゴ" 
        class="logo-image"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-link:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.logo-image {
  height: 80px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}
</style>
