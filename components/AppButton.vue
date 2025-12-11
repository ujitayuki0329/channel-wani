<template>
  <button
    :class="['app-button', `app-button--${variant}`]"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.app-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.app-button--primary {
  background-color: #3b82f6;
  color: #fff;
}

.app-button--primary:hover {
  background-color: #2563eb;
}

.app-button--secondary {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.app-button--secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
