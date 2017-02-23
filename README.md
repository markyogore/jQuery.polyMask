# jQuery.polyMask
This jQuery plugin makes polygon clipping for your HTML elements easy. It handles crossbrowser compatibility. And it is responsive!

# Demo
* [Responsive Image] (http://markyogore.github.io/polyMask.js/demo-1.html)
* [Responsive Div Element] (http://markyogore.github.io/polyMask.js/demo-2.html)
* More demos to come

## How To Use
Using the plain old Cartesian Coordinates System where X and Y form a point and then at least 3 points to form a polygon. Supply your element with coordinates (path) using the `data-mask-path` attribute in X Y, X Y, X Y,.... format. You can use `%` for responsive masking and `px` for absolute masking.

### Add the plugin to the head or your document
```
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="jquery.polymask.js></script>
```

### Initialize polyMask with your element's selector
```
    <script>
        $('.masked').polyMask();
    </script>
```

### Responsive Masking
`<img src="http://lorempixel.com/g/800/800/" class="masked" data-mask-path="50% 0%, 100% 50%, 50% 100%, 0% 50%" />`


### Using Absolute Points
```
    <script>
        $('.masked-absolute').polyMask({
                responsive: false
            });
    </script>
```

`<img src="http://lorempixel.com/g/800/800/" class="masked-absolute" data-mask-path="400px 0px, 800px 400px, 400px 800px, 0px 400px" height="800" width="800"/>`


### Authors and Contributors
This plugin is developed by @markyogore. Any contributors are welcome

### Support or Contact
Having trouble with PolyMask? Check out my [Repo](https://github.com/markyogore/jQuery.polyMask) or send me a tweet [@codermak](https://twitter.com/MakYogore) and I’ll help you sort it out.
