(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,m=globalThis,h=m.trustedTypes,g=h?h.emptyScript:``,_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},b=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=p(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...d(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(s(e))}else e!==void 0&&t.push(s(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??b)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:`open`},S[v(`elementProperties`)]=new Map,S[v(`finalized`)]=new Map,_?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var C=globalThis,w=e=>e,T=C.trustedTypes,E=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ee=`$lit$`,D=`lit$${Math.random().toFixed(9).slice(2)}$`,te=`?`+D,O=`<${te}>`,ne=document,re=()=>ne.createComment(``),ie=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ae=Array.isArray,oe=e=>ae(e)||typeof e?.[Symbol.iterator]==`function`,se=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,ue=/>/g,de=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),fe=/'/g,pe=/"/g,me=/^(?:script|style|textarea|title)$/i,k=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),A=Symbol.for(`lit-noChange`),j=Symbol.for(`lit-nothing`),he=new WeakMap,ge=ne.createTreeWalker(ne,129);function _e(e,t){if(!ae(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return E===void 0?t:E.createHTML(t)}var ve=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ce;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ce?c[1]===`!--`?o=le:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=de):(me.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=de):o=ue:o===de?c[0]===`>`?(o=i??ce,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?de:c[3]===`"`?pe:fe):o===pe||o===fe?o=de:o===le||o===ue?o=ce:(o=de,i=void 0);let d=o===de&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ce?n+O:l>=0?(r.push(s),n.slice(0,l)+ee+n.slice(l)+D+d):n+D+(l===-2?t:d)}return[_e(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ye=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ve(t,n);if(this.el=e.createElement(l,r),ge.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ge.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ee)){let t=u[o++],n=i.getAttribute(e).split(D),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?we:r[1]===`?`?Te:r[1]===`@`?Ee:Ce}),i.removeAttribute(e)}else e.startsWith(D)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(me.test(i.tagName)){let e=i.textContent.split(D),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],re()),ge.nextNode(),c.push({type:2,index:++a});i.append(e[t],re())}}}else if(i.nodeType===8)if(i.data===te)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(D,e+1))!==-1;)c.push({type:7,index:a}),e+=D.length-1}a++}}static createElement(e,t){let n=ne.createElement(`template`);return n.innerHTML=e,n}};function be(e,t,n=e,r){if(t===A)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ie(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=be(e,i._$AS(e,t.values),i,r)),t}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ne).importNode(t,!0);ge.currentNode=r;let i=ge.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Se(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new De(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ge.nextNode(),a++)}return ge.currentNode=ne,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Se=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=be(this,e,t),ie(e)?e===j||e==null||e===``?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==A&&this._(e):e._$litType$===void 0?e.nodeType===void 0?oe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ye.createElement(_e(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new ye(e)),t}k(t){ae(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(re()),this.O(re()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ce=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=be(this,e,t,0),a=!ie(e)||e!==this._$AH&&e!==A,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=be(this,r[n+o],t,o),s===A&&(s=this._$AH[o]),a||=!ie(s)||s!==this._$AH[o],s===j?e=j:e!==j&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},we=class extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Te=class extends Ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}},Ee=class extends Ce{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=be(this,e,t,0)??j)===A)return;let n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},De=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){be(this,e)}},Oe=C.litHtmlPolyfillSupport;Oe?.(ye,Se),(C.litHtmlVersions??=[]).push(`3.3.3`);var ke=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Se(t.insertBefore(re(),e),e,void 0,n??{})}return i._$AI(e),i},Ae=globalThis,M=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};M._$litElement$=!0,M.finalized=!0,Ae.litElementHydrateSupport?.({LitElement:M});var je=Ae.litElementPolyfillSupport;je?.({LitElement:M}),(Ae.litElementVersions??=[]).push(`4.2.2`);var Me={de:{helpHint:`Drücke [?] für Hilfe`,helpTitle:`Tastatur-Kurzbefehle`,helpTitleDesktop:`Bedienung & Kurzbefehle`,helpTitleMobile:`So bedienst du JumpKey`,helpKeyboardSection:`Tastatur`,helpMouseTouchSection:`Maus & Touch`,helpTouchSection:`Touch-Bedienung`,helpOpen:`Hilfe öffnen`,helpClick:`Klick / Tippen`,helpClickAction:`Service oder Kategorie öffnen`,helpShiftClick:`Shift + Klick`,helpShiftClickAction:`Service im aktuellen Tab öffnen`,helpLongPress:`Gedrückt halten`,helpLongPressFavorite:`Service als Favorit hinzufügen`,helpLongPressRemoveFavorite:`Favoriten-Kachel aus Favoriten entfernen`,helpHold:`Halten`,helpTouchAddFavorite:`Service als Favorit hinzufügen`,helpTouchRemoveFavorite:`Favorit wieder entfernen`,helpSearchButton:`Suche`,helpTouchSearch:`Services durchsuchen`,helpViewButton:`Ansicht`,helpTouchView:`Zwischen Kategorie- und Grid-Ansicht wechseln`,helpMoreButton:`Mehr`,helpTouchMore:`Hilfe und Theme-Auswahl öffnen`,helpExitDesktop:`Klicke außerhalb oder schließe das Fenster.`,helpExitMobile:`Tippe außerhalb, um die Hilfe zu schließen.`,helpExit:`Klicke irgendwohin oder drücke eine Taste zum Schließen.`,mobileMenuTitle:`Mehr`,mobileHelpAction:`Hilfe`,mobileHelpActionDesc:`Touch-Bedienung anzeigen`,mobileThemeAction:`Theme`,mobileThemeTitle:`Theme auswählen`,themeChanged:`Theme „{theme}“ aktiviert`,searchPlaceholder:`Service suchen...`,noServices:`Keine Services gefunden.`,favorites:`Favoriten`,continue:`Zuletzt verwendet`,continueEmpty:`Keine zuletzt verwendeten Services vorhanden.`,resetFavs:`Zurücksetzen`,resetContinue:`Zurücksetzen`,categories:`Kategorien`,services:`Services`,back:`Zurück`,close:`Schließen`,cancel:`Abbrechen`,configSubtitle:`Konfiguration & Backup`,confirmResetTitle:`Favoriten zurücksetzen`,confirmReset:`Möchtest du die Liste der häufig genutzten Services wirklich zurücksetzen?`,confirmResetConfirm:`Ja, zurücksetzen`,confirmContinueResetTitle:`Zuletzt verwendet zurücksetzen`,confirmContinueReset:`Möchtest du die Liste der zuletzt verwendeten Services wirklich zurücksetzen?`,favAlreadyExists:`ist bereits ein Favorit auf Slot`,favFull:`Alle Favoritenplätze sind belegt`,favSaved:`als Favorit auf Taste {slot} gespeichert`,favRemoved:`von Taste {slot} entfernt`,serviceCount:`Services`,cannotFavoriteCategory:`Kategorien können nicht als Favorit gespeichert werden. Öffne die Kategorie, um ihre Services hinzuzufügen.`,favLabel:`FAV`,selectCategory:`Kategorie wählen`,serviceLabel:`Service`,saved:`gespeichert`,continueRemoved:`aus „Zuletzt verwendet“ entfernt`,hkSearch:`Suche öffnen`,hkFavs:`Direkt-Favorit aufrufen`,hkContinue:`Zuletzt verwendeten Service aufrufen`,hkToggleLast:`Zuletzt verwendete Services durchschalten (erneut drücken, solange die Startanzeige sichtbar ist)`,hkOpenContinue:`Übersicht der zuletzt verwendeten Services öffnen`,hkCat:`Kategorie-Hotkeys aktivieren`,hkService:`Service innerhalb einer Kategorie aufrufen`,hkReset:`Zurück zur Hauptübersicht / Abbrechen`,hkToggleView:`Ansichtsmodus wechseln (Kategorie / Grid)`,hkSwitchTabs:`Konfigurations-Tabs wechseln`,searchEnginesShow:`Suchmaschinen anzeigen`,searchEnginesTitle:`Unterstützte Suchmaschinen:`,searchEnginePreviewPrefix:`Suche auf`,searchEnginePreviewFor:`nach`,searchEngineEnterQuery:`Suchbegriff eingeben...`,contextInCat:`In Kat`,hkSearchEngines:`Suchmaschinen aktivieren (im Suchfeld)`,hkNavigate:`Ergebnisse durchblättern (im Suchfeld)`,hkOpenSelection:`Auswahl öffnen`,hkOpenSelectionSameTab:`Auswahl im aktuellen Tab öffnen`,editConfig:`Konfiguration bearbeiten`,editConfigValid:`Konfiguration ist gültig`,editConfigInvalid:`Konfiguration ist ungültig`,editConfigSave:`Speichern`,editConfigCancel:`Abbrechen`,editConfigSaveDone:`Änderungen wurden erfolgreich gespeichert`,editConfigSaveFailed:`Änderungen konnten nicht gespeichert werden`,tabAppearance:`Darstellung`,appearanceTitle:`Theme auswählen`,appearanceDescription:`Das Theme wird sofort angewendet und für dieses Gerät gespeichert.`,themeGroupDark:`Dunkel`,themeGroupLight:`Hell`,themeMidnight:`Midnight`,themeMidnightDesc:`Das klassische Slate-Design mit Indigo-Akzent.`,themeOcean:`Ocean`,themeOceanDesc:`Dunkles Petrol mit klarem Cyan-Akzent.`,themeGraphite:`Graphite`,themeGraphiteDesc:`Neutrales Anthrazit mit violettem Akzent.`,themeEmerald:`Emerald`,themeEmeraldDesc:`Dunkles Grün mit frischem Terminal-Akzent.`,themeDracula:`Dracula`,themeDraculaDesc:`Kontrastreiches Violett mit verspieltem Charakter.`,themeNord:`Nord`,themeNordDesc:`Kühle, ruhige Blautöne für lange Sessions.`,themeTokyoNight:`Tokyo Night`,themeTokyoNightDesc:`Tiefes Nachtblau mit leuchtendem Blau-Akzent.`,themeCatppuccin:`Catppuccin Mocha`,themeCatppuccinDesc:`Weiche Pastelltöne auf warmem Dunkelgrau.`,themeCarbon:`Carbon`,themeCarbonDesc:`Reduziertes Schwarz-Grau mit klarem Blau.`,themeHacker:`Hacker`,themeHackerDesc:`Fast schwarzes Terminal-Design mit Grün-Akzent.`,themeSolarized:`Solarized Dark`,themeSolarizedDesc:`Augenschonendes Petrol mit ausgewogenen Kontrasten.`,themeGruvbox:`Gruvbox Dark`,themeGruvboxDesc:`Warme Retro-Töne mit goldigem Akzent.`,themeDaylight:`Daylight`,themeDaylightDesc:`Klares, neutrales Hell-Theme mit Indigo-Akzent.`,themeNordLight:`Nord Light`,themeNordLightDesc:`Kühle, weiche Flächen für ruhiges Arbeiten bei Tageslicht.`,themeSolarizedLight:`Solarized Light`,themeSolarizedLightDesc:`Warm und augenschonend mit ausgewogenen Blau-Tönen.`,tabData:`Import & Export`,tabDataExport:`Exportieren`,tabDataExportSuccess:`Konfiguration erfolgreich exportiert!`,tabDataExportFailed:`Export fehlgeschlagen.`,tabDataBackupTitle:`Konfiguration sichern`,tabDataBackupDesc:`Lade deine aktuellen Widgets und Suchmaschinen als .json-Datei herunter.`,tabDataRestoreTitle:`Konfiguration wiederherstellen`,tabDataRestoreDesc:`Lade eine vorhandene JSON-Konfigurationsdatei hoch.`,tabDataSelectFile:`Datei auswählen`,tabDataOnlyJsonFiles:`Nur valide .json-Dateien`,tabDataImportSuccess:`Konfiguration erfolgreich geladen!`,tabDataImportInvalidStructure:`Die hochgeladene Datei hat keine valide Dashboard-Struktur.`,tabDataImportJsonError:`Fehler beim Lesen der JSON-Datei. Ungültige Syntax.`,tabEditor:`JSON-Editor`,tabEditorOk:`OK`,tabEditorSaveDoneTitle:`Erfolgreich`,tabEditorSaveSuccess:`Konfiguration erfolgreich gespeichert!`,tabEditorSaveFailedTitle:`Fehler beim Speichern`,tabEditorSaveFailed:`Die Änderungen konnten nicht in die services.json geschrieben werden.`,discardChangesTitle:`Änderungen verwerfen?`,discardChangesMessage:`Es gibt ungespeicherte Änderungen im JSON-Editor. Möchtest du das Fenster wirklich schließen?`,discardConfirm:`Ja, verwerfen`,tabEditorDiscardChangesTitle:`Ungespeicherte Änderungen`,tabEditorDiscardChangesMsg:`Du hast ungespeicherte Änderungen vorgenommen. Möchtest du diese wirklich verwerfen?`,tabEditorDiscardChangesConfirm:`Änderungen verwerfen`,tabEditorDiscardChangesCancel:`Weiter editieren`,tabEditorValid:`Gültig`,tabEditorInvalid:`Ungültig`},fr:{helpHint:`Appuyez sur [?] pour obtenir de l’aide`,helpTitle:`Raccourcis clavier`,helpTitleDesktop:`Commandes et raccourcis`,helpTitleMobile:`Comment utiliser JumpKey`,helpKeyboardSection:`Clavier`,helpMouseTouchSection:`Souris et tactile`,helpTouchSection:`Commandes tactiles`,helpOpen:`Ouvrir l’aide`,helpClick:`Cliquer / toucher`,helpClickAction:`Ouvrir un service ou une catégorie`,helpShiftClick:`Maj + clic`,helpShiftClickAction:`Ouvrir le service dans l’onglet actuel`,helpLongPress:`Maintenir appuyé`,helpLongPressFavorite:`Ajouter un service aux favoris`,helpLongPressRemoveFavorite:`Retirer une tuile des favoris`,helpHold:`Maintenir`,helpTouchAddFavorite:`Ajouter un service aux favoris`,helpTouchRemoveFavorite:`Retirer un favori`,helpSearchButton:`Recherche`,helpTouchSearch:`Rechercher des services`,helpViewButton:`Vue`,helpTouchView:`Basculer entre les vues catégories et grille`,helpMoreButton:`Plus`,helpTouchMore:`Ouvrir l’aide et le choix du thème`,helpExitDesktop:`Cliquez à l’extérieur ou fermez la fenêtre.`,helpExitMobile:`Touchez à l’extérieur pour fermer l’aide.`,helpExit:`Cliquez n’importe où ou appuyez sur une touche pour fermer.`,mobileMenuTitle:`Plus`,mobileHelpAction:`Aide`,mobileHelpActionDesc:`Afficher les commandes tactiles`,mobileThemeAction:`Thème`,mobileThemeTitle:`Choisir un thème`,themeChanged:`Thème « {theme} » activé`,searchPlaceholder:`Rechercher un service...`,noServices:`Aucun service trouvé.`,favorites:`Favoris`,continue:`Récemment utilisés`,continueEmpty:`Aucun service récemment utilisé.`,resetFavs:`Réinitialiser`,resetContinue:`Réinitialiser`,categories:`Catégories`,services:`Services`,back:`Retour`,close:`Fermer`,cancel:`Annuler`,configSubtitle:`Configuration et sauvegarde`,confirmResetTitle:`Réinitialiser les favoris`,confirmReset:`Voulez-vous vraiment réinitialiser vos services fréquemment utilisés ?`,confirmResetConfirm:`Oui, réinitialiser`,confirmContinueResetTitle:`Réinitialiser les services récents`,confirmContinueReset:`Voulez-vous vraiment réinitialiser la liste des services récemment utilisés ?`,favAlreadyExists:`est déjà un favori sur l’emplacement`,favFull:`Tous les emplacements de favoris sont occupés`,favSaved:`enregistré comme favori sur la touche {slot}`,favRemoved:`retiré de la touche {slot}`,serviceCount:`Services`,cannotFavoriteCategory:`Les catégories ne peuvent pas être ajoutées aux favoris. Ouvrez la catégorie pour ajouter ses services.`,favLabel:`FAV`,selectCategory:`Choisir une catégorie`,serviceLabel:`Service`,saved:`enregistré`,continueRemoved:`retiré des services récemment utilisés`,hkSearch:`Ouvrir la recherche`,hkFavs:`Ouvrir directement un favori`,hkContinue:`Ouvrir un service récemment utilisé`,hkToggleLast:`Parcourir les services récents (appuyer de nouveau pendant l’affichage du lancement)`,hkOpenContinue:`Ouvrir la liste des services récemment utilisés`,hkCat:`Activer les raccourcis de catégories`,hkService:`Ouvrir un service dans la catégorie active`,hkReset:`Retour à la vue principale / Annuler`,hkToggleView:`Changer de vue (catégories / grille)`,hkSwitchTabs:`Changer d’onglet de configuration`,searchEnginesShow:`Afficher les moteurs de recherche`,searchEnginesTitle:`Moteurs de recherche pris en charge :`,searchEnginePreviewPrefix:`Rechercher sur`,searchEnginePreviewFor:`pour`,searchEngineEnterQuery:`Saisir un terme de recherche...`,contextInCat:`Dans cat.`,hkSearchEngines:`Activer les moteurs de recherche (dans le champ de recherche)`,hkNavigate:`Parcourir les résultats (dans le champ de recherche)`,hkOpenSelection:`Ouvrir la sélection`,hkOpenSelectionSameTab:`Ouvrir la sélection dans l’onglet actuel`,editConfig:`Modifier la configuration`,editConfigValid:`La configuration est valide`,editConfigInvalid:`La configuration est invalide`,editConfigSave:`Enregistrer`,editConfigCancel:`Annuler`,editConfigSaveDone:`Les modifications ont été enregistrées`,editConfigSaveFailed:`Les modifications n’ont pas pu être enregistrées`,tabAppearance:`Apparence`,appearanceTitle:`Choisir un thème`,appearanceDescription:`Le thème est appliqué immédiatement et enregistré sur cet appareil.`,themeGroupDark:`Sombre`,themeGroupLight:`Clair`,themeMidnight:`Midnight`,themeMidnightDesc:`Le design ardoise classique avec un accent indigo.`,themeOcean:`Ocean`,themeOceanDesc:`Des tons pétrole profonds avec un accent cyan net.`,themeGraphite:`Graphite`,themeGraphiteDesc:`Un graphite neutre avec un accent violet.`,themeEmerald:`Emerald`,themeEmeraldDesc:`Un vert profond avec un accent inspiré du terminal.`,themeDracula:`Dracula`,themeDraculaDesc:`Un violet très contrasté au caractère ludique.`,themeNord:`Nord`,themeNordDesc:`Des tons bleus frais et calmes pour les longues sessions.`,themeTokyoNight:`Tokyo Night`,themeTokyoNightDesc:`Un bleu nuit profond avec un accent bleu lumineux.`,themeCatppuccin:`Catppuccin Mocha`,themeCatppuccinDesc:`Des tons pastel doux sur un gris foncé chaleureux.`,themeCarbon:`Carbon`,themeCarbonDesc:`Un noir et gris minimal avec un accent bleu précis.`,themeHacker:`Hacker`,themeHackerDesc:`Un style terminal presque noir avec un accent vert.`,themeSolarized:`Solarized Dark`,themeSolarizedDesc:`Des tons pétrole reposants avec un contraste équilibré.`,themeGruvbox:`Gruvbox Dark`,themeGruvboxDesc:`Des tons rétro chaleureux avec un accent doré.`,themeDaylight:`Daylight`,themeDaylightDesc:`Un thème clair, neutre et net avec un accent indigo.`,themeNordLight:`Nord Light`,themeNordLightDesc:`Des surfaces fraîches et douces pour travailler calmement en journée.`,themeSolarizedLight:`Solarized Light`,themeSolarizedLightDesc:`Chaleureux et reposant avec des tons bleus équilibrés.`,tabData:`Importation et exportation`,tabDataExport:`Exporter`,tabDataExportSuccess:`Configuration exportée avec succès !`,tabDataExportFailed:`Échec de l’exportation.`,tabDataBackupTitle:`Sauvegarder la configuration`,tabDataBackupDesc:`Téléchargez vos widgets et moteurs de recherche actuels dans un fichier .json.`,tabDataRestoreTitle:`Restaurer la configuration`,tabDataRestoreDesc:`Téléversez un fichier de configuration JSON existant.`,tabDataSelectFile:`Choisir un fichier`,tabDataOnlyJsonFiles:`Fichiers .json valides uniquement`,tabDataImportSuccess:`Configuration chargée avec succès !`,tabDataImportInvalidStructure:`Le fichier téléversé ne possède pas une structure de tableau de bord valide.`,tabDataImportJsonError:`Erreur lors de la lecture du fichier JSON. Syntaxe invalide.`,tabEditor:`Éditeur JSON`,tabEditorOk:`OK`,tabEditorSaveDoneTitle:`Succès`,tabEditorSaveSuccess:`Configuration enregistrée avec succès !`,tabEditorSaveFailedTitle:`Échec de l’enregistrement`,tabEditorSaveFailed:`Impossible d’écrire les modifications dans services.json.`,discardChangesTitle:`Abandonner les modifications ?`,discardChangesMessage:`Vous avez des modifications non enregistrées dans l’éditeur JSON. Voulez-vous vraiment fermer la fenêtre ?`,discardConfirm:`Oui, abandonner`,tabEditorDiscardChangesTitle:`Modifications non enregistrées`,tabEditorDiscardChangesMsg:`Vous avez des modifications non enregistrées. Voulez-vous vraiment les abandonner ?`,tabEditorDiscardChangesConfirm:`Abandonner les modifications`,tabEditorDiscardChangesCancel:`Continuer la modification`,tabEditorValid:`Valide`,tabEditorInvalid:`Invalide`},es:{helpHint:`Pulsa [?] para obtener ayuda`,helpTitle:`Atajos de teclado`,helpTitleDesktop:`Controles y atajos`,helpTitleMobile:`Cómo usar JumpKey`,helpKeyboardSection:`Teclado`,helpMouseTouchSection:`Ratón y táctil`,helpTouchSection:`Controles táctiles`,helpOpen:`Abrir ayuda`,helpClick:`Clic / toque`,helpClickAction:`Abrir un servicio o una categoría`,helpShiftClick:`Mayús + clic`,helpShiftClickAction:`Abrir el servicio en la pestaña actual`,helpLongPress:`Mantener pulsado`,helpLongPressFavorite:`Añadir un servicio a favoritos`,helpLongPressRemoveFavorite:`Quitar una tarjeta de favoritos`,helpHold:`Mantener`,helpTouchAddFavorite:`Añadir un servicio a favoritos`,helpTouchRemoveFavorite:`Quitar un favorito`,helpSearchButton:`Buscar`,helpTouchSearch:`Buscar servicios`,helpViewButton:`Vista`,helpTouchView:`Cambiar entre vista de categorías y cuadrícula`,helpMoreButton:`Más`,helpTouchMore:`Abrir la ayuda y la selección de tema`,helpExitDesktop:`Haz clic fuera o cierra la ventana.`,helpExitMobile:`Toca fuera para cerrar la ayuda.`,helpExit:`Haz clic en cualquier lugar o pulsa una tecla para cerrar.`,mobileMenuTitle:`Más`,mobileHelpAction:`Ayuda`,mobileHelpActionDesc:`Mostrar controles táctiles`,mobileThemeAction:`Tema`,mobileThemeTitle:`Elegir un tema`,themeChanged:`Tema «{theme}» activado`,searchPlaceholder:`Buscar servicio...`,noServices:`No se encontraron servicios.`,favorites:`Favoritos`,continue:`Usados recientemente`,continueEmpty:`No hay servicios usados recientemente.`,resetFavs:`Restablecer`,resetContinue:`Restablecer`,categories:`Categorías`,services:`Servicios`,back:`Atrás`,close:`Cerrar`,cancel:`Cancelar`,configSubtitle:`Configuración y copia de seguridad`,confirmResetTitle:`Restablecer favoritos`,confirmReset:`¿Quieres restablecer tus servicios usados con frecuencia?`,confirmResetConfirm:`Sí, restablecer`,confirmContinueResetTitle:`Restablecer servicios recientes`,confirmContinueReset:`¿Quieres restablecer la lista de servicios usados recientemente?`,favAlreadyExists:`ya es favorito en la posición`,favFull:`Todas las posiciones de favoritos están ocupadas`,favSaved:`guardado como favorito en la tecla {slot}`,favRemoved:`eliminado de la tecla {slot}`,serviceCount:`Servicios`,cannotFavoriteCategory:`Las categorías no se pueden añadir a favoritos. Abre la categoría para añadir sus servicios.`,favLabel:`FAV`,selectCategory:`Seleccionar categoría`,serviceLabel:`Servicio`,saved:`guardado`,continueRemoved:`eliminado de los usados recientemente`,hkSearch:`Abrir búsqueda`,hkFavs:`Abrir favorito directo`,hkContinue:`Abrir servicio usado recientemente`,hkToggleLast:`Recorrer los servicios recientes (pulsar de nuevo mientras se muestra el inicio)`,hkOpenContinue:`Abrir la lista de servicios usados recientemente`,hkCat:`Activar atajos de categorías`,hkService:`Abrir servicio dentro de la categoría activa`,hkReset:`Volver a la vista principal / Cancelar`,hkToggleView:`Cambiar vista (categorías / cuadrícula)`,hkSwitchTabs:`Cambiar pestañas de configuración`,searchEnginesShow:`Mostrar motores de búsqueda`,searchEnginesTitle:`Motores de búsqueda compatibles:`,searchEnginePreviewPrefix:`Buscar en`,searchEnginePreviewFor:`por`,searchEngineEnterQuery:`Introduce un término de búsqueda...`,contextInCat:`En cat.`,hkSearchEngines:`Activar motores de búsqueda (en el campo de búsqueda)`,hkNavigate:`Recorrer resultados (en el campo de búsqueda)`,hkOpenSelection:`Abrir selección`,hkOpenSelectionSameTab:`Abrir selección en la pestaña actual`,editConfig:`Editar configuración`,editConfigValid:`La configuración es válida`,editConfigInvalid:`La configuración no es válida`,editConfigSave:`Guardar`,editConfigCancel:`Cancelar`,editConfigSaveDone:`Los cambios se guardaron correctamente`,editConfigSaveFailed:`No se pudieron guardar los cambios`,tabAppearance:`Apariencia`,appearanceTitle:`Elegir un tema`,appearanceDescription:`El tema se aplica de inmediato y se guarda en este dispositivo.`,themeGroupDark:`Oscuro`,themeGroupLight:`Claro`,themeMidnight:`Midnight`,themeMidnightDesc:`El diseño clásico de pizarra con un acento índigo.`,themeOcean:`Ocean`,themeOceanDesc:`Tonos petróleo profundos con un acento cian definido.`,themeGraphite:`Graphite`,themeGraphiteDesc:`Grafito neutro con un acento violeta.`,themeEmerald:`Emerald`,themeEmeraldDesc:`Verde profundo con un acento inspirado en terminales.`,themeDracula:`Dracula`,themeDraculaDesc:`Violeta de alto contraste con un carácter divertido.`,themeNord:`Nord`,themeNordDesc:`Tonos azules fríos y tranquilos para sesiones largas.`,themeTokyoNight:`Tokyo Night`,themeTokyoNightDesc:`Azul noche profundo con un acento azul luminoso.`,themeCatppuccin:`Catppuccin Mocha`,themeCatppuccinDesc:`Tonos pastel suaves sobre gris oscuro cálido.`,themeCarbon:`Carbon`,themeCarbonDesc:`Negro y gris minimalistas con un acento azul nítido.`,themeHacker:`Hacker`,themeHackerDesc:`Estilo de terminal casi negro con un acento verde.`,themeSolarized:`Solarized Dark`,themeSolarizedDesc:`Tonos petróleo cómodos para la vista con contraste equilibrado.`,themeGruvbox:`Gruvbox Dark`,themeGruvboxDesc:`Tonos retro cálidos con un acento dorado.`,themeDaylight:`Daylight`,themeDaylightDesc:`Tema claro, neutro y limpio con un acento índigo.`,themeNordLight:`Nord Light`,themeNordLightDesc:`Superficies frías y suaves para trabajar con calma durante el día.`,themeSolarizedLight:`Solarized Light`,themeSolarizedLightDesc:`Cálido y cómodo para la vista con tonos azules equilibrados.`,tabData:`Importar y exportar`,tabDataExport:`Exportar`,tabDataExportSuccess:`¡Configuración exportada correctamente!`,tabDataExportFailed:`Error al exportar.`,tabDataBackupTitle:`Crear copia de seguridad`,tabDataBackupDesc:`Descarga tus widgets y motores de búsqueda actuales como archivo .json.`,tabDataRestoreTitle:`Restaurar configuración`,tabDataRestoreDesc:`Carga un archivo de configuración JSON existente.`,tabDataSelectFile:`Seleccionar archivo`,tabDataOnlyJsonFiles:`Solo archivos .json válidos`,tabDataImportSuccess:`¡Configuración cargada correctamente!`,tabDataImportInvalidStructure:`El archivo cargado no tiene una estructura de panel válida.`,tabDataImportJsonError:`Error al leer el archivo JSON. Sintaxis no válida.`,tabEditor:`Editor JSON`,tabEditorOk:`Aceptar`,tabEditorSaveDoneTitle:`Correcto`,tabEditorSaveSuccess:`¡Configuración guardada correctamente!`,tabEditorSaveFailedTitle:`Error al guardar`,tabEditorSaveFailed:`No se pudieron escribir los cambios en services.json.`,discardChangesTitle:`¿Descartar cambios?`,discardChangesMessage:`Tienes cambios sin guardar en el editor JSON. ¿Quieres cerrar la ventana?`,discardConfirm:`Sí, descartar`,tabEditorDiscardChangesTitle:`Cambios sin guardar`,tabEditorDiscardChangesMsg:`Tienes cambios sin guardar. ¿Quieres descartarlos?`,tabEditorDiscardChangesConfirm:`Descartar cambios`,tabEditorDiscardChangesCancel:`Seguir editando`,tabEditorValid:`Válido`,tabEditorInvalid:`No válido`},en:{helpHint:`Press [?] for help`,helpTitle:`Keyboard Shortcuts`,helpTitleDesktop:`Controls & Shortcuts`,helpTitleMobile:`How to use JumpKey`,helpKeyboardSection:`Keyboard`,helpMouseTouchSection:`Mouse & Touch`,helpTouchSection:`Touch controls`,helpOpen:`Open help`,helpClick:`Click / Tap`,helpClickAction:`Open a service or category`,helpShiftClick:`Shift + Click`,helpShiftClickAction:`Open service in the current tab`,helpLongPress:`Press and hold`,helpLongPressFavorite:`Add a service to favorites`,helpLongPressRemoveFavorite:`Remove a favorite tile`,helpHold:`Hold`,helpTouchAddFavorite:`Add a service to favorites`,helpTouchRemoveFavorite:`Remove a favorite`,helpSearchButton:`Search`,helpTouchSearch:`Search services`,helpViewButton:`View`,helpTouchView:`Switch category and grid view`,helpMoreButton:`More`,helpTouchMore:`Open help and theme selection`,helpExitDesktop:`Click outside or close the window.`,helpExitMobile:`Tap outside to close help.`,helpExit:`Click anywhere or press a key to close it.`,mobileMenuTitle:`More`,mobileHelpAction:`Help`,mobileHelpActionDesc:`Show touch controls`,mobileThemeAction:`Theme`,mobileThemeTitle:`Choose a theme`,themeChanged:`Theme “{theme}” activated`,searchPlaceholder:`Search services...`,noServices:`No services found.`,favorites:`Favorites`,continue:`Continue`,continueEmpty:`No recently used services available.`,resetFavs:`Reset`,resetContinue:`Reset`,categories:`Categories`,services:`Services`,back:`Back`,close:`Close`,cancel:`Cancel`,configSubtitle:`Configuration & Backup`,confirmResetTitle:`Reset Favorites`,confirmReset:`Do you really want to reset your frequently used services?`,confirmResetConfirm:`Yes, reset`,confirmContinueResetTitle:`Reset recently used`,confirmContinueReset:`Do you really want to reset the list of recently used services?`,favAlreadyExists:`is already a favorite on slot`,favFull:`All favorite slots are taken`,favSaved:`saved as favorite on key {slot}`,favRemoved:`removed from key {slot}`,serviceCount:`Services`,cannotFavoriteCategory:`Categories cannot be favorited. Open the category to add its services.`,favLabel:`FAV`,selectCategory:`Select category`,serviceLabel:`Service`,saved:`saved`,continueRemoved:`removed from Continue`,hkSearch:`Open search`,hkFavs:`Launch direct favorite`,hkContinue:`Launch recently used service`,hkToggleLast:`Cycle through recently used services (press again while launch feedback is visible)`,hkOpenContinue:`Open the recently used services overview`,hkCat:`Activate category hotkeys`,hkService:`Launch service inside active category`,hkReset:`Back to main overview / Cancel`,hkToggleView:`Toggle View Mode (Category / Grid)`,hkSwitchTabs:`Switch config tabs`,searchEnginesShow:`Show search engines`,searchEnginesTitle:`Supported Search Engines:`,searchEnginePreviewPrefix:`Search on`,searchEnginePreviewFor:`for`,searchEngineEnterQuery:`Enter search term...`,contextInCat:`In Cat`,hkSearchEngines:`Activate search engines (inside search input)`,hkNavigate:`Navigate results (inside search input)`,hkOpenSelection:`Open selection`,hkOpenSelectionSameTab:`Open selection in the current tab`,editConfig:`Edit configuration`,editConfigValid:`Configuration is valid`,editConfigInvalid:`Configuration is invalid`,editConfigSave:`Save`,editConfigCancel:`Cancel`,editConfigSaveDone:`Changes were saved successfully`,editConfigSaveFailed:`Changes could not be saved`,tabAppearance:`Appearance`,appearanceTitle:`Choose a theme`,appearanceDescription:`The theme is applied immediately and saved on this device.`,themeGroupDark:`Dark`,themeGroupLight:`Light`,themeMidnight:`Midnight`,themeMidnightDesc:`The classic slate design with an indigo accent.`,themeOcean:`Ocean`,themeOceanDesc:`Deep petrol tones with a clear cyan accent.`,themeGraphite:`Graphite`,themeGraphiteDesc:`Neutral graphite with a violet accent.`,themeEmerald:`Emerald`,themeEmeraldDesc:`Deep green with a fresh terminal-inspired accent.`,themeDracula:`Dracula`,themeDraculaDesc:`High-contrast violet with a playful character.`,themeNord:`Nord`,themeNordDesc:`Cool, calm blue tones for long sessions.`,themeTokyoNight:`Tokyo Night`,themeTokyoNightDesc:`Deep night blue with a bright blue accent.`,themeCatppuccin:`Catppuccin Mocha`,themeCatppuccinDesc:`Soft pastel tones on warm dark gray.`,themeCarbon:`Carbon`,themeCarbonDesc:`Minimal black and gray with a crisp blue accent.`,themeHacker:`Hacker`,themeHackerDesc:`Near-black terminal styling with a green accent.`,themeSolarized:`Solarized Dark`,themeSolarizedDesc:`Eye-friendly petrol tones with balanced contrast.`,themeGruvbox:`Gruvbox Dark`,themeGruvboxDesc:`Warm retro tones with a golden accent.`,themeDaylight:`Daylight`,themeDaylightDesc:`A clear, neutral light theme with an indigo accent.`,themeNordLight:`Nord Light`,themeNordLightDesc:`Cool, soft surfaces for calm daytime work.`,themeSolarizedLight:`Solarized Light`,themeSolarizedLightDesc:`Warm and eye-friendly with balanced blue tones.`,tabData:`Import & Export`,tabDataExport:`Export`,tabDataExportSuccess:`Configuration successfully exported!`,tabDataExportFailed:`Export failed.`,tabDataBackupTitle:`Back up configuration`,tabDataBackupDesc:`Download your current widgets and search engines as a .json file.`,tabDataRestoreTitle:`Restore configuration`,tabDataRestoreDesc:`Upload an existing JSON configuration file.`,tabDataSelectFile:`Select file`,tabDataOnlyJsonFiles:`Only valid .json files`,tabDataImportSuccess:`Configuration successfully loaded!`,tabDataImportInvalidStructure:`The uploaded file does not have a valid dashboard structure.`,tabDataImportJsonError:`Error reading the JSON file. Invalid syntax.`,tabEditor:`JSON-Editor`,tabEditorOk:`OK`,tabEditorSaveDoneTitle:`Success`,tabEditorSaveSuccess:`Configuration saved successfully!`,tabEditorSaveFailedTitle:`Save Failed`,tabEditorSaveFailed:`Could not write the changes to services.json.`,discardChangesTitle:`Discard Changes?`,discardChangesMessage:`You have unsaved changes in the JSON editor. Do you really want to close the window?`,discardConfirm:`Yes, discard`,tabEditorDiscardChangesTitle:`Unsaved Changes`,tabEditorDiscardChangesMsg:`You have unsaved changes. Do you really want to discard them?`,tabEditorDiscardChangesConfirm:`Discard changes`,tabEditorDiscardChangesCancel:`Continue editing`,tabEditorValid:`Valid`,tabEditorInvalid:`Invalid`}};function Ne(e,t,n={}){let r=Me[e]?.[t]??Me.en[t]??t;return Object.keys(n).forEach(e=>{r=r.replace(RegExp(`\\{${e}\\}`,`g`),n[e])}),r}function Pe(){let e=navigator.language.split(`-`)[0];return Me[e]?e:`en`}var Fe=[...`abcdefghijklmnopqrstuvwxyz`],Ie=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`],Le=Ie,Re=new Set([`space`,`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`?`]);function ze(e,t){return[...e].find(e=>!t.has(e))??Fe.find(e=>!t.has(e))}function Be(e){let t=new Set(Re);return e.map(e=>{let n=e.categoryKey?.toLowerCase()??``;n||=ze(e.category.toLowerCase().replace(/[^a-z]/g,``),t),n&&t.add(n);let r=new Set,i=(e.services??[]).map(e=>{let t=e.key?.toLowerCase()??``;return t||=ze(e.name.toLowerCase().replace(/[^a-z]/g,``),r),t&&r.add(t),{...e,key:t}});return{...e,categoryKey:n,services:i}})}function Ve(e){return e.flatMap(e=>(e.services??[]).map(t=>({...t,category:e.category,categoryKey:e.categoryKey})))}function He(e,t){return e===t?0:e.startsWith(t)?1:e.split(/[^a-z0-9]+/).some(e=>e.startsWith(t))?2:e.includes(t)?3:null}function Ue(e,t){let n=t.trim().toLowerCase();return n?Ve(e).map((e,t)=>{let r=He(e.name.toLowerCase(),n),i=He(e.category.toLowerCase(),n);return r===null&&i===null?null:{service:e,index:t,rank:r??i+4}}).filter(Boolean).sort((e,t)=>e.rank-t.rank||e.service.name.length-t.service.name.length||e.index-t.index).map(({service:e})=>e):[]}function We(e,t){let n=Ve(e),r=[];return Ie.forEach(e=>{let i=t[e];if(i){let t=n.find(e=>e.name===i);t&&r.push({...t,favSlot:e})}}),r}function Ge(e,t){let n=new Map(Object.entries(t??{}).map(([e,t])=>[t,e]));return e.map(e=>({...e,services:(e.services??[]).map(e=>({...e,favSlot:n.get(e.name)??``}))}))}function Ke(e,t,n){return We(e,t).find(e=>e.favSlot===n)??null}function qe(e,t){let n=Ve(e);return(t??[]).map((e,t)=>{let r=n.find(t=>t.name===e);return r?{...r,continueSlot:Le[t]}:null}).filter(Boolean)}function Je(e,t,n){return qe(e,t).find(e=>e.continueSlot===n)??null}function Ye(e,t){try{let n=localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch(n){return console.warn(`Ignoring invalid localStorage value for "${e}".`,n),t}}function Xe(e,t){localStorage.setItem(e,JSON.stringify(t))}var Ze=`dashboard_favs`;function Qe(e,t){if(t.favorites[e]){$e(e,t);return}et(e,t)}function $e(e,t){t.showToast(`"${t.favorites[e]}" ${t.t(`favRemoved`,{slot:e})}`,`info`);let{[e]:n,...r}=t.favorites;t.favorites=r,at(t)}function et(e,t){t.favoriteRecording={slot:e,step:0,categoryKey:``},t.currentInput=`${t.t(`favLabel`)||`FAV`} ${e}: ${t.t(`selectCategory`)||`Kategorie wählen`}`,t.requestUpdate()}function tt(e,t){let n=t.favoriteRecording;if(n){if(n.step===0){nt(e,n,t);return}rt(e,n,t)}}function nt(e,t,n){if(!n.categories.find(t=>t.categoryKey===e)){ot(n);return}t.categoryKey=e,t.step=1,n.activeCategoryKey=e;let r=n.t(`favLabel`)||`FAV`,i=n.t(`serviceLabel`)||`Service`;n.currentInput=`${r} ${t.slot}: ${e.toUpperCase()} → ${i}`,n.requestUpdate()}function rt(e,t,n){let r=n.categories.find(e=>e.categoryKey===t.categoryKey)?.services?.find(t=>t.key===e);if(!r){ot(n);return}it(t.slot,r,n);let i=n.t(`favLabel`)||`FAV`,a=n.t(`saved`)||`gespeichert`;n.currentInput=`${i} ${t.slot} ${a}`,n.isValidInput=!0,n.favoriteRecording=null,n.startResetTimer(1500)}function it(e,t,n){n.favorites={...n.favorites,[e]:t.name},at(n)}function at(e){Xe(Ze,e.favorites)}function ot(e){e.favoriteRecording=null,e.isInvalidInput=!0,e.startResetTimer(1e3)}function st(e,t){let n=ct(t);if(n.length!==0){if(e.key===`ArrowDown`){e.preventDefault(),t.selectedIndex=(t.selectedIndex+1)%n.length,ut(t);return}if(e.key===`ArrowUp`){e.preventDefault(),t.selectedIndex=(t.selectedIndex-1+n.length)%n.length,ut(t);return}if(e.key===`Enter`){e.preventDefault();let r=n[t.selectedIndex];r&&r.action({openInSameTab:e.shiftKey})}}}function ct(e){let t=e.searchQuery.trim(),{engines:n,previewEngine:r,filteredServices:i}=lt(e),a=[];return n.forEach(t=>{a.push({type:`engine`,action(){e.searchQuery=`:${t.prefix} `,dt(e)}})}),r&&a.push({type:`engine-execute`,action({openInSameTab:t=!1}={}){let n=r.url.replace(`%s`,encodeURIComponent(r.searchTerms));t?window.location.assign(n):(window.open(n,`_blank`),e.resetInput(!0))}}),t.startsWith(`:`)||i.forEach(t=>{a.push({type:`service`,action({openInSameTab:n=!1}={}){e.trackClick(t,{openInSameTab:n})}})}),a}function lt(e){let t={engines:[],previewEngine:null,filteredServices:Ue(e.categories,e.searchQuery)};if(!e.searchQuery.startsWith(`:`))return t;let n=e.searchQuery.substring(1),r=n.indexOf(` `);if(r===-1){let r=n.toLowerCase();return t.engines=e.searchEngines.filter(e=>e.prefix.toLowerCase().startsWith(r)),t}let i=n.substring(0,r).toLowerCase(),a=n.substring(r+1),o=e.searchEngines.find(e=>e.prefix.toLowerCase()===i);return o&&(t.previewEngine={...o,searchTerms:a}),t}function ut(e){setTimeout(()=>{e.querySelector(`.search-item-active`)?.scrollIntoView({block:`nearest`})},10)}function dt(e){setTimeout(()=>{let t=e.querySelector(`#searchInput`);t&&(t.focus({preventScroll:!0}),t.setSelectionRange(t.value.length,t.value.length))},0)}function ft(e,t){if(!t.activeCategoryKey){pt(e,t);return}mt(e,t)}function pt(e,t){if(/^[0-9]$/.test(e)){let n=Ke(t.categories,t.favorites,e);if(n){t.currentInput=e.toUpperCase(),t.trackClick(n,!0);return}}let n=t.categories.find(t=>t.categoryKey===e);if(n){ht(n,t);return}gt(e,t)}function mt(e,t){t.currentInput=`${t.activeCategoryKey.toUpperCase()} → ${e.toUpperCase()}`;let n=t.categories.find(e=>e.categoryKey===t.activeCategoryKey)?.services?.find(t=>t.key===e);if(n){t.isInvalidInput=!1,t.trackClick(n);return}gt(e,t)}function ht(e,t){t.activeCategoryKey=e.categoryKey,t.currentInput=e.categoryKey.toUpperCase(),t.isInvalidInput=!1,t.startResetTimer(),window.history.pushState({view:`category`,key:e.categoryKey},``)}function gt(e,t){t.currentInput=t.activeCategoryKey?`${t.activeCategoryKey.toUpperCase()} → ${e.toUpperCase()}`:e.toUpperCase(),t.isInvalidInput=!0,t.startResetTimer(1500)}function _t(e){return/^Digit([0-9])$/.exec(e.code??``)?.[1]??(/^[0-9]$/.test(e.key)?e.key:null)}function vt(e,t){if(e.ctrlKey&&/^[0-9]$/.test(e.key)){e.preventDefault(),Qe(e.key,t);return}if(e.ctrlKey&&e.key!==`,`||e.altKey||e.metaKey)return;if(e.key===`Escape`){if(t.showConfigModal){t.showConfigModal=!1;return}t.favoriteRecording&&=null,t.resetInput(!0);return}if(t.showConfigModal)return;if(t.showSearch){st(e,t);return}if(t.showHelp){e.preventDefault(),t.showHelp=!1;return}if(e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`)return;let n=e.shiftKey?_t(e):null;if(n){e.preventDefault(),t.launchContinueSlot(n);return}if(t.favoriteRecording){e.key.length===1&&/^[a-z]$/i.test(e.key)?tt(e.key.toLowerCase(),t):(t.favoriteRecording=null,t.resetInput(!0));return}if(e.key===`?`){e.preventDefault(),t.showHelp=!0;return}if(e.key===`_`){e.preventDefault(),t.openContinueView(`_`);return}if(e.key===`-`){e.preventDefault(),t.toggleLastService();return}if(e.ctrlKey&&e.key===`,`){e.preventDefault(),t.showConfigModal=!0;return}if(e.key===` `||e.key===`Spacebar`){e.preventDefault(),t.openSearch();return}if(e.key===`#`&&!t.activeCategoryKey){e.preventDefault(),t.toggleViewMode();return}e.key.length===1&&ft(e.key.toLowerCase(),t)}var yt=`midnight`,bt=`jump-key-theme`,xt=[{id:`midnight`,scheme:`dark`,nameKey:`themeMidnight`,descriptionKey:`themeMidnightDesc`,metaColor:`#020617`,preview:{background:`#020617`,surface:`#0f172a`,accent:`#4f46e5`,favorite:`#f59e0b`,text:`#e2e8f0`}},{id:`ocean`,scheme:`dark`,nameKey:`themeOcean`,descriptionKey:`themeOceanDesc`,metaColor:`#061b24`,preview:{background:`#061b24`,surface:`#0b2a36`,accent:`#0891b2`,favorite:`#f59e0b`,text:`#d9e9ec`}},{id:`graphite`,scheme:`dark`,nameKey:`themeGraphite`,descriptionKey:`themeGraphiteDesc`,metaColor:`#111113`,preview:{background:`#111113`,surface:`#1c1c20`,accent:`#7c3aed`,favorite:`#f59e0b`,text:`#e4e4e7`}},{id:`emerald`,scheme:`dark`,nameKey:`themeEmerald`,descriptionKey:`themeEmeraldDesc`,metaColor:`#06130d`,preview:{background:`#06130d`,surface:`#0d2118`,accent:`#10b981`,favorite:`#f59e0b`,text:`#d8e8df`}},{id:`tokyo-night`,scheme:`dark`,nameKey:`themeTokyoNight`,descriptionKey:`themeTokyoNightDesc`,metaColor:`#1a1b26`,preview:{background:`#1a1b26`,surface:`#24283b`,accent:`#7aa2f7`,favorite:`#e0af68`,text:`#c0caf5`}},{id:`catppuccin-mocha`,scheme:`dark`,nameKey:`themeCatppuccin`,descriptionKey:`themeCatppuccinDesc`,metaColor:`#1e1e2e`,preview:{background:`#1e1e2e`,surface:`#313244`,accent:`#89b4fa`,favorite:`#f9e2af`,text:`#cdd6f4`}},{id:`gruvbox-dark`,scheme:`dark`,nameKey:`themeGruvbox`,descriptionKey:`themeGruvboxDesc`,metaColor:`#282828`,preview:{background:`#282828`,surface:`#3c3836`,accent:`#d79921`,favorite:`#fabd2f`,text:`#ebdbb2`}},{id:`daylight`,scheme:`light`,nameKey:`themeDaylight`,descriptionKey:`themeDaylightDesc`,metaColor:`#f1f5f9`,preview:{background:`#f1f5f9`,surface:`#ffffff`,accent:`#4f46e5`,favorite:`#d97706`,text:`#0f172a`}},{id:`nord-light`,scheme:`light`,nameKey:`themeNordLight`,descriptionKey:`themeNordLightDesc`,metaColor:`#eceff4`,preview:{background:`#eceff4`,surface:`#ffffff`,accent:`#5e81ac`,favorite:`#b7791f`,text:`#2e3440`}},{id:`solarized-light`,scheme:`light`,nameKey:`themeSolarizedLight`,descriptionKey:`themeSolarizedLightDesc`,metaColor:`#fdf6e3`,preview:{background:`#fdf6e3`,surface:`#eee8d5`,accent:`#268bd2`,favorite:`#9b7400`,text:`#073642`}}];function St(e){return xt.find(t=>t.id===e)??xt[0]}function Ct(e){return xt.some(t=>t.id===e)}function wt(){try{let e=localStorage.getItem(bt);return Ct(e)?e:yt}catch(e){return console.warn(`Could not read theme preference.`,e),yt}}function Tt(e){let t=St(e);return document.documentElement.dataset.theme=t.id,document.documentElement.dataset.colorScheme=t.scheme,document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t.metaColor),t.id}function Et(e){let t=Tt(e);try{localStorage.setItem(bt,t)}catch(e){console.warn(`Could not save theme preference.`,e)}return t}var Dt=class{#e=null;start(e){return this.cancel(),this.#e=e,e}cancel(){if(!this.#e)return!1;let e=this.#e;return this.#e=null,e.cancel?.(),!0}complete(e){return this.isActive(e)?(this.#e=null,!0):!1}isActive(e){return!!(e&&this.#e===e)}get activeType(){return this.#e?.type??null}},Ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},kt=e=>(...t)=>({_$litDirective$:e,values:t}),At=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},jt=class extends At{constructor(e){if(super(e),this.it=j,e.type!==Ot.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===A)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};jt.directiveName=`unsafeHTML`,jt.resultType=1;var Mt=class extends jt{};Mt.directiveName=`unsafeSVG`,Mt.resultType=2;var Nt=kt(Mt),Pt=Object.freeze({left:0,top:0,width:16,height:16}),Ft=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),It=Object.freeze({...Pt,...Ft}),Lt=Object.freeze({...It,body:``,hidden:!1}),Rt=Object.freeze({width:null,height:null}),zt=Object.freeze({...Rt,...Ft});function Bt(e,t=0){let n=e.replace(/^-?[0-9.]*/,``);function r(e){for(;e<0;)e+=4;return e%4}if(n===``){let t=parseInt(e);return isNaN(t)?0:r(t)}if(n!==e){let t=0;switch(n){case`%`:t=25;break;case`deg`:t=90}if(t){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i/=t,i%1==0?r(i):0)}}return t}var Vt=/[\s,]+/;function Ht(e,t){t.split(Vt).forEach(t=>{switch(t.trim()){case`horizontal`:e.hFlip=!0;break;case`vertical`:e.vFlip=!0}})}var Ut={...zt,preserveAspectRatio:``};function Wt(e){let t={...Ut},n=(t,n)=>e.getAttribute(t)||n;return t.width=n(`width`,null),t.height=n(`height`,null),t.rotate=Bt(n(`rotate`,``)),Ht(t,n(`flip`,``)),t.preserveAspectRatio=n(`preserveAspectRatio`,n(`preserveaspectratio`,``)),t}function Gt(e,t){for(let n in Ut)if(e[n]!==t[n])return!0;return!1}var Kt=/^[a-z0-9]+(-[a-z0-9]+)*$/,qt=(e,t,n,r=``)=>{let i=e.split(`:`);if(e.slice(0,1)===`@`){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){let e=i.pop(),n=i.pop(),a={provider:i.length>0?i[0]:r,prefix:n,name:e};return t&&!Jt(a)?null:a}let a=i[0],o=a.split(`-`);if(o.length>1){let e={provider:r,prefix:o.shift(),name:o.join(`-`)};return t&&!Jt(e)?null:e}if(n&&r===``){let e={provider:r,prefix:``,name:a};return t&&!Jt(e,n)?null:e}return null},Jt=(e,t)=>e?!!((t&&e.prefix===``||e.prefix)&&e.name):!1;function Yt(e,t){let n=e.icons,r=e.aliases||Object.create(null),i=Object.create(null);function a(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;let t=r[e]&&r[e].parent,n=t&&a(t);n&&(i[e]=[t].concat(n))}return i[e]}return Object.keys(n).concat(Object.keys(r)).forEach(a),i}function Xt(e,t){let n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);let r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Zt(e,t){let n=Xt(e,t);for(let r in Lt)r in Ft?r in e&&!(r in n)&&(n[r]=Ft[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Qt(e,t,n){let r=e.icons,i=e.aliases||Object.create(null),a={};function o(e){a=Zt(r[e]||i[e],a)}return o(t),n.forEach(o),Zt(e,a)}function $t(e,t){let n=[];if(typeof e!=`object`||typeof e.icons!=`object`)return n;e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),n.push(e)});let r=Yt(e);for(let i in r){let a=r[i];a&&(t(i,Qt(e,i,a)),n.push(i))}return n}var en={provider:``,aliases:{},not_found:{},...Pt};function tn(e,t){for(let n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function nn(e){if(typeof e!=`object`||!e)return null;let t=e;if(typeof t.prefix!=`string`||!e.icons||typeof e.icons!=`object`||!tn(e,en))return null;let n=t.icons;for(let e in n){let t=n[e];if(!e||typeof t.body!=`string`||!tn(t,Lt))return null}let r=t.aliases||Object.create(null);for(let e in r){let t=r[e],i=t.parent;if(!e||typeof i!=`string`||!n[i]&&!r[i]||!tn(t,Lt))return null}return t}var rn=Object.create(null);function an(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function N(e,t){let n=rn[e]||(rn[e]=Object.create(null));return n[t]||(n[t]=an(e,t))}function on(e,t){return nn(t)?$t(t,(t,n)=>{n?e.icons[t]=n:e.missing.add(t)}):[]}function sn(e,t,n){try{if(typeof n.body==`string`)return e.icons[t]={...n},!0}catch{}return!1}function cn(e,t){let n=[];return(typeof e==`string`?[e]:Object.keys(rn)).forEach(e=>{(typeof e==`string`&&typeof t==`string`?[t]:Object.keys(rn[e]||{})).forEach(t=>{let r=N(e,t);n=n.concat(Object.keys(r.icons).map(n=>(e===``?``:`@`+e+`:`)+t+`:`+n))})}),n}var ln=!1;function un(e){return typeof e==`boolean`&&(ln=e),ln}function dn(e){let t=typeof e==`string`?qt(e,!0,ln):e;if(t){let e=N(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function fn(e,t){let n=qt(e,!0,ln);if(!n)return!1;let r=N(n.provider,n.prefix);return t?sn(r,n.name,t):(r.missing.add(n.name),!0)}function pn(e,t){if(typeof e!=`object`)return!1;if(typeof t!=`string`&&(t=e.provider||``),ln&&!t&&!e.prefix){let t=!1;return nn(e)&&(e.prefix=``,$t(e,(e,n)=>{fn(e,n)&&(t=!0)})),t}let n=e.prefix;return Jt({prefix:n,name:`a`})?!!on(N(t,n),e):!1}function mn(e){return!!dn(e)}function hn(e){let t=dn(e);return t&&{...It,...t}}function gn(e,t){e.forEach(e=>{let n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter(e=>e.id!==t))})}function _n(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1,r=e.provider,i=e.prefix;t.forEach(t=>{let a=t.icons,o=a.pending.length;a.pending=a.pending.filter(t=>{if(t.prefix!==i)return!0;let o=t.name;if(e.icons[o])a.loaded.push({provider:r,prefix:i,name:o});else if(e.missing.has(o))a.missing.push({provider:r,prefix:i,name:o});else return n=!0,!0;return!1}),a.pending.length!==o&&(n||gn([e],t.id),t.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),t.abort))})}))}var vn=0;function yn(e,t,n){let r=vn++,i=gn.bind(null,n,r);if(!t.pending.length)return i;let a={id:r,icons:t,callback:e,abort:i};return n.forEach(e=>{(e.loaderCallbacks||=[]).push(a)}),i}function bn(e){let t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((e,t)=>e.provider===t.provider?e.prefix===t.prefix?e.name.localeCompare(t.name):e.prefix.localeCompare(t.prefix):e.provider.localeCompare(t.provider));let r={provider:``,prefix:``,name:``};return e.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;let i=e.provider,a=e.prefix,o=e.name,s=n[i]||(n[i]=Object.create(null)),c=s[a]||(s[a]=N(i,a)),l;l=o in c.icons?t.loaded:a===``||c.missing.has(o)?t.missing:t.pending;let u={provider:i,prefix:a,name:o};l.push(u)}),t}var xn=Object.create(null);function Sn(e,t){xn[e]=t}function Cn(e){return xn[e]||xn[``]}function wn(e,t=!0,n=!1){let r=[];return e.forEach(e=>{let i=typeof e==`string`?qt(e,t,n):e;i&&r.push(i)}),r}function Tn(e){let t;if(typeof e.resources==`string`)t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||`/`,maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}for(var En=Object.create(null),Dn=[`https://api.simplesvg.com`,`https://api.unisvg.com`],On=[];Dn.length>0;)Dn.length===1||Math.random()>.5?On.push(Dn.shift()):On.push(Dn.pop());En[``]=Tn({resources:[`https://api.iconify.design`].concat(On)});function kn(e,t){let n=Tn(t);return n!==null&&(En[e]=n,!0)}function An(e){return En[e]}function jn(){return Object.keys(En)}var Mn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Nn(e,t,n,r){let i=e.resources.length,a=e.random?Math.floor(Math.random()*i):e.index,o;if(e.random){let t=e.resources.slice(0);for(o=[];t.length>1;){let e=Math.floor(Math.random()*t.length);o.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}o=o.concat(t)}else o=e.resources.slice(a).concat(e.resources.slice(0,a));let s=Date.now(),c=`pending`,l=0,u,d=null,f=[],p=[];typeof r==`function`&&p.push(r);function m(){d&&=(clearTimeout(d),null)}function h(){c===`pending`&&(c=`aborted`),m(),f.forEach(e=>{e.status===`pending`&&(e.status=`aborted`)}),f=[]}function g(e,t){t&&(p=[]),typeof e==`function`&&p.push(e)}function _(){return{startTime:s,payload:t,status:c,queriesSent:l,queriesPending:f.length,subscribe:g,abort:h}}function v(){c=`failed`,p.forEach(e=>{e(void 0,u)})}function y(){f.forEach(e=>{e.status===`pending`&&(e.status=`aborted`)}),f=[]}function b(t,n,r){let i=n!==`success`;switch(f=f.filter(e=>e!==t),c){case`pending`:break;case`failed`:if(i||!e.dataAfterTimeout)return;break;default:return}if(n===`abort`){u=r,v();return}if(i){u=r,f.length||(o.length?x():v());return}if(m(),y(),!e.random){let n=e.resources.indexOf(t.resource);n!==-1&&n!==e.index&&(e.index=n)}c=`completed`,p.forEach(e=>{e(r)})}function x(){if(c!==`pending`)return;m();let r=o.shift();if(r===void 0){if(f.length){d=setTimeout(()=>{m(),c===`pending`&&(y(),v())},e.timeout);return}v();return}let i={status:`pending`,resource:r,callback:(e,t)=>{b(i,e,t)}};f.push(i),l++,d=setTimeout(x,e.rotate),n(r,t,i.callback)}return setTimeout(x),_}function Pn(e){let t={...Mn,...e},n=[];function r(){n=n.filter(e=>e().status===`pending`)}function i(e,i,a){let o=Nn(t,e,i,(e,t)=>{r(),a&&a(e,t)});return n.push(o),o}function a(e){return n.find(t=>e(t))||null}return{query:i,find:a,setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:r}}function Fn(){}var In=Object.create(null);function Ln(e){if(!In[e]){let t=An(e);if(!t)return;In[e]={config:t,redundancy:Pn(t)}}return In[e]}function Rn(e,t,n){let r,i;if(typeof e==`string`){let t=Cn(e);if(!t)return n(void 0,424),Fn;i=t.send;let a=Ln(e);a&&(r=a.redundancy)}else{let t=Tn(e);if(t){r=Pn(t);let n=Cn(e.resources?e.resources[0]:``);n&&(i=n.send)}}return!r||!i?(n(void 0,424),Fn):r.query(t,i,n)().abort}function zn(){}function Bn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,_n(e)}))}function Vn(e){let t=[],n=[];return e.forEach(e=>{(e.match(Kt)?t:n).push(e)}),{valid:t,invalid:n}}function Hn(e,t,n){function r(){let n=e.pendingIcons;t.forEach(t=>{n&&n.delete(t),e.icons[t]||e.missing.add(t)})}if(n&&typeof n==`object`)try{if(!on(e,n).length){r();return}}catch(e){console.error(e)}r(),Bn(e)}function Un(e,t){e instanceof Promise?e.then(e=>{t(e)}).catch(()=>{t(null)}):t(e)}function Wn(e,t){e.iconsToLoad=e.iconsToLoad?e.iconsToLoad.concat(t).sort():t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;let{provider:t,prefix:n}=e,r=e.iconsToLoad;if(delete e.iconsToLoad,!r||!r.length)return;let i=e.loadIcon;if(e.loadIcons&&(r.length>1||!i)){Un(e.loadIcons(r,n,t),t=>{Hn(e,r,t)});return}if(i){r.forEach(r=>{Un(i(r,n,t),t=>{Hn(e,[r],t?{prefix:n,icons:{[r]:t}}:null)})});return}let{valid:a,invalid:o}=Vn(r);if(o.length&&Hn(e,o,null),!a.length)return;let s=n.match(Kt)?Cn(t):null;if(!s){Hn(e,a,null);return}s.prepare(t,n,a).forEach(n=>{Rn(t,n,t=>{Hn(e,n.icons,t)})})}))}var Gn=(e,t)=>{let n=bn(wn(e,!0,un()));if(!n.pending.length){let e=!0;return t&&setTimeout(()=>{e&&t(n.loaded,n.missing,n.pending,zn)}),()=>{e=!1}}let r=Object.create(null),i=[],a,o;return n.pending.forEach(e=>{let{provider:t,prefix:n}=e;if(n===o&&t===a)return;a=t,o=n,i.push(N(t,n));let s=r[t]||(r[t]=Object.create(null));s[n]||(s[n]=[])}),n.pending.forEach(e=>{let{provider:t,prefix:n,name:i}=e,a=N(t,n),o=a.pendingIcons||=new Set;o.has(i)||(o.add(i),r[t][n].push(i))}),i.forEach(e=>{let t=r[e.provider][e.prefix];t.length&&Wn(e,t)}),t?yn(t,n,i):zn},Kn=e=>new Promise((t,n)=>{let r=typeof e==`string`?qt(e,!0):e;if(!r){n(e);return}Gn([r||e],i=>{if(i.length&&r){let e=dn(r);if(e){t({...It,...e});return}}n(e)})});function qn(e){try{let t=typeof e==`string`?JSON.parse(e):e;if(typeof t.body==`string`)return{...t}}catch{}}function Jn(e,t){if(typeof e==`object`)return{data:qn(e),value:e};if(typeof e!=`string`)return{value:e};if(e.includes(`{`)){let t=qn(e);if(t)return{data:t,value:e}}let n=qt(e,!0,!0);if(!n)return{value:e};let r=dn(n);return r!==void 0||!n.prefix?{value:e,name:n,data:r}:{value:e,name:n,loading:Gn([n],()=>t(e,n,dn(n)))}}var Yn=!1;try{Yn=navigator.vendor.indexOf(`Apple`)===0}catch{}function Xn(e,t){switch(t){case`svg`:case`bg`:case`mask`:return t}return t!==`style`&&(Yn||e.indexOf(`<a`)===-1)?`svg`:e.indexOf(`currentColor`)===-1?`bg`:`mask`}var Zn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Qn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function $n(e,t,n){if(t===1)return e;if(n||=100,typeof e==`number`)return Math.ceil(e*t*n)/n;if(typeof e!=`string`)return e;let r=e.split(Zn);if(r===null||!r.length)return e;let i=[],a=r.shift(),o=Qn.test(a);for(;;){if(o){let e=parseFloat(a);isNaN(e)?i.push(a):i.push(Math.ceil(e*t*n)/n)}else i.push(a);if(a=r.shift(),a===void 0)return i.join(``);o=!o}}function er(e,t=`defs`){let n=``,r=e.indexOf(`<`+t);for(;r>=0;){let i=e.indexOf(`>`,r),a=e.indexOf(`</`+t);if(i===-1||a===-1)break;let o=e.indexOf(`>`,a);if(o===-1)break;n+=e.slice(i+1,a).trim(),e=e.slice(0,r).trim()+e.slice(o+1)}return{defs:n,content:e}}function tr(e,t){return e?`<defs>`+e+`</defs>`+t:t}function nr(e,t,n){let r=er(e);return tr(r.defs,t+r.content+n)}var rr=e=>e===`unset`||e===`undefined`||e===`none`;function ir(e,t){let n={...It,...e},r={...zt,...t},i={left:n.left,top:n.top,width:n.width,height:n.height},a=n.body;[n,r].forEach(e=>{let t=[],n=e.hFlip,r=e.vFlip,o=e.rotate;n?r?o+=2:(t.push(`translate(`+(i.width+i.left).toString()+` `+(0-i.top).toString()+`)`),t.push(`scale(-1 1)`),i.top=i.left=0):r&&(t.push(`translate(`+(0-i.left).toString()+` `+(i.height+i.top).toString()+`)`),t.push(`scale(1 -1)`),i.top=i.left=0);let s;switch(o<0&&(o-=Math.floor(o/4)*4),o%=4,o){case 1:s=i.height/2+i.top,t.unshift(`rotate(90 `+s.toString()+` `+s.toString()+`)`);break;case 2:t.unshift(`rotate(180 `+(i.width/2+i.left).toString()+` `+(i.height/2+i.top).toString()+`)`);break;case 3:s=i.width/2+i.left,t.unshift(`rotate(-90 `+s.toString()+` `+s.toString()+`)`)}o%2==1&&(i.left!==i.top&&(s=i.left,i.left=i.top,i.top=s),i.width!==i.height&&(s=i.width,i.width=i.height,i.height=s)),t.length&&(a=nr(a,`<g transform="`+t.join(` `)+`">`,`</g>`))});let o=r.width,s=r.height,c=i.width,l=i.height,u,d;o===null?(d=s===null?`1em`:s===`auto`?l:s,u=$n(d,c/l)):(u=o===`auto`?c:o,d=s===null?$n(u,l/c):s===`auto`?l:s);let f={},p=(e,t)=>{rr(t)||(f[e]=t.toString())};p(`width`,u),p(`height`,d);let m=[i.left,i.top,c,l];return f.viewBox=m.join(` `),{attributes:f,viewBox:m,body:a}}function ar(e,t){let n=e.indexOf(`xlink:`)===-1?``:` xmlns:xlink="http://www.w3.org/1999/xlink"`;for(let e in t)n+=` `+e+`="`+t[e]+`"`;return`<svg xmlns="http://www.w3.org/2000/svg"`+n+`>`+e+`</svg>`}function or(e){return e.replace(/"/g,`'`).replace(/%/g,`%25`).replace(/#/g,`%23`).replace(/</g,`%3C`).replace(/>/g,`%3E`).replace(/\s+/g,` `)}function sr(e){return`data:image/svg+xml,`+or(e)}function cr(e){return`url("`+sr(e)+`")`}var lr=(()=>{let e;try{if(e=fetch,typeof e==`function`)return e}catch{}})();function ur(e){lr=e}function dr(){return lr}function fr(e,t){let n=An(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let e=0;n.resources.forEach(t=>{e=Math.max(e,t.length)});let i=t+`.json?icons=`;r=n.maxURL-e-n.path.length-i.length}return r}function pr(e){return e===404}var mr=(e,t,n)=>{let r=[],i=fr(e,t),a=`icons`,o={type:a,provider:e,prefix:t,icons:[]},s=0;return n.forEach((n,c)=>{s+=n.length+1,s>=i&&c>0&&(r.push(o),o={type:a,provider:e,prefix:t,icons:[]},s=n.length),o.icons.push(n)}),r.push(o),r};function hr(e){if(typeof e==`string`){let t=An(e);if(t)return t.path}return`/`}var gr={prepare:mr,send:(e,t,n)=>{if(!lr){n(`abort`,424);return}let r=hr(t.provider);switch(t.type){case`icons`:{let e=t.prefix,n=t.icons.join(`,`),i=new URLSearchParams({icons:n});r+=e+`.json?`+i.toString();break}case`custom`:{let e=t.uri;r+=e.slice(0,1)===`/`?e.slice(1):e;break}default:n(`abort`,400);return}let i=503;lr(e+r).then(e=>{let t=e.status;if(t!==200){setTimeout(()=>{n(pr(t)?`abort`:`next`,t)});return}return i=501,e.json()}).then(e=>{if(typeof e!=`object`||!e){setTimeout(()=>{e===404?n(`abort`,e):n(`next`,i)});return}setTimeout(()=>{n(`success`,e)})}).catch(()=>{n(`next`,i)})}};function _r(e,t,n){N(n||``,t).loadIcons=e}function vr(e,t,n){N(n||``,t).loadIcon=e}var yr=`data-style`,br=``;function xr(e){br=e}function Sr(e,t){let n=Array.from(e.childNodes).find(e=>e.hasAttribute&&e.hasAttribute(yr));n||(n=document.createElement(`style`),n.setAttribute(yr,yr),e.appendChild(n)),n.textContent=`:host{display:inline-block;vertical-align:`+(t?`-0.125em`:`0`)+`}span,svg{display:block;margin:auto}`+br}function Cr(){Sn(``,gr),un(!0);let e;try{e=window}catch{}if(e){if(e.IconifyPreload!==void 0){let t=e.IconifyPreload,n=`Invalid IconifyPreload syntax.`;typeof t==`object`&&t&&(t instanceof Array?t:[t]).forEach(e=>{try{(typeof e!=`object`||!e||e instanceof Array||typeof e.icons!=`object`||typeof e.prefix!=`string`||!pn(e))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){let t=e.IconifyProviders;if(typeof t==`object`&&t)for(let e in t){let n=`IconifyProviders[`+e+`] is invalid.`;try{let r=t[e];if(typeof r!=`object`||!r||r.resources===void 0)continue;kn(e,r)||console.error(n)}catch{console.error(n)}}}}return{iconLoaded:mn,getIcon:hn,listIcons:cn,addIcon:fn,addCollection:pn,calculateSize:$n,buildIcon:ir,iconToHTML:ar,svgToURL:cr,loadIcons:Gn,loadIcon:Kn,addAPIProvider:kn,setCustomIconLoader:vr,setCustomIconsLoader:_r,appendCustomStyle:xr,_api:{getAPIConfig:An,setAPIModule:Sn,sendAPIQuery:Rn,setFetch:ur,getFetch:dr,listAPIProviders:jn}}}var wr={"background-color":`currentColor`},Tr={"background-color":`transparent`},Er={image:`var(--svg)`,repeat:`no-repeat`,size:`100% 100%`},Dr={"-webkit-mask":wr,mask:wr,background:Tr};for(let e in Dr){let t=Dr[e];for(let n in Er)t[e+`-`+n]=Er[n]}function Or(e){return e?e+(e.match(/^[-0-9.]+$/)?`px`:``):`inherit`}function kr(e,t,n){let r=document.createElement(`span`),i=e.body;i.indexOf(`<a`)!==-1&&(i+=`<!-- `+Date.now()+` -->`);let a=e.attributes,o=cr(ar(i,{...a,width:t.width+``,height:t.height+``})),s=r.style,c={"--svg":o,width:Or(a.width),height:Or(a.height),...n?wr:Tr};for(let e in c)s.setProperty(e,c[e]);return r}var Ar;function jr(){try{Ar=window.trustedTypes.createPolicy(`iconify`,{createHTML:e=>e})}catch{Ar=null}}function Mr(e){return Ar===void 0&&jr(),Ar?Ar.createHTML(e):e}function Nr(e){let t=document.createElement(`span`),n=e.attributes,r=``;return n.width||(r=`width: inherit;`),n.height||(r+=`height: inherit;`),r&&(n.style=r),t.innerHTML=Mr(ar(e.body,n)),t.firstChild}function Pr(e){return Array.from(e.childNodes).find(e=>{let t=e.tagName&&e.tagName.toUpperCase();return t===`SPAN`||t===`SVG`})}function Fr(e,t){let n=t.icon.data,r=t.customisations,i=ir(n,r);r.preserveAspectRatio&&(i.attributes.preserveAspectRatio=r.preserveAspectRatio);let a=t.renderedMode,o;switch(a){case`svg`:o=Nr(i);break;default:o=kr(i,{...It,...n},a===`mask`)}let s=Pr(e);s?o.tagName===`SPAN`&&s.tagName===o.tagName?s.setAttribute(`style`,o.getAttribute(`style`)):e.replaceChild(o,s):e.appendChild(o)}function Ir(e,t,n){return{rendered:!1,inline:t,icon:e,lastRender:n&&(n.rendered?n:n.lastRender)}}function Lr(e=`iconify-icon`){let t,n;try{t=window.customElements,n=window.HTMLElement}catch{return}if(!t||!n)return;let r=t.get(e);if(r)return r;let i=[`icon`,`mode`,`inline`,`noobserver`,`width`,`height`,`rotate`,`flip`],a=class extends n{_shadowRoot;_initialised=!1;_state;_checkQueued=!1;_connected=!1;_observer=null;_visible=!0;constructor(){super();let e=this._shadowRoot=this.attachShadow({mode:`open`}),t=this.hasAttribute(`inline`);Sr(e,t),this._state=Ir({value:``},t),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return i.slice(0)}attributeChangedCallback(e){switch(e){case`inline`:{let e=this.hasAttribute(`inline`),t=this._state;e!==t.inline&&(t.inline=e,Sr(this._shadowRoot,e));break}case`noobserver`:this.hasAttribute(`noobserver`)?this.startObserver():this.stopObserver();break;default:this._queueCheck()}}get icon(){let e=this.getAttribute(`icon`);if(e&&e.slice(0,1)===`{`)try{return JSON.parse(e)}catch{}return e}set icon(e){typeof e==`object`&&(e=JSON.stringify(e)),this.setAttribute(`icon`,e)}get inline(){return this.hasAttribute(`inline`)}set inline(e){e?this.setAttribute(`inline`,`true`):this.removeAttribute(`inline`)}get observer(){return this.hasAttribute(`observer`)}set observer(e){e?this.setAttribute(`observer`,`true`):this.removeAttribute(`observer`)}restartAnimation(){let e=this._state;if(e.rendered){let t=this._shadowRoot;if(e.renderedMode===`svg`)try{t.lastChild.setCurrentTime(0);return}catch{}Fr(t,e)}}get status(){let e=this._state;return e.rendered?`rendered`:e.icon.data===null?`failed`:`loading`}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;let e=this._state,t=this.getAttribute(`icon`);if(t!==e.icon.value){this._iconChanged(t);return}if(!e.rendered||!this._visible)return;let n=this.getAttribute(`mode`),r=Wt(this);(e.attrMode!==n||Gt(e.customisations,r)||!Pr(this._shadowRoot))&&this._renderIcon(e.icon,r,n)}_iconChanged(e){let t=Jn(e,(e,t,n)=>{let r=this._state;if(r.rendered||this.getAttribute(`icon`)!==e)return;let i={value:e,name:t,data:n};i.data?this._gotIconData(i):r.icon=i});t.data?this._gotIconData(t):this._state=Ir(t,this._state.inline,this._state)}_forceRender(){if(!this._visible){let e=Pr(this._shadowRoot);e&&this._shadowRoot.removeChild(e);return}this._queueCheck()}_gotIconData(e){this._checkQueued=!1,this._renderIcon(e,Wt(this),this.getAttribute(`mode`))}_renderIcon(e,t,n){let r=Xn(e.data.body,n),i=this._state.inline;Fr(this._shadowRoot,this._state={rendered:!0,icon:e,inline:i,customisations:t,attrMode:n,renderedMode:r})}startObserver(){if(!this._observer&&!this.hasAttribute(`noobserver`))try{this._observer=new IntersectionObserver(e=>{let t=e.some(e=>e.isIntersecting);t!==this._visible&&(this._visible=t,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};i.forEach(e=>{e in a.prototype||Object.defineProperty(a.prototype,e,{get:function(){return this.getAttribute(e)},set:function(t){t===null?this.removeAttribute(e):this.setAttribute(e,t)}})});let o=Cr();for(let e in o)a[e]=a.prototype[e]=o[e];return t.define(e,a),a}var{iconLoaded:Rr,getIcon:zr,listIcons:Br,addIcon:Vr,addCollection:Hr,calculateSize:Ur,buildIcon:Wr,iconToHTML:Gr,svgToURL:Kr,loadIcons:qr,loadIcon:Jr,setCustomIconLoader:Yr,setCustomIconsLoader:Xr,addAPIProvider:Zr,_api:Qr}=Lr()||Cr(),$r={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]},ei={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]},ti={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]},ni={name:`circle-check`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]],aliases:[`check-circle-2`]},ri={name:`circle-question-mark`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`help-circle`,`circle-help`]},ii={"arrow-left":$r,check:ei,"circle-check":ni,"circle-help":ri,"icon-fallback":ri,"code-2":{name:`code-xml`,size:24,node:[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]],aliases:[`code-2`]},database:{name:`database`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]},download:{name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]},ellipsis:{name:`ellipsis`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]],aliases:[`more-horizontal`]},"external-link":{name:`external-link`,size:24,node:[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]},"file-json":{name:`file-braces`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1`,key:`1oajmo`}],[`path`,{d:`M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1`,key:`mpwhp6`}]],aliases:[`file-json`]},folder:{name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]},"folder-open":{name:`folder-open`,size:24,node:[[`path`,{d:`m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,key:`usdka0`}]]},globe:{name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]},"help-circle":ri,history:{name:`rotate-ccw-clock`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]],aliases:[`history`]},info:{name:`info`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]},"layout-grid":{name:`layout-grid`,size:24,node:[[`rect`,{width:`7`,height:`7`,x:`3`,y:`3`,rx:`1`,key:`1g98yp`}],[`rect`,{width:`7`,height:`7`,x:`14`,y:`3`,rx:`1`,key:`6d4xhi`}],[`rect`,{width:`7`,height:`7`,x:`14`,y:`14`,rx:`1`,key:`nxv5o0`}],[`rect`,{width:`7`,height:`7`,x:`3`,y:`14`,rx:`1`,key:`1bb6yr`}]]},hand:{name:`hand`,size:24,node:[[`path`,{d:`M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2`,key:`1fvzgz`}],[`path`,{d:`M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2`,key:`1kc0my`}],[`path`,{d:`M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8`,key:`10h0bg`}],[`path`,{d:`M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15`,key:`1s1gnw`}]]},"mouse-pointer-click":{name:`mouse-pointer-click`,size:24,node:[[`path`,{d:`M14 4.1 12 6`,key:`ita8i4`}],[`path`,{d:`m5.1 8-2.9-.8`,key:`1go3kf`}],[`path`,{d:`m6 12-1.9 2`,key:`mnht97`}],[`path`,{d:`M7.2 2.2 8 5.1`,key:`1cfko1`}],[`path`,{d:`M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z`,key:`s0h3yz`}]]},palette:{name:`palette`,size:24,node:[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,key:`e79jfc`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`1okk4w`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`,key:`f64h9f`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`,key:`qy21gx`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`fotxhn`}]]},"rows-2":{name:`rows-2`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 12h18`,key:`1i2n21`}]],aliases:[`rows`]},search:{name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]},"search-x":{name:`search-x`,size:24,node:[[`path`,{d:`m13.5 8.5-5 5`,key:`1cs55j`}],[`path`,{d:`m8.5 8.5 5 5`,key:`a8mexj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`path`,{d:`m21 21-4.3-4.3`,key:`1qie3q`}]]},settings:{name:`settings`,size:24,node:[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]},"settings-2":{name:`settings-2`,size:24,node:[[`path`,{d:`M14 17H5`,key:`gfn3mx`}],[`path`,{d:`M19 7h-9`,key:`6i9tg`}],[`circle`,{cx:`17`,cy:`17`,r:`3`,key:`18b49y`}],[`circle`,{cx:`7`,cy:`7`,r:`3`,key:`dfmy0x`}]]},star:{name:`star`,size:24,node:[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]},"trash-2":{name:`trash-2`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]},"triangle-alert":{name:`triangle-alert`,size:24,node:[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`alert-triangle`]},upload:{name:`upload`,size:24,node:[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]},x:{name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]},"chevron-right":ti},ai={image:`block object-contain`,iconify:`block`,defaultIconSize:`size-6`},oi=/^(?:https?:\/\/|\/)/i,si=/\.(?:png|jpe?g|svg|webp|gif)(?:[?#].*)?$/i,ci=/^[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+(?:-[a-z0-9]+)*$/i,li=class extends M{static properties={icon:{type:String},alt:{type:String},_dynamicIconName:{state:!0},_dynamicIconData:{state:!0},_dynamicIconStatus:{state:!0}};constructor(){super(),this.icon=``,this.alt=``,this._dynamicIconName=``,this._dynamicIconData=null,this._dynamicIconStatus=`idle`,this._dynamicIconRequestId=0}createRenderRoot(){return this}get hostClasses(){return this.getAttribute(`class`)||ai.defaultIconSize}updated(e){e.has(`icon`)&&this.loadDynamicIcon()}parseIcon(e=this.icon){let t=e.trim();return t?oi.test(t)||si.test(t)?{type:`image`,name:t}:t.startsWith(`ui:`)?{type:`ui`,name:t.slice(3)}:t.startsWith(`iconify:`)?{type:`dynamic`,name:t.slice(8)}:t.startsWith(`lucide:`)?{type:`dynamic`,name:`lucide:${this.toKebabCase(t.slice(7))}`}:{type:`dynamic`,name:`lucide:${this.toKebabCase(t)}`}:{type:`empty`,name:``}}async loadDynamicIcon(){let e=this.parseIcon(),t=++this._dynamicIconRequestId;if(this._dynamicIconName=``,this._dynamicIconData=null,this._dynamicIconStatus=`idle`,e.type===`dynamic`){if(!ci.test(e.name)){console.warn(`[jk-icon] Invalid dynamic icon name: ${e.name}`),this._dynamicIconStatus=`error`;return}this._dynamicIconName=e.name,this._dynamicIconStatus=`loading`;try{let n=await Jr(e.name);if(t!==this._dynamicIconRequestId||this.parseIcon().name!==e.name)return;this._dynamicIconData=n,this._dynamicIconStatus=`loaded`}catch(n){if(t!==this._dynamicIconRequestId)return;this._dynamicIconStatus=`error`,console.warn(`[jk-icon] Could not load Iconify icon: ${e.name}`,n)}}}render(){let e=this.parseIcon();return e.type===`empty`?k``:e.type===`image`?k`<img src=${oi.test(e.name)?e.name:`./icons/${e.name}`} alt=${this.alt} class="${ai.image} ${this.hostClasses}" />`:e.type===`ui`?this.renderUiIcon(e.name):ci.test(e.name)?this.renderDynamicIcon(e.name):this.renderUiIcon(`icon-fallback`)}renderDynamicIcon(e){return this._dynamicIconStatus===`loaded`&&this._dynamicIconName===e&&this._dynamicIconData?k`
      <iconify-icon
        .icon=${this._dynamicIconData}
        width="100%"
        height="100%"
        aria-hidden="true"
        class="${ai.iconify} ${this.hostClasses}"
      ></iconify-icon>
    `:this.renderUiIcon(`icon-fallback`)}renderUiIcon(e){let t=this.toKebabCase(e),n=ii[t]||ii[`icon-fallback`];return ii[t]||console.warn(`[jk-icon] Unknown UI icon: ${e}`),k`${Nt(this.renderLucideIcon(n))}`}renderLucideIcon(e){let t=e.node,n=e.width||e.size||24,r=e.height||e.size||24,i=t.map(([e,t])=>`<${e} ${Object.entries(t).map(([e,t])=>`${e}="${t}"`).join(` `)}></${e}>`).join(``);return`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 ${n} ${r}"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        role="img"
        aria-label="${this.escapeAttribute(this.alt||e.name||``)}"
        class="${this.hostClasses}"
      >
        ${i}
      </svg>
    `}toKebabCase(e){return e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase()}escapeAttribute(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}};customElements.define(`jk-icon`,li);var ui=class extends M{createRenderRoot(){return this}static properties={icon:{type:String},disabled:{type:Boolean},label:{type:String},variant:{type:String},text:{type:String},desktopOnly:{type:Boolean}};constructor(){super(),this.icon=`x`,this.disabled=!1,this.label=``,this.variant=`default`,this.text=``,this.desktopOnly=!1}render(){let e=this.variant===`text`,t=this.desktopOnly?`hidden md:inline-flex`:`inline-flex`,n=e?`group items-center gap-1.5 px-2 py-1 rounded-lg text-xs text-slate-400 transition-all duration-200 jk-danger-action focus:outline-none focus:ring-2`:`group items-center justify-center size-9 rounded-xl border border-slate-600/70 bg-slate-700/50 text-slate-400 transition-all duration-200 hover:bg-indigo-500/15 hover:border-indigo-500/40 hover:text-indigo-200 active:scale-95 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500/40`,r=e?`size-3.5 block pointer-events-none`:`size-4 block pointer-events-none transition-transform duration-200 group-hover:scale-110 group-active:scale-95`;return k`
      <button
        type="button"
        ?disabled=${this.disabled}
        aria-label=${this.label||this.text||this.icon||`button`}
        class="${t} ${n}"
      >
        <jk-icon .icon=${this.icon} class=${r}></jk-icon>

        ${this.text?k`
                <span
                  class="
                    text-[11px]
                    font-medium
                    leading-none
                    pointer-events-none
                  "
                >
                  ${this.text}
                </span>
              `:``}
      </button>
    `}};customElements.define(`jk-icon-button`,ui);var P={container:`sticky top-0 z-50 flex flex-nowrap items-center justify-between gap-4 rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/95 to-slate-800/90 px-4 py-4 sm:px-6 sm:py-5 jk-shadow-card backdrop-blur-md`,logoShell:`group flex items-center justify-center size-12 sm:size-14 shrink-0 rounded-xl bg-slate-700/60 ring-1 ring-slate-600/70 transition-all duration-300 hover:bg-indigo-500/15 hover:ring-indigo-500/40 hover:-translate-y-0.5`,logoImg:`size-9 sm:size-11 object-contain transition-transform duration-300 group-hover:scale-105`,titleContainer:`flex items-center gap-2 min-w-0`,brandTextWrapper:`flex items-center gap-1 font-mono font-bold text-2xl sm:text-3xl`,brandJump:`text-slate-50`,brandKey:`text-indigo-400`,helpButton:`hidden md:flex items-center justify-center size-7 rounded-lg text-slate-500 transition-all duration-200 hover:bg-slate-700/60 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40`,rightSection:`flex items-center gap-3 sm:gap-5 shrink-0`,leftSection:`flex items-center gap-3 min-w-0`,actionGroup:`flex items-center gap-1 rounded-xl border border-slate-700/60 bg-slate-800/50 p-1`,clockWrapper:`hidden sm:block text-right select-none`,clockTime:`flex items-center justify-end text-3xl font-semibold tracking-tight text-indigo-300`,clockSeparator:`mx-0.5 opacity-70`,clockDate:`mt-1 text-xs font-medium text-slate-400 whitespace-nowrap`},di=class extends M{createRenderRoot(){return this}static get properties(){return{isGridView:{type:Boolean},lang:{type:String},t:{type:Function},_now:{type:Object,state:!0}}}constructor(){super(),this.isGridView=!1,this.lang=`en`,this._now=new Date,this._timeInterval=null}connectedCallback(){super.connectedCallback(),this._now=new Date,this._timeInterval=setInterval(()=>{this._now=new Date},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&clearInterval(this._timeInterval)}get _hours(){return String(this._now.getHours()).padStart(2,`0`)}get _minutes(){return String(this._now.getMinutes()).padStart(2,`0`)}get _dateString(){let e=this.lang===`de`?`de-DE`:`en-US`;return window.matchMedia(`(max-width: 639px)`).matches?this._now.toLocaleDateString(e,{day:`2-digit`,month:`2-digit`,year:`numeric`}):this._now.toLocaleDateString(e,{weekday:`long`,day:`numeric`,month:`long`})}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}render(){return k`
      <div class="${P.container}">
        <div class="${P.leftSection}">
          <a
            href="https://github.com/desirevolution/jump-key"
            target="_blank"
            rel="noopener noreferrer"
            class="${P.logoShell}"
          >
            <img src="/jump-key.png" alt="JumpKey" class="${P.logoImg}" />
          </a>

          <div class="${P.titleContainer}">
            <div class="${P.brandTextWrapper}">
              <span class="${P.brandJump}">Jump</span>
              <span class="${P.brandKey}">Key</span>
            </div>

            <button
              @click=${()=>this._dispatchEvent(`open-help`)}
              title="${this.t?this.t(`helpHint`):``}"
              class="${P.helpButton}"
            >
              <jk-icon icon="ui:help-circle" class="size-5"></jk-icon>
            </button>
          </div>
        </div>

        <div class="${P.rightSection}">
          <div class="${P.actionGroup}">
            <jk-icon-button
              icon="${this.isGridView?`ui:rows-2`:`ui:layout-grid`}"
              title="${this.t?this.t(`hkToggleView`):``} [#]"
              @click=${()=>this._dispatchEvent(`toggle-view`)}
            ></jk-icon-button>

            <jk-icon-button
              icon="ui:search"
              title="${this.t?this.t(`hkSearch`):``} [Space]"
              @click=${()=>this._dispatchEvent(`open-search`)}
            ></jk-icon-button>

            <jk-icon-button
              icon="ui:settings"
              title="${this.t?this.t(`editConfig`):``}"
              .desktopOnly=${!0}
              @click=${()=>this._dispatchEvent(`open-config`)}
            ></jk-icon-button>

            <span class="md:hidden">
              <jk-icon-button
                icon="ui:ellipsis"
                label="${this.t?this.t(`mobileMenuTitle`):`More`}"
                @click=${()=>this._dispatchEvent(`open-mobile-menu`)}
              ></jk-icon-button>
            </span>
          </div>

          <div class="${P.clockWrapper}">
            <div class="${P.clockTime}">
              <span>${this._hours}</span>
              <span class="${P.clockSeparator}">:</span>
              <span>${this._minutes}</span>
            </div>

            <div class="${P.clockDate}">${this._dateString}</div>
          </div>
        </div>
      </div>
    `}};customElements.define(`jk-dashboard-header`,di);var F={overlay:`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-6`,modal:`relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-800 to-slate-900 jk-shadow-elevated`,header:`flex items-start gap-4 p-6 pb-5`,iconBadgeBase:`flex items-center justify-center size-12 shrink-0 rounded-xl bg-slate-700/60 ring-1 ring-slate-600/70`,icon:`size-6`,contentCell:`grow min-w-0`,title:`text-xl font-semibold tracking-tight text-slate-50`,message:`mt-2 text-sm leading-6 text-slate-300`,footer:`flex justify-end gap-3 border-t border-slate-700/70 bg-slate-900/30 px-6 py-4`,cancelBtn:`rounded-xl border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-indigo-500/50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30`,confirmBtn:`rounded-xl border border-indigo-500 bg-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-100 transition-all duration-200 hover:bg-indigo-500/30 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40`},fi=class extends M{createRenderRoot(){return this}static properties={show:{type:Boolean},title:{type:String},message:{type:String},icon:{type:String},iconColor:{type:String},variant:{type:String},confirmLabel:{type:String},cancelLabel:{type:String}};constructor(){super(),this.show=!1,this.title=`Are you sure?`,this.message=``,this.icon=`info`,this.iconColor=`text-indigo-400`,this.variant=`confirm`,this.confirmLabel=`Confirm`,this.cancelLabel=`Cancel`,this._handleKeyDown=this._handleKeyDown.bind(this)}willUpdate(e){e.has(`show`)&&(this.show?(window.addEventListener(`keydown`,this._handleKeyDown,!0),this._focusButton(`confirmBtn`)):window.removeEventListener(`keydown`,this._handleKeyDown,!0))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this._handleKeyDown,!0)}async _focusButton(e){await this.updateComplete;let t=this.querySelector(`#${e}`);t&&t.focus()}_handleKeyDown(e){if(this.show){if(this.variant===`confirm`&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)){e.preventDefault(),e.stopPropagation();let t=document.activeElement?.id;e.key===`ArrowLeft`&&t===`confirmBtn`?this._focusButton(`cancelBtn`):e.key===`ArrowRight`&&t===`cancelBtn`&&this._focusButton(`confirmBtn`);return}e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this._handleCancel())}}_handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0,composed:!0})),this._close()}_handleConfirm(){this.dispatchEvent(new CustomEvent(`confirm`,{bubbles:!0,composed:!0})),this._close()}_close(){this.show=!1}render(){return this.show?k`
      <div @click=${this._handleCancel} class="${F.overlay}">
        <div @click=${e=>e.stopPropagation()} class="${F.modal}">
          <div class="${F.header}">
            <div class="${F.iconBadgeBase} ${this.iconColor}">
              <jk-icon .icon=${this.icon} class="${F.icon}"></jk-icon>
            </div>

            <div class="${F.contentCell}">
              <h2 class="${F.title}">${this.title}</h2>
              <p class="${F.message}">${this.message}</p>
            </div>

            <jk-icon-button icon="ui:x" @click=${this._handleCancel}></jk-icon-button>
          </div>

          <div class="${F.footer}">
            ${this.variant===`confirm`?k`
                    <button id="cancelBtn" @click=${this._handleCancel} class="${F.cancelBtn}">
                      ${this.cancelLabel}
                    </button>
                  `:``}

            <button id="confirmBtn" @click=${this._handleConfirm} class="${F.confirmBtn}">
              ${this.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `:k``}};customElements.define(`jk-dialog`,fi);var I={wrapper:`space-y-7`,heading:`space-y-1`,title:`text-lg font-semibold text-slate-50`,description:`text-sm text-slate-400`,group:`space-y-3`,groupTitle:`text-xs font-bold uppercase tracking-[0.16em] text-slate-400`,grid:`grid gap-4 sm:grid-cols-2 xl:grid-cols-3`,card:`group rounded-2xl border p-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`,cardActive:`border-indigo-400/70 bg-indigo-500/10 shadow-lg shadow-indigo-950/20`,cardInactive:`border-slate-700 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800`,preview:`relative h-28 overflow-hidden rounded-xl border p-3`,previewSurface:`h-full rounded-lg border p-3 shadow-lg`,previewAccent:`h-3 w-16 rounded-full`,previewLine:`mt-3 h-2 w-4/5 rounded-full`,previewLineShort:`mt-2 h-2 w-1/2 rounded-full`,previewFavorite:`absolute right-3 top-3 size-3 rounded-full`,details:`mt-3 flex items-start justify-between gap-3 px-1`,name:`font-medium text-slate-50`,desc:`mt-0.5 text-xs leading-relaxed text-slate-400`,check:`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-500 jk-on-accent`},pi=class extends M{createRenderRoot(){return this}static properties={selectedTheme:{type:String},t:{type:Function}};constructor(){super(),this.selectedTheme=`midnight`,this.t=e=>e}_selectTheme(e){e.id!==this.selectedTheme&&this.dispatchEvent(new CustomEvent(`theme-change`,{detail:{theme:e.id},bubbles:!0,composed:!0}))}_renderTheme(e){let t=e.id===this.selectedTheme,n=`color-mix(in srgb, ${e.preview.text} 18%, transparent)`,r=`color-mix(in srgb, ${e.preview.text} 30%, transparent)`,i=`color-mix(in srgb, ${e.preview.text} 16%, transparent)`;return k`
      <button
        type="button"
        role="radio"
        class="${I.card} ${t?I.cardActive:I.cardInactive}"
        aria-checked="${t}"
        @click="${()=>this._selectTheme(e)}"
      >
        <div
          class="${I.preview}"
          style="background:${e.preview.background};border-color:${n}"
        >
          <div class="${I.previewFavorite}" style="background:${e.preview.favorite}"></div>
          <div
            class="${I.previewSurface}"
            style="background:${e.preview.surface};border-color:${n}"
          >
            <div class="${I.previewAccent}" style="background:${e.preview.accent}"></div>
            <div class="${I.previewLine}" style="background:${r}"></div>
            <div class="${I.previewLineShort}" style="background:${i}"></div>
          </div>
        </div>

        <div class="${I.details}">
          <div>
            <div class="${I.name}">${this.t(e.nameKey)}</div>
            <div class="${I.desc}">${this.t(e.descriptionKey)}</div>
          </div>
          ${t?k`<span class="${I.check}"
                  ><jk-icon icon="ui:check" class="size-4"></jk-icon
                ></span>`:``}
        </div>
      </button>
    `}_renderGroup(e,t){let n=xt.filter(t=>t.scheme===e);return k`
      <section class="${I.group}" aria-labelledby="theme-group-${e}">
        <h4 id="theme-group-${e}" class="${I.groupTitle}">${this.t(t)}</h4>
        <div class="${I.grid}" role="radiogroup" aria-label="${this.t(t)}">
          ${n.map(e=>this._renderTheme(e))}
        </div>
      </section>
    `}render(){return k`
      <section class="${I.wrapper}">
        <div class="${I.heading}">
          <h3 class="${I.title}">${this.t(`appearanceTitle`)}</h3>
          <p class="${I.description}">${this.t(`appearanceDescription`)}</p>
        </div>

        ${this._renderGroup(`dark`,`themeGroupDark`)}
        ${this._renderGroup(`light`,`themeGroupLight`)}
      </section>
    `}};customElements.define(`jk-config-appearance`,pi);function mi(e){if(!e||typeof e!=`object`)return!1;let t=Array.isArray(e.categories)&&e.categories.length>0,n=Array.isArray(e.searchEngines)&&e.searchEngines.length>0;if(!t||!n)return!1;let r=e.categories.every(e=>typeof e.category==`string`&&typeof e.categoryKey==`string`&&Array.isArray(e.services)),i=e.searchEngines.every(e=>typeof e.name==`string`&&typeof e.prefix==`string`&&typeof e.url==`string`);return r&&i}var L={wrapper:`flex flex-col gap-5 h-full text-slate-200`,exportCard:`group relative bg-slate-900/40 border border-slate-700/60 rounded-2xl p-5 transition-all duration-200 hover:border-indigo-500/40 hover:bg-slate-900/60`,exportBody:`flex items-center gap-4`,exportIconBox:`flex items-center justify-center shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors`,exportTextContainer:`grow min-w-0`,exportTitle:`text-sm font-bold text-slate-50 tracking-wide`,exportDesc:`text-xs text-slate-400 mt-1 leading-relaxed`,exportBtn:`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold jk-on-accent border border-indigo-500/30 shadow-lg shadow-indigo-500/10 transition-all active:scale-95 cursor-pointer`,importCard:`bg-slate-900/40 border border-slate-700/60 rounded-2xl p-5`,importHeader:`flex items-center gap-3 mb-4`,importIconBox:`flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 text-indigo-400 border border-slate-700`,importTitle:`text-sm font-bold text-slate-50`,importDesc:`text-xs text-slate-400 mt-0.5`,dropZone:`relative border border-dashed border-slate-700 hover:border-indigo-500/60 rounded-xl min-h-[180px] flex flex-col items-center justify-center bg-slate-950/30 transition-all duration-200 group cursor-pointer`,fileInput:`absolute inset-0 opacity-0 cursor-pointer`,dropZoneIconBox:`flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-3 group-hover:scale-110 transition-transform`,dropZoneLabel:`text-sm font-semibold text-slate-200`,dropZoneSubLabel:`text-xs text-slate-500 mt-1`},hi=class extends M{createRenderRoot(){return this}static properties={categories:{type:Array},searchEngines:{type:Array},t:{type:Function}};_exportConfig(){try{let e=JSON.stringify({categories:this.categories,searchEngines:this.searchEngines},null,2),t=new Date().toISOString().replace(/[:.]/g,`-`),n=new Blob([e],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`services.backup-${t}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r),this._sendNotification(`success`,this.t(`tabDataExportSuccess`)||`Configuration successfully exported!`)}catch(e){console.error(`Failed to export config`,e),this._sendNotification(`error`,this.t(`tabDataExportFailed`)||`Export failed.`)}}_handleImport(e){let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=e.target.result,n=JSON.parse(t);mi(n)?(this.dispatchEvent(new CustomEvent(`config-imported`,{detail:n,bubbles:!0,composed:!0})),this._sendNotification(`success`,this.t(`tabDataImportSuccess`))):this._sendNotification(`error`,this.t(`tabDataImportInvalidStructure`))}catch{this._sendNotification(`error`,this.t(`tabDataImportJsonError`))}},n.readAsText(t),e.target.value=``}_sendNotification(e,t){this.dispatchEvent(new CustomEvent(`notify`,{detail:{type:e,message:t},bubbles:!0,composed:!0}))}render(){return k`
      <div class="${L.wrapper}">
        <section class="${L.exportCard}">
          <div class="${L.exportBody}">
            <div class="${L.exportIconBox}">
              <jk-icon icon="ui:download" class="w-6 h-6"></jk-icon>
            </div>
            <div class="${L.exportTextContainer}">
              <h3 class="${L.exportTitle}">${this.t(`tabDataBackupTitle`)}</h3>
              <p class="${L.exportDesc}">${this.t(`tabDataBackupDesc`)}</p>
            </div>
            <button @click="${this._exportConfig}" class="${L.exportBtn}">
              <jk-icon icon="ui:download" class="w-4 h-4"></jk-icon>
              ${this.t(`tabDataExport`)}
            </button>
          </div>
        </section>

        <section class="${L.importCard}">
          <div class="${L.importHeader}">
            <div class="${L.importIconBox}">
              <jk-icon icon="ui:upload" class="w-5 h-5"></jk-icon>
            </div>
            <div>
              <h3 class="${L.importTitle}">${this.t(`tabDataRestoreTitle`)}</h3>
              <p class="${L.importDesc}">${this.t(`tabDataRestoreDesc`)}</p>
            </div>
          </div>

          <div class="${L.dropZone}">
            <input
              type="file"
              accept=".json"
              @change="${this._handleImport}"
              class="${L.fileInput}"
            />
            <div class="${L.dropZoneIconBox}">
              <jk-icon icon="ui:file-json" class="w-7 h-7"></jk-icon>
            </div>
            <span class="${L.dropZoneLabel}">${this.t(`tabDataSelectFile`)}</span>
            <span class="${L.dropZoneSubLabel}">${this.t(`tabDataOnlyJsonFiles`)}</span>
          </div>
        </section>
      </div>
    `}};customElements.define(`jk-config-data`,hi);var gi={},_i=Symbol(),vi=Symbol(),yi=e=>typeof e==`string`?bi[e]:e,bi={plain:gi,plaintext:gi,text:gi,txt:gi},xi=(e,t)=>(t[vi]||Si)(e,t),Si=(e,t)=>{for(var n=[e],r,i=[],a=0;r=yi(t[_i]);)delete t[_i],Object.assign(t,r);for(ki(e,t,n,0);i[a++]=n[0],n=n[1];);return i},Ci=(e,t,n)=>e.replace(/&/g,`&amp;`).replace(t,n),wi=`</span>`,Ti=``,Ei=``,Di=e=>{for(var t=``,n,r=0;n=e[r++];)t+=Oi(n);return t},Oi=e=>{if(e instanceof Ai){var{type:t,alias:n,content:r}=e,i=Ti,a=Ei,o=`<span class="token ${t+(n?` `+n:``)+(t==`keyword`&&typeof r==`string`?` keyword-`+r.replace(/"|\s/g,``):``)}">`;Ei+=wi,Ti+=o;var s=Oi(r);return Ti=i,Ei=a,o+s+wi}return typeof e==`string`?(e=Ci(e,/</g,`&lt;`),Ei&&e.includes(`
`)?e.replace(/\n/g,Ei+`
`+Ti):e):Di(e)},ki=(e,t,n,r,i)=>{for(var a in t)if(t[a])for(var o=0,s=t[a],c,l=Array.isArray(s)?s:[s];c=l[o];o++){if(i&&i[0]==a&&i[1]==o)return;for(var u=c.pattern||c,d=yi(c.inside),f=c.lookbehind,p=u.global,m=c.alias,h=n,g=r;h&&(!i||g<i[2]);g+=h[0].length,h=h[1]){var _=h[0],v=0,y;if(!(_ instanceof Ai)){if(u.lastIndex=p?g:0,y=u.exec(p?e:_),!y&&p)break;if(y&&y[0]){var b=f&&y[1]?y[1].length:0,x=y.index+b,S=y[0].slice(b),C=x+S.length,w,s;if(p){for(;s=g+h[0].length,x>=s;h=h[1],g=s);if(h[0]instanceof Ai)continue;for(w=h,s=g;(s+=w[0].length)<C;w=w[1],v++);_=e.slice(g,s),x-=g,C-=g}for(var T=_.slice(C),E=g+_.length,ee=new Ai(a,d?xi(S,d):S,S,m),D=h,te=0,O;D=D[1],te++<v;);T&&(!D||D[0]instanceof Ai?D=[T,D]:D[0]=T+D[0]),g+=x,h[0]=x?_.slice(0,x):ee,x?h=h[1]=[ee,D]:h[1]=D,v&&(ki(e,t,h,g,O=[a,o,E]),E=O[2]),i&&E>i[2]&&(i[2]=E)}}}}};function Ai(e,t,n,r){this.type=e,this.content=t,this.alias=r,this.length=n.length}var ji=(e,t,...n)=>{let r,i=[],a,o=``,s,c=!1,l=!0,u=[],d,f=0,p=Li(),m=p.firstChild,h=m.children,g=h[0],_=g.firstChild,v={language:`text`,value:o},y=new Set(n),b={},x=e=>{Object.assign(v,e);let t=o!=(o=e.value??o),n=r!=(r=v.language);d=!!v.readOnly,p.style.tabSize=v.tabSize||2,_.inputMode=d?`none`:``,_.setAttribute(`aria-readonly`,d),w(),C(),t&&(c||_.remove(),_.value=o,_.selectionEnd=0,c||g.prepend(_)),(t||n)&&S()},S=()=>{u=xi(o=_.value,bi[r]||{}),D(`tokenize`,u,r,o);let e=Di(u).split(`
`),t=0,n=f,a=f=e.length;for(;e[t]==i[t]&&t<a;)++t;for(;a&&e[--a]==i[--n];);if(t==a&&t==n)h[t+1].innerHTML=e[t]+`
`;else{let r=n<t?n:t-1,i=r,o=``;for(;i<a;)o+=`<div class=pce-line aria-hidden=true>${e[++i]}\n</div>`;for(i=a<t?a:t-1;i<n;i++)h[t+1].remove();o&&h[r+1].insertAdjacentHTML(`afterend`,o),p.style.setProperty(`--number-width`,(0|Math.log10(f))+1+`.001ch`)}D(`update`,o),te(!0),l&&setTimeout(setTimeout,0,()=>l=!0),i=e,l=!1},C=e=>{(e||y).forEach(t=>{typeof t==`object`?(t.update(O,v),e&&y.add(t)):(t(O,v),e||y.delete(t))})},w=([e,t]=T())=>{p.className=`prism-code-editor language-${r}${v.lineNumbers==0?``:` show-line-numbers`} pce-${v.wordWrap?``:`no`}wrap${v.rtl?` pce-rtl`:``} pce-${e<t?`has`:`no`}-selection${c?` pce-focus`:``}${d?` pce-readonly`:``}${v.class?` `+v.class:``}`},T=()=>[_.selectionStart,_.selectionEnd,_.selectionDirection],E={Escape(){_.blur()}},ee={},D=(e,...t)=>{b[e]?.forEach(e=>e.apply(O,t)),v[`on`+e[0].toUpperCase()+e.slice(1)]?.(...t,O)},te=e=>{if(e||l){let e=T(),t=h[s=Fi(o,0,e[e[2]<`f`?0:1])];t!=a&&(a?.classList.remove(`active-line`),t.classList.add(`active-line`),a=t),w(e),D(`selectionChange`,e,o)}},O={container:p,wrapper:m,lines:h,textarea:_,get activeLine(){return s},get value(){return o},options:v,get focused(){return c},get tokens(){return u},inputCommandMap:ee,keyCommandMap:E,extensions:{},setOptions:x,update:S,getSelection:T,addExtensions(...e){C(e)},on:(e,t)=>((b[e]||=new Set).add(t),()=>b[e].delete(t)),remove(){p.remove()}};return z(_,`keydown`,e=>{E[e.key]?.(e,T(),o)&&B(e)}),z(_,`beforeinput`,e=>{(d||e.inputType==`insertText`&&ee[e.data]?.(e,T(),o))&&B(e)}),z(_,`input`,S),z(_,`blur`,()=>{Ri=null,c=!1,w()}),z(_,`focus`,()=>{Ri=te,c=!0,w()}),z(_,`selectionchange`,e=>{te(!e.isTrusted),B(e)}),Pi(e)?.append(p),t&&x(t),O},R=`u`>typeof window?document:null,Mi=R?.createElement(`div`),Ni=(e,t)=>(Mi&&(Mi.innerHTML=e,t=Mi.firstChild),()=>t.cloneNode(!0)),z=(e,t,n,r)=>e.addEventListener(t,n,r),Pi=e=>typeof e==`string`?R.querySelector(e):e,Fi=(e,t=0,n=1/0)=>{let r=1;for(;(t=e.indexOf(`
`,t)+1)&&t<=n;r++);return r},Ii={},Li=Ni(`<div><div class=pce-wrapper><div class=pce-overlays><textarea class=pce-textarea spellcheck=false autocapitalize=off autocomplete=off>`),B=e=>{e.preventDefault(),e.stopImmediatePropagation()},Ri;R&&z(R,`selectionchange`,()=>Ri?.());var zi=(e,t,n=0)=>{let r=e.container.style;r.setProperty(`--_sp`,`var(--pce-scroll-padding, 2ch)`),r.scrollPaddingBlock=`calc(var(--_sp) + ${n}px) calc(var(--_sp) + ${ta&&!t.offsetWidth?t.offsetHeight:0}px)`,t.scrollIntoView({block:`nearest`}),r.scrollPaddingBlock=``,r.removeProperty(`--_sp`)},Bi=(e,t)=>t?e.lastIndexOf(`
`,t-1)+1:0,Vi=(e,t)=>(t=e.indexOf(`
`,t))+1?t:e.length,Hi=(e,t,n,r)=>(z(e,t,n,r),()=>e.removeEventListener(t,n,r)),Ui=(e,t,n,r)=>Hi(e.textarea,t,n,r),Wi=(e,t)=>parseFloat(getComputedStyle(e)[t]),Gi=(e,t)=>{let n=t.getBoundingClientRect(),r=e.lines[0].getBoundingClientRect();return{top:n.y-r.y,bottom:r.bottom-n.bottom,left:n.x-r.x,right:r.right-n.right,height:n.height}},Ki=(e,t)=>{e.data!=t&&(e.data=t)};new Set(`xml,rss,atom,jsx,tsx,xquery,xeora,xeoracube,actionscript`.split(`,`));var qi,Ji=e=>e.replace(/[$+?|.^*()[\]{}\\]/g,`\\$&`),Yi=(e,t)=>e.slice(Bi(e,t),t),V=(e,t,n=t)=>[e.slice(t=Bi(e,t),n=Vi(e,n)).split(`
`),t,n],Xi=(e,t,n=0,r=n,i=e.getSelection()[0])=>{let a=e.value,o=e.lines[Fi(a,0,i)],s=R.createTreeWalker(o,5),c=s.lastChild(),l=Vi(a,i)+1-i-c.length;for(;-l<=r&&(c=s.previousNode());)if(!c.lastChild&&(l-=c.length||0,l<=n)){for(;c!=o;c=c.parentNode)if(c.matches?.(t))return c}},Zi=(e,t)=>Xi(e,`[class*=language-]`,0,0,t)?.className.match(/language-(\S*)/)[1]||e.options.language,H=(e,t,n,r,i,a)=>{if(e.options.readOnly)return;qi=e.getSelection(),r??=n;let o=e.textarea,s=e.value,c=ta&&!s[r??qi[1]]&&/\n$/.test(t)&&/^$|\n$/.test(s),l;e.focused||o.focus(),n!=null&&o.setSelectionRange(n,r),i!=null&&(l=e.on(`update`,()=>{o.setSelectionRange(i,a??i,qi[2]),l()})),na||o.dispatchEvent(new InputEvent(`beforeinput`,{data:t})),ta||na?(c&&(o.selectionEnd--,t=t.slice(0,-1)),na&&(t+=`
`),R.execCommand(t?`insertHTML`:`delete`,!1,Ci(t,/</g,`&lt;`)),c&&o.selectionStart++):R.execCommand(t?`insertText`:`delete`,!1,t),qi=0},Qi=(e,t,n=t,r)=>{let i=e.textarea,a=Hi(i,`focus`,e=>{let t=e.relatedTarget;t?t.focus():i.blur()});i.setSelectionRange(t,n,r),a(),i.dispatchEvent(new Event(`selectionchange`))},$i=R?navigator.userAgent:``,ea=R?/Mac|iPhone|iP[ao]d/.test(navigator.platform):!1,ta=/Chrome\//.test($i),na=!ta&&/AppleWebKit\//.test($i),ra=e=>e.altKey+e.ctrlKey*2+e.metaKey*4+e.shiftKey*8,ia=ea?4:2,aa=!1,oa=e=>aa=e,sa=e=>e.search(/\S|$/),ca=(e=[`""`,`''`,"``",`()`,`[]`,`{}`],t=/([^$\w'"`]["'`]|.[[({])[.,:;\])}>\s]|.[[({]`/s)=>(n,r)=>{let i,{keyCommandMap:a,inputCommandMap:o,getSelection:s,container:c}=n,l=navigator.clipboard,u=({insertSpaces:e=!0,tabSize:t}=r)=>[e?` `:`	`,e?t||2:1],d=()=>!r.readOnly&&!n.extensions.cursor?.scrollIntoView(),f=([e,r],[i,a],o,s)=>(e<r||!s&&t.test((o[r-1]||` `)+i+(o[r]||` `)))&&!H(n,i+o.slice(e,r)+a,null,null,e+1,r+1),p=([e,t],r,i)=>e==t&&i[t]==r&&!Qi(n,e+1),m=(e,t,r,i,a,o)=>{let s=t.join(`
`);if(s!=e.join(`
`)){let c=e.length-1,l=t[c],u=e[c],d=u.length-l.length,f=t[0].length-e[0].length,p=r+sa((f<0?t:e)[0]),m=i-u.length+sa(d>0?l:u),h=r-i+s.length+d,g=p>a?a:Math.max(p,a+f),_=o+r-i+s.length;H(n,s,r,i,g,o<m?_+d:Math.max(m+h,_))}},h=(e,t,n,r,i,a,o,s)=>{m(t,t.map(e?e=>e.slice(sa(e)?s-sa(e)%s:0):e=>e&&o.repeat(s-sa(e)%s)+e),n,r,i,a)};o[`<`]=(e,t,n)=>f(t,`<>`,n,!0),e.forEach(([e,t])=>{let n=e==t;o[e]=(r,i,a)=>(n&&p(i,t,a)||f(i,e+t,a))&&d(),n||(o[t]=(e,n,r)=>p(n,t,r)&&d())}),o[`>`]=(e,t,r)=>{let i=Ii[Zi(n)]?.autoCloseTags?.(t,r,n);i&&(H(n,`>`+i,null,null,t[0]+1),B(e))},a.Tab=(e,[t,i],a)=>{if(aa||r.readOnly||ra(e)&7)return;let[o,s]=u(),c=e.shiftKey,[l,f,p]=V(a,t,i);return t<i||c?h(c,l,f,p,t,i,o,s):H(n,o.repeat(s-(t-f)%s)),d()},a.Enter=(e,t,r)=>{let i=ra(e)&7;if(!i||i==ia){i&&(t[0]=t[1]=V(r,t[1])[2]);let[e,a]=u(),[o,s]=t,c=Ii[Zi(n,o)]?.autoIndent,l=Math.floor(sa(Yi(r,o))/a)*a,f=c?.[0]?.(t,r,n)?a:0,p=c?.[1]?.(t,r,n),m=`
`+e.repeat(l+f)+(p?`
`+e.repeat(l):``);if(m[1]||r[s])return H(n,m,o,s,o+l+f+1),d()}},a.Backspace=(t,[i,a],o)=>{if(i==a){let t=Yi(o,i),a=r.tabSize||2,s=e.includes(o.slice(i-1,i+1)),c=/[^ ]/.test(t)?0:(t.length-1)%a+1;if(s||c>1)return H(n,``,i-(s?1:c),i+s),d()}};for(let e=0;e<2;e++)a[e?`ArrowDown`:`ArrowUp`]=(t,[r,i],a)=>{let o=ra(t);if(o==1){let t=e?r:Bi(a,r)-1,o=e?a.indexOf(`
`,i)+1:i;if(t>-1&&o>0){let[s,c,l]=V(a,t,o),u=s[e?`pop`:`shift`](),d=(u.length+1)*(e?1:-1);s[e?`unshift`:`push`](u),H(n,s.join(`
`),c,l,r+d,i+d)}return d()}if(o==9){let[t,o,s]=V(a,r,i),c=t.join(`
`),l=e?c.length+1:0;return H(n,c+`
`+c,o,s,r+l,i+l),d()}if(o==2&&!ea)return c.scrollBy(0,Wi(c,`lineHeight`)*(e?1:-1)),!0};Ui(n,`keydown`,e=>{let t=ra(e),r=e.keyCode,[i,a,o]=s();if(t==ia&&(r==221||r==219))h(r==219,...V(n.value,i,a),i,a,...u()),d(),B(e);else if(t==(ea?10:2)&&r==77)oa(!aa),B(e);else if(r==191&&t==ia||r==65&&t==9){let r=n.value,o=t==9,s=o?i:Bi(r,i),c=Ii[Zi(n,s)]||{},{line:l,block:u}=c.getComments?.(n,s,r)||c.comments||{},[f,p,h]=V(r,i,a),g=f.length-1;if(o){if(u){let[t,o]=u,s=r.slice(i,a),c=r.slice(0,i).search(Ji(t)+` ?$`);c+1&&RegExp(`^ ?`+Ji(o)).test(r.slice(a))?H(n,s,c,a+(r[a]==` `)+o.length,c,c+a-i):H(n,`${t} ${s} ${o}`,i,a,i+t.length+1,a+t.length+1),d(),B(e)}}else if(l){let t=Ji(l),n=RegExp(`^\\s*(${t} ?|$)`),o=RegExp(t+` ?`),s=!/\S/.test(r.slice(p,h)),c=f.map(!s&&f.every(e=>n.test(e))?e=>e.replace(o,``):e=>s||/\S/.test(e)?e.replace(/(?!\s)/,l+` `):e);m(f,c,p,h,i,a),d(),B(e)}else if(u){let[t,r]=u,o=f[0],s=sa(o),c=o.startsWith(t,s)&&f[g].endsWith(r);f[0]=o.replace(c?RegExp(Ji(t)+` ?`):/(?!\s)/,c?``:t+` `);let l=f[0].length-o.length;f[g]=c?f[g].replace(RegExp(` ?${Ji(r)}$`),``):f[g]+` `+r;let m=f.join(`
`),_=s+p,v=_>i?i:Math.max(i+l,_),y=_>a-(i!=a)?a:Math.min(Math.max(_,a+l),p+m.length);H(n,m,p,h,v,Math.max(v,y)),d(),B(e)}}else if(t==8+ia&&r==75){let t=n.value,[r,s,c]=V(t,i,a),l=o>`f`?a-c+r.pop().length:i-s,u=Vi(t,c+1)-c-1;H(n,``,s-!!s,c+!s,s+Math.min(l,u)),d(),B(e)}}),[`copy`,`cut`,`paste`].forEach(e=>Ui(n,e,t=>{let[r,a]=s();if(r==a&&l){let[[o],s,c]=V(n.value,r,a);e==`paste`?t.clipboardData.getData(`text/plain`)==i&&(H(n,i+`
`,s,s,r+i.length+1),d(),B(t)):(l.writeText(i=o),e==`cut`&&(H(n,``,s,c+1),d()),B(t))}}))};[...ea?[[`1+Escape`,`Trigger suggestion`]]:[]];var la=ea?5:1;la+``,la+``,la+``,la+``;var ua=Ni(`<div style=position:absolute;top:0;opacity:0;padding-inline-end:inherit> <span><span></span> `),da=()=>{let e,t=ua(),[n,r]=t.childNodes,[i,a]=r.childNodes,o=()=>{let r=e.getSelection(),i=e.value,o=e.lines[e.activeLine],s=r[r[2]<`f`?0:1];Ki(n,Yi(i,s)),Ki(a,i.slice(s,Vi(i,s))+`
`),t.parentNode!=o&&o.prepend(t)},s=()=>{o(),zi(e,i)},c=t=>{e=t,t.extensions.cursor=c,Ui(t,`input`,e=>{/history/.test(e.inputType)&&s()})};return c.getPosition=()=>(o(),Gi(e,i)),c.scrollIntoView=s,c.element=i,c};Ni(`<div class=pce-cursor>`);var fa=Ni(`<div class=guide-indents>	`),pa=()=>{let e,t=0,n,r,i,a=[],o=[],s,c=r=>{n=[];let i=ma(r,e),c=i.length;for(let e=0,t=[],r=i[0];r;e++){let s=(a[e]||=R.createElement(`div`)).style,[c,l,u]=r,d=o[e];r=i[e+1],c!=d?.[0]&&(s.top=c+`00%`),l!=d?.[1]&&(s.left=l+`00%`),u!=d?.[2]&&(s.height=u+`00%`);let f=t[0]!=c&&r?.[0]!=c,p=t[0]+t[1]!=c+u&&r?.[0]+r?.[1]!=c+u;for(let t=-f,r=u+p;t<r;t++)n[t+c]=e;t=o[e]=i[e]}for(let e=c;e<t;)a[e++].remove();s.append(...a.slice(t,t=c))},l=()=>{let e=a[n[i.activeLine-1]];e!=r&&(r&&(r.className=``),e&&(e.className=`active-indent`),r=e)};return{update(t,n){if(i!=t){i=t;let e=t.lines[0];(s=e.querySelector(`.guide-indents`))?(a.push(...s.children),r=a.find(e=>e.className)):e.append(s=fa()),t.on(`update`,c),t.on(`selectionChange`,l)}s.style.display=n.wordWrap?`none`:``,e!=(e=n.tabSize||2)&&(c(t.value),l())}}},ma=(e,t)=>{let n=e.split(`
`),r=n.length,i=[],a=[];for(let e=0,o=-1,s=0,c=0;;s++){let l=s==r,u=n[s],d=l?0:u.search(/\S/),f=0,p=0;if(d<0)o<0&&(o=s);else{for(;p<d;)f+=u[p++]==`	`?t-f%t:1;for(f&&=Math.ceil(f/t),p=f;p<e;p++)i[p][2]=(o<0||p==f&&!l?s:o)-i[p][0];for(p=e;p<f;)a[c++]=i[p]=[o<0||p>e?s:o,p++,0];o=-1,e=f}if(l)break}return a},ha=()=>e=>{let t,n=[],r=()=>{let r=e.extensions.matchBrackets,[a,o]=e.getSelection();if(r){let s=r.brackets,c=r.pairs,l,u;if(e.focused&&a==o){for(let e=0,t;t=s[++e];)if(!t[5]&&t[2]>=o&&s[c[e]]?.[1]<=o){l=s[c[e]],u=t;break}}u!=t&&(i(),u?(n=[l,u].map(t=>Xi(e,`.punctuation`,0,-1,t[1])),n[0]!=n[1]&&l[2]==u[1]&&(n[0].textContent+=n[1].textContent,n[1].textContent=``,n[1]=n[0]),i(!0)):n=[]),t=u}},i=e=>n.forEach(t=>t.classList.toggle(`active-bracket`,!!e));Ui(e,`focus`,r),Ui(e,`blur`,r),e.on(`selectionChange`,r)},ga=(e,t,n)=>t.indexOf(e[0])+1||n&&t.indexOf(e[n])+1,_a=(e=!0,t=`()[]{}`)=>{let n,r,i=[],a=t=>{t.extensions.matchBrackets=a,t.on(`tokenize`,c),e&&t.tokens[0]?t.update():c(t.tokens)},o=a.brackets=[],s=a.pairs=[],c=t=>{if(s.length=o.length=r=n=0,l(t,0),e)for(let e=0,t;t=o[e];){let n=t[0].alias;t[0].alias=(n?n+` `:``)+`bracket-${e++in s?`level-`+t[3]%12:`error`}`}},l=(e,a)=>{let c,u=0;for(;c=e[u++];){let e=c.length;if(typeof c!=`string`){let u=c.content;if(Array.isArray(u))l(u,a);else if((c.alias||c.type)==`punctuation`){let l=ga(u,t,e-1),d=l%2;if(l){if(o[n]=[c,a,a+e,r,u,!!d],d)i[r++]=[n,l+1];else for(let e=r,t;t=i[--e];)if(l==t[1]){s[s[n]=t[0]]=n,o[n][3]=r=e;break}n++}}}a+=e}};return a};bi.webmanifest=bi.json={property:/"(?:\\.|[^\\\n"])*"(?=\s*:)/g,string:/"(?:\\.|[^\\\n"])*"/g,comment:/\/\/.*|\/\*[^]*?(?:\*\/|$)/g,number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,operator:/:/,punctuation:/[[\]{},]/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:`keyword`}};var va={containerBase:`w-full h-full min-h-[400px] rounded-xl overflow-auto bg-slate-950 border shadow-inner transition-colors`,containerValid:`border-slate-700 focus-within:border-indigo-500`,containerInvalid:`jk-invalid-container`},ya=class extends M{createRenderRoot(){return this}static properties={value:{type:String},originalValue:{type:String},isValid:{type:Boolean}};constructor(){super(),this.value=``,this.originalValue=``,this.isValid=!0,this._editorInstance=null}firstUpdated(){this.initEditor()}disconnectedCallback(){super.disconnectedCallback(),this._editorInstance=null}editorRows(e){let t=e.textarea,n=window.getComputedStyle(t),r=parseFloat(n.lineHeight);return e.textarea.closest(`.prism-code-editor`).clientHeight,Math.floor(300/r)}initEditor(){let e=this.querySelector(`#editorContainer`);e&&(e.innerHTML=``,this._editorInstance=ji(e,{value:this.value,language:`json`,theme:`jump-key-dark`,onUpdate:e=>{this.value=e;let t=!1;try{t=mi(JSON.parse(e))}catch{t=!1}this.isValid=t,this.dispatchEvent(new CustomEvent(`editor-change`,{detail:{value:e,isValid:t,hasChanged:e!==this.originalValue},bubbles:!0,composed:!0}))}},()=>{requestAnimationFrame(()=>{this._editorInstance?.textarea?.focus()})},ca(),_a(),ha(),pa(),da()))}render(){let e=this.isValid?va.containerValid:va.containerInvalid;return k` <div id="editorContainer" class="${va.containerBase} ${e}"></div> `}};customElements.define(`jk-config-editor`,ya);var U={overlay:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn`,container:`w-full max-w-7xl h-[88vh] max-h-[900px] flex flex-col rounded-3xl border border-slate-700/70 bg-slate-900/95 jk-shadow-elevated p-5 sm:p-6`,header:`flex items-center justify-between mb-5 pb-4 border-b border-slate-700/50`,headerLeft:`flex items-center gap-3`,iconBadge:`flex items-center justify-center size-10 rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/20`,icon:`size-5 text-indigo-300`,title:`text-base font-semibold text-slate-50`,subtitle:`text-xs text-slate-500`,headerRight:`flex items-center gap-2`,statusBadge:`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium`,statusValid:`jk-status-success-surface ring-1`,statusInvalid:`jk-status-danger-surface ring-1`,mainArea:`flex flex-1 gap-5 min-h-0`,sidebar:`w-52 shrink-0 flex flex-col gap-2`,sidebarBtn:`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all`,sidebarBtnActive:`bg-indigo-500/10 border border-indigo-500/20 text-indigo-300`,sidebarBtnInactive:`border border-transparent text-slate-400 hover:text-slate-50 hover:bg-slate-800/70`,kbd:`ml-auto hidden sm:inline-flex text-[10px] text-slate-500`,contentArea:`flex-1 min-w-0 overflow-y-auto`,footer:`flex justify-end gap-3 mt-5 pt-4 border-t border-slate-700/50`,btnSecondary:`px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all`,btnSecondaryWhite:`px-5 py-2.5 rounded-xl text-sm font-medium text-slate-50 bg-slate-800 border border-slate-700 hover:bg-slate-700`,btnPrimary:`px-5 py-2.5 rounded-xl text-sm font-medium jk-on-accent transition-all`,btnPrimaryActive:`bg-indigo-600 hover:bg-indigo-500 cursor-pointer`,btnPrimaryDisabled:`bg-slate-700 text-slate-500 cursor-not-allowed opacity-50`},ba=class extends M{createRenderRoot(){return this}static properties={show:{type:Boolean},categories:{type:Array},searchEngines:{type:Array},theme:{type:String},t:{type:Function},_activeTab:{type:String},_isEditorConfigValid:{type:Boolean},_hasEditorConfigChanged:{type:Boolean},_editorValue:{type:String},_originalConfigString:{type:String},_showDiscardDialog:{type:Boolean}};constructor(){super(),this.show=!1,this.categories=[],this.searchEngines=[],this.theme=`midnight`,this._activeTab=`appearance`,this._isEditorConfigValid=!0,this._hasEditorConfigChanged=!1,this._editorValue=``,this._originalConfigString=``,this._showDiscardDialog=!1,this.t=e=>e,this._handleKeyDown=this._handleKeyDown.bind(this)}willUpdate(e){e.has(`show`)&&(this.show?(this._editorValue=JSON.stringify({categories:this.categories,searchEngines:this.searchEngines},null,2),this._originalConfigString=this._editorValue,this._isEditorConfigValid=!0,this._hasEditorConfigChanged=!1,this._showDiscardDialog=!1,this._activeTab=`appearance`,window.addEventListener(`keydown`,this._handleKeyDown,!0)):window.removeEventListener(`keydown`,this._handleKeyDown,!0))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this._handleKeyDown,!0)}_handleKeyDown(e){if(!this._showDiscardDialog){if(e.ctrlKey||e.metaKey){if(e.key===`1`){e.preventDefault(),e.stopPropagation(),this._setActiveTab(`appearance`);return}if(e.key===`2`){e.preventDefault(),e.stopPropagation(),this._setActiveTab(`data`);return}if(e.key===`3`){e.preventDefault(),e.stopPropagation(),this._setActiveTab(`editor`);return}}if(this._activeTab===`editor`&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`s`){e.preventDefault(),e.stopPropagation(),this._isEditorConfigValid&&this._hasEditorConfigChanged&&this._handleSave();return}e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this._handleClose())}}_setActiveTab(e){this._activeTab=e}_handleEditorChange(e){let{value:t,isValid:n,hasChanged:r}=e.detail;this._editorValue=t,this._isEditorConfigValid=n,this._hasEditorConfigChanged=r}_handleConfigImported(e){let t=e.detail;this._editorValue=JSON.stringify(t,null,2),this._isEditorConfigValid=!0,this._hasEditorConfigChanged=!0,this._setActiveTab(`editor`)}_handleClose(){this._hasEditorConfigChanged?this._showDiscardDialog=!0:this._forceClose()}_forceClose(){this._showDiscardDialog=!1,this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}_handleSave(){try{let e=JSON.parse(this._editorValue),t=JSON.parse(this._originalConfigString);localStorage.setItem(`services-cache`,JSON.stringify(e)),this.dispatchEvent(new CustomEvent(`save`,{detail:{newConfig:e,previousConfig:t},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`notify`,{detail:{type:`success`,message:this.t(`tabEditorSaveSuccess`)||`Configuration successfully saved!`},bubbles:!0,composed:!0})),this._originalConfigString=this._editorValue,this._hasEditorConfigChanged=!1,this._forceClose()}catch{this.dispatchEvent(new CustomEvent(`notify`,{detail:{type:`error`,message:this.t(`tabEditorSaveFailed`)||`Error saving configuration.`},bubbles:!0,composed:!0}))}}_renderActiveTabContent(){switch(this._activeTab){case`appearance`:return k`
          <jk-config-appearance
            .selectedTheme="${this.theme}"
            .t="${this.t}"
          ></jk-config-appearance>
        `;case`data`:return k`
          <jk-config-data
            .categories="${this.categories}"
            .searchEngines="${this.searchEngines}"
            .t="${this.t}"
            @config-imported="${this._handleConfigImported}"
          ></jk-config-data>
        `;default:return k`
          <jk-config-editor
            .value="${this._editorValue}"
            .originalValue="${this._originalConfigString}"
            .isValid="${this._isEditorConfigValid}"
            @editor-change="${this._handleEditorChange}"
          ></jk-config-editor>
        `}}render(){if(!this.show)return k``;let e=this._isEditorConfigValid?U.statusValid:U.statusInvalid,t=this._activeTab===`appearance`?U.sidebarBtnActive:U.sidebarBtnInactive,n=this._activeTab===`data`?U.sidebarBtnActive:U.sidebarBtnInactive,r=this._activeTab===`editor`?U.sidebarBtnActive:U.sidebarBtnInactive,i=this._isEditorConfigValid&&this._hasEditorConfigChanged?U.btnPrimaryActive:U.btnPrimaryDisabled;return k`
      <div @click="${this._handleClose}" class="${U.overlay}">
        <div @click="${e=>e.stopPropagation()}" class="${U.container}">
          <div class="${U.header}">
            <div class="${U.headerLeft}">
              <div class="${U.iconBadge}">
                <jk-icon icon="ui:settings-2" class="${U.icon}"></jk-icon>
              </div>
              <div>
                <h2 class="${U.title}">JumpKey</h2>
                <p class="${U.subtitle}">
                  ${this.t(`configSubtitle`)||`Configuration & Backup`}
                </p>
              </div>
            </div>

            <div class="${U.headerRight}">
              ${this._activeTab===`editor`?k`
                      <div class="${U.statusBadge} ${e}">
                        <jk-icon
                          .icon="${this._isEditorConfigValid?`ui:circle-check`:`ui:triangle-alert`}"
                          class="size-4"
                        ></jk-icon>
                        <span
                          >${this._isEditorConfigValid?this.t(`tabEditorValid`):this.t(`tabEditorInvalid`)}</span
                        >
                      </div>
                    `:``}
              <jk-icon-button
                icon="ui:x"
                label="${this.t(`close`)||`Close`}"
                @click="${this._handleClose}"
              ></jk-icon-button>
            </div>
          </div>

          <div class="${U.mainArea}">
            <aside class="${U.sidebar}">
              <button
                @click="${()=>this._setActiveTab(`appearance`)}"
                class="${U.sidebarBtn} ${t}"
              >
                <jk-icon icon="ui:palette" class="size-4"></jk-icon>
                ${this.t(`tabAppearance`)}
                <kbd class="${U.kbd}">1</kbd>
              </button>
              <button
                @click="${()=>this._setActiveTab(`data`)}"
                class="${U.sidebarBtn} ${n}"
              >
                <jk-icon icon="ui:database" class="size-4"></jk-icon>
                ${this.t(`tabData`)}
                <kbd class="${U.kbd}">2</kbd>
              </button>
              <button
                @click="${()=>this._setActiveTab(`editor`)}"
                class="${U.sidebarBtn} ${r}"
              >
                <jk-icon icon="ui:code-2" class="size-4"></jk-icon>
                ${this.t(`tabEditor`)}
                <kbd class="${U.kbd}">3</kbd>
              </button>
            </aside>

            <main class="${U.contentArea}">${this._renderActiveTabContent()}</main>
          </div>

          <div class="${U.footer}">
            ${this._activeTab===`editor`?k`
                    <button
                      type="button"
                      @click="${this._handleClose}"
                      class="${U.btnSecondary}"
                    >
                      ${this.t(`editConfigCancel`)||`Cancel`}
                    </button>
                    <button
                      type="button"
                      @click="${this._handleSave}"
                      ?disabled="${!this._isEditorConfigValid||!this._hasEditorConfigChanged}"
                      class="${U.btnPrimary} ${i}"
                    >
                      ${this.t(`editConfigSave`)||`Save`}
                    </button>
                  `:k`
                    <button
                      type="button"
                      @click="${this._handleClose}"
                      class="${U.btnSecondaryWhite}"
                    >
                      ${this.t(`close`)||`Close`}
                    </button>
                  `}
          </div>
        </div>
      </div>

      ${this._showDiscardDialog?k`
              <jk-dialog
                .show=${this._showDiscardDialog}
                type="warning"
                .title=${this.t(`discardChangesTitle`)}
                .message=${this.t(`discardChangesMessage`)}
                icon="ui:triangle-alert"
                iconColor="jk-status-warning"
                .confirmLabel=${this.t(`discardConfirm`)}
                .cancelLabel=${this.t(`cancel`)}
                @confirm=${this._forceClose}
                @close=${()=>{this._showDiscardDialog=!1}}
                @cancel=${()=>{this._showDiscardDialog=!1}}
              ></jk-dialog>
            `:``}
    `}};customElements.define(`jk-config-modal`,ba);var xa=kt(class extends At{constructor(e){if(super(e),e.type!==Ot.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return A}}),W={itemBase:`group relative w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 text-left overflow-hidden`,accentBar:`absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-500`,iconWrapper:`flex items-center justify-center size-10 shrink-0 rounded-lg bg-slate-700/60 ring-1 transition-all duration-200`,icon:`size-5`,layoutWrapper:`flex items-center gap-3 min-w-0 grow`,contentCell:`min-w-0 grow`,metaCell:`ml-4 shrink-0`,kbdBase:`flex items-center justify-center h-7 px-2 rounded-lg border text-xs font-semibold tracking-widest uppercase`,enterKbd:`hidden sm:flex items-center justify-center h-7 px-3 rounded-lg border border-indigo-500 bg-indigo-500/20 text-xs font-semibold tracking-widest uppercase text-indigo-200`,engineTitle:`truncate text-base font-semibold tracking-tight text-slate-50`,engineUrl:`mt-0.5 truncate text-sm text-slate-400`,previewPrefix:`text-sm text-slate-400`,previewText:`truncate mt-0.5 text-slate-50`,previewTerms:`italic text-indigo-300 ml-2`,serviceTitle:`truncate text-base font-semibold tracking-tight text-slate-50`,serviceCategory:`mt-0.5 truncate text-xs uppercase tracking-widest text-slate-500`},Sa=class extends M{createRenderRoot(){return this}static properties={active:{type:Boolean},type:{type:String},data:{type:Object},t:{type:Function}};constructor(){super(),this.active=!1,this.type=`service`,this.data={},this.t=e=>e}render(){let e=this.active?`border-indigo-500/40 bg-gradient-to-r from-indigo-500/15 via-slate-800 to-slate-900 shadow-lg shadow-indigo-500/10`:`border-transparent hover:border-slate-700 hover:bg-slate-800/70`,t=this.active?`ring-indigo-500/40 bg-indigo-500/20 text-slate-50`:`ring-slate-600/70 text-indigo-400 group-hover:text-slate-50 group-hover:bg-indigo-500/15`;return k`
      <button class="${W.itemBase} ${e}">
        ${this.active?k`<div class="${W.accentBar}"></div>`:``}

        <div class="${W.layoutWrapper}">
          ${this.data.icon?k`
                  <div class="${W.iconWrapper} ${t}">
                    <jk-icon .icon=${this.data.icon} class="${W.icon}"></jk-icon>
                  </div>
                `:``}

          <div class="${W.contentCell}">${this._renderContent()}</div>
        </div>

        <div class="${W.metaCell}">${this._renderMeta()}</div>
      </button>
    `}_renderContent(){switch(this.type){case`engine`:return k`
          <div class="min-w-0">
            <div class="${W.engineTitle}">${this.data.name}</div>
            <div class="${W.engineUrl}">${this.data.url}</div>
          </div>
        `;case`preview`:{let e=this.data.searchTerms?.trim()||`...`;return k`
          <div class="min-w-0">
            <div class="${W.previewPrefix}">${this.t(`searchEnginePreviewPrefix`)}</div>
            <div class="${W.previewText}">
              <span class="font-semibold">${this.data.name}</span>
              <span class="${W.previewTerms}">"${e}"</span>
            </div>
          </div>
        `}default:return k`
          <div class="min-w-0">
            <div class="${W.serviceTitle}">${this.data.name}</div>
            <div class="${W.serviceCategory}">${this.data.category}</div>
          </div>
        `}}_renderMeta(){return this.type===`engine`?k` <kbd class="${xa({[W.kbdBase]:!0,"border-indigo-500 bg-indigo-500/20 text-indigo-200":this.active,"border-slate-600 bg-slate-900/80 text-slate-300":!this.active})}"> :${this.data.prefix} </kbd> `:this.active?k`<kbd class="${W.enterKbd}">Enter</kbd>`:``}};customElements.define(`jk-dashboard-search-item`,Sa);var G={overlay:`fixed inset-0 z-60 flex items-start justify-center pt-10 sm:pt-24 p-4 bg-slate-950/70 backdrop-blur-md`,modal:`w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-800 to-slate-900 jk-shadow-elevated flex flex-col max-h-[80vh]`,header:`flex items-center gap-3 px-5 py-4 border-b border-slate-700/70 bg-slate-900/30 shrink-0`,iconBadge:`flex items-center justify-center size-9 rounded-xl bg-slate-700/60 ring-1 ring-slate-600/70 text-indigo-300`,form:`grow`,input:`w-full bg-transparent text-lg sm:text-xl font-medium tracking-tight text-slate-50 placeholder-slate-500 focus:outline-none`,resultsContainer:`overflow-y-auto p-2 space-y-1 grow scroll-py-2`,engineHeader:`px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500`,emptyState:`flex flex-col items-center justify-center py-10 text-slate-500`,emptyIcon:`size-8 mb-3 opacity-50`,emptyText:`text-sm`},Ca=class extends M{createRenderRoot(){return this}static properties={show:{type:Boolean},searchQuery:{type:String},searchEngines:{type:Array},filteredServices:{type:Array},selectedIndex:{type:Number},t:{type:Function}};constructor(){super(),this.show=!1,this.searchQuery=``,this.searchEngines=[],this.filteredServices=[],this.selectedIndex=0,this.t=e=>e}updated(e){e.has(`selectedIndex`)&&requestAnimationFrame(()=>{let e=this.querySelector(`#searchResults`);if(!e)return;let t=e.querySelectorAll(`jk-dashboard-search-item`),n=t[this.selectedIndex];if(n){if(this.selectedIndex<=1){e.scrollTop=0;return}if(this.selectedIndex===t.length-1){e.scrollTop=e.scrollHeight;return}let r=n.offsetTop,i=r+n.offsetHeight,a=e.scrollTop,o=a+e.clientHeight;r<a+160?e.scrollTop=Math.max(0,r-160):i>o&&(e.scrollTop+=i-o)}})}_handleClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}_handleInput(e){this.dispatchEvent(new CustomEvent(`search-change`,{detail:{value:e.target.value},bubbles:!0,composed:!0}))}_focusInputAtEnd(e){let t=()=>{let t=this.querySelector(`#searchInput`);t&&(t.value!==e&&(t.value=e),t.focus({preventScroll:!0}),t.setSelectionRange(e.length,e.length))};t(),requestAnimationFrame(t)}_selectEngine(e){let t=`:${e} `;this.dispatchEvent(new CustomEvent(`search-change`,{detail:{value:t},bubbles:!0,composed:!0})),this._focusInputAtEnd(t)}_triggerServiceClick(e,t=!1){this.dispatchEvent(new CustomEvent(`service-click`,{detail:{service:e,shiftKey:t},bubbles:!0,composed:!0}))}_handleSubmit(e){e.preventDefault(),this.dispatchEvent(new CustomEvent(`execute-submit`,{bubbles:!0,composed:!0}))}_renderEngine(e,t){return k`
      <jk-dashboard-search-item
        type="engine"
        .active=${t}
        .data=${e}
        @click="${()=>this._selectEngine(e.prefix)}"
      ></jk-dashboard-search-item>
    `}_renderPreview(e,t,n){return k`
      <jk-dashboard-search-item
        type="preview"
        .active=${n}
        .data=${{...e,searchTerms:t}}
        .t=${this.t}
        @click="${n=>{let r=e.url.replace(`%s`,encodeURIComponent(t.trim()));n.shiftKey?window.location.assign(r):(window.open(r,`_blank`),this._handleClose())}}"
      ></jk-dashboard-search-item>
    `}_renderService(e,t){return k`
      <jk-dashboard-search-item
        type="service"
        .active=${t}
        .data=${e}
        @click=${t=>this._triggerServiceClick(e,t.shiftKey)}
      ></jk-dashboard-search-item>
    `}_buildItems(){let e=this.searchQuery.trim(),t=null,n=``,r=[],i=!1,a=!1;if(this.searchQuery.startsWith(`:`)){let e=this.searchQuery.substring(1),o=e.indexOf(` `);if(o!==-1){let r=e.substring(0,o).toLowerCase();n=e.substring(o+1),t=this.searchEngines.find(e=>e.prefix.toLowerCase()===r),t&&(a=!0)}else{i=!0;let t=e.toLowerCase();r=this.searchEngines.filter(e=>e.prefix.toLowerCase().startsWith(t))}}let o=e===`:`,s=o?this.searchEngines:i?r:[],c=[];return s.forEach(e=>{c.push({isEngineHeadingGroup:!0,render:t=>this._renderEngine(e,t)})}),a&&c.push({render:e=>this._renderPreview(t,n,e)}),o||this.filteredServices.forEach(e=>{c.push({render:t=>this._renderService(e,t)})}),{items:c,showAllEngines:o,isFilteringEngines:i}}render(){if(!this.show)return k``;let e=this.searchQuery.trim()===``,{items:t,showAllEngines:n,isFilteringEngines:r}=this._buildItems();return k`
      <div @click=${this._handleClose} class="${G.overlay}">
        <div @click=${e=>e.stopPropagation()} class="${G.modal}">
          <div class="${G.header}">
            <div class="${G.iconBadge}">
              <jk-icon icon="ui:search" class="size-5"></jk-icon>
            </div>

            <form @submit=${this._handleSubmit} class="${G.form}">
              <input
                id="searchInput"
                type="text"
                inputmode="search"
                enterkeyhint="search"
                placeholder="${this.t(`searchPlaceholder`)}"
                .value=${this.searchQuery}
                @input=${this._handleInput}
                class="${G.input}"
                autocomplete="off"
              />
            </form>

            ${e?k`
                    <jk-icon-button
                      icon="ui:globe"
                      title="Search engines"
                      @click=${()=>this._selectEngine(``)}
                    ></jk-icon-button>
                  `:``}

            <jk-icon-button icon="ui:x" title="Close" @click=${this._handleClose}></jk-icon-button>
          </div>

          <div id="searchResults" class="${G.resultsContainer}">
            ${(n||r)&&t.length>0?k`<div class="${G.engineHeader}">${this.t(`searchEnginesTitle`)}</div>`:``}
            ${t.map((e,t)=>e.render(t===this.selectedIndex))}
            ${this.searchQuery&&t.length===0?k`
                    <div class="${G.emptyState}">
                      <jk-icon icon="ui:search-x" class="${G.emptyIcon}"></jk-icon>
                      <span class="${G.emptyText}">${this.t(`noServices`)}</span>
                    </div>
                  `:``}
          </div>
        </div>
      </div>
    `}};customElements.define(`jk-search-modal`,Ca);var wa=600,Ta=12,K={card:`group relative flex w-full cursor-pointer select-none items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-200 ease-out touch-manipulation`,cardDefault:`jk-service-card hover:-translate-y-1 active:scale-[0.98]`,cardPressing:`jk-service-card scale-[0.985] border-indigo-500/40 jk-shadow-inset`,cardReady:`jk-service-card scale-[0.99] border-indigo-400/70 ring-2 ring-indigo-400/20`,glow:`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/4 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100`,iconContainer:`jk-service-card-icon relative z-10 flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all duration-200 ease-out`,iconDefault:`group-hover:-translate-y-0.5`,iconPressing:`scale-95`,iconReady:`scale-105`,icon:`size-8 transition-transform duration-200 group-hover:scale-105`,content:`relative z-10 flex min-w-0 grow flex-col justify-center pr-10 sm:pr-24`,name:`truncate text-lg font-semibold leading-tight tracking-tight transition-colors duration-200`,subtitle:`mt-1 truncate text-sm leading-snug text-slate-400 transition-colors duration-200 group-hover:text-slate-300`,badges:`absolute right-4 top-4 z-20 flex items-center gap-1.5`,badge:`hidden h-7 min-w-7 items-center justify-center rounded-lg border px-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 sm:inline-flex`,favoriteBadge:`jk-favorite-badge hidden h-7 min-w-7 items-center justify-center gap-1 rounded-lg border px-2 text-xs font-semibold sm:inline-flex`,favoriteMobile:`jk-favorite-badge inline-flex size-7 items-center justify-center rounded-lg border sm:hidden`},Ea=class extends M{createRenderRoot(){return this}static properties={name:{type:String},subtitle:{type:String},icon:{type:String},badgeText:{type:String},isFavorite:{type:Boolean},favoriteSlot:{type:String},isPressing:{type:Boolean,state:!0},isReady:{type:Boolean,state:!0}};constructor(){super(),this.name=``,this.subtitle=``,this.icon=``,this.badgeText=``,this.isFavorite=!1,this.favoriteSlot=``,this.isPressing=!1,this.isReady=!1,this._pressTimer=null,this._pointerId=null,this._pointerStart=null,this._longPressTriggered=!1,this._suppressClick=!1}disconnectedCallback(){super.disconnectedCallback(),this._cancelLongPress()}_handlePointerDown(e){e.button===0&&this._pointerId===null&&(this._pointerId=e.pointerId,this._pointerStart={x:e.clientX,y:e.clientY},this._longPressTriggered=!1,this._suppressClick=!1,this.isPressing=!0,this.isReady=!1,e.currentTarget.setPointerCapture?.(e.pointerId),clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._longPressTriggered=!0,this.isPressing=!1,this.isReady=!0,`vibrate`in navigator&&navigator.vibrate(20)},wa))}_handlePointerMove(e){e.pointerId!==this._pointerId||!this._pointerStart||this.isReady||Math.hypot(e.clientX-this._pointerStart.x,e.clientY-this._pointerStart.y)>Ta&&this._cancelLongPress(e)}_handlePointerUp(e){if(e.pointerId!==this._pointerId)return;clearTimeout(this._pressTimer);let t=this._longPressTriggered;if(this._releasePointer(e),this._resetPressState(),t){e.preventDefault(),e.stopPropagation(),this._suppressClick=!0,this.dispatchEvent(new CustomEvent(`card-long-press`,{detail:{service:this._getServiceData()},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent(`card-click`,{detail:{service:this._getServiceData(),shiftKey:e.shiftKey},bubbles:!0,composed:!0}))}_handlePointerCancel(e){this._releasePointer(e),this._cancelLongPress()}_handleLostPointerCapture(){this._pointerId!==null&&this._cancelLongPress()}_handleNativeClick(e){this._suppressClick&&=(e.preventDefault(),e.stopPropagation(),!1)}_releasePointer(e){try{e.currentTarget.hasPointerCapture?.(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)}catch{}}_cancelLongPress(e){clearTimeout(this._pressTimer),e&&this._releasePointer(e),this._resetPressState()}_resetPressState(){this.isPressing=!1,this.isReady=!1,this._pointerId=null,this._pointerStart=null,this._longPressTriggered=!1}_getServiceData(){return{name:this.name,url:this.subtitle,icon:this.icon,key:this.badgeText}}_getCardClasses(){return this.isReady?K.cardReady:this.isPressing?K.cardPressing:`${K.cardDefault} ${this.isFavorite?`jk-favorite-card`:``}`}_getIconClasses(){return this.isReady?K.iconReady:this.isPressing?K.iconPressing:K.iconDefault}_getBadgeClasses(){return this.isReady?`border-indigo-400/60 bg-indigo-500/30 text-slate-50 shadow-md shadow-indigo-500/20`:this.isFavorite?`border-indigo-500 bg-indigo-500/20 text-indigo-200 shadow-lg shadow-indigo-500/20`:`border-slate-600 bg-slate-900/80 text-slate-300`}_renderAccent(){let e=this.isPressing?`animate-[jk-long-press-fill_600ms_linear_forwards]`:this.isReady?`h-full animate-[jk-long-press-pulse_900ms_ease-in-out_infinite]`:`h-0`;return k`
      <div
        class="pointer-events-none absolute bottom-4 left-0 top-4 z-20 w-1 overflow-hidden rounded-r-full bg-slate-700/50 transition-opacity duration-200 ${this.isPressing||this.isReady?`opacity-100`:`opacity-0 group-hover:opacity-100`}"
      >
        <div
          class="absolute inset-x-0 bottom-0 origin-bottom rounded-r-full bg-indigo-400 jk-long-press-fill ${e}"
        ></div>
      </div>
    `}render(){let e=this.subtitle&&(this.subtitle.includes(`.`)||this.subtitle.includes(`/`))?this.subtitle.replace(/^https?:\/\/(www\.)?/,``):this.subtitle||``;return k`
      <div
        role="button"
        tabindex="0"
        aria-label=${this.name}
        @pointerdown=${this._handlePointerDown}
        @pointermove=${this._handlePointerMove}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerCancel}
        @lostpointercapture=${this._handleLostPointerCapture}
        @click=${this._handleNativeClick}
        class="${K.card} ${this._getCardClasses()}"
      >
        ${this._renderAccent()}

        <div class="${K.glow} ${this.isPressing||this.isReady?`opacity-100`:``}"></div>

        <div class="${K.iconContainer} ${this._getIconClasses()}">
          <jk-icon .icon=${this.icon} class=${K.icon}></jk-icon>
        </div>

        <div class=${K.content}>
          <span
            class="${K.name} ${this.isReady?`text-indigo-200`:`text-slate-50 group-hover:text-indigo-200`}"
          >
            ${this.name}
          </span>

          <span class=${K.subtitle}> ${e} </span>
        </div>

        ${this.favoriteSlot||this.badgeText?k`
                <div class=${K.badges}>
                  ${this.favoriteSlot?k`
                          <span class=${K.favoriteMobile} aria-label="Favorit" title="Favorit">
                            <jk-icon icon="ui:star" class="size-4"></jk-icon>
                          </span>
                          <kbd
                            class=${K.favoriteBadge}
                            title="Favoriten-Shortcut ${this.favoriteSlot}"
                          >
                            <jk-icon icon="ui:star" class="size-3.5"></jk-icon>
                            ${this.favoriteSlot}
                          </kbd>
                        `:``}
                  ${this.badgeText?k`
                          <kbd class="${K.badge} ${this._getBadgeClasses()}">
                            ${this.badgeText.toUpperCase()}
                          </kbd>
                        `:``}
                </div>
              `:``}

        <style>
          @keyframes jk-long-press-fill {
            from {
              height: 0%;
              opacity: 0.65;
            }
            to {
              height: 100%;
              opacity: 1;
            }
          }

          @keyframes jk-long-press-pulse {
            0%,
            100% {
              opacity: 0.75;
              box-shadow: 0 0 8px var(--jk-accent-glow-soft);
            }
            50% {
              opacity: 1;
              box-shadow:
                0 0 14px var(--jk-accent-glow),
                0 0 24px var(--jk-accent-glow-soft);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-[jk-long-press-fill_600ms_linear_forwards],
            .animate-[jk-long-press-pulse_900ms_ease-in-out_infinite] {
              animation: none;
            }
          }
        </style>
      </div>
    `}};customElements.define(`jk-service-card`,Ea);var q={overlay:`fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 backdrop-blur-md md:items-center md:p-4`,modal:`w-full rounded-t-3xl border border-slate-700/70 bg-gradient-to-br from-slate-800 to-slate-900 p-5 font-mono jk-shadow-elevated md:max-w-2xl md:rounded-2xl`,header:`mb-5 flex items-center justify-between`,headerLeft:`flex items-center gap-3`,iconBadge:`flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/20`,icon:`size-5 text-indigo-300`,title:`text-base font-semibold text-slate-50`,content:`max-h-[68vh] space-y-5 overflow-y-auto pr-1`,sectionTitle:`mb-2 px-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500`,row:`flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-800/60`,rowDesc:`text-sm text-slate-300`,keysContainer:`flex shrink-0 items-center gap-1`,contextBadge:`mr-1 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-bold text-indigo-300`,kbd:`inline-flex h-7 min-w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 px-2 text-xs font-bold text-indigo-300 jk-shadow-inset`,actionBadge:`inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/70 px-2 py-1 text-xs font-semibold text-indigo-200`,actionIcon:`size-3.5`,footer:`mt-5 text-center text-[11px] text-slate-500`},Da=class extends M{createRenderRoot(){return this}static properties={show:{type:Boolean},isGridView:{type:Boolean},t:{type:Function}};constructor(){super(),this.show=!1,this.isGridView=!1,this.t=e=>e}_handleClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}_renderKeyboardRows(){let e=[{keys:[`Space`],desc:this.t(`hkSearch`)},{keys:[`:`],desc:this.t(`hkSearchEngines`)},{keys:[`?`],desc:this.t(`helpOpen`)},{keys:[`Ctrl`,`,`],desc:this.t(`editConfig`)},{keys:[`Ctrl`,`1/2/3`],desc:this.t(`hkSwitchTabs`)},{keys:[`#`],desc:this.t(`hkToggleView`)}];return this.isGridView||(e.push({keys:[`0-9`],desc:this.t(`hkFavs`)}),e.push({keys:[`Shift`,`0-9`],desc:this.t(`hkContinue`)})),e.push({keys:[`-`],desc:this.t(`hkToggleLast`)}),e.push({keys:[`Shift`,`-`],desc:this.t(`hkOpenContinue`)}),e.push({keys:[`A-Z`],desc:this.t(`hkCat`)},{keys:[`A-Z`],desc:this.t(`hkService`),context:!0},{keys:[`↑`,`↓`],desc:this.t(`hkNavigate`)},{keys:[`Enter`],desc:this.t(`hkOpenSelection`)},{keys:[`Shift`,`Enter`],desc:this.t(`hkOpenSelectionSameTab`)},{keys:[`ESC`],desc:this.t(`hkReset`)}),e.map(e=>k`
        <div class="${q.row}">
          <span class="${q.rowDesc}">${e.desc}</span>
          <div class="${q.keysContainer}">
            ${e.context?k`<span class="${q.contextBadge}">${this.t(`contextInCat`)}</span>`:``}
            ${e.keys.map(e=>k`<kbd class="${q.kbd}">${e}</kbd>`)}
          </div>
        </div>
      `)}_renderActionRow(e,t,n){return k`
      <div class="${q.row}">
        <span class="${q.rowDesc}">${n}</span>
        <span class="${q.actionBadge}"
          ><jk-icon icon="ui:${e}" class="${q.actionIcon}"></jk-icon>${t}</span
        >
      </div>
    `}render(){return this.show?k`
      <div @click=${this._handleClose} class="${q.overlay}">
        <div
          @click=${e=>e.stopPropagation()}
          class="${q.modal}"
          role="dialog"
          aria-modal="true"
        >
          <div class="${q.header}">
            <div class="${q.headerLeft}">
              <div class="${q.iconBadge}">
                <jk-icon icon="ui:circle-help" class="${q.icon}"></jk-icon>
              </div>
              <h3 class="${q.title}">
                <span class="hidden md:inline">${this.t(`helpTitleDesktop`)}</span>
                <span class="md:hidden">${this.t(`helpTitleMobile`)}</span>
              </h3>
            </div>
            <jk-icon-button
              icon="ui:x"
              label="${this.t(`close`)}"
              @click=${this._handleClose}
            ></jk-icon-button>
          </div>

          <div class="${q.content}">
            <div class="hidden md:block">
              <div class="${q.sectionTitle}">${this.t(`helpKeyboardSection`)}</div>
              ${this._renderKeyboardRows()}
            </div>

            <div>
              <div class="${q.sectionTitle}">
                <span class="hidden md:inline">${this.t(`helpMouseTouchSection`)}</span>
                <span class="md:hidden">${this.t(`helpTouchSection`)}</span>
              </div>
              ${this._renderActionRow(`mouse-pointer-click`,this.t(`helpClick`),this.t(`helpClickAction`))}
              <div class="hidden md:block">
                ${this._renderActionRow(`mouse-pointer-click`,this.t(`helpShiftClick`),this.t(`helpShiftClickAction`))}
                ${this._renderActionRow(`hand`,this.t(`helpLongPress`),this.t(`helpLongPressFavorite`))}
                ${this._renderActionRow(`hand`,this.t(`helpLongPress`),this.t(`helpLongPressRemoveFavorite`))}
              </div>
              <div class="md:hidden">
                ${this._renderActionRow(`hand`,this.t(`helpHold`),this.t(`helpTouchAddFavorite`))}
                ${this._renderActionRow(`hand`,this.t(`helpHold`),this.t(`helpTouchRemoveFavorite`))}
                ${this._renderActionRow(`search`,this.t(`helpSearchButton`),this.t(`helpTouchSearch`))}
                ${this._renderActionRow(`layout-grid`,this.t(`helpViewButton`),this.t(`helpTouchView`))}
                ${this._renderActionRow(`ellipsis`,this.t(`helpMoreButton`),this.t(`helpTouchMore`))}
              </div>
            </div>
          </div>

          <div class="${q.footer}">
            <span class="hidden md:inline">${this.t(`helpExitDesktop`)}</span>
            <span class="md:hidden">${this.t(`helpExitMobile`)}</span>
          </div>
        </div>
      </div>
    `:k``}};customElements.define(`jk-help-modal`,Da);var J={section:`rounded-2xl border border-slate-700/50 bg-slate-900/20 p-4 sm:p-5 transition-colors duration-300`,header:`flex items-center gap-3 mb-4`,iconContainer:`flex items-center justify-center size-8 rounded-xl bg-slate-800/70 ring-1 ring-slate-700/70`,icon:`size-4 text-indigo-300`,titleWrapper:`flex items-center gap-2 min-w-0`,title:`text-sm font-semibold tracking-wide text-slate-200 truncate`,badge:`hidden sm:inline-flex items-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-indigo-300`,grid:`grid grid-cols-1 gap-3 sm:gap-4 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]`},Oa=class extends M{createRenderRoot(){return this}static properties={title:{type:String},icon:{type:String},badgeText:{type:String},services:{type:Array}};_handleCardClick(e,t){this.dispatchEvent(new CustomEvent(`service-click`,{detail:{service:t,shiftKey:e.detail.shiftKey},bubbles:!0,composed:!0}))}_handleCardLongPress(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`card-long-press`,{detail:{service:t},bubbles:!0,composed:!0}))}render(){return k`
      <section class="${J.section}">
        <div class="${J.header}">
          <div class="${J.iconContainer}">
            <jk-icon .icon=${this.icon||`ui:folder`} class="${J.icon}"></jk-icon>
          </div>

          <div class="${J.titleWrapper}">
            <h2 class="${J.title}">${this.title}</h2>
            ${this.badgeText?k` <kbd class="${J.badge}"> ${this.badgeText.toUpperCase()} </kbd> `:``}
          </div>
        </div>

        <div class="${J.grid}">
          ${(this.services??[]).map(e=>k`
              <jk-service-card
                .name=${e.name}
                .subtitle=${e.url}
                .icon=${e.icon}
                .badgeText=${e.key}
                .favoriteSlot=${e.favSlot||``}
                .isFavorite=${!!e.favSlot}
                @card-click=${t=>this._handleCardClick(t,e)}
                @card-long-press=${t=>this._handleCardLongPress(t,e)}
              ></jk-service-card>
            `)}
        </div>
      </section>
    `}};customElements.define(`jk-service-group`,Oa);var Y={section:`mb-8 rounded-2xl border border-amber-500/20 bg-slate-900/20 p-4 sm:p-5`,continueSection:`mb-8 rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4 sm:p-5`,header:`flex items-center gap-3 mb-4`,iconBadge:`flex items-center justify-center size-8 rounded-xl bg-amber-500/10 ring-1 ring-amber-500/20`,continueIconBadge:`flex items-center justify-center size-8 rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/20`,icon:`size-4 text-amber-400`,continueIcon:`size-4 text-indigo-300`,title:`text-sm font-semibold tracking-wide text-slate-200`,resetButton:`ml-auto`,grid:`grid grid-cols-1 gap-3 sm:gap-4 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]`},ka=class extends M{createRenderRoot(){return this}static properties={favorites:{type:Array},continueServices:{type:Array},t:{type:Function}};constructor(){super(),this.favorites=[],this.continueServices=[],this.t=e=>e}renderFavorites(){return this.favorites.length?k`
      <section class=${Y.section}>
        <div class=${Y.header}>
          <div class=${Y.iconBadge}>
            <jk-icon icon="ui:star" class=${Y.icon}></jk-icon>
          </div>
          <h2 class=${Y.title}>${this.t(`favorites`)}</h2>
          <jk-icon-button
            icon="ui:trash-2"
            variant="text"
            .text=${this.t(`resetFavs`)}
            class=${Y.resetButton}
            @click=${()=>this.dispatchEvent(new CustomEvent(`clear-favorites`,{bubbles:!0,composed:!0}))}
          ></jk-icon-button>
        </div>
        <div class=${Y.grid}>
          ${this.favorites.map(e=>k`
              <jk-service-card
                .name=${e.name}
                .subtitle=${e.url}
                .icon=${e.icon}
                .favoriteSlot=${e.favSlot}
                .isFavorite=${!0}
                @card-click=${t=>this.dispatchEvent(new CustomEvent(`service-click`,{detail:{service:e,shiftKey:t.detail.shiftKey},bubbles:!0,composed:!0}))}
                @card-long-press=${()=>this.dispatchEvent(new CustomEvent(`delete-favorite-slot`,{detail:{slot:e.favSlot},bubbles:!0,composed:!0}))}
              ></jk-service-card>
            `)}
        </div>
      </section>
    `:k``}renderContinue(){return this.continueServices.length?k`
      <section class=${Y.continueSection}>
        <div class=${Y.header}>
          <div class=${Y.continueIconBadge}>
            <jk-icon icon="ui:history" class=${Y.continueIcon}></jk-icon>
          </div>
          <h2 class=${Y.title}>${this.t(`continue`)}</h2>
          <jk-icon-button
            icon="ui:trash-2"
            variant="text"
            .text=${this.t(`resetContinue`)}
            class=${Y.resetButton}
            @click=${()=>this.dispatchEvent(new CustomEvent(`clear-continue`,{bubbles:!0,composed:!0}))}
          ></jk-icon-button>
        </div>
        <div class=${Y.grid}>
          ${this.continueServices.map(e=>k`
              <jk-service-card
                .name=${e.name}
                .subtitle=${e.url}
                .icon=${e.icon}
                .badgeText=${`⇧${e.continueSlot}`}
                @card-click=${t=>this.dispatchEvent(new CustomEvent(`continue-click`,{detail:{service:e,shiftKey:t.detail.shiftKey},bubbles:!0,composed:!0}))}
                @card-long-press=${()=>this.dispatchEvent(new CustomEvent(`delete-continue-entry`,{detail:{service:e},bubbles:!0,composed:!0}))}
              ></jk-service-card>
            `)}
        </div>
      </section>
    `:k``}render(){return k`${this.renderFavorites()}${this.renderContinue()}`}};customElements.define(`jk-favorites-view`,ka);var Aa={emptyState:`flex flex-col items-center justify-center py-16 text-slate-500`,emptyIcon:`size-10 mb-3 opacity-40`,emptyText:`text-sm`,singleCategoryWrapper:`animate-fadeIn transition-all duration-300`,fullDashboardWrapper:`space-y-5 sm:space-y-6 animate-fadeIn`},ja=class extends M{createRenderRoot(){return this}static properties={categories:{type:Array},activeCategoryKey:{type:String},renderIcon:{type:Function},t:{type:Function}};render(){if(!this.categories||this.categories.length===0)return k`
        <div class="${Aa.emptyState}">
          <jk-icon icon="ui:folder-open" class="${Aa.emptyIcon}"></jk-icon>
          <span class="${Aa.emptyText}">
            ${this.t?this.t(`noServices`):`No services`}
          </span>
        </div>
      `;if(this.activeCategoryKey){let e=this.categories.find(e=>e.categoryKey===this.activeCategoryKey);return e?k`
        <div class="${Aa.singleCategoryWrapper}">
          <jk-service-group
            .title=${e.category}
            .icon=${e.icon}
            .badgeText=${e.categoryKey}
            .services=${e.services}
          ></jk-service-group>
        </div>
      `:k``}return k`
      <div class="${Aa.fullDashboardWrapper}">
        ${this.categories.map(e=>k`
            <jk-service-group
              .title=${e.category}
              .icon=${e.icon}
              .badgeText=${e.categoryKey}
              .services=${e.services}
            ></jk-service-group>
          `)}
      </div>
    `}};customElements.define(`jk-grid-view`,ja);var Ma=class extends M{createRenderRoot(){return this}static properties={message:{type:String},type:{type:String},duration:{type:Number},show:{type:Boolean,reflect:!0}};constructor(){super(),this.message=``,this.type=`success`,this.duration=3500,this.show=!1,this._timer=null}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer)}updated(e){e.has(`show`)&&this.show&&(clearTimeout(this._timer),this._timer=setTimeout(()=>{this.show=!1,this.dispatchEvent(new CustomEvent(`toast-closed`,{bubbles:!0,composed:!0}))},this.duration))}render(){let e={success:{icon:`ui:circle-check`,accent:`jk-status-success-accent`,border:`jk-status-success-border`,iconColor:`jk-status-success`},error:{icon:`ui:triangle-alert`,accent:`jk-status-danger-accent`,border:`jk-status-danger-border`,iconColor:`jk-status-danger`},warning:{icon:`ui:triangle-alert`,accent:`jk-status-warning-accent`,border:`jk-status-warning-border`,iconColor:`jk-status-warning`}}[this.type]??{icon:`ui:info`,accent:`jk-status-info-accent`,border:`jk-status-info-border`,iconColor:`jk-status-info`};return k`
      <div
        class="
          fixed
          bottom-6
          left-4
          right-4

          sm:left-1/2
          sm:right-auto
          sm:-translate-x-1/2
          sm:w-auto
          sm:max-w-lg

          z-[9999]

          transition-all
          duration-300
          ease-out

          ${this.show?`opacity-100 translate-y-0 scale-100 pointer-events-auto`:`opacity-0 translate-y-4 scale-95 pointer-events-none`}
        "
      >
        <div
          class="
            flex
            overflow-hidden

            rounded-2xl

            bg-slate-900/95
            backdrop-blur-md

            border
            ${e.border}

            shadow-2xl
            jk-shadow-card
          "
        >
          <div class="w-1 shrink-0 ${e.accent}"></div>

          <div
            class="
              flex
              items-center
              gap-3

              px-5
              py-3

              min-w-0
            "
          >
            <jk-icon icon="${e.icon}" class="w-5 h-5 shrink-0 ${e.iconColor}"></jk-icon>

            <span
              class="
                text-sm
                text-slate-100
                leading-5
                break-words
              "
            >
              ${this.message}
            </span>
          </div>
        </div>
      </div>
    `}};customElements.define(`jk-toast`,Ma);var X={badgeBase:`fixed bottom-6 right-6 z-50 hidden sm:flex min-h-12 items-center gap-2 rounded-xl border bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-sm transition-all duration-200 animate-fadeIn pointer-events-none select-none`,badgeDefault:`border-slate-600/80 text-slate-100 shadow-slate-950/50`,badgeValid:`jk-status-success-surface shadow-lg`,badgeInvalid:`jk-status-danger-surface shadow-lg`,key:`inline-flex min-w-9 items-center justify-center rounded-md border border-slate-600 bg-slate-800 px-2 py-1 font-mono text-base font-bold tracking-wider text-current shadow-inner`,separator:`text-sm font-bold text-slate-500`,icon:`size-4 shrink-0`,pendingDot:`mx-1 size-2 shrink-0 rounded-full bg-slate-400 animate-pulse`},Na=class extends M{createRenderRoot(){return this}static properties={input:{type:String},isValid:{type:Boolean},isInvalid:{type:Boolean},hidden:{type:Boolean}};constructor(){super(),this.input=``,this.isValid=!1,this.isInvalid=!1,this.hidden=!1}getInputParts(){return this.input.split(/\s*→\s*/).map(e=>e.trim()).filter(Boolean)}renderStatus(){return this.isValid?k`<jk-icon icon="ui:check" class="${X.icon} jk-status-success"></jk-icon>`:this.isInvalid?k`<jk-icon icon="ui:x" class="${X.icon} jk-status-danger"></jk-icon>`:k`<span class="${X.pendingDot}" aria-hidden="true"></span>`}render(){if(!this.input||this.hidden)return k``;let e=this.isInvalid?X.badgeInvalid:this.isValid?X.badgeValid:X.badgeDefault,t=this.getInputParts();return k`
      <div class="${X.badgeBase} ${e}" role="status" aria-live="polite">
        ${t.map((e,t)=>k`
            ${t>0?k`<span class="${X.separator}" aria-hidden="true">→</span>`:``}
            <kbd class="${X.key}">${e}</kbd>
          `)}
        ${this.renderStatus()}
      </div>
    `}};customElements.define(`jk-keystroke-badge`,Na);var Pa=1200,Z={container:`fixed bottom-6 left-1/2 z-50 hidden min-w-72 max-w-sm -translate-x-1/2 items-center gap-3 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-4 py-3 shadow-xl shadow-emerald-950/40 backdrop-blur-sm sm:flex pointer-events-none select-none animate-fadeIn`,iconWrap:`flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-emerald-300`,icon:`size-6`,content:`min-w-0 grow`,name:`truncate text-base font-semibold text-white`,meta:`mt-0.5 flex min-w-0 items-center gap-2 text-xs text-slate-400`,category:`truncate`,pendingDot:`size-2 shrink-0 rounded-full bg-emerald-400 animate-pulse`,cancelHint:`ml-auto shrink-0 rounded border border-slate-600 bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-400`},Fa=class extends M{createRenderRoot(){return this}static properties={feedback:{type:Object}};constructor(){super(),this.feedback=null,this.hideTimer=null,this.resolvePending=null}disconnectedCallback(){super.disconnectedCallback(),this.finish(!1)}show(e){return e?.service?.name?(this.finish(!1,!1),this.feedback=e,this.emitVisibilityChange(!0),new Promise(e=>{this.resolvePending=e,this.hideTimer=setTimeout(()=>{this.finish(!0)},Pa)})):Promise.resolve(!1)}cancel(){this.finish(!1)}confirm(){return this.resolvePending?(this.finish(!0),!0):!1}finish(e,t=!0){clearTimeout(this.hideTimer),this.hideTimer=null;let n=this.resolvePending;this.resolvePending=null,t&&this.feedback&&(this.feedback=null,this.emitVisibilityChange(!1)),n?.(e)}emitVisibilityChange(e){this.dispatchEvent(new CustomEvent(`feedback-visibility-change`,{detail:{visible:e},bubbles:!0,composed:!0}))}render(){let{service:e}=this.feedback??{};return e?.name?k`
      <div class="${Z.container}" role="status" aria-live="polite">
        <div class="${Z.iconWrap}">
          <jk-icon
            icon=${e.icon||`ui:external-link`}
            alt=${e.name}
            class="${Z.icon}"
          ></jk-icon>
        </div>

        <div class="${Z.content}">
          <div class="${Z.name}">${e.name}</div>
          <div class="${Z.meta}">
            <span class="${Z.pendingDot}" aria-hidden="true"></span>
            ${e.category?k`<span class="${Z.category}">${e.category}</span>`:``}
            <kbd class="${Z.cancelHint}">Esc</kbd>
          </div>
        </div>
      </div>
    `:k``}};customElements.define(`jk-action-feedback`,Fa);var Q={overlay:`fixed inset-0 z-50 flex items-end bg-slate-950/70 backdrop-blur-sm md:hidden`,sheet:`w-full max-h-[82vh] overflow-y-auto rounded-t-3xl border border-slate-700/70 bg-gradient-to-br from-slate-800 to-slate-900 p-5 jk-shadow-elevated`,header:`mb-4 flex items-center justify-between`,title:`text-base font-semibold text-slate-50`,list:`space-y-2`,action:`flex w-full items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-800/50 px-4 py-3 text-left transition active:scale-[0.99]`,actionIcon:`flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20`,actionText:`min-w-0 grow`,actionTitle:`block text-sm font-semibold text-slate-100`,actionDesc:`block truncate text-xs text-slate-400`,chevron:`size-4 text-slate-500`,groupTitle:`mb-2 mt-5 px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500`,themeGrid:`grid grid-cols-2 gap-2`,themeButton:`relative rounded-2xl border p-3 text-left transition active:scale-[0.98]`,preview:`mb-2 flex h-12 items-center gap-2 rounded-xl border p-2`,previewDot:`size-5 rounded-lg`,previewLine:`h-2 grow rounded-full`,themeName:`text-xs font-semibold text-slate-100`,selected:`absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-indigo-500 text-white`},Ia=class extends M{createRenderRoot(){return this}static properties={show:{type:Boolean},mode:{type:String},theme:{type:String},t:{type:Function}};constructor(){super(),this.show=!1,this.mode=`menu`,this.theme=`midnight`,this.t=e=>e}_emit(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}_renderTheme(e){let t=e.id===this.theme;return k`
      <button
        class="${Q.themeButton} ${t?`border-indigo-500/60 bg-indigo-500/10`:`border-slate-700/60 bg-slate-800/40`}"
        @click=${()=>this._emit(`theme-change`,{theme:e.id})}
      >
        ${t?k`<span class="${Q.selected}"><jk-icon icon="ui:check" class="size-3"></jk-icon></span>`:``}
        <div
          class="${Q.preview}"
          style="background:${e.preview.background};border-color:${e.preview.text}33"
        >
          <span class="${Q.previewDot}" style="background:${e.preview.accent}"></span>
          <span class="${Q.previewLine}" style="background:${e.preview.surface}"></span>
        </div>
        <span class="${Q.themeName}">${this.t(e.nameKey)}</span>
      </button>
    `}render(){if(!this.show)return k``;let e=St(this.theme);return k`
      <div class="${Q.overlay}" @click=${()=>this._emit(`close`)}>
        <section class="${Q.sheet}" @click=${e=>e.stopPropagation()}>
          <div class="${Q.header}">
            <div class="flex items-center gap-2">
              ${this.mode===`themes`?k`
                      <jk-icon-button
                        icon="ui:arrow-left"
                        label="${this.t(`back`)}"
                        @click=${()=>this._emit(`back`)}
                      ></jk-icon-button>
                    `:``}
              <h3 class="${Q.title}">
                ${this.t(this.mode===`themes`?`mobileThemeTitle`:`mobileMenuTitle`)}
              </h3>
            </div>
            <jk-icon-button
              icon="ui:x"
              label="${this.t(`close`)}"
              @click=${()=>this._emit(`close`)}
            ></jk-icon-button>
          </div>

          ${this.mode===`menu`?k`
                  <div class="${Q.list}">
                    <button class="${Q.action}" @click=${()=>this._emit(`open-help`)}>
                      <span class="${Q.actionIcon}"
                        ><jk-icon icon="ui:circle-help" class="size-5"></jk-icon
                      ></span>
                      <span class="${Q.actionText}"
                        ><span class="${Q.actionTitle}">${this.t(`mobileHelpAction`)}</span
                        ><span class="${Q.actionDesc}"
                          >${this.t(`mobileHelpActionDesc`)}</span
                        ></span
                      >
                      <jk-icon icon="ui:chevron-right" class="${Q.chevron}"></jk-icon>
                    </button>
                    <button class="${Q.action}" @click=${()=>this._emit(`open-themes`)}>
                      <span class="${Q.actionIcon}"
                        ><jk-icon icon="ui:palette" class="size-5"></jk-icon
                      ></span>
                      <span class="${Q.actionText}"
                        ><span class="${Q.actionTitle}">${this.t(`mobileThemeAction`)}</span
                        ><span class="${Q.actionDesc}">${this.t(e.nameKey)}</span></span
                      >
                      <jk-icon icon="ui:chevron-right" class="${Q.chevron}"></jk-icon>
                    </button>
                  </div>
                `:k`
                  <div class="${Q.groupTitle}">${this.t(`themeGroupDark`)}</div>
                  <div class="${Q.themeGrid}">
                    ${xt.filter(e=>e.scheme===`dark`).map(e=>this._renderTheme(e))}
                  </div>
                  <div class="${Q.groupTitle}">${this.t(`themeGroupLight`)}</div>
                  <div class="${Q.themeGrid}">
                    ${xt.filter(e=>e.scheme===`light`).map(e=>this._renderTheme(e))}
                  </div>
                `}
        </section>
      </div>
    `}};customElements.define(`jk-mobile-menu`,Ia);var La={mainContent:`container mx-auto px-4 pt-8 pb-6`},$={configCache:`services-cache`,favorites:`dashboard_favs`,continueHistory:`dashboard_continue`,gridView:`dashboard_grid_view`},Ra=class extends M{createRenderRoot(){return this}static properties={categories:{type:Array},searchEngines:{type:Array},showConfigModal:{type:Boolean},activeCategoryKey:{type:String},showContinueView:{type:Boolean},currentInput:{type:String},isInvalidInput:{type:Boolean},isValidInput:{type:Boolean},searchQuery:{type:String},showSearch:{type:Boolean},showHelp:{type:Boolean},showMobileMenu:{type:Boolean},mobileMenuMode:{type:String},isGridView:{type:Boolean},selectedIndex:{type:Number},favorites:{type:Object},continueHistory:{type:Array},lang:{type:String},theme:{type:String},dialogConfig:{type:Object},toastConfig:{type:Object},actionFeedbackVisible:{type:Boolean}};get searchInput(){return this.querySelector(`#searchInput`)}constructor(){super(),this.categories=[],this.searchEngines=[],this.activeCategoryKey=``,this.showContinueView=!1,this.currentInput=``,this.selectedIndex=0,this.showConfigModal=!1,this.showSearch=!1,this.showHelp=!1,this.showMobileMenu=!1,this.mobileMenuMode=`menu`,this.isInvalidInput=!1,this.isValidInput=!1,this.isGridView=Ye($.gridView,!1),this.favorites=Ye($.favorites,{}),this.continueHistory=Ye($.continueHistory,[]),this.lastUsedCycleIndex=0,this.continueLastUsedCycle=!1,this.searchQuery=``,this.lang=Pe(),this.theme=wt(),this.resetTimeout=null,this.actionManager=new Dt,this.favoriteRecording=null,this.dialogConfig={show:!1,type:`info`,title:``,message:``,icon:``,iconColor:``,confirmLabel:``,cancelLabel:``,onConfirm:null},this.toastConfig={show:!1,message:``,type:`success`},this.actionFeedbackVisible=!1,this.handleKeyDown=this.handleKeyDown.bind(this),this.handlePopState=this.handlePopState.bind(this),this.t=this.t.bind(this)}t(e,t){return Ne(this.lang,e,t)}handleKeyDown(e){let t=this.actionManager.activeType===`launch`;if(e.key===`Enter`&&t){e.preventDefault(),this.confirmPendingAction();return}let n=e.key===`-`&&t;this.cancelPendingAction(),n||(this.lastUsedCycleIndex=0),this.continueLastUsedCycle=n;try{vt(e,this)}finally{this.continueLastUsedCycle=!1}}handleThemeChange(e){this.theme=Et(e.detail.theme)}handleMobileThemeChange(e){this.theme=Et(e.detail.theme);let t=St(this.theme);this.showToast(this.t(`themeChanged`,{theme:this.t(t.nameKey)}),`info`)}async saveConfiguration(e){try{let t=new Date().toISOString().replace(/[:.]/g,`-`);if(!(await fetch(`/config/services.backup-${t}.json`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e,null,2)})).ok)throw Error(`Failed to create configuration backup.`);(await fetch(`/config/services.json`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e,null,2)})).ok?(this.categories=e.categories?Be(e.categories):Be(e),e.searchEngines&&(this.searchEngines=e.searchEngines),this.showConfigModal=!1,this.showToast(this.t(`editConfigSaveDone`),`success`)):this.showToast(this.t(`editConfigSaveFailed`),`error`)}catch(e){console.error(`WebDAV Error:`,e),this.showToast(this.t(`editConfigSaveFailed`),`error`)}}async handleSaveConfig(e){let t=e.detail.newConfig??e.detail.config;await this.saveConfiguration(t)}async connectedCallback(){super.connectedCallback(),this.theme=Et(this.theme);try{let e=await fetch(`./config/services.json`);if(!e.ok)throw Error(`Configuration request failed: ${e.status}`);let t=await e.json();Xe($.configCache,t),this.categories=Be(t.categories||t),this.searchEngines=t.searchEngines||[]}catch{let e=Ye($.configCache,null);e&&(this.categories=Be(e.categories||e),this.searchEngines=e.searchEngines||[])}window.addEventListener(`keydown`,this.handleKeyDown),window.addEventListener(`popstate`,this.handlePopState)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this.handleKeyDown),window.removeEventListener(`popstate`,this.handlePopState),clearTimeout(this.resetTimeout),this.cancelPendingAction()}cancelInputResetTimer(){clearTimeout(this.resetTimeout),this.resetTimeout=null}cancelPendingAction(){return this.actionManager.cancel()}confirmPendingAction(){return this.actionManager.activeType===`launch`?this.querySelector(`jk-action-feedback`)?.confirm()??!1:!1}enterUiMode(){this.cancelInputResetTimer(),this.cancelPendingAction(),this.resetKeyboardInput()}resetKeyboardInput(){this.currentInput=``,this.isInvalidInput=!1,this.isValidInput=!1}resetNavigationInput(e=!0){this.cancelInputResetTimer(),this.activeCategoryKey=``,this.showContinueView=!1,this.resetKeyboardInput(),e&&[`category`,`continue`].includes(window.history.state?.view)&&window.history.back()}closeSearch(e=!0){this.showSearch=!1,this.searchQuery=``,this.selectedIndex=0,e&&window.history.state?.view===`search`&&window.history.back()}resetInput(e=!0){let t=window.history.state;this.cancelPendingAction(),this.cancelInputResetTimer(),this.activeCategoryKey=``,this.showContinueView=!1,this.resetKeyboardInput(),this.closeSearch(!1),this.showHelp=!1,e&&[`category`,`continue`,`search`].includes(t?.view)&&window.history.back()}toggleViewMode(){this.isGridView=!this.isGridView,Xe($.gridView,this.isGridView),this.resetInput(!0)}startResetTimer(e=3e3){this.cancelInputResetTimer(),this.resetTimeout=setTimeout(()=>{this.resetTimeout=null,this.resetNavigationInput(!0)},e)}startPendingLaunch(){let e=this.querySelector(`jk-action-feedback`);return this.actionManager.start({type:`launch`,cancel:()=>e?.cancel()})}async trackClick(e,t={}){let{updateContinue:n=!0,shortcutLabel:r=``,openInSameTab:i=!1,keyboardFeedback:a=!this.showSearch}=t;this.cancelInputResetTimer();let o=a?this.startPendingLaunch():null;if(a){r?this.currentInput=r:this.activeCategoryKey&&e.key?this.currentInput=`${this.activeCategoryKey.toUpperCase()} → ${e.key.toUpperCase()}`:(e.key||e.favSlot)&&(this.currentInput=(e.favSlot||e.key).toUpperCase()),this.isValidInput=!0,this.isInvalidInput=!1;let t=await this.showActionFeedback(e);if(!this.actionManager.isActive(o)||(this.actionManager.complete(o),!t))return}if(n&&this.rememberContinueService(e),this.showSearch?this.closeSearch(!0):a&&this.resetNavigationInput(!0),i){window.location.assign(e.url);return}window.open(e.url,`_blank`)}showActionFeedback(e){let t=this.categories.find(t=>t.services?.some(t=>t.name===e.name&&t.url===e.url));return this.querySelector(`jk-action-feedback`)?.show({service:{...e,category:e.category||t?.category||``}})??Promise.resolve(!0)}rememberContinueService(e){!e?.name||!e?.url||(this.continueHistory=[e.name,...this.continueHistory.filter(t=>t!==e.name)].slice(0,10),this.lastUsedCycleIndex=0,Xe($.continueHistory,this.continueHistory))}openContinueView(e=``){if(qe(this.categories,this.continueHistory).length===0){e&&(this.currentInput=e,this.isValidInput=!1,this.isInvalidInput=!0,this.startResetTimer()),this.showToast(this.t(`continueEmpty`),`info`);return}this.cancelPendingAction(),this.cancelInputResetTimer(),this.activeCategoryKey=``,this.showContinueView=!0,this.closeSearch(!1),this.showHelp=!1,this.resetKeyboardInput(),e&&(this.currentInput=e,this.isValidInput=!0),window.history.state?.view!==`continue`&&window.history.pushState({view:`continue`},``),this.startResetTimer()}launchContinueSlot(e){let t=Je(this.categories,this.continueHistory,e);t&&this.trackClick(t,{updateContinue:!1,shortcutLabel:`⇧${e}`})}async toggleLastService(){let e=qe(this.categories,this.continueHistory);e.length&&(this.lastUsedCycleIndex=this.continueLastUsedCycle?(this.lastUsedCycleIndex+1)%e.length:0,this.continueLastUsedCycle=!1,await this.trackClick(e[this.lastUsedCycleIndex],{updateContinue:!1,shortcutLabel:`-`}))}handlePopState(e){if(!e.state?.view){this.resetInput(!1);return}if(e.state.view===`category`){this.activeCategoryKey=e.state.key,this.showContinueView=!1,this.showSearch=!1;return}e.state.view===`continue`&&(this.activeCategoryKey=``,this.showContinueView=!0,this.showSearch=!1)}showToast(e,t=`success`){this.toastConfig={show:!0,message:e,type:t},this.requestUpdate()}openSearch(){this.enterUiMode(),this.showHelp=!1,this.showSearch=!0,this.selectedIndex=0,window.history.state?.view!==`search`&&window.history.pushState({view:`search`},``),setTimeout(()=>this.searchInput?.focus(),100)}openHelp(){this.enterUiMode(),this.showSearch=!1,this.showHelp=!0}openConfig(){this.enterUiMode(),this.showSearch=!1,this.showHelp=!1,this.showConfigModal=!0}openMobileMenu(){this.enterUiMode(),this.mobileMenuMode=`menu`,this.showMobileMenu=!0}closeDialog(){this.dialogConfig={...this.dialogConfig,show:!1}}clearFavorites(){this.dialogConfig={show:!0,title:this.t(`confirmResetTitle`),message:this.t(`confirmReset`),icon:`ui:trash-2`,iconColor:`jk-status-danger`,confirmLabel:this.t(`confirmResetConfirm`),cancelLabel:this.t(`cancel`),onConfirm:()=>{this.favorites={},localStorage.removeItem($.favorites),this.requestUpdate()}}}clearContinue(){this.dialogConfig={show:!0,title:this.t(`confirmContinueResetTitle`),message:this.t(`confirmContinueReset`),icon:`ui:trash-2`,iconColor:`jk-status-danger`,confirmLabel:this.t(`confirmResetConfirm`),cancelLabel:this.t(`cancel`),onConfirm:()=>{this.continueHistory=[],this.lastUsedCycleIndex=0,localStorage.removeItem($.continueHistory),this.resetNavigationInput(!0),this.requestUpdate()}}}removeContinueService(e){if(!e?.name)return;let t=this.continueHistory.filter(t=>t!==e.name);t.length!==this.continueHistory.length&&(this.continueHistory=t,this.lastUsedCycleIndex=0,Xe($.continueHistory,this.continueHistory),this.showToast(`"${e.name}" ${this.t(`continueRemoved`)}`,`success`),!t.length&&this.showContinueView&&this.resetNavigationInput(!0),this.requestUpdate())}handleServiceLongPress(e){let t=Ie.find(t=>this.favorites[t]===e.name);if(t){this.handleDeleteFavoriteSlot(t);return}let n=Ie.find(e=>!this.favorites[e]);if(!n){this.showToast(this.t(`favFull`),`warn`);return}this.favorites={...this.favorites,[n]:e.name},Xe($.favorites,this.favorites),this.resetInput(!0),this.showToast(`"${e.name}" ${this.t(`favSaved`,{slot:n})}`,`success`),this.requestUpdate()}handleCardLongPress(e){let t=e.detail.service;if(!t?.url||t.isCategory){this.showToast(this.t(`cannotFavoriteCategory`),`info`);return}this.handleServiceLongPress(t)}handleDeleteFavoriteSlot(e){let t=this.favorites[e];if(!t)return;this.lastDeletedFavorite={slot:e,name:t};let{[e]:n,...r}=this.favorites;this.favorites=r,Xe($.favorites,this.favorites),this.showToast(`"${t}" ${this.t(`favRemoved`,{slot:e})}`,`success`),this.resetInput(!1),this.requestUpdate()}handleNotification(e){let{type:t,message:n}=e.detail;this.showToast(n,t)}templateConfigModal(){return k`
      <jk-config-modal
        .show=${this.showConfigModal}
        .categories=${this.categories}
        .searchEngines=${this.searchEngines}
        .theme=${this.theme}
        .t=${this.t}
        @notify=${this.handleNotification}
        @theme-change=${this.handleThemeChange}
        @save=${this.handleSaveConfig}
        @close=${()=>this.showConfigModal=!1}
      ></jk-config-modal>
    `}templateMobileMenu(){return k`
      <jk-mobile-menu
        .show=${this.showMobileMenu}
        .mode=${this.mobileMenuMode}
        .theme=${this.theme}
        .t=${this.t}
        @close=${()=>{this.showMobileMenu=!1,this.mobileMenuMode=`menu`}}
        @back=${()=>this.mobileMenuMode=`menu`}
        @open-help=${()=>{this.showMobileMenu=!1,this.mobileMenuMode=`menu`,this.openHelp()}}
        @open-themes=${()=>this.mobileMenuMode=`themes`}
        @theme-change=${this.handleMobileThemeChange}
      ></jk-mobile-menu>
    `}templateDialog(){return this.dialogConfig.show?k`
      <jk-dialog
        .show=${this.dialogConfig.show}
        .type=${this.dialogConfig.type||`info`}
        .title=${this.dialogConfig.title}
        .message=${this.dialogConfig.message}
        .icon=${this.dialogConfig.icon||``}
        .iconColor=${this.dialogConfig.iconColor||``}
        .confirmLabel=${this.dialogConfig.confirmLabel||this.t(`tabEditorOk`)}
        .cancelLabel=${this.dialogConfig.cancelLabel||``}
        @confirm=${()=>{this.dialogConfig.onConfirm&&this.dialogConfig.onConfirm(),this.closeDialog()}}
        @close=${this.closeDialog}
        @cancel=${this.closeDialog}
      ></jk-dialog>
    `:``}templateHelpModal(){return k`
      <jk-help-modal
        .show=${this.showHelp}
        .isGridView=${this.isGridView}
        .t=${this.t}
        @close=${()=>this.showHelp=!1}
      ></jk-help-modal>
    `}templateSearchModal(e){return k`
      <jk-search-modal
        .show=${this.showSearch}
        .searchQuery=${this.searchQuery}
        .searchEngines=${this.searchEngines}
        .filteredServices=${e}
        .selectedIndex=${this.selectedIndex}
        .t=${this.t}
        @close=${()=>this.resetInput(!0)}
        @search-change=${e=>{this.searchQuery=e.detail.value,this.selectedIndex=0}}
        @service-click=${e=>{this.trackClick(e.detail.service,{openInSameTab:e.detail.shiftKey,keyboardFeedback:!1})}}
        @execute-submit=${()=>{this.handleKeyDown({key:`Enter`,preventDefault:()=>{},target:{tagName:`BUTTON`}})}}
      ></jk-search-modal>
    `}templateKeyBadge(){return k`
      <jk-keystroke-badge
        .input=${this.currentInput}
        .isValid=${this.isValidInput}
        .isInvalid=${this.isInvalidInput}
        .hidden=${this.showSearch||this.showHelp}
      ></jk-keystroke-badge>
    `}templateActionFeedback(){return k`
      <jk-action-feedback
        @feedback-visibility-change=${e=>{this.actionFeedbackVisible=e.detail.visible}}
      ></jk-action-feedback>
    `}render(){let e=We(this.categories,this.favorites),t=qe(this.categories,this.continueHistory),n=Ge(this.categories,this.favorites),r=Ue(this.categories,this.searchQuery),i=!this.activeCategoryKey&&!this.showContinueView&&!this.showSearch&&!this.showHelp&&!this.showConfigModal;return k`
      ${this.templateKeyBadge()} ${this.templateActionFeedback()} ${this.templateHelpModal()}
      ${this.templateSearchModal(r)} ${this.templateConfigModal()}
      ${this.templateMobileMenu()} ${this.templateDialog()}

      <jk-toast
        .show=${this.toastConfig.show}
        .message=${this.toastConfig.message}
        .type=${this.toastConfig.type}
        @toast-closed=${()=>{this.toastConfig={...this.toastConfig,show:!1}}}
      ></jk-toast>

      <jk-dashboard-header
        .isGridView=${this.isGridView}
        .lang=${this.lang}
        .t=${this.t}
        @open-help=${()=>{this.openHelp()}}
        @open-search=${this.openSearch}
        @open-config=${()=>{this.openConfig()}}
        @open-mobile-menu=${()=>{this.openMobileMenu()}}
        @toggle-view=${this.toggleViewMode}
      ></jk-dashboard-header>

      <main class="${La.mainContent}">
        ${i&&!this.isGridView?k`
                <jk-favorites-view
                  .favorites=${e}
                  .t=${this.t}
                  @service-click=${e=>{this.trackClick(e.detail.service,{openInSameTab:e.detail.shiftKey,keyboardFeedback:!1})}}
                  @clear-favorites=${this.clearFavorites}
                  @delete-favorite-slot=${e=>{this.handleDeleteFavoriteSlot(e.detail.slot)}}
                ></jk-favorites-view>

                <jk-service-group
                  title="${this.t(`categories`)}"
                  icon="ui:folder"
                  .services=${[...t.length?[{name:this.t(`continue`),url:`${t.length} ${this.t(`serviceCount`)}`,icon:`ui:history`,key:`⇧-`,type:`continue`,isCategory:!0}]:[],...this.categories.map(e=>({name:e.category,url:`${e.services?.length??0} ${this.t(`serviceCount`)}`,icon:e.icon,key:e.categoryKey,type:`category`,isCategory:!0}))]}
                  @service-click=${e=>{let t=e.detail.service;if(t.type===`continue`){this.openContinueView();return}let n=t.key;this.activeCategoryKey=n,this.showContinueView=!1,this.currentInput=n.toUpperCase(),this.startResetTimer(),window.history.pushState({view:`category`,key:n},``)}}
                  @card-long-press=${this.handleCardLongPress}
                ></jk-service-group>
              `:this.showContinueView?k`
                  <jk-favorites-view
                    .favorites=${[]}
                    .continueServices=${t}
                    .t=${this.t}
                    @continue-click=${e=>{this.trackClick(e.detail.service,{updateContinue:!1,openInSameTab:e.detail.shiftKey,keyboardFeedback:!1})}}
                    @clear-continue=${this.clearContinue}
                    @delete-continue-entry=${e=>{this.removeContinueService(e.detail.service)}}
                  ></jk-favorites-view>
                `:k`
                <jk-grid-view
                  .categories=${n}
                  .activeCategoryKey=${this.activeCategoryKey}
                  .t=${this.t}
                  @service-click=${e=>{this.trackClick(e.detail.service,{openInSameTab:e.detail.shiftKey,keyboardFeedback:!1})}}
                  @card-long-press=${e=>{this.handleServiceLongPress(e.detail.service)}}
                ></jk-grid-view>
              `}
      </main>
    `}};customElements.define(`dashboard-app`,Ra);var za=`modulepreload`,Ba=function(e){return`/`+e},Va={},Ha=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ba(t,n),t=s(t),t in Va)return;Va[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:za,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ua=`true`,Wa=`false`,Ga=Ua===`true`,Ka=Wa===`true`;function qa(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,Ga||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await Ha(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/sw.js`,{scope:`/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!Ka)if(Ga)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}c.register({immediate:t}).then(e=>{o?o(`/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}qa({immediate:!0,onNeedRefresh(){location.reload()}});