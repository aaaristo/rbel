# rbel

create your own elements for hyperx tagged templates

# example

```js
const h = require('hyperscript');
const html = require('rbel')(h, {
    row: (attrs, children) => html`
        <div class="row">
           ${children}
        </div>`,
    column: (attrs, children) => html`
        <div class="col col-md-${attrs.md}">
           ${children}
        </div>`,
});

console.log(html`
<row>
    <column md="12">
        <span>1 ciao!</span>
    </column>
</row>`.outerHTML);
```

Values to use for `h`:

* virtual-dom - `vdom.h`
* react - `React.createElement`
* bel - `require('bel').createElement`
* hyperscript - hyperscript
