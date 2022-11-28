import React, { useState } from 'react'
import './main.css'
function MAIN() {
  const [seeMore, setSeeMore]= useState(false);
  const seemore = () =>{
      setSeeMore(!seeMore);
  }
  return (
    <div className='main'>
        <h2>Darjeeling</h2>
        <div className='container'>
            <div className='container-left'>
                <img className='banner-img' src='https://media.gettyimages.com/id/467789033/photo/city-above-the-clouds-darjeeling.jpg?s=612x612&w=0&k=20&c=bA_uGRMQPpOn49P4gSz8DjQgIIUotIG38D4ZfaaqvCA=' />
            </div>
            <div className='container-right'>
                <p className='blog'>Darjeeling District is divided into four sub divisions. Namely, Darjeeling Sadar, Kurseong, Mirik and Siliguri. Darjeeling Sadar is the district headquarters. Siliguri Sub Division is the largest of the four sub divisions and Kurseong is the smallest. The district has 9 development blocks out of which 3 are in Sadar sub divison, 1 in Kurseong Sub-Division, 1 in Mirik Sub Division and remaining 4 in Siliguri Sub Division. The sub division wise distribution of blocks is as follows :</p>
               {seeMore?<> <p className='blog'>Darjeeling District is divided into four sub divisions. Namely, Darjeeling Sadar, Kurseong, Mirik and Siliguri. Darjeeling Sadar is the district headquarters. Siliguri Sub Division is the largest of the four sub divisions and Kurseong is the smallest. The district has 9 development blocks out of which 3 are in Sadar sub divison, 1 in Kurseong Sub-Division, 1 in Mirik Sub Division and remaining 4 in Siliguri Sub Division. The sub division wise distribution of blocks is as follows :</p>
                <p className='blog'>Darjeeling District is divided into four sub divisions. Namely, Darjeeling Sadar, Kurseong, Mirik and Siliguri. Darjeeling Sadar is the district headquarters. The district has 9 development blocks out of which 3 are in Sadar.</p></>:null}
                <button onClick={seemore}>{seeMore?'See Less...':'See More...'}</button>
            </div>
      
        </div>
    </div>
  )
}

export default MAIN
