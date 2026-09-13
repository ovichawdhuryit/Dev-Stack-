# Dev Stack Builder

An interactive builder to compare, select, and customize modern development stacks for developers and teams.

## Technologies Used

* React
* Tailwind CSS
* JavaScript

## Features

* Can add multiple technologies to the stack.
* Fixed navigation bar.
* Toastify notifications for user actions.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like UI components inside JavaScript. It is used to create UI components easily in React.

### 2. What is the difference between props and state?

Data passed from a parent component to a child component is called **props**. **State** is data that is managed inside a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us store and update data inside a React component. I used it in the list section to manage the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code when a component loads or when certain data changes. I used it to load the JSON file when the page first loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. So, every item should have a unique key to help React track changes properly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. I used it to show an empty message when there are no selected items in the list.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**. A child can send data back to the parent by calling a function that the parent passed as a prop.
