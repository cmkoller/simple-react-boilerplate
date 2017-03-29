import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

Object.assign(global, {
  mount,
  jasmineEnzyme,
  React
});

beforeEach(() => {
  jasmineEnzyme();
});

let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
