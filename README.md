# RevealTypewriter
Reveal.js Typewriter Plugin

# Custom controls

This plugin provides a wrapper for Typed.js library by Matt Boldt.

[Check out the live demo](https://rajgoel.github.io/reveal.js-demos/customcontrols-demo.html)


## Installation

Copy the files `plugin.js` and `style.css` into the plugin folder of your reveal.js presentation, i.e. ```plugin/typewriter``` and load the plugin as shown below.

```html
<link rel="stylesheet" href="plugin/typewriter/style.css">
<script src="plugin/typewriter/plugin.js"></script>

<script>
    Reveal.initialize({
        // ...
        plugins: [ RevealTypewriter ],
        // ...
    });
</script>
```

You also need to add Typed.js library CDN reference

```javascript
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
```

between ```<head>``` and ```</head>``` of your HTML file.

## Usage

Typed.js requires that items to be typed out are wrapped in the ```<p></p>``` tags.

The ```<p></p>``` element within ```<div id="typewriter-text">``` identifies where items to be typed out are stored.

The ```<span id="typed"></span>``` is where the text will be rendered.

The complete use exmple is as follows:

```
<div id="typewriter-text">
  <p>Typed.js is a JavaScript library.</p>
</div>
<span id="typed"></span>
```

## Optional configuration options

Optionally, the plugin can be configured by adding Typed.js config parameters:


```javascript
Reveal.initialize({
	// ...
  typewriter: {
        typeSpeed: 40,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
	},
	// ...

});
```

More information about avilable config options is available in the [Typed.js readme](https://github.com/mattboldt/typed.js/#readme)

Style of the cursor cand be altered file can be modified in the following CSS classes

```javascript
/* Cursor */
.typed-cursor {
}

/* If fade out option is set */
.typed-fade-out {
}
```
