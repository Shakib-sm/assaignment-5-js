a. getElementById
A single element (the first and only one with that ID).
If no element exists with that ID → returns null.

B.getElementsByClassName
An HTMLCollection (array-like, not a real array) of all matching elements.

C.querySelector
The first element that matches the given CSS selector.
D.querySelectorAll

Usage: document.querySelectorAll("CSS_selector")
A static NodeList of all matches.
Unlike getElementsByClassName, it does NOT auto-update if the DOM changes.

2 1. Create the element.
let newDiv = document.createElement("div"); 
B. Insert it into the DOM:
let reference = document.getElementById("myId");
document.body.insertBefore(newDiv, reference);

3.Event Bubbling

Event Bubbling is a way events propagate (travel) through the DOM when something happens
The event is first triggered on the target element (the one you actually interacted with).
Then it “bubbles up” to its parent, then the parent’s parent, and so on, until it reaches the document root.


4.Event Delegation in JavaScript

Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching separate listeners to each child element.

It works because of event bubbling → events triggered on a child bubble up to the parent.

5.event.preventDefault()
Purpose: Stops the default browser action of an event.
It does not stop the event from bubbling up the DOM.

