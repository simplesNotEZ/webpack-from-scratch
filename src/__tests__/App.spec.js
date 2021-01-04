import { mount, createLocalVue } from '@vue/test-utils';
import App from '../App.vue';

test('App has a .center-content class', () => {
  const localVue = createLocalVue();

  const wrapper = mount(App, { localVue });

  expect(wrapper.classes()).toContain('center-content');
});
