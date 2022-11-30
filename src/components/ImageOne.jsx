import { Parallax } from "react-parallax";
import Space from "../assets/img1.jpg";

export const ImageOne = () => (
  <Parallax className="image" bgImage={Space} strength={800}>
    <div className="content">
      <span className="img-txt">uma viagem ao espaço</span>
    </div>
  </Parallax>
);
