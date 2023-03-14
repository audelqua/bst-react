import ComposerComponent from 'src/layout/ComposerLayout'
import { BinarySearchTreeProvider } from 'src/context/BinaryTreeContext' 

function App() {
  return (
    <div className="App">
      <BinarySearchTreeProvider>
        <ComposerComponent />
      </BinarySearchTreeProvider>
    </div>
  );
}

export default App;
