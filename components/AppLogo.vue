<template>
  <div class="app-logo">
    <NuxtLink to="/" class="logo-link">
      <img 
        src="/images/logo.png" 
        alt="深谷爬虫類館ロゴ" 
        class="logo-image"
      />
      <span class="logo-title">深谷爬虫類館</span>
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
  gap: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-link:hover {
  opacity: 0.8;
  transform: scale(1.02);
}

.logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-title {
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .logo-title {
    font-size: 1.2rem;
  }
  
  .logo-image {
    height: 35px;
  }
}

@media (max-width: 576px) {
  .logo-title {
    font-size: 1rem;
  }
  
  .logo-image {
    height: 30px;
  }
}
</style>
