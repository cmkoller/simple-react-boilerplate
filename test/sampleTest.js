import App from 'components/App';

describe('sampleTest', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<App />);
  });

  it('should render the sample text', () => {
    expect(wrapper).toBePresent();
    expect(wrapper.text()).toMatch("You're up and running!");
  });
});
