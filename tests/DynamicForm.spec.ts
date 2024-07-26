import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia'; // Corrected import
import DynamicForm from "@/components/DynamicForm.vue";

describe('DynamicForm.vue', () => {
    let wrapper: any;

    beforeEach(() => {
        const pinia = createPinia();
        setActivePinia(pinia); // Ensure Pinia is set as the active instance

        wrapper = mount(DynamicForm, {
            global: {
                plugins: [pinia] // Corrected plugin setup
            }
        });
    });

    it('renders initial form with one input field', () => {
        const inputs = wrapper.findAll('input[type="text"]');
        expect(inputs.length).toBe(1);
    });

    it('adds input fields when add button is clicked', async () => {
        const addButton = wrapper.find('button').filter((btn: { text: () => string; }) => btn.text() === 'Add Field');
        await addButton.trigger('click');
        await addButton.trigger('click');

        const inputs = wrapper.findAll('input[type="text"]');
        expect(inputs.length).toBe(3);
    });

    it('removes input fields when remove button is clicked', async () => {
        const addButton = wrapper.find('button').filter((btn: { text: () => string; }) => btn.text() === 'Add Field');
        await addButton.trigger('click');
        await addButton.trigger('click');

        const removeButtons = wrapper.findAll('button').filter((btn: { text: () => string; }) => btn.text() === 'Remove');
        await removeButtons[1].trigger('click');

        const inputs = wrapper.findAll('input[type="text"]');
        expect(inputs.length).toBe(2);
    });

    it('displays vowel count for each input field', async () => {
        const input = wrapper.find('input[type="text"]');
        await input.setValue('hello');

        const span = wrapper.find('span');
        expect(span.text()).toBe('2');
    });

    it('highlights input field when search query matches', async () => {
        const input = wrapper.find('input[type="text"]');
        await input.setValue('hello');

        const searchInput = wrapper.find('input[placeholder="Search..."]');
        await searchInput.setValue('hello');

        expect(input.classes()).toContain('highlight');
    });

    it('highlights search input field when query matches any input field', async () => {
        const input = wrapper.find('input[type="text"]');
        await input.setValue('hello');

        const searchInput = wrapper.find('input[placeholder="Search..."]');
        await searchInput.setValue('hello');

        expect(searchInput.classes()).toContain('highlight');
    });
});
