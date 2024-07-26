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
        const isHighlighted = (value) => {
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
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.highlightSearch) }, placeholder: ("Search..."), });
    (__VLS_ctx.searchQuery);
    // @ts-ignore
    [highlightSearch, searchQuery,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: () => { } }, });
    for (const [field] of __VLS_getVForSourceType((__VLS_ctx.fields))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((field.id)), ...{ class: (({ highlighted: __VLS_ctx.isHighlighted(field.value) })) }, });
        __VLS_styleScopedClasses = ({ highlighted: isHighlighted(field.value) });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (...[$event]) => {
                    __VLS_ctx.updateField(field.id, $event.target.value);
                    // @ts-ignore
                    [fields, isHighlighted, updateField,];
                } }, value: ((field.value)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.removeField(field.id);
                    // @ts-ignore
                    [removeField,];
                } }, type: ("button"), disabled: ((__VLS_ctx.fields.length <= 1)), });
        // @ts-ignore
        [fields,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.vowelCount(field.value));
        // @ts-ignore
        [vowelCount,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addField) }, type: ("button"), disabled: ((__VLS_ctx.fields.length >= 10)), });
    // @ts-ignore
    [fields, addField,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
