<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>深谷爬虫類館</h3>
          <p>爬虫類の魅力を伝える専門施設</p>
          <p class="footer-info">
            第一種動物取扱業 販売 第64-0428号 展示 第64-0429号<br>
            登録年月日 令和4年4月21日～令和9年4月20日<br>
            事業所名称 株式会社ギュスターヴ<br>
            埼玉県深谷市荒川１３－１<br>
            動物取扱責任者 梅永怜
          </p>
        </div>
        <div class="footer-section">
          <h4>リンク</h4>
          <ul>
            <li><NuxtLink to="/">ホーム</NuxtLink></li>
            <li><NuxtLink to="/#about">施設について</NuxtLink></li>
            <li><NuxtLink to="/#youtube">YouTube</NuxtLink></li>
            <li><NuxtLink to="/gallery">展示生体</NuxtLink></li>
            <li><NuxtLink to="/#access">アクセス</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>SNS</h4>
          <div class="social-links">
            <a href="https://twitter.com/wanivspbao" target="_blank" rel="noopener noreferrer" class="social-link social-link-x">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X</span>
            </a>
            <a href="https://www.youtube.com/@WANIVSPBAO/featured" target="_blank" rel="noopener noreferrer" class="social-link social-link-youtube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 深谷爬虫類館. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-footer {
  background: var(--light-tertiary);
  padding: 3rem 0 1rem;
  border-top: 1px solid rgba(45, 134, 89, 0.2);
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--dark-text);
}

.footer-section p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.footer-info {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-light);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--light-bg);
  border-radius: 25px;
  color: var(--dark-text);
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(45, 134, 89, 0.3);
  box-shadow: var(--shadow-card);
  font-weight: 600;
}

.social-link svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.social-link-x {
  color: #000000;
}

.social-link-x:hover {
  background: #000000;
  color: #FFFFFF;
  border-color: #000000;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.social-link-x:hover svg {
  color: #FFFFFF;
}

.social-link-youtube {
  color: #FF0000;
}

.social-link-youtube:hover {
  background: #FF0000;
  color: #FFFFFF;
  border-color: #FF0000;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4);
}

.social-link-youtube:hover svg {
  color: #FFFFFF;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(45, 134, 89, 0.2);
  color: var(--text-light);
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>

