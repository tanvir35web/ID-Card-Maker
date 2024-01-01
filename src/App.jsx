import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <>
      <div className="inputContainer">
        <Input employName="Name" />
        <Input employName="Designation" />
        <Input employName="Email" />
        <Input employName="Phone" />
      </div>
    </>
  );
}

export default App;
