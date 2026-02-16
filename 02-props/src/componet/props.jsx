function App() {
  return <User name="Prince" />;
}

function User(props) {
  return <h1>Hello {props.name}</h1>;
}
export default App;