import { useEffect, useState } from "react";
import style from "./Landing.module.css";
import { getData } from "../../helpers/getData";
import cel from "../../assets/celu.png"

export const Landing = () => {

  const [image,setImage] = useState()

  useEffect(()=> {
    getData().then(data => setImage(data[11].image))
  },[])

  console.log(image)

  return (
    <div className={style.container}>
      <div className={style.image}/>
      <div className={style.content}>
        <div className={style.subcontent}>
          <h1 className={style.title}>The products you need in your home</h1>
          <h4>Technology, clothing and more</h4>
          <p>Products of all kinds including clothing, appliances, technology, etc. Everything you are looking for.</p>
        </div>
      </div>
      <div className={style.contImage}>
        <img src={cel} className={style.productImage}/>
      </div>
    </div>
  );
};
