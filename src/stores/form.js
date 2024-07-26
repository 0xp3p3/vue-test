import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useFormStore = defineStore('form', () => {
    const fields = ref([{ id: Date.now(), value: '' }]);
    const addField = () => {
        if (fields.value.length < 10) {
            fields.value.push({ id: Date.now(), value: '' });
        }
    };
    const removeField = (id) => {
        if (fields.value.length > 1) {
            fields.value = fields.value.filter(field => field.id !== id);
        }
    };
    const updateField = (id, value) => {
        const field = fields.value.find(field => field.id === id);
        if (field) {
            field.value = value;
        }
    };
    const vowelCount = (value) => {
        return value.match(/[aeiou]/gi)?.length || 0;
    };
    return {
        fields,
        addField,
        removeField,
        updateField,
        vowelCount
    };
});
