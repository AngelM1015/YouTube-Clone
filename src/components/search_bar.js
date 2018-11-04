import React, { Component } from 'react'; //const Component = React.Component;

class SearchBar extends React.Component {
    constructor(props) {
      super(props);

      this.state= { term: ''};
    }
    render() {
    return (
      <div className="search-bar">
      <input
        value={this.state.term}
        onChange={eventObject => this.onInputChange(eventObject.target.value)} />
      </div>
    );
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

    //The event object described the context or information about the event that occurred. It's got a lot of very specific technical props inside of it specific in this case, since we have a input element. We can use this eventObject to get access to the value of the input,(The text thats changed).
   //eventObject.target.value = ES7?
}


// const SearchBar = () => {
//   return <input/>;
// };



export default SearchBar;


/*
handling events in react are handled in two ways,

-first we declare an event handler and the event handler is a function that should be ran whenever the event occurs.

-second we pass the event handler to the element that we want to monitor for events. Pass to Prop
*/

// In this case we want to know whenever the input element inside of out search has its text changed.

// First we're going to find a function on the class that's going to run whenever the event occurs. This will be out event handler.

// So we're going to find another method here and it's going to have the same general syntax as the render method. - onInputChange.


//------------------------------

/* Lets talk STATE
First - Define State as a plain JS Object that is used to record and react to user events each class based on component thats defined has its own state object. Whenever a component state is changed the component immediately re-renders and also forces all of it's children to render as well.

Second initalize State, set the property state to a plain JS object inside of the class's constructor method. When state is used when we initizalizr it by creating a new object and assigning it to this (.) state. Object passed will also contain props that we want to record on the state.
*/


// Component itself has its own constructor function. When we define a method that is alreadt define on the parent class which is component we can call that parent method on the parent class by calling super.

// State is a plain JSO that exists on any component thats a class based component. Each instance of a class based component has its own copy of states. initalize state be defining the constructor method and setting the state as this (.) state. inside of it.

// Outside of the constructor we use state as a method called this.SetState. Deleted Console.log.

//this.setState = hey React the states changing save it..
