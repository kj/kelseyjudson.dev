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
  /collections/**collection-handle**
* When a product is deleted or unpublished, create paths for
  /products/**product-handle** and
  /collections/**all-collection-handles**/products/**product-handle**
* When a page is deleted, create a path for /pages/**page-handle**
* When a blog is deleted, create paths for /blogs/**blog-handle** and
  /blogs/**blog-handle**/**blog-post-handle**
* When a blog post is deleted, create a path for
  /blogs/**blog-handle**/**blog-post-handle**
* When a product handle is changed, create paths for
  /collections/**all-collection-handles**/products/**product-handle**

For all other cases, importing a path into Redirectify is unnecessary as Shopify
itself automatically creates a redirect. For example, when a collection is
deleted, all product URLs within the collection will redirect to
/products/**product-handle**.
