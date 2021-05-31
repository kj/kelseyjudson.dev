+++
title = 'Rules'
weight = 4

[extra]
toc = true
+++

The **Rules** page in Redirectify allows you to create rules for automatic
redirect creation. Each rule consists of a 'pattern' to match imported paths by,
and a 'target path' which will be used to create a redirect for any path that
matches the pattern. Rules are applied to all paths imported into the app
whether manually (uploaded from a CSV file) or via
[live](/apps/redirectify/docs/general/live-tracking) or
[proactive](/apps/redirectify/docs/general/proactive-tracking)
tracking.

With cleverly set up rules for automation, you may very rarely need to enter the
app to deal with errors manually!

Patterns
--------

The first field in a rule is the 'pattern' to match paths by. As with filters,
there are two types of patterns; **Wildcard** and the more advanced **Regexp**
(short for 'regular expression'). Unlike filters, both wildcard and regexp
patterns must match the full path from beginning to end.

### Wildcard patterns

Wildcard patterns are the easiest to use. They make use the '\*' character as a
wildcard matching any string of text. For example, a rule with the pattern

    /blogs/old-name/*

-would match each of the following paths:

    /blogs/old-name/meet-the-team
    /blogs/old-name/our-story
    /blogs/old-name/how-we-support-local-businesses

Rules must match the full path from beginning to end. Therefore, if you want to
match only part of a path you should surround the pattern with '\*' on each
side. The pattern

    *support*

-would match any path containing (anywhere) the word 'support'.

### Regexp patterns

Regular expressions are very powerful, but quite a complex topic. Rather than
trying to cover them here, you can learn the basics fairly quickly through [this
guide](https://github.com/ziishaned/learn-regex/blob/master/README.md).

Target paths
------------

The second field in a rule is the target path to redirect to if a rule pattern
matches. Within the target path, you can back reference parts of the original
pattern. In the case of wildcard patterns, this means any parts matched by a
wildcard character '\*', whereas for regexp patterns, capture groups may be
referenced. Each part is referenced in the order it appears by a backslash
followed by a number. For example, '\\1' references the first instance, while
'\\2' references the second and so on. For consistency with 'replacements'
described below, you may also choose to use the form '{1}' in place of '\\1'. 

For example, given the wildcard pattern

    /blogs/old-name/*

You might want to redirect all articles under /blogs/old-name to
/blogs/new-name. To achieve this, you could use the target path

    /blogs/new-name/\1

Here, '\\1' will be substituted for the article from the old path in any
redirect that is created. 

In case you're using regexp patterns, the equivalent pattern (using a capture
group) would be

    /blogs/old-name/(.*)

The target path can remain the same as for the wildcard example above.

Replacements
------------

To cover certain use cases not possible otherwise, you can specify special
'replacements' in your target path. Replacements are formed by a name surrounded
by curly braces, for example '{search}'.

### The {search} replacement

This replacement takes the handle (the last part of the URL) of a collection,
product, etc., and replaces all '-' with '+'. A '+' is treated as a space
character by the browser. This replacement is intended to be used in a target
path like

    /search?q={search}

Given a path like

    /collections/example/products/example-product

-the resulting redirect

    /search?q=example+product

-will redirect to your store's search page, with the search term 'example
product'.

Examples
--------

Say you wanted to redirect all deleted product paths nested under collections to
the base collection path, you could use a wildcard pattern like

    /collections/*/products/*

-and target

    /collections/\1

In combination with proactive tracking, using this rule will mean you never need
to open the app to manually create redirects after you delete a product.

Things to note
--------------

### In the browser

Rules even apply in the browser. When a visitor stumbles across an undiscovered
404 page, they will be redirected automatically by the browser if there is a
matching rule. Live tracking will then pick up the error and a permanent
redirect will be created based on the rule.

Please note that for this behaviour to function, we need to make all rule
definitions publicly accessible.

### Existing paths

Any existing paths in your list that match at the time you save your rules will
automatically be redirected.

### What if more than one rule matches a path?

If more than one rule matches an imported path, the first matching rule will be
used to create a redirect.

Still need help?
----------------

Just send us a message explaining what you're trying to achieve. We're happy to
help you get set up!
