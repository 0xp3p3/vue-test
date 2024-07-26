<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." @input="highlightSearch" />
    <form @submit.prevent>
      <div v-for="field in fields" :key="field.id" :class="{ highlighted: isHighlighted(field.value) }">
        <input
          :value="field.value"
          @input="updateField(field.id, ($event.target as HTMLInputElement).value)"
        />
        <button type="button" @click="removeField(field.id)" :disabled="fields.length <= 1">Remove</button>
        <span>Vowels: {{ vowelCount(field.value) }}</span>
      </div>
      <button type="button" @click="addField" :disabled="fields.length >= 10">Add Field</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useFormStore } from '../stores/form';

export default defineComponent({
  setup() {
    const formStore = useFormStore();
    const searchQuery = ref('');

    const fields = computed(() => formStore.fields);

    const addField = formStore.addField;
    const removeField = formStore.removeField;
    const updateField = formStore.updateField;
    const vowelCount = formStore.vowelCount;

    const isHighlighted = (value: string) => {
      return searchQuery.value && value.includes(searchQuery.value);
    };

    const highlightSearch = () => {
      if (searchQuery.value) {
        const anyMatch = fields.value.some(field => field.value.includes(searchQuery.value));
        document.querySelector('input[placeholder="Search..."]')?.classList.toggle('highlighted', anyMatch);
      }
    };

    return {
      fields,
      addField,
      removeField,
      updateField,
      vowelCount,
      searchQuery,
      isHighlighted,
      highlightSearch,
    };
  }
});
</script>

<style scoped>
  input {
    margin: 5px;
    padding: 5px;
    outline: none;
  }

  span {
    margin-left: 5px;
  }

  button {
    border-radius: 5px;
    padding: 5px;
    border: 1px solid black;
    background-color: white;
  }

  button:disabled {
    background-color: lightgray;
  }

  .highlighted {
    background-color: green;
    color: white;
  }
</style>
