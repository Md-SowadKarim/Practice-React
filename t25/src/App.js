
import './App.css';
import Child from './State/Child';

function App() {
  const data="I am from parent "
  let d="sss"
  const handlechild=(childdata)=>{
    d=childdata
  }
  return (
  
   <div>
 <Child  data={data} onchild={handlechild}/>
 <h1>{d}</h1>
   </div>
  );
}

export default App;
