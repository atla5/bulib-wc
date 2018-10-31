import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class BUFooter extends LitElement {

  constructor(){
    super();
    this.library = "mugar-memorial";
  }

  static get properties() {
    return {
      library: {type: String, notify:true}
    }
  }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc/assets/css/common.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bulib/bulib-wc/assets/css/footer.min.css">
      <style>
        h3 { margin-top: 0px; margin-bottom: 0px; }
        ul, ol { margin-top: 5px; margin-bottom: 5px; }
      </style>
      <footer class="pam">
        <div class="ftr-left">
            <div id="bu-content">
              <div class="left txtc bu-logo">
                <a href="http://www.bu.edu/" title="Boston University Home"><img alt="boston university logo" src="http://www.bu.edu/academics/files/bu-logo.gif"></a>
                <br /><br />
                <small><a class="white-link" href="http://www.bu.edu/copyright" title="Copyright">© Copyright ${new Date().getFullYear()}</a></small>
              </div>
              <div>
                <ul class="no-bullet">
                  <li><a class="white-link" href="http://www.bu.edu/library/" title="Library Home">Library Home</a></li>
                  <li><a class="white-link" href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=BU&sortby=rank&lang=en_US" title="Library Search">Search Content</a></li>
                  <li><a class="white-link" href="http://askalibrarian.bu.edu/" title="Help">Help</a></li>
                </ul>
              </div>
            </div>
        </div>
        <div class="ftr-middle"><slot id="sitemap" name="sitemap"></slot></div>
        <div class="ftr-right">
            <bu-locoso library="${this.library}" link_class="white-link"></bu-locoso>
        </div>
      </footer>`;
  }

}

customElements.define('bulib-ftr', BUFooter);
