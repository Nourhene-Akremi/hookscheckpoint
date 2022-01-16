import {useState} from 'react'
import './App.css';
import Navbarlist from './component/navbarlist'
import {Switch,Route} from 'react-router-dom'
import Filter from './component/filter'
import Add from './component/add'
import MovieList from './component/movielist'
import {mydata} from './component/mydata'
import Details from './component/details';

function App() {
  //console.log(mydata)
  const [movieList,setmovieList]=useState(mydata)
  //console.log(movieList)

const addHandler=(newMovie)=>{
  setmovieList([...movieList,newMovie])}

  const[search,setsearch]=useState("")
  const [rating,setrating] = useState(1)

  return (
    <div className="App">
      <Navbarlist/>
      <Filter setsearch={setsearch} rating={rating} setrating={setrating}/>
      <Add addHandler={addHandler} />
      <Switch>
        {/* <Route exact path='/' component ={movieList} > */}
        <Route exact path='/'>
        <MovieList movieList={movieList} search={search} rating={rating}/></Route>
        <Route path='/details/:id' render={(props)=><Details{...props} list={mydata}/>}/>
      </Switch>
    </div>
  );
}

export default App;
