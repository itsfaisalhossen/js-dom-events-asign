1.  Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById(id) → Finds one element by its ID. Returns a single element (or null).

getElementsByClassName(className) → Finds all elements with a given class. Returns a live HTMLCollection.

querySelector(cssSelector) → Finds the first element matching a CSS selector. Returns a single element (or null).

querySelectorAll(cssSelector) → Finds all elements matching a CSS selector. Returns a static NodeList.

2. Creating and Inserting a New Element into the DOM

Create a new element using document.createElement().

Add text, attributes, or child elements to it.

Insert it into the DOM using methods like appendChild() or by modifying innerHTML.

3. What is Event Bubbling?

When an event occurs on an element, it doesn’t stop there. It bubbles up through its parent elements and continues until it reaches the document.

4. What is Event Delegation? Why is it useful?

Event Delegation is the practice of attaching a single event listener to a parent element instead of many listeners on child elements.

Works because of event bubbling.

More efficient (fewer listeners).

Useful for handling dynamic elements added later.

5. Difference between preventDefault() and stopPropagation()

preventDefault() → Stops the default browser action (e.g., preventing form submission or link navigation).
