import React,{useEffect} from 'react';
import "./FooterStyles.css";
import { FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectScrollVisibleFooter, setScrollVisibleFooter } from "../redux/slice/scrollSlice";
import { Element } from "react-scroll";

const Footer = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectScrollVisibleFooter);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    dispatch(setScrollVisibleFooter(scrollPosition > 850));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return (
    <Element name="footer">
      <div className={`footer ${isVisible ? "visible" : ""}`}>
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>HIG 304 Ratan Lal Nagar</p>
                <p>Kanpur</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                7437843674
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                gurisingh89@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About Me</h4>
            <p>
              I'm Gursimran Singh. I am a Frontend Developer with the
              intermediate knowledge of Html, CSS , JavaScript and ReactJs and
              basic knowledge of Express.js and MongoDB.
            </p>
            <div className="social">
              <Link>
                <FaTwitter
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
              <Link>
                <FaGithub
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
              <Link>
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Footer