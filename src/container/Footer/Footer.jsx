import "./Footer.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Images } from "../../constants";
import { client } from "../../client";
import { useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const whatsAppMsg = `"مرحبًا! أبحث عن مطور ويب ماهر لمساعدتي في إنشاء موقع ويب احترافي وسهل الاستخدام لعملي. أحتاج إلى موقع ويب جذاب بصريًا وسريع الاستجابة ومُحسّن لمحركات البحث. ويجب أن يحتوي أيضًا على ميزات مثل كنماذج الاتصال، وتكامل وسائل التواصل الاجتماعي.`;

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={Images.email} alt="email" />
          <a href="mailto:muhammed.abdalhakeem@gmail.com" className="p-text">
            muhammed.abdalhakeem@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +2 (010) 1177-4840
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.WhatsApp} alt="phone" />
          {/* <a
            href="https://wa.me/01011774840"
            className="p-text"
            rel="noreferrer"
            target="_blank"
          >
            Contact us on WhatsApp
          </a> */}

          <a
            href={`https://api.whatsapp.com/send?phone=201011774840&text=${whatsAppMsg}`}
            target="_blank"
            rel="noreferrer"
          >
            Contact us on WhatsApp
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer app__footer__flex"),
  "contact",
  "app__whitebg"
);
