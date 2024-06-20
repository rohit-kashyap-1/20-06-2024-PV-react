import logo from './logo.svg';
import './App.css';

import UserList from './components/UserList';
import APIUsers from './components/APIUsers';
import Gallery from './components/Gallery';
import { useEffect, useState } from 'react';
////https://picsum.photos/v2/list
function App() {
  let [images,setImages] = useState([])
  useEffect(function(){
    fetch('https://picsum.photos/v2/list').then(response=>response.json()).then(function(data){
      setImages(data)
    })
  },[])
  return (
    <div className="App">
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-4'>
            {/* <APIUsers /> */}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
         {(images.length!=0)?images.map(function(item){
          return <Gallery key={item.id} src={item.download_url} author={item.author} />

         }):''}
        </div>
      </div>
    </div>
  );
}

export default App;
