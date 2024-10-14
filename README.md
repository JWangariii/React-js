## React

React.js is a JavaScript library for building user interfaces.

## Features of React:

JSX: React uses the JSX syntax in writing components, which makes them more independent.

Component: React adopts the component-based application approach which allows us to use the same component repeatedly.

One way data flow: React only allows us to pass data from parent to child, which is very helpful in tracing data when debugging.

Virtual DOM: React uses the Virtual DOM which makes rendering UI super fast.

Simplicity: React is very simple to learn and work with, especially for newcomers.

## The render method:

ReactDOM provides the developers with API containing and following methods and a lot more.
This method can take a maximum of three parameters as described below.

element: This parameter expects a JSX expression or a React Element to be rendered.

container: This parameter expects the container in which the element is in to be rendered.

callback: This is an optional parameter that expects a function that is to be executed once the render is complete.

ReactDOM.render(element, container, callaback)

## JSX

JSX is a syntax extension to JavaScript usually used with React to describe what the UI should look like.

The injection of a component inside an HTML element is called rendering.

In React, we usually have only one root component (called App).

We only need one root component to build a React website.

The root component (App.js) is the entry point of React.

We only need one HTML file called index.html in any single-page application (like React).

JSX is compiled and rendered inside the root element in the index.html.

## when using import

If your image is in the same folder as your current file:

./myImage.png

If your image is in the parent folder:

../myImage.png

If your image is inside a subfolder:

./subfolder/myImage.png

## Practices to avoid with JSX

no adjacent nodes; to fix it use a <div>, empty tag (<></>) or <React.Fragment>.

## Component

a piece of code that can be reused and made to cooperate with other components to create UI

## advantages

reusability
maintainability
privacy
platform independence

## react component

a js class or function that optionally accepts inputs i.e. properties or props and returns a React element that describes how a section of the UI (User Interface) should look like.

## TYPES

class(stateful,container, smart)
functional(stateless, dumb or presentationaL)

## HOC

a function that accepts another as a paremeter

## props

tools used by react to make data flow from parent to child(one way data flow)

React Props are like function arguments in JavaScript and attributes in HTML

Props are arguments that are passed into React components.

Props are used to ensure communication inside the component tree.

Props are immutable as their value cannot be changed by the child component.

Props are only passed from parent to child.
