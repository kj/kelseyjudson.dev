+++
title = 'Proactive tracking'
weight = 3

[extra]
toc = false
+++

Proactive tracking is enabled for all shops using Redirectify. Proactive
tracking works by reacting to actions performed by the store owner in the
Shopify admin. When a relevant action occurs, a path or paths are added to
Redirectify proactively – giving you the chance to act before they become an
issue for customers.

The following actions will result in paths being created in Redirectify:

* When a collection is deleted or unpublished, create a path for
  <span class="path">/collections/**collection-handle**</span>
* When a product is deleted or unpublished, create paths for
  <span class="path">/products/**product-handle**</span> and
  <span class="path">/collections/**all-collection-handles**/products/**product-handle**</span>
* When a page is deleted, create a path for
  <span class="path">/pages/**page-handle**</span>
* When a blog is deleted, create paths for
  <span class="path">/blogs/**blog-handle**</span> and
  <span class="path">/blogs/**blog-handle**/**blog-post-handle**</span>
* When a blog post is deleted, create a path for
  <span class="path">/blogs/**blog-handle**/**blog-post-handle**</span>
* When a product handle is changed, create paths for
  <span class="path">/collections/**all-collection-handles**/products/**product-handle**</span>

For all other cases, importing a path into Redirectify is unnecessary as Shopify
itself automatically creates a redirect. For example, when a collection is
deleted, all product URLs within the collection will redirect to
<span class="path">/products/**product-handle**</span>.
