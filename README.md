jQuery SVG Fallback
===================

A jQuery plugin for swapping out svg images with png fallback images when SVG is not supported by browser

## Getting Started

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="js/jquery.svg.fallback.js"></script>

<img class="svg" src="/img/1.svg">

<script>
  $(document).ready(function() {
      $('.svg').svg_fallback();
  });
</script>
```

## License
Copyright (c) 2012 Luca Corbo
Licensed under the MIT license.