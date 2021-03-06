import { html, fixture, expect } from '@open-wc/testing';

import './bulib-locoso';

describe('bulib-locoso', () => {
  it("renders effectively as a web component", async () => {
    const el = await fixture(html`<bulib-locoso></bulib-locoso>`);
    expect(el.renderRoot.innerHTML).not.to.be.undefined;
    expect(el.renderRoot.innerHTML).to.include("Visit Us");
    expect(el.renderRoot.innerHTML).to.include("Contact Us");
    expect(el.renderRoot.innerHTML).to.include("Follow Us");
    expect(el).lightDom.to.equalSnapshot();
  });

  it("does NOT to contain 'bulib-hours' by default", async () => {
    const el = await fixture(html`<bulib-locoso></bulib-locoso>`);
    expect(el.renderRoot.innerHTML).not.to.include("bulib-hours");
  });

  it("contains 'bulib-hours' when a 'library' is specified", async () => {
    const el = await fixture(html`<bulib-locoso library="sel"></bulib-locoso>`);
    expect(el.renderRoot.innerHTML).to.include("bulib-hours");
  });
});