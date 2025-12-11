<template>
  <div class="app-feature-card">
    <div class="feature-icon">{{ icon }}</div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
}

defineProps<Props>()
</script>

<style scoped>
.app-feature-card {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.2s;
}

.app-feature-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
}
</style>
