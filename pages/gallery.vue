<template>
  <div class="gallery-page">
    <!-- Gallery Header -->
    <div class="gallery-header">
      <div class="container">
        <h1 class="section-title">展示生体</h1>
        <p class="section-subtitle">当館で飼育している爬虫類たち</p>
        <div class="gallery-categories">
          <a 
            v-for="category in categories" 
            :key="category.id"
            href="#" 
            class="category-btn" 
            :class="{ active: activeCategory === category.id }" 
            @click.prevent="scrollToCategory(category.id)"
          >
            {{ category.label }}
          </a>
        </div>
      </div>
    </div>

    <!-- Gallery Sections -->
    <section 
      v-for="category in categories" 
      :key="category.id"
      :id="category.id" 
      class="gallery-section"
      :style="category.id === 'lizards' || category.id === 'others' ? 'background: var(--light-secondary);' : ''"
    >
      <div class="container">
        <h2 class="gallery-section-title">{{ category.label }}の種類</h2>
        <div class="gallery-grid">
          <div 
            v-for="(item, index) in getCategoryItems(category.id)" 
            :key="index" 
            class="gallery-item"
          >
            <div class="gallery-image">
              <NuxtImg 
                :src="item.image || getDefaultImage(category.id)" 
                :alt="`${item.name || category.label} - 深谷爬虫類館（チャンネル鰐）の展示生体`"
                placeholder
                class="gallery-img"
              />
            </div>
            <div class="gallery-info">
              <h4>{{ item.name || `${category.label}の種類名` }}</h4>
              <p>{{ item.description || '説明文をここに記載' }}</p>
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
  padding-top: 100px;
}

.gallery-header {
  text-align: center;
  padding: 60px 0 40px;
  background: var(--light-secondary);
}

.gallery-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.category-btn {
  padding: 0.8rem 2rem;
  background: var(--light-bg);
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.category-btn:hover,
.category-btn.active {
  background: var(--primary-color);
  color: var(--light-bg);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.gallery-section {
  padding: 60px 0;
}

.gallery-section-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.gallery-item {
  background: var(--light-bg);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(45, 134, 89, 0.2);
  box-shadow: var(--shadow-card);
}

.gallery-item:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow);
  border-color: var(--primary-color);
}

.gallery-image {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--gradient-2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-bg);
  font-size: 1.2rem;
}

.gallery-info {
  padding: 1.5rem;
}

.gallery-info h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--dark-text);
}

.gallery-info p {
  color: var(--text-light);
}

.back-to-home {
  text-align: center;
  padding: 2rem 0;
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>

