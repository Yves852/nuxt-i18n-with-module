<script setup>
import { useCounter } from '../composables/moduleCounter'
import en from '../lang/en-US.json'
const { count, add } = useCounter()
</script>

<template>
  <div>
    <h1>
      {{ typeof $t === 'function' ? $t('my-module.counter') : `Default: ${en.counter}` }}
    </h1>
    {{ count }}
    <button @click="add">
      {{ typeof $t === 'function' ? $t('my-module.add') : `Default: ${en.add}` }}
    </button>
  </div>
</template>
