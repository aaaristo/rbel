# rbel

create your own elements for hyperx tagged templates

# example

```js
const html = require('rbel')(require('hyperscript'), {
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
