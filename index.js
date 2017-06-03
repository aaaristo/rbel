const hyperx = require('hyperx');

module.exports = function (h, components) {
    const eh = function (tagName, attrs, children) {
        const component = components[tagName];

        const node = component ? component(attrs, children) : h(tagName, attrs, children);

        return node;
    };

    const hx = hyperx(eh);

    hx.h = eh;

    return hx;
};
