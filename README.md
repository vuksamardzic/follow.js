# follow.js
Small library for tracking mouse movments :comet:

[Demo](https://vuksamardzic.github.io/follow.js/)

Now before we go into usage and examples i wanna explain how it actually works.  
![exampe 1](./demo/example-1.jpg?raw=true "example 1")  
Above we can see default setup with 4 wedges.. that is 4 wedges of element(here represented as gray circle) that follows mouse movement.
![exampe 2](./demo/example-2.jpg?raw=true "example 2")  
If we pick our `type` to be `'style'` with `prop`:`'backgroundColor'` and give `feed` property array of colors it will look like picture above.
In this case it's in bounds of wedge #1 so element's `backgroundColor` will be `red`.
![exampe 3](./demo/example-3.jpg?raw=true "example 3")  
If we move it to wedge #2 element's `backgroundColor` will be `green` and so forth, you get the logic.
![exampe 4](./demo/example-4.jpg?raw=true "example 4")  
Of course if we move mouse over our element it's value will be what we set in our `default` property.
One thing to be aware is when we set how many wedges we want in `areas` property first wedge will always be direct right of element. We can see in next picture how it looks when we have 3 wedges (`areas`:`3`)
![exampe 5](./demo/example-5.jpg?raw=true "example 5")  
![exampe 6](./demo/example-6.jpg?raw=true "example 6")  
That's about it for `type`:`'style'`, now let's explain `type`:`'text'`. In image below we can see how it would look in default state (`default`:`'innerText'`).
![exampe 7](./demo/example-7.jpg?raw=true "example 7")  
Once we start moving mouse text inside elent will be updated depending on wedge as we can see in following three pictures. Feed property in this case is (`feed`:`['1st wedge','2nd wedge','3rd wedge']`)  
![exampe 8](./demo/example-8.jpg?raw=true "example 8")
![exampe 9](./demo/example-9.jpg?raw=true "example 9")
![exampe 10](./demo/example-10.jpg?raw=true "example 10")  
As we mentioned before first wedge is generated on hard right of an element as we can see in image below.
![exampe 11](./demo/example-11.jpg?raw=true "example 11")  
One more image to demonstrate how it looks when we pick choose 8 wedges (`areas`:`8`).  
![exampe 12](./demo/example-12.jpg?raw=true "example 12")


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