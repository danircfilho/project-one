const readData = ( ) => {
  fetch('/api')
  .then(result => {
    console.log ("Backend data", result)
  })
}
function App() {
  return (
    <div>
      {readData()}
      Acesso ao frontend com sucesso
    </div>
  );
}

export default App;
