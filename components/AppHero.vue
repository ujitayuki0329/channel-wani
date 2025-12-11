<template>
  <section class="app-hero" id="home">
    <div class="hero-background">
      <NuxtImg 
        src="/images/building-exterior.jpg" 
        alt="深谷爬虫類館外観"
        class="hero-bg-image"
        placeholder
      />
      <div class="hero-overlay"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">深谷爬虫類館へようこそ</h1>
        <p class="hero-subtitle">100種類以上の爬虫類を展示する専門施設</p>
        <p class="hero-description">
          トカゲやヘビ、カメやワニまで様々な爬虫類や両生類などの生き物達を間近で見て、
          触れて、餌やりなどの体験が出来る展示施設です
        </p>
        <div class="hero-actions">
          <a href="#about" class="btn btn-primary">施設について</a>
          <a href="#youtube" class="btn btn-youtube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <span></span>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomIn 20s ease-in-out infinite alternate;
  transform: scale(1.1);
}

@keyframes zoomIn {
  0% {
    transform: scale(1.1) translateY(0);
  }
  100% {
    transform: scale(1.2) translateY(-20px);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(232, 245, 233, 0.8) 100%
  );
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  text-shadow: 0 2px 5px rgba(255, 255, 255, 0.8);
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text-light);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-youtube {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  background: #FFFFFF !important;
  color: #FF0000 !important;
  border: 2px solid #FF0000 !important;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.2) !important;
  font-weight: 600 !important;
}

.btn-youtube svg {
  width: 20px !important;
  height: 20px !important;
  flex-shrink: 0 !important;
  fill: #FF0000 !important;
  color: #FF0000 !important;
}

.btn-youtube span {
  color: #FF0000 !important;
}

.btn-youtube:hover {
  background: #FF0000 !important;
  border-color: #FF0000 !important;
  color: #FFFFFF !important;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4) !important;
}

.btn-youtube:hover svg {
  fill: #FFFFFF !important;
  color: #FFFFFF !important;
}

.btn-youtube:hover span {
  color: #FFFFFF !important;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-indicator span {
  display: block;
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  transform: rotate(45deg);
  animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0%, 20% {
    transform: translateY(0) rotate(45deg);
    opacity: 1;
  }
  50% {
    transform: translateY(10px) rotate(45deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotate(45deg);
    opacity: 1;
  }
}

@media (max-width: 968px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 0.9rem;
  }
}
</style>
