# People Service

1) Have a server that has service options to:
* Get a list of names ( GET /people/ )
* Get the data for a person ( GET /people/:name )
* Add a person ( POST /people/ )

2) Have the server also serve up a static HTML page (/index.html)
3) Have the server also serve up a static CSS page (/people.css)
4) Have the server also serve up a static JS page (/people.js)

## The basic list

The page should have
1) an empty un-ordered list
2) a button to refresh the list

The button will, when pressed:
* Make a service call to GET /people/
* replace the contents of the list with the list of names

## Adding people

* Add a form to the page with fields for `name` and `age`
* Have a button to `Add` the person
* The button will only be enabled when both fields have data

When pressed, the Add button will:
* Make a service call to POST the person
* As soon as that request is started, it will clear the name and age input fields
* Once that is done, it will refresh the list

## Handling errors

* Add a message field to your page
* when a user fails to add, the message will say why
* If a call fails because of a network failure, the message will say so
* When any call succeeds, the message will be cleared

## Viewing Details

* Add an empty div to the page
* When a name is clicked, fill the div with their name and age
HINT: add a click handler to the `ul` and use the `.target` property of the event to see which item was clicked

* When the list changes, empty the div

## Deleting Entries

* Add a DELETE /people/:name service call 
* Add an "X" next to each name
HINT: Make sure to keep the name distinct from the X so you can still view details
* When the "X" is clicked, delete the person from the list
* Update the displayed list of names

