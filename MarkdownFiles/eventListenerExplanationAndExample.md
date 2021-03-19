# Explain Event Listeners with examples 

Event Listeners are methods or event handlers or callback functions used to listen for an event when such event occurs. 

It is like registering for an event and when that event occurs the browsers knows what function to call or what it should 

e.g maybe display an image, show a new text, submit a form, draw a line, change the color of an icon, change the text of 

a button e.t.c. 

## Definition of an event

What in particular is an event? An event is an object created when something is done on a page in the browser such as 

when the page finishes loading, a mouse is dragged on the page, mouse clicked e.t.c.

An event object contains properties used to determine what type of event was generated such as target property, position 

properties, keyCode property etc.

Many events can happen very close together. When too many events happen for the browser to handle them as they occur, the 

events are stored in an event queue (in the order in which they occurred) so the browser can execute the event handlers 

for each event in turn.

## Examples of events generated

E.g click, mousemove, load, unload, resize, play, pause, drop, dragstart, touchstart, touchend, keypress, mouseout, mouseover

## Code Example

```html

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Query Selector</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script>
        function updateText() {
            const paragraphElement = document.getElementById('headerParagraph');
            paragraphElement.innerHTML = 'This page is actively using DOM manipulation and I am resizing';
        } 
    </script>
</head>
<body>
    <header>
        <p id = "headerParagraph" >
            This page consists about using Query Selectors.
        </p>
    </header>
    <script>
        window.addEventListener("resize", updateText); <!-- eventListener when the page resize is called -->
    </script>
</body>
</html>

```



