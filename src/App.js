function App() {
  const handleMouseMove = () => {
    console.log("Button was clicked!");
  };

  return (
    <div>
      <button onClick={handleMouseMove}>Add Animal</button>
    </div>
  );
}

export default App;
