import { html, fixture, expect } from '@open-wc/testing';

import './bulib-search';

describe('bulib-search', () => {
  it('to effectively load as a web component', async () => {
    const el = await fixture(html`<bulib-search></bulib-search>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
  });
  
  it('to default to the primo search', async () => {
    const el = await fixture(html`<bulib-search></bulib-search>`);
    expect(el.renderRoot.innerHTML).not.to.include(`placeholder="Search library resources"`);
  });

  it('to effectively update the search option when a single item specified', async () => {
    const el = await fixture(html`<bulib-search str_options="guides"></bulib-search>`);
    expect(el.renderRoot.innerHTML).to.include(`placeholder="Search Research Guides"`);
  });

  it('to not have any other options when nothing is specified', async () => {
    const el = await fixture(html`<bulib-search></bulib-search>`);
    expect(el.renderRoot.innerHTML).not.to.include(`type="radio"`);
  });

  it('to display options when multiple \'str_options\' are specified', async () => {
    const el = await fixture(html`<bulib-search str_options="primo wp "></bulib-search>`);
    expect(el.renderRoot.innerHTML).to.include(`type="radio"`);
  });

  it('to support the specification of a particular \'str_options\' (\'str_selected\')', async () => {
    const el = await fixture(html`<bulib-search str_options="primo wp guides" str_selected="wp"></bulib-search>`);
    expect(el.renderRoot.innerHTML).to.include(`placeholder="Search library info/services"`);
  });
});