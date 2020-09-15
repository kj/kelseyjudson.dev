Campaignified's order history tracking fields open up a whole range of
possibilities when combined with Campaign Monitor's flexible automation
workflows. One commonly requested feature is the ability to set up automatic
workflows based on products ordered. With the new fields, this is now possible!

To set this up, you'll need to take roughly the following steps (described in
more detail below):

1. Find the ID of the product/s you'd like to base your segment on.
2. Create a new segment for customers who have purchased these product/s.
3. Create a new automation workflow which is triggered at a certain time, such
   as when a customer enters the segment, or after some delay.

Finding your product ID
-----------------------

Campaignified stores products purchased by their ID, so before you start, you'll
need to know the ID of the product/s you wish to base you segment on. To find
this information, browse to a product in your Shopify store admin and look at
your browser's address bar. It should display something like:

    http://www.example.com/admin/products/123456789

Here, '123456789' is your product ID. Repeat this process and take note of all
the product IDs you'd like to use in your segment.

Create a segment
----------------

You filter your subscribers by creating segments. Sign in to Campaign Monitor
(not Campaignified!) and create a new segment for your Shopify list. Your rule
should look something like the following:

    Last 20 Products Ordered -> contains -> 123456789

-replacing '123456789' with your product ID from earlier. If you wish to include
further products in your segment, click the 'OR' button at the right of the form
to add another rule following the same format.

Name the segment something descriptive like 'Customers who have purchased
sunglasses'.

Create an automation workflow
-----------------------------

Still in Campaign Monitor, click the 'Automation' tab in the navigation bar at
the top of the screen and then 'Create a new workflow'. Select 'When someone
enters a segment', name it something like 'A customer purchases sunglasses',
select your list and the segment you previously created. You can then choose to
send an email immediately after someone enters the segment, or after some delay
(e.g. a month after purchase).

Follow the remainder of the process, and that's it!

As you can probably see by now, there's plenty of room to get creative, so if
you have any neat ideas about how to use Campaignified's custom fields, we would
love to hear from you!
