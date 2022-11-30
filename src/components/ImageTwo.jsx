import { Parallax } from "react-parallax";
import Nasa from "../assets/nasa.jpg";

export const ImageTwo = () => (
  <Parallax className="image" bgImage={Nasa} strength={800}>
    <div className="content">
      <span className="img-txt">uma viagem ao espaço</span>
    </div>
  </Parallax>
);
