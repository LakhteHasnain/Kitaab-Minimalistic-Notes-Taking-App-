import React from 'react';
import FeatureCard from '../components/FeatureCard';
import '../styles/features.css';
import laptop from '../images/lap1.png'
import mobo from '../images/mobo.png'
import tab from '../images/tab2.png'
import filesystem from '../images/filesystem.png'
import FM from '../images/network.png'
import sf from '../images/sf.png'
import docu from '../images/docu.png'
import mp from '../images/mp.png'
import vc from '../images/vc.png'

const Features = ({id}) => {
  return (
    <div id={id}>
      <div className="feature-container">
        <h1>Features</h1>
        <div className="f1">
          <FeatureCard
            title="Cross Platform"
            subtitle="Seamlessly access your notes across multiple devices and platforms. Whether you're on your desktop, laptop, tablet, or smartphone, our cross-platform access feature ensures that your notes are always at your fingertips. Enjoy the flexibility to work on your notes wherever and whenever inspiration strikes, without being tied to a specific device or operating system With synchronized updates and automatic cloud storage your notes stay up-to-date and securely backed up across all your devices enabling seamless transitions between different environments and maximizing productivity."
            color="#ffdb77"
            borderz="#fdc834"
          />
          <div className="ims1">
          <img src={laptop} alt='none'/>
          <img src={mobo} alt='none'/>
          <img src={tab} alt='none'/>
          </div>
          </div>
          <div className="f2">
          <div className="ims2">
          <img src={FM} alt='none'/>
          <div className='in-txt'><h2 style={{color:'white'}}>CONNECT
            <br/>
            Through
            <br/>
            Creativity
            </h2></div>
          <img src={filesystem} alt='none'/>
          
          
          
          </div>
          <FeatureCard
            title="Collaborative Sharing"
            subtitle="Share your notes effortlessly with friends and team members. Whether you want to collaborate on a project, share ideas, or provide feedback, our collaborative sharing feature makes it simple and intuitive. With a few clicks, you can share your notes via email, link, or directly within the app, allowing others to view, edit, or comment on your notes in real-time. Enhance your productivity and streamline collaboration with our seamless collaborative sharing capabilities."
            color="#76ef96"
            borderz="#1cde4f"
          />
          </div>
          <div className="f3">
          <FeatureCard
            title="Media Integration"
            subtitle="Bring your notes to life with multimedia integration. Seamlessly incorporate images, videos, and audio recordings into your notes to enrich your content and enhance understanding. Whether you're documenting a visual concept, capturing a memorable moment, or recording a lecture, our media integration feature provides a versatile platform for multimedia expression. With drag-and-drop functionality and seamless embedding options, you can effortlessly integrate multimedia elements into your notes, transforming them into dynamic and engaging multimedia experiences."
            color="#92b9f8"
            borderz="#478bf9"
          />
           <div className="ims3">
          <img src={docu} alt='none'/>
          <img src={mp} alt='none'/>
          <img src={vc} alt='none'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
