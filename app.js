// SYNTAX

function App() {
  let firstName = "Will";

  let lastName = "Smith";

  return (
    <div>
      <img src="/profile.png" className="my-profile" alt="Will Smith" />

      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
}

// ATTRIBUTES:SRC
<img src={"/profile.png"} alt="profile" />;

{
  /*  or we can also do */
}

<img src="/profile.png" alt="profile" />;

// CONDITIONAL STATEMENTS
// AND $ OR
// Ask the user for a URL

let websiteUrl = prompt("Type in your URL");

location.href = websiteUrl;

// Redirects the user to the websiteUrl

// The problem with this example is that the user can leave the field empty (which means websiteUrl is // empty)

location.href = websiteUrl || "http://google.com";

// Redirect the use to Google if it’s empty

// Now, if the user left the field empty, we will redirect him to Google. Otherwise he will be

// redirected to websiteUrl

// Or we can use the AND operator

websiteUrl && (location.href = websiteUrl);

// If the websiteUrl is not empty, redirect to it. Otherwise

// do nothing

// IF/ELSE
// Ask the user for a URL

let websiteUrl = prompt("Type in your URL");

// Check if http exists in the url, add it otherwise

let protocolUsed = websiteUrl.startsWith("https") ? "https" : "http";

// Another example

protocolUsed === "https"
  ? alert("You are secure")
  : alert("You are not secure");

// LOGICAL EXPRESSIONS
const firstName = prompt("type your first name");

function App() {
  return (
    <div>
      <p> Hello {firstName || "Anonymous"} </p>

      <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>

      {!firstName && (
        <form>
          <p> Type your name here </p>

          <input type="text" />
        </form>
      )}
    </div>
  );
}

// CLASS COMPONENTS
class Greeting extends React.Component {
  render() {
    return <h1>Hi, I’m a smart component!</h1>;
  }
}

// FUNCTIONAL COMPONETS
import React from "react";

const Greeting = () => <h1>Hello World from my first component!</h1>;

export default Greeting;
