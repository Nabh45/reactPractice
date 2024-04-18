
// const h1 = React.createElement('h1', {id: 'headingId', xyz: 'abc'}, 'Hello world from React diff File');
// console.log('inside', h1)
// above one is object - i.e react object

// how to created nested elements now lets check that 
// <div id='parent'><div id='child'><h1></h1></div></div>



// Structure seems like React.createElement(type, attributes, children - pass 1 directly for single children or pass array)
const heading = React.createElement('h1', {}, 'Hello World from React diff File');

const child = React.createElement('div', {id: 'child'}, heading);

const parent = React.createElement('div', {id: 'parent'}, child);


const heading2 = React.createElement('h2', {}, 'Hello World from React diff Files');

const child2 = React.createElement('div', {id: 'childs'}, [heading, heading2]);

const final = React.createElement('div', {id: 'parent'}, [parent, child2]);


console.log('parent',final)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(final)

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(final)