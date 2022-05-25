import React from "react";
import Fotter from "./Fotter";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";

const Bloog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageTitle title="blog"></PageTitle>
      <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12">
        <div>
          <h1 className="text-2xl text-black">
            How will you improve the performance of a React Application?
          </h1>
          <ul>
            <ol>1. Keeping component state local where necessary.</ol>
            <ol>
              2. Memoizing React components to prevent unnecessary re-renders.
            </ol>
            <ol>3. Code-splitting in React using dynamic import</ol>
            <ol>4. Windowing or list virtualization in React.</ol>
            <ol>5. cLazy loading images in React.</ol>
          </ul>
        </div>
        <div>
          <ul>
            <h2 className="text-2xl text-black">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <ol>1. Local state.</ol>
            <ol>2. Global state.</ol>
            <ol>3. Server state.</ol>
            <ol>4. URL state.</ol>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-black">
            {" "}
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts?
          </h2>
          A Hook is a special function that lets you “hook into” React features.
          For example, useState is a Hook that lets you add React state to
          function components. We’ll learn other Hooks later.Hooks don't work
          inside classes. But you can use them instead of writing classes.
          What's a Hook? Our new example starts by importing the useState ...
        </div>
        <div>
      <h2 className="text-2xl text-black">  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
        <p>const products = [name,service,description]
            first i will declare a function
            then i will select input value its onClick or onChange;
            then i will use includes method like products.includes(onChange or onClick event handler value)
        </p>
        </div>
        <div>
            <h2 className="text-2xl text-black"> What is a unit test? Why should write unit tests?</h2>
        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
        </div>
        <div>
     <h2 className="text-2xl text-black">   How does prototypical inheritance work?</h2>
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
        </div>
       
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Bloog;
