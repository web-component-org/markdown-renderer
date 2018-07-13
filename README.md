# `<markdown-renderer>`

A web-component to render markdown to html.

## Props
| name | type | default | required |
|---|---|---|---|
| children  | Text Node | `✖` | yes

# Usage

Add `markdown-renderer` to your index.html.

```html
<script src='https://unpkg.com/@web-component/markdown-renderer@0.0.1/dist/markdown-renderer.js'></script>
```

Use `markdown-renderer` in your project:

```html
<markdown-renderer>
  # Wassap Mang?

  _I woke up in a new Bugatti._

  [Here](https://google.com) is a link.
</markdown-renderer>
```