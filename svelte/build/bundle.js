var app=function(){"use strict";function noop(){}function run(t){return t()}function blank_object(){return Object.create(null)}function run_all(t){t.forEach(run)}function is_function(t){return"function"==typeof t}function safe_not_equal(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function append(t,e){t.appendChild(e)}function insert(t,e,n){t.insertBefore(e,n||null)}function detach(t){t.parentNode.removeChild(t)}function destroy_each(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function element(t){return document.createElement(t)}function text(t){return document.createTextNode(t)}function space(){return text(" ")}function listen(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function attr(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function children(t){return Array.from(t.childNodes)}function set_data(t,e){e=""+e,t.data!==e&&(t.data=e)}let current_component;function set_current_component(t){current_component=t}const dirty_components=[],binding_callbacks=[],render_callbacks=[],flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(t){render_callbacks.push(t)}function flush(){const t=new Set;do{for(;dirty_components.length;){const t=dirty_components.shift();set_current_component(t),update(t.$$)}for(;binding_callbacks.length;)binding_callbacks.pop()();for(let e=0;e<render_callbacks.length;e+=1){const n=render_callbacks[e];t.has(n)||(n(),t.add(n))}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1}function update(t){null!==t.fragment&&(t.update(),run_all(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(add_render_callback))}const outroing=new Set;function transition_in(t,e){t&&t.i&&(outroing.delete(t),t.i(e))}function mount_component(t,e,n){const{fragment:c,on_mount:o,on_destroy:r,after_update:a}=t.$$;c&&c.m(e,n),add_render_callback(()=>{const e=o.map(run).filter(is_function);r?r.push(...e):run_all(e),t.$$.on_mount=[]}),a.forEach(add_render_callback)}function destroy_component(t,e){const n=t.$$;null!==n.fragment&&(run_all(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function make_dirty(t,e){-1===t.$$.dirty[0]&&(dirty_components.push(t),schedule_update(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function init(t,e,n,c,o,r,a=[-1]){const l=current_component;set_current_component(t);const u=e.props||{},s=t.$$={fragment:null,ctx:null,props:r,update:noop,not_equal:o,bound:blank_object(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:blank_object(),dirty:a};let i=!1;s.ctx=n?n(t,u,(e,n,c=n)=>(s.ctx&&o(s.ctx[e],s.ctx[e]=c)&&(s.bound[e]&&s.bound[e](c),i&&make_dirty(t,e)),n)):[],s.update(),i=!0,run_all(s.before_update),s.fragment=!!c&&c(s.ctx),e.target&&(e.hydrate?s.fragment&&s.fragment.l(children(e.target)):s.fragment&&s.fragment.c(),e.intro&&transition_in(t.$$.fragment),mount_component(t,e.target,e.anchor),flush()),set_current_component(l)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function get_each_context(t,e,n){const c=t.slice();return c[1]=e[n],c[7]=n,c}function create_each_block(t){let e,n,c,o,r,a,l=t[1]+"";function u(...e){return t[5](t[7],...e)}return{c(){e=element("div"),n=text(l),c=space(),o=element("button"),o.textContent="DEL",r=space(),a=listen(o,"click",u)},m(t,a){insert(t,e,a),append(e,n),append(e,c),append(e,o),append(e,r)},p(e,c){t=e,1&c&&l!==(l=t[1]+"")&&set_data(n,l)},d(t){t&&detach(e),a()}}}function create_fragment(t){let e,n,c,o,r,a,l,u,s,i,d,_,p,f,h=t[0],m=[];for(let e=0;e<h.length;e+=1)m[e]=create_each_block(get_each_context(t,h,e));return{c(){e=element("div");for(let t=0;t<m.length;t+=1)m[t].c();n=space(),c=element("hr"),o=space(),r=element("input"),a=space(),l=element("button"),l.textContent="ADD",u=space(),s=element("hr"),i=space(),d=element("button"),d.textContent="eval next script",_=space(),p=element("pre"),p.textContent=`${next}`,attr(e,"class","todo"),attr(r,"type","text"),attr(p,"class","next"),f=[listen(r,"change",t[2]),listen(l,"click",t[3]),listen(d,"click",handleGo)]},m(t,f){insert(t,e,f);for(let t=0;t<m.length;t+=1)m[t].m(e,null);insert(t,n,f),insert(t,c,f),insert(t,o,f),insert(t,r,f),insert(t,a,f),insert(t,l,f),insert(t,u,f),insert(t,s,f),insert(t,i,f),insert(t,d,f),insert(t,_,f),insert(t,p,f)},p(t,[n]){if(17&n){let c;for(h=t[0],c=0;c<h.length;c+=1){const o=get_each_context(t,h,c);m[c]?m[c].p(o,n):(m[c]=create_each_block(o),m[c].c(),m[c].m(e,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=h.length}},i:noop,o:noop,d(t){t&&detach(e),destroy_each(m,t),t&&detach(n),t&&detach(c),t&&detach(o),t&&detach(r),t&&detach(a),t&&detach(l),t&&detach(u),t&&detach(s),t&&detach(i),t&&detach(d),t&&detach(_),t&&detach(p),run_all(f)}}}let next="_YEAH_";function handleGo(){eval(next)}function instance(t,e,n){let c=[],o="";function r(t){c.splice(t,1),n(0,c)}console.log(next);return[c,o,function(t){n(1,o=t.target.value)},function(){n(0,c=[...c,o])},r,(t,e)=>r(t)]}class Todo extends SvelteComponent{constructor(t){super(),init(this,t,instance,create_fragment,safe_not_equal,{})}}var todo=new Todo({target:document.querySelector(".app")});return todo}();
//# sourceMappingURL=bundle.js.map
