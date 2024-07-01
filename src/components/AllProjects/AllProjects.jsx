import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './AllProjects.css'
import { API } from '../data/data';
import Title from '../Title/Title';

const AllProjects = () => {

    const [state, setState] = useState([])

    const handleProjects = async() =>{
        try {
            const responce = await fetch(`${API}/program/getAllPrograms`);
            const data = await responce.json();
            setState(data.programs);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        handleProjects()
    },[])
  return (
    <div className='all-projects'>
        <Navbar /><br />
        <div className="title">
        <h2>All Projects</h2>
        </div>

        <div className="projects">
          {state.map((item)=>{
            return(
              <>
              <div key={item._id} className="project">
                <div className="img-section">
                  {
                    item.image && 
                    <img src={`${API}/program/uploads/${item.image}`} alt="img not found" />
                  }
                </div>
                <div className="detail-section">
                  <h4>{item.projectname}</h4>
                </div>
                <p>{item.description}</p>
              </div>
              </>
            )
          })}
        </div>
    </div>
  )
}

export default AllProjects
