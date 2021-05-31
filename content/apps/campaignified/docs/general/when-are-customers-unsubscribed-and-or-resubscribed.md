+++
title = 'When are customers unsubscribed and/or resubscribed?'
weight = 6

[extra]
toc = false
+++

Customers will never be deleted nor unsubscribed by the app. Previously the app
would delete customers if they indicated during checkout that they did not wish
to receive marketing material. However, this is no longer the case, as users
have pointed out that this was confusing to customers, who fairly assumed that
if they had checked the box once, then they would not need to check it again on
future checkouts. Now, the app will simply ignore these orders, and not delete
or unsubscribe a customer under any circumstance. Therefore unsubscriptions must
be handled either through the newsletter itself, or manually.

Campaignified will resubscribe unsubscribed customers whenever a sync occurs
where `accepts_marketing` is true. This should not result in any unexpected
emails where a customer has unsubscribed manually (through a link in the email)
as syncs only occur after orders or account changes, in which case
`accepts_marketing` will generally be explicitly set by the customer.

Customers are not resubscribed during the initial (existing customers) sync when
first selecting a list, as this is not initiated by the customers themselves and
we would like to avoid any unpleasant surprises.
