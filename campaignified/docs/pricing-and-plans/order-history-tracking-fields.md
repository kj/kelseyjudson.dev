In late 2015, we added a new plan which introduced extra fields that used data
derived from a customer's full order history. The plan has since been retired
and we have made all the new fields available under the cheaper Premium plan!

The extra fields available are as follows:

### Last 20 Discount Codes Used

This includes a comma separated list of the most recent discount codes used.
This is capped at 20, although may be truncated before 20 if the codes are quite
long.

### Last 20 Products Ordered

This takes the form of a list of product IDs separated by commas. We have had to
cap this at 20 IDs due to Campaign Monitor's 250 character custom fields. See
the related articles below.

### Favourite Product

The product most frequently ordered by the customer.

### Orders Tracked Count

The number of orders tracked in this customer's order history in Campaignified,
as opposed to 'Orders Count' which is the total number of orders a customer has
made according to Shopify. Most other history tracking fields such as 'Average
Quantity' are based on this field's value. If there is a discrepancy between
these two values, this is due to the fact that Campaignified does not
distinguish between cancelled or unfulfilled orders, while Shopify's value does.
This may be subject to change in future.

This field is mainly included for informational purposes and has limited value
for segments.

### Average Spent

Unlike the other averaged fields, this is calculated from Shopify's supplied
data for 'Orders Count' and 'Total Spent', rather than Campaignified's tracked
history. See 'Orders Tracked Count' above for more information on what this
means.

### Total Discounted, Average Discounted

The total and average discounts applied to orders across the tracked history.
This may be useful to find frequent customers who have never had a discount.

### Total Quantity, Average Quantity

The total and average quantity of items per order across the tracked history.
This may be useful for distinguishing customers who order in bulk versus
customers who only order one or two of an item.

### Most Spent, Least Spent

The most spent and least spent on a single order.

### Most Discounted, Least Discounted

The most discounted and the least discounted on a single order.
