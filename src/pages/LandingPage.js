import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import Card from './Card';
import styles from './Card.module.css';
import BasicScatter from './BasicScatter';
import SignForm from '../components/SignForm';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <div className="logo"><span className={styles.logoo}>Learning</span> Portal</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Login</a></li>
            {/* <li><Link to="/login">Login</Link></li> */}
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Awesome Website</h1>
          <p>Discover amazing features and services.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      <section className={styles.features} id="features">
        <div className={styles.app}>
      <h1>Features</h1>
      <div className={styles.cardContainer}>
        <Card/>
        <Card/>
        <Card/>
     
      </div>
    </div>
       {/* <BasicScatter/> */}
      </section>
      <section className="about" id="about">
        <h2>About Us</h2>
        <p style={{ columnCount:2,textAlign:'justify' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non hendrerit elit. Duis ut turpis sit amet risus semper ullamcorper. In hac habitasse platea dictumst. Nullam et varius nisl. Etiam faucibus eros eget neque viverra, vel dignissim mauris tincidunt. Nam tristique est sapien, sed egestas enim placerat a. Suspendisse potenti. Nam a risus in urna pulvinar pulvinar vel quis felis. Mauris aliquam sollicitudin lorem nec lobortis.

Donec porta tincidunt elementum. Ut nec neque ut lacus convallis pretium sed id mi. Praesent sed porta ipsum. Morbi hendrerit mauris quis consequat lobortis. Pellentesque malesuada tristique felis, id rhoncus nibh congue in. Donec bibendum sit amet erat eget pretium. Nullam quis vestibulum ipsum. Vivamus posuere nisl sit amet pharetra imperdiet. Aenean ac orci nec est interdum feugiat ut quis massa.

Donec nec risus nec ligula ultricies commodo. Vestibulum vitae hendrerit tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sagittis dictum tincidunt. Donec eu quam sit amet elit ornare facilisis. Ut sed fermentum est. Vivamus ullamcorper nulla euismod purus porttitor, eu placerat ex tincidunt. Donec ligula enim, dignissim ac ultricies id, pretium a ante. Nulla facilisi. Nam egestas tortor a risus porta, in interdum urna vulputate. Nunc aliquam ultricies elit consequat tempor. Fusce venenatis eros at ex interdum vehicula.

Nam congue aliquet hendrerit. Donec at tellus volutpat, mattis massa sollicitudin, efficitur est. Praesent orci tellus, accumsan eu erat ac, bibendum iaculis ipsum. Donec vitae volutpat orci. Cras consectetur nisi eros, sed sollicitudin neque ornare molestie. Nulla vel magna enim. Nam luctus lectus est, pulvinar placerat quam lacinia non. Nulla volutpat magna leo. Pellentesque in porttitor massa. Etiam dapibus purus vel iaculis commodo. Nulla volutpat nulla non hendrerit pretium. Fusce posuere maximus leo, sed mattis nunc porttitor in.

In consequat, nunc et luctus aliquet, ante neque dignissim ex, sed bibendum sapien orci bibendum enim. Cras eget nisi aliquam, tincidunt mauris non, gravida velit. Quisque quis cursus augue, laoreet porttitor magna. Aenean dapibus lacus nec lectus rhoncus vulputate. Aenean tempus, urna quis placerat tincidunt, odio risus lobortis nibh, viverra fermentum odio lectus vel felis. Mauris porttitor elementum nisl. Aliquam tempus, leo eget gravida vehicula, leo enim lacinia lacus, ac pharetra libero turpis in augue. Phasellus consequat accumsan arcu. Integer eu massa a erat bibendum elementum. Aliquam id bibendum arcu. Praesent interdum massa quis blandit ullamcorper. Nam commodo vitae ante non ultrices. Suspendisse in varius mauris, id consectetur massa. Phasellus ac suscipit sem. Sed sit amet dignissim sapien, sed cursus elit.

Vestibulum semper tellus ac nulla lacinia mollis. Phasellus pretium nulla ac eleifend lacinia. Mauris maximus elit eu massa interdum, et vestibulum nisl congue. Quisque sed eleifend ligula. Maecenas mattis nec risus quis euismod. Pellentesque blandit eros condimentum dolor malesuada gravida ut sit amet nisl. Vivamus porta quis sapien id posuere.

Sed quis nibh velit. Quisque mollis vestibulum odio pulvinar convallis. Aliquam non elit non sem porta congue. Donec bibendum lectus vel consequat vestibulum. Aliquam pharetra odio non nunc feugiat aliquam. Praesent tincidunt sed nunc vel iaculis. Cras porta scelerisque arcu, at facilisis magna finibus quis. Pellentesque finibus elit nec tortor posuere aliquam. Suspendisse venenatis nisi eget nisl pharetra tempus. Pellentesque in elit pellentesque, varius tortor ut, hendrerit massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Integer posuere lobortis nulla, non commodo leo porta in. Pellentesque tristique, quam sed laoreet condimentum, purus purus pharetra sem, mollis luctus ligula odio et diam. Fusce non auctor urna. Nulla facilisi. Nulla aliquam nulla dolor, at tincidunt est finibus id. Praesent a leo finibus, imperdiet ligula lobortis, venenatis turpis. Morbi consectetur facilisis erat ut condimentum. Nam eu commodo felis. Sed ac elementum ante. Nunc a convallis massa. Morbi a rutrum urna. Pellentesque ultrices augue purus, in porttitor mauris gravida eget. Donec finibus imperdiet venenatis. Maecenas eu dapibus quam.

Nullam eu est tempor, pellentesque erat in, finibus mauris. Quisque eget est lobortis, dapibus felis sed, placerat lacus. Nunc sodales ac eros sit amet cursus. Morbi bibendum sagittis urna. Etiam a leo ante. Sed in imperdiet elit, in viverra quam. Duis tempor, diam et sagittis bibendum, sem augue tempus risus, fermentum ullamcorper enim nisl at purus. Praesent aliquam sed massa sed efficitur. Phasellus ac urna ac diam tincidunt rutrum. Pellentesque turpis ante, lobortis eget massa in, elementum maximus nibh. Mauris nec lobortis arcu, vel auctor orci.

Maecenas a tellus gravida, vestibulum ante eget, condimentum sem. Vestibulum dapibus luctus nulla sed tempor. Sed varius dolor id laoreet porta. Integer facilisis mi nisi, ut egestas mi bibendum ut. Quisque vitae ex ligula. Etiam malesuada ante eu pharetra sagittis. Nam eget purus leo. Integer semper mauris et euismod scelerisque. Ut et turpis mauris. Ut non dolor nec est ultricies posuere ut sit amet elit. Curabitur blandit justo consectetur est tristique, non lacinia eros consectetur. Maecenas sed neque a leo tincidunt scelerisque quis nec massa. Cras suscipit rhoncus est, eu hendrerit ligula. Sed scelerisque, dolor et scelerisque egestas, mauris felis sagittis quam, ac molestie tortor dolor a nunc. Integer convallis porta odio vitae accumsan.

Etiam ultrices lectus quam, eget imperdiet lacus viverra at. Nullam quis enim vitae libero ornare tempus nec eget neque. Maecenas dui felis, commodo id dictum eu, laoreet at leo. Vestibulum scelerisque urna velit, vel condimentum tellus laoreet in. Phasellus tempus neque in elit rhoncus commodo. Etiam ac lacus convallis tellus rutrum varius. Cras consequat in metus in efficitur. In sapien sem, imperdiet non tortor in, viverra feugiat orci. Phasellus at mi sollicitudin, commodo lectus nec, porttitor orci. Nulla ut dui dui. Quisque sagittis viverra dui in lobortis.</p>
      </section>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <SignForm/>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
