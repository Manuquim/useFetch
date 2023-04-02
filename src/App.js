import './App.css';
import { UseFetch } from './useFetch';

function App() {
  
  const url='https://jsonplaceholder.typicode.com/users';
  const { data , loading , error}=UseFetch(url);
  
  const handleOpen=(x)=>{
   alert("Estamos: "+x);
    //return <input type="text" value={x}/>;
  }
  return (
    <div className="App">
      <h1>Fetch like a PRO</h1>
      
      <div className='card'>
        {error && <h2>Error:{error}</h2>}
        {loading && <h2>loading...</h2>}
        <ul className='mapeo'>
          {data?.map((user)=><li key={user.id}><button onClick={()=>handleOpen(user.name)}>{user.name} </button></li>)}  
          {/*data?.map((user)=><li key={user.id}>{user.name}</li>)*/}     
        </ul> 
      </div>
    </div>
  );
}

export default App;
