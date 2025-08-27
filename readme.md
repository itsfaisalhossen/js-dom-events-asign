### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- Answer ot down below -->

1. ANSWER :----
   getElementById(id)
   What it does: Finds one element with the given id.
   Return type: A single Element object (or null if not found).
   Usage:
   const el = document.getElementById("my-id");

   getElementsByClassName(className)
   What it does: Finds all elements that have the given class.
   Return type: A live HTMLCollection (not an array, but array-like).
   Usage:
   const els = document.getElementsByClassName("my-class");

   querySelector(cssSelector)
   What it does: Finds the first element matching a CSS selector.
   Return type: A single Element object (or null).
   Usage:
   const el = document.querySelector(".my-class");  
    const el2 = document.querySelector("#my-id");

   querySelectorAll(cssSelector)
   What it does: Finds all elements matching a CSS selector.
   Return type: A static NodeList (does not auto-update).
   Usage:
   const els = document.querySelectorAll(".my-class");

2. ANSWER :-----
   Create the element
   Use document.createElement(tagName):
   const newDiv = document.createElement("div");
   Now you have a <div> element in memory (not yet in the page).

   Add content or attributes
   You can fill it with text, attributes, or even child elements:
   newDiv.textContent = "Hello, I am a new div!";
   newDiv.id = "my-new-div";
   newDiv.className = "box";

   const span = document.createElement("span");
   span.textContent = " (inside span)";
   newDiv.appendChild(span);
   const container = document.getElementById("container"); // parent element

   // Append as the last child
   container.appendChild(newDiv);
   You could also inject HTML directly:
   document.getElementById("container").innerHTML += "<div>Hello!</div>";

3. ANSWER :-----
   When an event (like a click) happens on an element, that event doesn’t just stay there.
   It “bubbles up” from the target element through its parents and finally document.
   Think of dropping a stone in water: ripples move outward in the DOM, events move upward.

4. ANSWER :-----
   Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching listeners to multiple child elements.
   Because of event bubbling, when a child element is clicked, the event travels up to the parent, where you can handle it.
   Event delegation uses bubbling: parent listens for events on its children.
   It improves efficiency and supports dynamic elements.

5. ANSWER :-----
   event.preventDefault()
   What it does: Stops the default browser behavior of an element.
   It does NOT stop bubbling.

   event.stopPropagation()
   What it does: Stops the event from bubbling up (or capturing down).
   It does NOT stop the default action.
