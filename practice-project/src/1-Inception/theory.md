- What is Emmet ?
    - VS code uses something known as Emmet.
    - It basically generates some code for you.
    - If you write html:5 in a .html file it will create a basic html skeleton for you.
    - Emmet is the essential toolkit for web-developers
    - It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

- Anywhere if you write js use <script> tag.

- How to create element using JS - 
    - document.createElement('h1')

- How to add data using JS - 
    - const h1 = document.createElement('h1');
        h1.innerHTML = 'hello';

- How to inject/append it into root or any div - 
    -  What does appendChild do - whatever we add inside it will go as a child inside the used div or html tag
    - <div id='root'></div>
        document.getElementById('root').appendChild(h1);