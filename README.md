# follow.js
Small library for tracking mouse movments :comet:

[Demo](https://vuksamardzic.github.io/follow.js/)

### Includes

Before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="./lib/follow.min.js"></script>
```

### Usage
```html
<div class="follow-el"></div>
```

```html
<script>
    follow.init({...});
</script>
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
selector | string | '.follow-el' | CSS selector.
areas | number | 4 | Choose how many wedges of a circle you want.
type | string | 'text' | Choose between `'text'` and `'style'`
prop | string | '' | Only required if option `type` is equal`'style'`. Css property written in camel casing. Example: `backgroundColor`, `borderRadius`, `color` ..
feed | array | [ ] | Array of strings(text or css properties). `feed` length must be equal to number of areas.
default | string | '' | Default value on load and when mouse is over element.

### Example
```html
<div class="follow-el"></div>
 
<script>
    //we want 3 wedges and style element's background color depending on what wedge mouse is.
    follow.init({
        areas: 3,
        type: 'style',
        prop: 'backgroundColor',
        feed: ['blue', 'red', 'green'],
        default: 'white'
    });
</script>
```
```html
<div class="follow-el"></div>
 
<script>
    //we want 4 wedges and text inside element to change depending on wedge. Remember we don't need 'prop' since it's not css styling!
      follow.init({
        areas: 4,
        type: 'text',
        feed: ['one', 'two', 'three', 'four'],
        default: 'center'
    });
</script>
```
```html
<div id="idSelector"></div>
 
<script>
    //we want 8 wedges and text which shows where mouse is from element perspective.
      follow.init({
        selector: '#idSelector',
        areas: 8,
        type: 'text',
        feed: ['right', 'top-right', 'top', 'top-left', 'left', 'bottom-left', 'bottom', 'bottom-right'],
        default: 'center'
    });
</script>
```
#### License

Licensed under the MIT license.

Made with :heart: by Vuk Samardžić.