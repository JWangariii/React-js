function Greeter(props) {
  return <h1>hello {props.name}</h1>;
}

// And invoking the <Greeter/> component…

const App = () => {
  return (
    <div>
      <Greeter name="world" /> {/* 💥 "world" is the prop value*/}
      <Greeter name="I am the King" />{" "}
      {/* 💥 "I am the King" is the prop value*/}
    </div>
  );
};

export default App;

// STYLING
const style = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
};

const MyComponent = () => <div style={style}>Hello, World!</div>;

// OR
const MyComponent = () => (
  <div style={{ backgroundColor: "blue", color: "white" }}>Hello, World!</div>
);

// DEFAULT VERSION
// Simple React Component

function ReactHeader(props) {
  // default value of version is 18

  const { version = "18" } = props;

  return <h1>React {version} Documentation</h1>;
}

//Or;

// default value of version is 18

function ReactHeader({ version = "18" }) {
  return <h1>React {version} Documentation</h1>;
}

// PROPTYPES VALIDATORS
Component.propTypes = {
  anyProp: PropTypes.any,

  booleanProp: PropTypes.bool,

  numberProp: PropTypes.number,

  stringProp: PropTypes.string,

  functionProp: PropTypes.func,
};

// MULTIPLE TYPES
Component.propTypes = {
  enumProp: PropTypes.oneOf([true, false, 0, "Unknown"]),

  unionProp: PropTypes.oneOfType([
    PropType.bool,

    PropType.number,

    PropType.string,

    PropType.instanceOf(Person),
  ]),
};

// REQUIRED
const SimpleComponent = ({ requiredProps }) => {
  return (
    <>
      {requiredProps ? (
        <h1>We need this {requiredProps} !</h1>
      ) : (
        <h1>Ooops ! we need that props</h1>
      )}
    </>
  );
};

// EVENTS/FUNCTIONS
const ActionLink = () => {
  const handleClick = (e) => {
    e.preventDefault();

    console.log("The link was clicked.");
  };

  return (
    <a href="/" onClick={handleClick}>
      Click me
    </a>
  );
};
