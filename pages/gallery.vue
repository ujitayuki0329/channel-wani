<template>
  <div class="gallery-page">
    <!-- Gallery Header -->
    <div class="gallery-header">
      <div class="container">
        <h1 class="gallery-main-title">展示生体</h1>
        <p class="gallery-subtitle">当館で飼育している爬虫類たち</p>
        <div class="gallery-categories">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-btn" 
            :class="{ active: activeCategory === category.id }" 
            @click="scrollToCategory(category.id)"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Gallery Sections -->
    <section 
      v-for="category in categories" 
      :key="category.id"
      :id="category.id" 
      class="gallery-section"
      :class="{ 'section-alt': category.id === 'lizards' || category.id === 'others' }"
    >
      <div class="container">
        <div class="section-header-inline">
          <h2 class="gallery-section-title">{{ category.label }}の種類</h2>
          <div class="scroll-indicator">
            <span>← スクロール →</span>
          </div>
        </div>
        <div class="gallery-scroll-container">
          <div class="gallery-scroll">
            <div 
              v-for="(item, index) in getCategoryItems(category.id)" 
              :key="index" 
              class="gallery-card"
            >
              <div class="gallery-card-image">
                <NuxtImg 
                  :src="item.image || getDefaultImage(category.id)" 
                  :alt="`${item.name || category.label} - 深谷爬虫類館（チャンネル鰐）の展示生体`"
                  placeholder
                  class="gallery-card-img"
                />
                <div class="gallery-card-overlay">
                  <div class="gallery-card-badge">{{ category.label }}</div>
                </div>
              </div>
              <div class="gallery-card-info">
                <h3 class="gallery-card-name">{{ item.name || `${category.label}の種類名` }}</h3>
                <p class="gallery-card-description">{{ item.description || '説明文をここに記載' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to Home -->
    <div class="back-to-home">
      <div class="container">
        <NuxtLink to="/" class="btn btn-primary">ホームに戻る</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  id: string
  label: string
}

interface GalleryItem {
  name?: string
  description?: string
  image?: string
}

const categories: Category[] = [
  { id: 'snakes', label: 'ヘビ' },
  { id: 'lizards', label: 'トカゲ' },
  { id: 'turtles', label: 'カメ' },
  { id: 'others', label: 'その他' },
]

const activeCategory = ref('snakes')

// 既存サイトの画像を使用（実際の画像パスに置き換えてください）
const galleryItems: Record<string, GalleryItem[]> = {
  snakes: [
    { name: 'ヘビの種類1', description: '説明文', image: '/images/sample-hebi.jpg' },
    { name: 'ヘビの種類2', description: '説明文', image: '/images/sample-hebi.jpg' },
    { name: 'ヘビの種類3', description: '説明文', image: '/images/sample-hebi.jpg' },
    { name: 'ヘビの種類4', description: '説明文', image: '/images/sample-hebi.jpg' },
  ],
  lizards: [
    { name: 'トカゲの種類1', description: '説明文', image: '/images/sample-tokage.jpg' },
    { name: 'トカゲの種類2', description: '説明文', image: '/images/sample-tokage.jpg' },
    { name: 'トカゲの種類3', description: '説明文', image: '/images/sample-tokage.jpg' },
  ],
  turtles: [
    { name: 'カメの種類1', description: '説明文', image: '/images/sample-kame.jpg' },
    { name: 'カメの種類2', description: '説明文', image: '/images/sample-kame.jpg' },
    { name: 'カメの種類3', description: '説明文', image: '/images/sample-kame.jpg' },
  ],
  others: [
    { name: 'その他の爬虫類1', description: '説明文', image: '/images/sample-hebi.jpg' },
    { name: 'その他の爬虫類2', description: '説明文', image: '/images/sample-hebi.jpg' },
  ],
}

const getCategoryItems = (categoryId: string): GalleryItem[] => {
  return galleryItems[categoryId] || []
}

// カテゴリごとのデフォルト画像を取得
const getDefaultImage = (categoryId: string): string => {
  const defaultImages: Record<string, string> = {
    snakes: '/images/sample-hebi.jpg',
    lizards: '/images/sample-tokage.jpg',
    turtles: '/images/sample-kame.jpg',
    others: '/images/sample-hebi.jpg'
  }
  return defaultImages[categoryId] || '/images/sample-hebi.jpg'
}

const scrollToCategory = (categoryId: string) => {
  activeCategory.value = categoryId
  const element = document.getElementById(categoryId)
  if (element) {
    const offsetTop = element.offsetTop - 100
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

// ページ遷移時に一番上にスクロール
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

useHead({
  title: '展示生体 | 深谷爬虫類館 | チャンネル鰐',
  meta: [
    { name: 'description', content: '深谷爬虫類館（チャンネル鰐）で飼育している100種類以上の爬虫類たちをご紹介します。ヘビ、トカゲ、カメなど様々な種類の爬虫類を展示しています。' },
    { name: 'keywords', content: '深谷爬虫類館,チャンネル鰐,展示生体,爬虫類,ヘビ,トカゲ,カメ,爬虫類展示,深谷市爬虫類館' },
    { property: 'og:title', content: '展示生体 | 深谷爬虫類館 | チャンネル鰐' },
    { property: 'og:description', content: '深谷爬虫類館で飼育している100種類以上の爬虫類たちをご紹介します。' },
    { property: 'og:url', content: 'https://fukayahachu.com/gallery' },
    { property: 'og:image', content: 'https://fukayahachu.com/images/sample-hebi.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: '展示生体 - 深谷爬虫類館',
        description: '深谷爬虫類館で飼育している100種類以上の爬虫類たちをご紹介します。',
        url: 'https://fukayahachu.com/gallery',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'ヘビの種類',
              description: '様々な種類のヘビを展示しています。'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'トカゲの種類',
              description: 'カラフルで魅力的なトカゲたちを展示しています。'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'カメの種類',
              description: 'リクガメなど、様々なカメを展示しています。'
            }
          ]
        }
      })
    }
  ]
})
</script>

