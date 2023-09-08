// create your App component here
import React,{ useState, useEffect} from 'react';

function App() {
    const [dogImage,setDogImage] = useState(null)
    const [fetchStatus,setFetchStatus] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((fetchData) => {
            setDogImage(fetchData.message)
            setFetchStatus(true)
        })
        .catch((error) => {console.error("Fetch unsuccessful",error)})
    },[])

    return (
        <div>
          {fetchStatus ? (<img src={dogImage} alt="A Random Dog"></img>) : (<p>Loading...</p>)}  
        </div>
    );
}

export default App;