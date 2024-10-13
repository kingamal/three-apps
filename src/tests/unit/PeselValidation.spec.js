import { mount } from '@vue/test-utils';
import PeselValidation from '../../views/PeselValidation.vue';

describe('PeselValidation.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PeselValidation);
  });

  it('should validate correct PESEL numbers', () => {
    const validPesels = [
      '69090126371',
      '07271766769',
      '07240952474',
    ];

    validPesels.forEach(pesel => {
      wrapper.setData({ pesel });
      wrapper.find('form').trigger('submit.prevent');
      expect(wrapper.vm.validationMessage).toBe(`Numer PESEL ${pesel} jest poprawny.`);
    });
  });

  it('should validate incorrect PESEL numbers', () => {
    const invalidPesels = [
      '12345678901',
      '44051401358',
      '02270803627',
      '1234567890A',
      '4405140135',
      '440514013593',
    ];

    invalidPesels.forEach(pesel => {
      wrapper.setData({ pesel });
      wrapper.find('form').trigger('submit.prevent');
      expect(wrapper.vm.validationMessage).toBe(`Numer PESEL ${pesel} jest nieprawidłowy.`);
    });
  });
});
