<template>
  <section class="app-feature-list">
    <div class="container">
      <h2 class="section-title">機能</h2>
      <div class="features-grid">
        <AppFeatureCard
          v-for="feature in features"
          :key="feature.id"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    id: 1,
    title: 'コンポーネントベース',
    description: '再利用可能なコンポーネントで構成されています',
    icon: '🧩'
  },
  {
    id: 2,
    title: 'TypeScript対応',
    description: '型安全性を確保した開発が可能です',
    icon: '📘'
  },
  {
    id: 3,
    title: 'モダンなUI',
    description: 'レスポンシブで美しいデザイン',
    icon: '🎨'
  }
]
</script>

<style scoped>
.app-feature-list {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
