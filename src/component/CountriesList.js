import {useEffect, useState} from 'react'
import axios from "axios"
import CountriesLoading from './CountriesLoading'

const CountriesList = () => {
  const [fetchData, setfetchData] = useState()
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    // axios.get("url").then((response) => console.log(response)).catch((error) => console.log(error))
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {setisLoading(false);
      setfetchData(response.data)})
    .catch((error) => console.log(error)); 
  }, [])
  // console.log(fetchData)
 
  return(
    <>
      {isLoading?<CountriesLoading/>:<div className="row mx-auto">
          {fetchData.map((item, index) => (
        <div className="col-sm-3 col-md-4 col-xl-3" key={index}>
          <div className="card bg-info mx-auto border-0 my-3" style={{minHeight:'20rem', width:'90%', backgroundColor:'#FFFFFF'}}>
          <img className='card-img-top' src={item.flags.png} alt="" style={{height:'12rem'}} />
          <div className="card-body d-flex align-content-between flex-wrap"> 
            <h4 className='card-title'>{item.name.official}</h4>
           <p className="card-text fs-6 ">{}</p>
          </div>
          </div>
        </div>
        ))}
      </div>}
    </>
  )
}

export default CountriesList;