<style scoped>
.gallery-page {
  padding-top: 80px;
  min-height: 100vh;
}

.gallery-header {
  text-align: center;
  padding: 80px 0 60px;
  background: linear-gradient(135deg, rgba(45, 134, 89, 0.05) 0%, rgba(255, 255, 255, 1) 100%);
  border-bottom: 2px solid rgba(45, 134, 89, 0.1);
}

.gallery-main-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
}

.gallery-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.category-btn {
  padding: 0.5rem 1.8rem;
  background: var(--light-bg);
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.category-btn:hover,
.category-btn.active {
  background: var(--primary-color);
  color: var(--light-bg);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.gallery-section {
  padding: 80px 0;
  background: var(--light-bg);
}

.gallery-section.section-alt {
  background: var(--light-secondary);
}

.section-header-inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.gallery-section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--primary-color);
  font-weight: 700;
  margin: 0;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.scroll-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.7;
}

.scroll-indicator span {
  animation: scrollHint 2s ease-in-out infinite;
}

@keyframes scrollHint {
  0%, 100% {
    transform: translateX(0);
    opacity: 0.7;
  }
  50% {
    transform: translateX(10px);
    opacity: 1;
  }
}

.gallery-scroll-container {
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) transparent;
  padding-bottom: 1rem;
}

.gallery-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.gallery-scroll-container::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

.gallery-scroll-container::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 10px;
}

.gallery-scroll-container::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

.gallery-scroll {
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem 0;
  min-width: min-content;
}

.gallery-card {
  flex: 0 0 320px;
  background: var(--light-bg);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(45, 134, 89, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
}

.gallery-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(45, 134, 89, 0.25);
  border-color: var(--primary-color);
}

.gallery-card-image {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  position: relative;
  background: var(--gradient-1);
}

.gallery-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-card:hover .gallery-card-img {
  transform: scale(1.15);
}

.gallery-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
}

.gallery-card:hover .gallery-card-overlay {
  opacity: 1;
}

.gallery-card-badge {
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-color);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.gallery-card-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.gallery-card-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--dark-text);
}

.gallery-card-description {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
}

.back-to-home {
  text-align: center;
  padding: 4rem 0;
  background: var(--light-secondary);
}

@media (max-width: 768px) {
  .gallery-header {
    padding: 60px 0 40px;
  }

  .gallery-section {
    padding: 60px 0;
  }

  .gallery-scroll {
    gap: 1rem;
  }

  .gallery-card {
    flex: 0 0 280px;
  }

  .section-header-inline {
    flex-direction: column;
    align-items: flex-start;
  }

  .scroll-indicator {
    align-self: flex-end;
  }
}

@media (max-width: 576px) {
  .gallery-card {
    flex: 0 0 260px;
  }

  .category-btn {
    padding: 0.4rem 1.3rem;
    font-size: 0.9rem;
  }
}
</style>

