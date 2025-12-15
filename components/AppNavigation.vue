<template>
  <nav class="app-navigation">
    <!-- デスクトップ用のナビゲーション -->
    <ul class="nav-list-desktop">
      <li v-for="item in navigationItems" :key="item.path" class="nav-item">
        <NuxtLink 
          :to="item.path" 
          class="nav-link" 
          :class="{ 'youtube-link': item.isYoutube }"
        >
          <svg v-if="item.isYoutube" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <!-- モバイル用のメニュー -->
    <div class="nav-list" :class="{ active: mobileMenuOpen }" :style="{ height: menuHeight, maxHeight: menuHeight }">
      <!-- 上部ボタンエリア -->
      <div class="mobile-menu-top">
        <a 
          href="https://channelwani.base.shop/" 
          target="_blank"
          rel="noopener noreferrer"
          class="top-button top-button-goods"
          @click="closeMobileMenu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <span>公式グッズサイト</span>
        </a>
        <a 
          href="https://www.youtube.com/@WANIVSPBAO/featured" 
          target="_blank" 
          rel="noopener noreferrer"
          class="top-button top-button-youtube"
          @click="closeMobileMenu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>YouTube</span>
        </a>
      </div>

      <!-- 通常のナビゲーション項目 -->
      <div class="mobile-menu-nav-items">
        <div v-for="item in navigationItems" :key="item.path" class="nav-item">
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
        </div>
      </div>

      <!-- 下部SNSリンクエリア -->
      <div class="mobile-menu-bottom">
        <div class="social-section-title">SNS</div>
        <div class="social-links-mobile">
          <a href="https://twitter.com/wanivspbao" target="_blank" rel="noopener noreferrer" class="social-link-mobile social-link-x">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X</span>
          </a>
          <a href="https://www.youtube.com/@WANIVSPBAO/featured" target="_blank" rel="noopener noreferrer" class="social-link-mobile social-link-youtube">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube</span>
          </a>
          <a href="https://www.instagram.com/wanivspbao/" target="_blank" rel="noopener noreferrer" class="social-link-mobile social-link-instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@wanivspbao" target="_blank" rel="noopener noreferrer" class="social-link-mobile social-link-tiktok">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </div>
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
const menuHeight = ref<string>('100vh')

// 実際の利用可能な高さを取得して設定
const updateMenuHeight = () => {
  if (typeof window !== 'undefined') {
    // 実際のビューポート高さを取得
    const vh = window.innerHeight
    menuHeight.value = `${vh}px`
  }
}

// 画面回転時のハンドラー
const handleOrientationChange = () => {
  // 画面回転時は少し遅延させてから更新
  setTimeout(updateMenuHeight, 100)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // メニューが開いている時はbodyのスクロールを無効化
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    // メニューを開く時に高さを更新
    updateMenuHeight()
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  // 初期化時に高さを設定
  updateMenuHeight()
  
  // リサイズ時に高さを更新
  window.addEventListener('resize', updateMenuHeight)
  window.addEventListener('orientationchange', handleOrientationChange)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMenuHeight)
  window.removeEventListener('orientationchange', handleOrientationChange)
})
</script>

<style scoped>
.app-navigation {
  display: flex;
  align-items: center;
  position: relative;
}

