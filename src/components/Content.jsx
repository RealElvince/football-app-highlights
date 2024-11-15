
import axios from "axios";
import { useEffect, useState } from "react";

function Content() {

  const [data,setData] = useState([]);

  // handle image click
  const handleClicked = (item) =>{
     window.open(item.matchviewUrl);
  }

  useEffect(()=>{
    axios.get('https://www.scorebat.com/video-api/v3/feed/?token=MTg2MjM2XzE3MzE2ODUwNjhfZjEwMjYxNTEzOGYxNGRhNzBiNjg4OTljNTc4NjhjOTViMzEwYjJlYw==')
    .then(res=> {
      console.log(res.data)
      setData(
         res.data.response
      )
    })

    .catch(error=> {
      console.error(error)
    })    
  },[])
  return (
    <div className='content-container'>
        {data.map((item) => (
          <div className="item-div" key={item.title} onClick={()=>handleClicked(item)}>
            <div className="item-heading">
              <h4>{item.title}</h4>
            </div>
            <div className="item-league">
              <h4>{item.competition}</h4>
            </div>
            <div className="item-date">
              <h4>{item.date}</h4>
            </div>
            <div className="item-image">
              <img src={item.thumbnail} alt="#"/>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Content;