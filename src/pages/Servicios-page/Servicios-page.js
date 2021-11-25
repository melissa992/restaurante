import React, { useEffect, useState } from "react";
import { ServiceCard } from "../../components/Service-card-component/Service-card-component";


export const ServiciosPage = () => {

  useEffect(() => {
    fetchData();
  }, []);

  const [info, setInfo] = useState([]);

  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/servicios/ver-servicios';
    await fetch(url)
      .then(res => res.json())
      .then(data => setInfo(data.info))
      .catch( e => console.log(e))
  }

  return (
    <div className="container mt-5" >
      <h1 className="display-1 mb-5 fw-bold color-title">
        Servicios
      </h1>

      <div class="row">
        <div class="col-md-6">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
          Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
          Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?</p>

        </div>

        <div class="col-md-6">
          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?</p>
        </div>
      </div>

      <div class="row" id="LISTA_SERVICIOS">
        
        {
          info?.map( (value, index) => {
            return <ServiceCard key={index} info={value} />
          })
        }
      </div>  
    </div>
  )
}