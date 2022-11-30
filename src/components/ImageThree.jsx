import { Parallax } from "react-parallax";
import Space2 from "../assets/img2.jpg";

export const ImageThree = () => (
  <Parallax className="image" bgImage={Space2} strength={800}>
    <div className="content">
      <span className="img-txt">uma viagem ao espaço</span>
    </div>
  </Parallax>
);
