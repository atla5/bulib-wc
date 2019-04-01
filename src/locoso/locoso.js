import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';
import {getLibraryInfoFromCode} from '../_helpers/lib_info_helper.js';

/**
 * display the *LO*cation, *CO*ntact, and *SO*cial media information for
 *    a given library within the Boston Universities System.
 */
class BULocoso extends LitElement {

  constructor(){ super(); }

  // don't need 'slot' functionality, so lets use Light DOM
  createRenderRoot(){ return this; }

  static get properties() {
    return {
      /** optional additional class added to each link in the rendered HTML */
      link_class: {type: String},
      /** current library code used as the key to swap between locoso data entries */
      library: {type: String, notify:true},
      
      debug: {type: Boolean}
    };
  }

  render() {
    let myLocoso = getLibraryInfoFromCode(this.library) || {};
    this._logToConsole("raw lib_data from lib_info_helper: \n" + JSON.stringify(myLocoso));

    let lib_name = myLocoso["name"] || "BU Libraries";
    let address = myLocoso["address"] || ["771 Commonwealth Avenue","Boston, MA 02215"];
    let website = myLocoso["website"] || "https://www.bu.edu/library/about";

    let raw_contacts = myLocoso["contacts"] || {"phone":"617-353-2700","email":"ask@bu.edu","text":"617-431-2427"};
    let contacts = this._prepareContacts(raw_contacts);
    
    let raw_social = myLocoso["social"] || {};
    let social = this._prepareSocial(raw_social);
    
    let socialDisplay;
    if(social.length < 1){ socialDisplay = html``; }
    else{
      socialDisplay= html`
        <h3>Follow Us</h3>
        <ul aria-description="list of social media accounts" class="no-bullet inline-list plm">
        ${social.map((s) =>
          html`<li><a class="${this.link_class}" target="_blank" href="${s.url}" title="${s.text}"><img alt="${s.text} icon" class="sm-icon ${this.link_class}"
                      src="https://raw.githubusercontent.com/bulib/bulib-wc/master/assets/icons/icons8-${s.text}-48.png"></a></li>`
        )}
        </ul>
      `;
    }
    return html`
      <style>
        /* layout and responsiveness */
        #locoso.left { flex: 1; padding-left: 30px; }
        #locoso.right { flex: 2; padding-right: 30px; }
        @media only screen and (min-width: 350px){
          #locoso { display: flex; }
          .left { flex: 1; }
        }

        /* list styles, */
        ul, ol { margin: 5px 0px; padding-left: 0; padding-bottom: 10px; }

        /* padding and margins */
        #locoso > div > h3 { margin-top: 0px; margin-bottom: 0px; text-align: }
        .prm { margin-right: 10px; padding-right: 10px; }
        .sm-icon { width: 30px; height: 30px; border: solid transparent 1px; }
        .sm-icon:hover { width: 30px; height: 30px; border: solid white 1px; }
      </style>
      <div id="locoso">
        <div class="left prm">
          <h3 class="inline">Visit Us</h3>&nbsp;
          <ol class="no-bullet" aria-label="address">
            <li>${lib_name}</li>
            ${address.map((l) => html`<li>${l}</li>`)}
            <li>
              <small>
                <a class="${this.link_class}" aria-label="Open library site" href="${website}" title="${lib_name} website">website</a>
                <a class="${this.link_class}" aria-label="Directions to the Library" title="get directions" target="_blank"
                    href="${'https://google.com/maps/search/' + encodeURI("Boston University " + lib_name)}">directions &raquo;</a>
              </small>
            </li>
          </ol>
        </div>
        <div>
          <h3 class="inline">Contact Us</h3>
          <ul class="no-bullet" aria-label="contact-links">
            ${contacts.map((c) =>
                html`<li>${c.text} <a class="${this.link_class}" href="${c.url}">${c.val}</a></li>`
             )}
          </ul>
          ${socialDisplay}
        </div>
      </div>
    `;
  }

  /** use the raw 'contacts' data to populate a basic list that can more easily displayed as a list of links */
  _prepareContacts(rawContacts){
    if(Object.keys(rawContacts).length < 1){ return {}; }
    
    let contacts = [];
    if(rawContacts["phone"]){
      contacts.push( {"text":"call", "url":"tel:"+rawContacts["phone"], "val":rawContacts["phone"]} );
    }
    if(rawContacts["email"]){
      contacts.push( {"text":"email", "url":"mailto:"+rawContacts["email"], "val":rawContacts["email"] } );
    }
    if(rawContacts["text"]){
      contacts.push( {"text":"text", "url":"sms:"+rawContacts["text"], "val":rawContacts["text"] } );
    }
    if(rawContacts["fax"]){
      contacts.push( {"text":"fax", "url":"fax:"+rawContacts["fax"], "val":rawContacts["fax"] } );
    }
    this._logToConsole(`${contacts.length.toString()} items found for 'contacts'.`);
    return contacts;
  }

  /** use raw 'social' data to generate a list of basic profile links for easy display */
  _prepareSocial(rawSocial){
    if(Object.keys(rawSocial).length < 1){ return []; }
    
    let social = [];
    if(rawSocial["twitter"]){
      social.push( {"text":"twitter", "url":"http://twitter.com/"+rawSocial["twitter"]} );
    }
    if(rawSocial["facebook"]){
      social.push( {"text":"facebook", "url":"http://facebook.com/"+rawSocial["facebook"]} );
    }
    if(rawSocial["instagram"]){
      social.push( {"text":"instagram", "url":"https://instagram.com/"+rawSocial["instagram"]} );
    }
    if(rawSocial["flickr"]){
      social.push( {"text":"flickr", "url":"https://www.flickr.com/photos/"+rawSocial["flickr"]} );
    }
    if(rawSocial["tumblr"]){
      social.push( {"text":"tumblr", "url":"http://tumblr."+rawSocial["tumblr"]+".com/"} );
    }
    this._logToConsole(`${social.length.toString()} items found for 'social'.`);
    return social;
  }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-locoso) " + message); }
  }

}

customElements.define('bulib-locoso', BULocoso);
