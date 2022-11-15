import style from "./Landing.module.css";
import { Parallax } from "react-parallax";
import background from "../../assets/background.jpg"

export const Landing = () => {
  return (
    <Parallax bgImage={background} strength={400} className={style.prueba}>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.subcontent}>
              <h1 className={style.title}>
                The products you need in your home
              </h1>
              <h4>Technology, clothing and more</h4>
              <p>
                Products of all kinds including clothing, appliances,
                technology, etc. Everything you are looking for.
              </p>
            </div>
          </div>
        </div>
    </Parallax>
  );
};
