import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 text-align: center"  >
          

  <div>
    <h4>About Us</h4>
    <br/>
    <p>
      Welcome to CLICKCART, your ultimate destination for a seamless online shopping experience. 
     
    </p>
    <p>
      Our mission is to make shopping easy, enjoyable, and accessible for everyone. With a user-friendly 
      interface, secure payment options, and prompt delivery services, we strive to ensure that every 
      customer’s journey is smooth and satisfying.
    </p>
    <p>
      At Clickcart, we believe in quality, affordability, and customer satisfaction. 
    </p>
    <p>
      Join our community today and experience shopping like never before. Explore our wide range of products, 
      take advantage of exclusive deals, and enjoy a hassle-free shopping experience, all from the comfort 
      of your home.
    </p>
    <p>
      Thank you for choosing Clickcart. We look forward to serving you!
    </p>
  </div>


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