.nav-list-desktop {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-list {
  display: none;
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
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem;
  z-index: 1001;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-menu-toggle:hover {
  background: rgba(45, 134, 89, 0.1);
}

.mobile-menu-toggle span {
  width: 26px;
  height: 3px;
  background: var(--dark-text);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 3px;
  transform-origin: center;
}

.mobile-menu-toggle.active {
  background: rgba(45, 134, 89, 0.15);
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background: var(--primary-color);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background: var(--primary-color);
}

.mobile-menu-overlay {
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-list-desktop {
    display: none;
  }
  
  .nav-list {
    display: flex;
    position: fixed;
    top: 0;
    right: -100%;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    width: 320px;
    max-width: 85vw;
    height: 100vh;
    max-height: 100vh;
    padding: 0;
    box-shadow: -8px 0 40px rgba(0, 0, 0, 0.15);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    overflow-y: auto;
    overflow-x: hidden;
    gap: 0;
    border-left: 1px solid rgba(45, 134, 89, 0.1);
    -webkit-overflow-scrolling: touch;
  }
  
  .nav-list.active {
    right: 0;
  }

  /* 上部ボタンエリア */
  .mobile-menu-top {
    padding: clamp(50px, 10vh, 70px) clamp(1rem, 3vw, 1.25rem) clamp(1rem, 2vh, 1.25rem);
    display: flex;
    flex-direction: column;
    gap: clamp(0.5rem, 1.5vh, 0.75rem);
    background: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(45, 134, 89, 0.08);
    margin-bottom: clamp(0.5rem, 1.5vh, 0.75rem);
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    flex-shrink: 0;
  }

  /* ナビゲーション項目エリア */
  .mobile-menu-nav-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: clamp(0.25rem, 1vh, 0.5rem) 0;
    min-height: 0;
    margin-bottom: clamp(0.5rem, 1.5vh, 0.75rem);
  }

  .nav-list.active .mobile-menu-top {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
  }

  .top-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.4rem, 1.2vw, 0.6rem);
    padding: clamp(0.65rem, 2vh, 0.85rem) clamp(1rem, 3vw, 1.25rem);
    font-size: clamp(0.8rem, 2.5vw, 0.95rem);
    font-weight: 600;
    border-radius: clamp(10px, 2.5vw, 12px);
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1.5px solid;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .top-button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  .top-button:hover::after {
    width: 300px;
    height: 300px;
  }

  .top-button svg {
    width: clamp(16px, 4vw, 18px);
    height: clamp(16px, 4vw, 18px);
    flex-shrink: 0;
    transition: transform 0.25s ease;
    position: relative;
    z-index: 1;
  }

  .top-button span {
    position: relative;
    z-index: 1;
  }

  .top-button:hover svg {
    transform: scale(1.1);
  }

  .top-button-goods {
    background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
    color: #FFFFFF;
    border-color: rgba(255, 107, 53, 0.3);
  }

  .top-button-goods:hover {
    background: linear-gradient(135deg, #FF5722 0%, #E68900 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.35);
    border-color: rgba(255, 107, 53, 0.5);
  }

  .top-button-youtube {
    background: #FFFFFF;
    color: #FF0000;
    border-color: rgba(255, 0, 0, 0.25);
  }

  .top-button-youtube:hover {
    background: #FF0000;
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.35);
    border-color: #FF0000;
  }

  .top-button-youtube:hover svg {
    fill: #FFFFFF;
  }
  
  .mobile-menu-nav-items .nav-item {
    width: 100%;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
    margin-bottom: clamp(0.2rem, 0.8vh, 0.3rem);
  }
  
  .mobile-menu-nav-items {
    margin-bottom: clamp(0.5rem, 1.5vh, 0.75rem);
  }
  
  .nav-list.active .mobile-menu-nav-items .nav-item:nth-of-type(1) {
    transition-delay: 0.2s;
  }
  
  .nav-list.active .mobile-menu-nav-items .nav-item:nth-of-type(2) {
    transition-delay: 0.25s;
  }
  
  .nav-list.active .mobile-menu-nav-items .nav-item:nth-of-type(3) {
    transition-delay: 0.3s;
  }
  
  .nav-list.active .mobile-menu-nav-items .nav-item:nth-of-type(4) {
    transition-delay: 0.35s;
  }
  
  .nav-list.active .mobile-menu-nav-items .nav-item:nth-of-type(5) {
    transition-delay: 0.4s;
  }
  
  .nav-list.active .mobile-menu-nav-items .nav-item:nth-of-type(6) {
    transition-delay: 0.45s;
  }
  
  .nav-list.active .mobile-menu-nav-items .nav-item {
    opacity: 1;
    transform: translateX(0);
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    gap: clamp(0.6rem, 2vw, 0.875rem);
    padding: clamp(0.75rem, 2.5vh, 1rem) clamp(1rem, 3vw, 1.25rem);
    font-size: clamp(0.85rem, 2.5vw, 1rem);
    color: var(--dark-text);
    border-radius: clamp(8px, 2vw, 10px);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    background: transparent;
    border: 1px solid transparent;
    margin: 0 clamp(0.5rem, 2vw, 0.75rem);
  }
  
  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--primary-color);
    transform: scaleY(0);
    transition: transform 0.25s ease;
  }
  
  .nav-link:hover::before,
  .nav-link.router-link-active::before {
    transform: scaleY(1);
  }
  
  .nav-icon {
    width: clamp(16px, 4vw, 18px);
    height: clamp(16px, 4vw, 18px);
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }
  
  .nav-link::after {
    display: none;
  }
  
  .nav-link:hover {
    color: var(--primary-color);
    background: rgba(45, 134, 89, 0.06);
    transform: translateX(4px);
    border-color: rgba(45, 134, 89, 0.1);
  }
  
  .nav-link:hover .nav-icon {
    transform: scale(1.1);
  }
  
  .nav-link.router-link-active {
    color: var(--primary-color);
    font-weight: 600;
    background: rgba(45, 134, 89, 0.08);
    border-color: rgba(45, 134, 89, 0.15);
  }
  
  .nav-link.youtube-link {
    color: #FF0000;
  }
  
  .nav-link.youtube-link::before {
    background: #FF0000;
  }
  
  .nav-link.youtube-link:hover {
    color: #FF0000;
    background: rgba(255, 0, 0, 0.06);
    border-color: rgba(255, 0, 0, 0.15);
  }
  
  .nav-link.youtube-link.router-link-active {
    color: #FF0000;
    background: rgba(255, 0, 0, 0.1);
    border-color: rgba(255, 0, 0, 0.2);
  }

  /* 下部SNSリンクエリア */
  .mobile-menu-bottom {
    margin-top: auto;
    padding: clamp(1rem, 3vh, 1.5rem) clamp(1rem, 3vw, 1.25rem) clamp(1.25rem, 3.5vh, 1.75rem);
    background: rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(45, 134, 89, 0.08);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    flex-shrink: 0;
  }

  .nav-list.active .mobile-menu-bottom {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
  }

  .social-section-title {
    font-size: clamp(0.75rem, 2.2vw, 0.85rem);
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: clamp(0.6rem, 2vh, 0.875rem);
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.7;
  }

  .social-links-mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(0.5rem, 1.5vw, 0.625rem);
  }

  .social-link-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.4rem, 1.2vw, 0.5rem);
    padding: clamp(0.6rem, 2vh, 0.75rem) clamp(0.8rem, 2.5vw, 1rem);
    border-radius: clamp(8px, 2vw, 10px);
    text-decoration: none;
    font-weight: 600;
    font-size: clamp(0.75rem, 2.2vw, 0.875rem);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1.5px solid;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .social-link-mobile::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  .social-link-mobile:hover::after {
    width: 300px;
    height: 300px;
  }

  .social-link-mobile svg {
    width: clamp(16px, 4vw, 18px);
    height: clamp(16px, 4vw, 18px);
    flex-shrink: 0;
    transition: transform 0.25s ease;
    position: relative;
    z-index: 1;
  }

  .social-link-mobile span {
    position: relative;
    z-index: 1;
  }

  .social-link-mobile:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  .social-link-mobile:hover svg {
    transform: scale(1.1);
  }

  .social-link-x {
    background: #FFFFFF;
    color: #000000;
    border-color: rgba(0, 0, 0, 0.15);
  }

  .social-link-x:hover {
    background: #000000;
    color: #FFFFFF;
    border-color: #000000;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  }

  .social-link-youtube {
    background: #FFFFFF;
    color: #FF0000;
    border-color: rgba(255, 0, 0, 0.25);
  }

  .social-link-youtube:hover {
    background: #FF0000;
    color: #FFFFFF;
    border-color: #FF0000;
    box-shadow: 0 6px 18px rgba(255, 0, 0, 0.35);
  }

  .social-link-instagram {
    background: #FFFFFF;
    color: #E4405F;
    border-color: rgba(228, 64, 95, 0.25);
  }

  .social-link-instagram:hover {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: #FFFFFF;
    border-color: #E4405F;
    box-shadow: 0 6px 18px rgba(225, 48, 108, 0.35);
  }

  .social-link-tiktok {
    background: #FFFFFF;
    color: #000000;
    border-color: rgba(0, 0, 0, 0.15);
  }

  .social-link-tiktok:hover {
    background: #000000;
    color: #FFFFFF;
    border-color: #000000;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  }
  
  .mobile-menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 0.4s;
  }
  
  .nav-list.active ~ .mobile-menu-overlay,
  .mobile-menu-overlay {
    opacity: 1;
    visibility: visible;
  }
}
</style>
