// props is a parameter and going to be a JS object. we get props by default to use it.

function Card(props){

    return(
        <div className="cards">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Card

// This card/component is created and shared b/w other components by using props.
// props are used to pass data from parent to child. 
// A parent can send different data, and the same child component can show different cards.
// Card.jsx is child component and App.jsx is a parent component here.


//Exercise: Instead of writing props as parameter, use destructuring.