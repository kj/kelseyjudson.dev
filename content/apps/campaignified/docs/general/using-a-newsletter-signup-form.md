+++
title = 'Using a newsletter signup form'
weight = 2

[extra]
toc = true
+++

Quickstart
----------

To add a newsletter signup form, you will need to add some code to your
storefront. Copy and paste the following code into your theme wherever you would
like the button to appear:

    <button id="campaignified-subscribe">Subscribe to our mailing list</button>

That's all you need for a functional signup form. Note that by default, there is
no acknowledgement of form submission. If you would like Campaignified to handle
this for you, just add the following code to your theme's theme.liquid file:

    <script>  
      window.campaignifiedSettingsThanks = {
        auto: 0
      };
    </script>

Customization
-------------

### Automatically prompt customers on first visit

To make the form open automatically when a customer first visits your store, set
the 'auto' property of 'campaignifiedSettings' to a time value in seconds, e.g.

    <script>
      window.campaignifiedSettings = {
        auto: 5
      };
    </script>

This will cause the form to open 5 seconds after page load. To open the form as
soon as possible, use a value of '0' (zero). If the property is unset, the form
will not appear automatically, and must be opened manually. Use caution when
enabling this feature, as it can be very irritating for potential customers and
may even turn them away from your store. Once a customer has seen the form once,
they will no longer be presented with it on future visits, and will need to open
it manually.

### Providing acknowledgement

To enable acknowledgement following form submission, set the 'auto' property on
'campaignifiedSettingsThanks'. This behaves the same way as above, and takes a
delay in seconds, or '0' for no delay.

### Translate form text

To translate the form's default text, or simply alter the wording, you may set
any of the following properties (the defaults are provided):

    <script>
      window.campaignifiedSettings = {
        t: {
          heading: "Subscribe to our mailing list",
          placeholder: "Please enter your email address",
          accept: "Subscribe",
          reject: "No thanks"
        }
      };

      window.campaignifiedSettingsThanks = {
        t: {
          heading: "Thanks for subscribing!",
          dismiss: "Dismiss"
        }
      };
    </script>

### How can I change the appearance of my form?

The form leaves styling up to your Shopify store's theme for the most part. If
you need to alter the appearance of your form, just target the following
elements in your CSS (if you aren't comfortable with CSS, you'll need to get
help from your designer). As the included CSS is fairly unopinionated, it should
be easy to override.

    #campaignified-modal h1
    #campaignified-modal input
    #campaignified-modal button
    #campaignified-modal button[type="button"]

-and so on.

Shopify newsletter forms (alternative method)
---------------------------------------------

Shopify used to have documentation for a standard newsletter signup form. This
form would create a customer record with the tags 'newsletter' and 'prospect'.
This style of form is compatible with Campaignified which is triggered by the
creation or modification of a customer account. If you don't wish to use the
popup form provided above, you can use this form anywhere in your theme as an
alternative. As Shopify no longer documents this, we've replicated the form code
here (your store theme may already support this, so it's worth checking your
theme settings first):

    {% form 'customer' %}
      <input type="hidden" id="contact_tags" name="contact[tags]" value="newsletter,prospect" />
      <table>
        <tr>
          <td>Enter your email to join our mailing list:</td>
          <td><input type="text" id="contact_email" name="contact[email]" /></td>
        </tr>
        <tr>
          <td colspan="2"><input type="submit" class="submit" value="Sign Up" /></td>
        </tr>
      </table>
    {% endform %}

### Providing acknowledgement

By default the form above will not provide any indication of receipt. This must
to be added to your theme.liquid file:

    {% form 'customer' %}
      {% if form.posted_successfully? %}
        Thanks for subscribing!
      {% else %}
        {{ form.errors | default_errors }}
      {% endif %}
    {% endform %}

Embed forms
-----------

### Can I use the standard Campaign Monitor embed form?

Campaign Monitor embed forms are not fully compatible with Campaignified. While
customers will still be subscribed this way, they will not go through
Campaignified, and will not include any extra custom field data. For free users
of Campaignified, this will make no difference (as they include no extra data)
and Campaignified will continue to subcribe your customers on checkout. For paid
users, we suggest you use the method described above to ensure you get full
custom field data when customers sign up through your form.
