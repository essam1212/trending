import React from 'react'
import about from '../../img/unnamed.jpg'
export default function About() {
  return (
    <div className=" container">
    <div className="row">
        <div className="col-md-6">
            <img src={about} className="w-100 my-5 py-5" alt=""/>
        </div>
        <div className="col-md-5 offset-1 my-5 py-5">
            <h1 className="fs-1 fw-bold pb-5">you welcome in Noxe:</h1>
            <h2>Millions of movies, series and people are ready to browse. View Now.</h2>
        </div>
    </div>
</div>
  )
}
