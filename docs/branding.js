export const ensemble_demo = `
  <br /><hr /><br />

  <h2><code>bulib-hours</code></h2>
  <bulib-hours></bulib-hours>
  <br /><hr /><br />

  <h2><code>bulib-search</code></h2>
  <bulib-search></bulib-search>
  <br /><hr /><br />
  
  <h2><code>bulib-locoso</code></h2>
  <bulib-locoso></bulib-locoso>
  <br /><hr /><br />

  <bulib-footer></bulib-footer>`;

export const header_demo = `
  <div class="header-wrapper">
    <nav>
      <div class="primary-navbar">
        <div class="primary-nav-left">
          <a title="BU Libraries Homepage" href="https://www.bu.edu/library">
            <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png">
          </a>
        </div>
        <div class="primary-nav-main menu-items-wrapper">
          <ul class="menu-items">
            <li id="subsite-research"><a href="https://www.bu.edu/library/research">Research</a></li>
            <li id="subsite-services"><a href="https://www.bu.edu/library/services">Services</a></li>
            <li id="subsite-about"><a href="https://www.bu.edu/library/">About</a></li>
            <!-- <li id="subsite-guides"><a href="https://library.bu.edu/guides">Guides</a></li> -->
            <!-- <li id="subsite-help"><a href="https://askalibrarian.bu.edu/">Help</a></li> -->
          </ul>
        </div>
        <div class="primary-nav-right">
          <div class="mobile-navigation none" aria-hidden="true">
            <div id="menuToggle">
              <!-- invisible toggle with hamburger -->
              <input type="checkbox" tabindex="-1"/>
              <span></span>
              <span></span>
              <span></span>
              
              <!-- mobile nav menu -->
              <ul id="mobile-menu">
                <li id="subsite-research"><a href="https://www.bu.edu/library/research">Research</a></li>
                <li id="subsite-services"><a href="https://www.bu.edu/library/services">Services</a></li>
                <li id="subsite-about"><a href="https://www.bu.edu/library/">About</a></li>
                <li><hr /></li>
                <li><a href="https://www.bu.edu/library/about">Library Locations</a></li>
                <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li>
              </ul>
            </div>
          </div>
          <div class="top-right">
            <ul class="menu-items">
              <li>
                <div class="dropdown">
                  <a class="menu-item inline" href="https://www.bu.edu/library/about">
                    <span class="labeled-icon prs">Library Locations</span><i class="material-icons inline">arrow_drop_down</i>
                  </a>
                  <div class="dropdown-content">
                    <ul class="library-list no-bullet">
                      <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>
                      <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>
                      <!-- <li><a href="https://www.bu.edu/disc/">Digital Collections</a></li> -->
                      <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>
                      <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>
                      <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>
                      <!-- <li><a href="https://open.bu.edu/">OpenBU</a></li> -->
                      <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li>
                      <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>
                      <li><a href="https://www.bu.edu/library/sel/">Science &amp; Engineering Library</a></li>
                      <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>
                      <li><a href="https://www.bu.edu/library/about/additional-libraries/">Additional Libraries</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a class="menu-item inline" href="https://askalibrarian.bu.edu/">
                  <span class="labeled-icon prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <script id="mobile-nav-clickout" type="text/javascript">
        let input = document.querySelector("#menuToggle > input");
        window.addEventListener("click", (event) => {
          let clicked = event.target;
          let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
          if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
            input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
          }
        });
      </script>
    </nav>
  </div>
  <div class="banner-wrapper">
    <div class="banner">
      <span><a href="/">Ask a Librarian</a>: &nbsp; <a href="/dev_staging">Help &amp; FAQs</a></span>
      <bulib-search str_options="help primo"></bulib-search>
    </div>
  </div>
  <script id="google-analytics-link-tracker" type="module" defer>
    import {addSendGAEventOnAnchorClickToAnchorElements} from 'https://unpkg.com/bulib-wc@latest/src/_helpers/google_analytix.js?module';
    
    window.onload = function(){
      let headerLinks = document.querySelectorAll(".header-wrapper a");
      addSendGAEventOnAnchorClickToAnchorElements(headerLinks, "bulib-header");
      
      let cardLinks = document.querySelectorAll(".deck a");
      addSendGAEventOnAnchorClickToAnchorElements(cardLinks, "card");
      
      let ctaLinks = document.querySelectorAll(".ctas a");
      addSendGAEventOnAnchorClickToAnchorElements(ctaLinks, "cta");
    };
  </script>`;

export const css_vars_demo = `
  <h3>Primary</h3>
  <p>Colors of the header and footer wrappers</p>

  <div class="tiles">
    <bulib-color var="--color-primary-background" white></bulib-color>
    <bulib-color var="--color-primary-background-light" white></bulib-color>
    <bulib-color var="--color-primary-background-dark" white></bulib-color>
    <bulib-color var="--color-primary-text"></bulib-color>
    <bulib-color var="--color-primary-text-light"></bulib-color>
  </div>

  <br /><hr />

  <h3>Secondary</h3>
  <p>Used in the banner (under the header)</p>

  <div class="tiles">
    <bulib-color var="--color-secondary-background"></bulib-color>
    <bulib-color var="--color-secondary-background-light"></bulib-color>
    <bulib-color var="--color-secondary-background-dark"></bulib-color>
    <bulib-color var="--color-secondary-text" white></bulib-color>
    <bulib-color var="--color-secondary-text-dark" white></bulib-color>
  </div>

  <br /><hr />

  <h3>Accent Color</h3>
  <p>BU Official Red</p>

  <div class="tiles">
    <bulib-color var="--color-accent-background" white></bulib-color>
    <bulib-color var="--color-accent-text"></bulib-color>
    <bulib-color var="--color-accent-text-hover"></bulib-color>
  </div>

  <br /><hr />

  <h3>Calls-to-Action</h3>
  <p>Buttons and things to click on</p>

  <div class="tiles">
    <bulib-color var="--color-button-background" white></bulib-color>
    <bulib-color var="--color-button-background-accent" white></bulib-color>
    <bulib-color var="--color-button-background-dark" white></bulib-color>
    <bulib-color var="--color-button-text"></bulib-color>
  </div>

  <br /><hr />
`;

export const footer_demo = `
  <bulib-footer debug></bulib-footer>
      
  <br /><hr /><br />

  <bulib-select 
    sel_title="Select Simulated URL" opt_code="sample_urls" 
    tag_name="bulib-footer" attr_name="curr_url"
  ></bulib-select>
`;