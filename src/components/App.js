
import React from 'react';
import './App.css';
import headerImage from 'C:/DbFirstCrud/elearning-landing-page/src/meet.jpg'; 
import spang from 'C:/DbFirstCrud/elearning-landing-page/src/spang.png'; 
import reactnode from 'C:/DbFirstCrud/elearning-landing-page/src/reactnode.png'; 
import flutter from 'C:/DbFirstCrud/elearning-landing-page/src/flutter.png'; 
import bi from 'C:/DbFirstCrud/elearning-landing-page/src/bi.png'; 
import ai from 'C:/DbFirstCrud/elearning-landing-page/src/ai.png'; 
import devops from 'C:/DbFirstCrud/elearning-landing-page/src/devops.png'; 
import tithead from 'C:/DbFirstCrud/elearning-landing-page/src/tithead.png'; 

//import AdminSidebar from './AdminSidebar';
//import AdminDashboard from './AdminDashboard';  <section className="admin-section">
   //   <AdminSidebar />
   //   <AdminDashboard />
 //   </section>
const App = () => {
  return (
    <div className="app">
      <header>
        <img src={tithead} alt='tithead'/>
      </header>
 
     
      <section className="image-section">
        <div className="image-overlay">
          <div className="text-container">
            <p> <b>Improve your skills on your own <br></br>
To prepare for a better future</b></p>
            <button>REGISTER NOW</button>
          </div>
        </div>
        <img src={headerImage} alt="Header" />
      </section>

      
      <section className="courses-section">
        <div className="courses-header">
          <h1>Discover our Courses</h1>
          <button className="get-started-btn">View More</button>
        </div>
       
      </section>
      <section className="photos-section">
        <div className="photo-row">
          <div className="photo">
            <img src={spang} alt="spang" />
            <p><b>Spring Boot/Angular</b> <br></br><span> 350DT/Month</span></p>
          </div>
          <div className="photo">
            <img src={reactnode} alt="reactnode" />
            <p><b>Node JS/React </b><br></br> <span>350DT/Month</span></p>
          </div>
          <div className="photo">
            <img src={flutter} alt="flutter" />
            <p><b>Flutter/FireBase</b> <br></br><span> 350DT/Month</span></p>
          </div>
        </div>
        <div className="photo-row">
          <div className="photo">
            <img src={bi} alt="bi" />
            <p><b>Business Intelligence </b><br></br><span> 350DT/Month</span></p>
          </div>
          <div className="photo">
            <img src={ai} alt="ai" />
            <p><b>Artificial Intelligence </b><br></br><span> 350DT/Month</span></p>
          </div>
          <div className="photo">
            <img src={devops} alt="devops" />
            <p><b>Devops</b> <br></br><span> 350DT/Month</span></p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='JiaraMartins' />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='hello@reallygreatsite.com' />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder='write your message here'></textarea>
          </div>
          <button type="submit">Send the Message</button>
        </div>
      </section>
     
    </div>
  );
};

export default App;
