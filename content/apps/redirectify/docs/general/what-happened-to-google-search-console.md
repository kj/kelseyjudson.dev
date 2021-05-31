+++
title = 'What happened to Google Search Console?'
weight = 6

[extra]
toc = false
+++

Redirectify originally pulled crawl errors from Google Search Console
automatically to populate its list of 404 paths. Unfortunately, in April 2019,
Google pulled support for accessing this data and we had to rethink the app.
Since then, we've replaced Google Search Console with live tracking on your
storefront to pick up errors as customers encounter them, and a CSV upload
feature. As Google Search Console is still a useful source of errors, we've made
the CSV upload feature compatible with Google Search Console data exports.

### Import data from Google Search Console

1.  In the search console sidebar, click
    [Coverage](https://search.google.com/search-console/index)
2.  Make sure the **'Error'** status is selected
3.  Click to expand the error reason, such as **'Submitted URL not found
    (404)'**
4.  Click the **'Export data'** button in the upper-right corner of the
    **'Details'** section
5.  Click **'Download CSV'**
6.  Import the downloaded CSV file into Redirectify as usual
