const hyperx = require('hyperx');

module.exports = function (h, components) {
    const hx = hyperx(function (tagName, attrs, children) {
        const component = components[tagName];

        const node = component ? component(attrs, children) : h(tagName, attrs, children);

        return node;
    });

    return hx;
};
