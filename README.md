Privacy policies
----------------

Each app should have its own privacy policy, as each will collect and handle its
own set of information.

* [Shopify | App privacy policies](https://shopify.dev/concepts/app-store/getting-your-app-approved/data-and-user-privacy/app-privacy-policies)
* [Shopify | App privacy policy template](https://shopify.dev/concepts/app-store/getting-your-app-approved/data-and-user-privacy/privacy-policy-template)

Note that the formatting of the template is a little inconsistent, so pay close
attention while rewriting it.

Render privacy.md files with cmark(1), and manually update the associated HTML
file.

    $ cmark --smart privacy.md | wl-copy
