import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>

      <div>
        <FaFacebook />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMedia;
