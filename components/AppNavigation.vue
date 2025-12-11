<template>
  <nav class="app-navigation">
    <ul class="nav-list" :class="{ active: mobileMenuOpen }">
      <li v-for="item in navigationItems" :key="item.path" class="nav-item">
        <NuxtLink 
          :to="item.path" 
          class="nav-link" 
          :class="{ 'youtube-link': item.isYoutube }"
          @click="closeMobileMenu"
        >
          <svg v-if="item.isYoutube" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
    <button 
      class="mobile-menu-toggle" 
      :class="{ active: mobileMenuOpen }"
      @click="toggleMobileMenu" 
      aria-label="メニュー"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div 
      v-if="mobileMenuOpen" 
      class="mobile-menu-overlay" 
      @click="closeMobileMenu"
    ></div>
  </nav>
</template>

<script setup lang="ts">
interface NavigationItem {
  path: string
  label: string
  isYoutube?: boolean
}

const navigationItems: NavigationItem[] = [
  { path: '/', label: 'ホーム' },
  { path: '/#about', label: '深谷爬虫類館とは' },
  { path: '/#youtube', label: 'YouTube', isYoutube: true },
  { path: '/gallery', label: '展示生体' },
  { path: '/#access', label: 'アクセス' },
  { path: '/#contact', label: 'お問い合わせ' },
]

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // メニューが開いている時はbodyのスクロールを無効化
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.app-navigation {
  display: flex;
  align-items: center;
  position: relative;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--dark-text);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-1);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link.youtube-link {
  color: #FF0000;
  font-weight: 600;
}

.nav-link.youtube-link:hover {
  color: #FF0000;
}

.nav-link.youtube-link::after {
  background: #FF0000;
}

.nav-link.youtube-link.router-link-active {
  color: #FF0000;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  position: relative;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--dark-text);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.mobile-menu-overlay {
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-list {
    position: fixed;
    top: 0;
    right: -100%;
    flex-direction: column;
    background: var(--light-bg);
    width: 280px;
    height: 100vh;
    padding: 80px 2rem 2rem;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    overflow-y: auto;
    gap: 0;
  }
  
  .nav-list.active {
    right: 0;
  }
  
  .nav-item {
    width: 100%;
    border-bottom: 1px solid rgba(45, 134, 89, 0.1);
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.2rem 0;
    font-size: 1.1rem;
    color: var(--dark-text);
  }
  
  .nav-icon {
    width: 20px;
    height: 20px;
  }
  
  .nav-link::after {
    display: none;
  }
  
  .nav-link:hover {
    color: var(--primary-color);
    padding-left: 1rem;
  }
  
  .nav-link.router-link-active {
    color: var(--primary-color);
    font-weight: 700;
    border-left: 4px solid var(--primary-color);
    padding-left: 1rem;
  }
  
  .nav-link.youtube-link.router-link-active {
    color: #FF0000;
    border-left-color: #FF0000;
  }
  
  .mobile-menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .nav-list.active ~ .mobile-menu-overlay,
  .mobile-menu-overlay {
    opacity: 1;
  }
}
</style>
