This is a fork of [Next.js Commerce](https://github.com/vercel/commerce) (only using the Shopify part of the framework).

We use [metafields](https://shopify.dev/apps/metafields) for authors but metafields cannot be searched with Shopify's search API, therefore we also embed the metafields in the `descriptionHtml` field so that a description ends up looking like:

```html
<p>This is the main book description visible in the rich text editor.</p>
<script id="descriptionMeta" type="application/yaml">
  - type: multi_line_text_field
    namespace: bearbookshop
    key: authors
    description: The book's author(s)
    value: |-
      Joe Bloggs
      Jane Hill
</script>
```

This means any metafield data will appear in searches.

We need an automated job to ensure this data in the description in case it is accidentally deleted by shop owner.
