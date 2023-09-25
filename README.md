# Accordion

An accessible accordion component built using vanilla JavaScript, HTML and CSS.

## Folder structure

- `assets` - SVGs for the accordion's toggle.
- `src/css` - styling for the `button` and `accordion` components, `reset` styles and any styling associated with `layout` and `text`. These are all imported by `index.css`.
- `src/js` - JavaScript split into components: `button` and `accordion`. Both are imported and initialised in `main.js`.

## Accessibility

- [x] The title of each `accordion header` is contained in an element with role `button`.
- [x]Each `accordion header button` is wrapped in an element with role `heading` that has a value set for aria-level that is appropriate for the information architecture of the page (`h2` in this case).
- [x] If the `accordion content` associated with an `accordion header` is visible, the header button element has `aria-expanded` set to `true`. If the panel is not visible, `aria-expanded` is set to `false`.
- [x] When the accordion content is collapsed the accordion content is `hidden` from the accessibility tree.
- [x] The `accordion header button` element has `aria-controls` set to the ID of the element containing the `accordion content`.

## Design concerns

- Making the entire panel clickable means users are unable to highlight any content text. If there are more interactable elements such as links, these would need to be factored into the accordion component logic to prevent event propagation.
- If I added cursor pointer to the entire panel, it would be difficult to the user to distinguish when they are interacting with the button or closing the panel, especially as there is no hover state designed for the button.
