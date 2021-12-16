+++
title = 'Getting started'
weight = 1

[extra]
toc = false
+++

Once you've subscribed, Redirectify will start tracking 404 errors, but you
don't need to wait, you can get started right away by uploading a CSV file. The
app accepts CSV files in two formats:

### One column per row

Each line is just a 404 path to be imported into the app's list of 404 paths to
redirect.

### Two columns per row

When the CSV contains two columns, the first is a 404 path as above, and the
second is a target path or URL to redirect to. In this case, the 404 paths are
not imported, and instead, are redirected immediately using the second column.

### Fixing errors within the app

Click on any 404 error in the list to create a redirect.

For each error, you should be given a list of initial suggestions based on
matches between the original path and existing paths in your store. You can
click any of these suggestions (or press **Tab** to cycle through) to replace
the field text. If none of these suggestions are appropriate, you can start
typing and the suggestions will update as you type. For example, if you enter
'socks', then Redirectify will suggest any paths within your store which match
'socks'. You need not be too exact, just type whatever comes to mind, and
Redirectify will do its best to offer up relevant suggestions! In case you're
already aware of the path or URL you wish to redirect to, you can also enter
this in the field manually.

Once you're happy with what you've got, click **Create redirect** (or press
**Enter/Return**). If Shopify rejects the redirect for any reason, Redirectify
will display an error, else it will move on to the next error in the list.
Continue in this way until all your 404 paths are fixed.

It's a good idea to check back every week or so for any new 404 paths. 
