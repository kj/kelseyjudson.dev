The **Filters** page in Redirectify allows you to prevent certain paths from
showing up in your list based on matching patterns. This can be useful when you
know that a path is irrelevant, and doesn't need to be fixed. There are two
types of pattern which you can toggle between; **Wildcard** and the more
advanced **Regexp** (short for 'regular expression').

### Wildcard filters

Wildcard filters are the easiest to use. They make use the '\*' character as a
wildcard matching any string of text. For example, the filter

    /collections/*/products/t-shirt

-would match each of the following paths:

    /collections/men/products/t-shirt
    /collections/women/products/t-shirt
    /collections/kids/products/t-shirt

The filter

    /collections/kids/products/*

-would match any product under the given collection.

Wildcard filters must match the full path from beginning to end, so the filter
`products/*` would not match any path, but the filter `*/products/*` may.

### Regexp filters

Regular expressions are very powerful, but quite a complex topic. Rather than
trying to cover them here, you can learn the basics fairly quickly through [this
guide](https://github.com/ziishaned/learn-regex/blob/master/README.md).

Regexp filters need not match the full path like wildcard type filters, but will
apply when they match any part. The filter

    t-shirt

-would match any of the paths in the first example, but would also match any
other path including the text 't-shirt' at any point.
