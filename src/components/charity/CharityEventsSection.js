import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import '../../styles/components/charity/CharityEventsSection.css';
import charityEventImg1 from '../../assets/images/charity/charity-event-img1.jpg';
import charityEventImg2 from '../../assets/images/charity/charity-event-img2.jpg';
import charityEventImg3 from '../../assets/images/charity/charity-event-img3.jpg';

const EventCard = ({ date, month, image, title, time, location }) => (
  <div className="charity-event-card">
    <div className="charity-event-date">
      <span>{date}</span>
      {month}
      <div className="charity-event-date-shape"></div>
    </div>
    <div className="charity-event-image">
      <img src={image} alt={title} />
    </div>
    <div className="charity-event-text">
      <h3><a href="#">{title}</a></h3>
      <div className="charity-event-info">
        <span><Clock size={16} />{time}</span>
        <span><MapPin size={16} />{location}</span>
      </div>
    </div>
  </div>
);

const CharityEventsSection = () => {
  const events = [
    {
      date: '22',
      month: 'Jan',
      image: charityEventImg1,
      title: 'School For African Poor Children',
      time: '4:00pm-6:00pm',
      location: 'New York'
    },
    {
      date: '15',
      month: 'Feb',
      image: charityEventImg2,
      title: 'Clean Water for Rural Areas',
      time: '2:00pm-5:00pm',
      location: 'Los Angeles'
    },
    {
      date: '10',
      month: 'Mar',
      image: charityEventImg3,
      title: 'Food Distribution Drive',
      time: '9:00am-1:00pm',
      location: 'Chicago'
    }
  ];

  return (
    <section className="charity-events-section">
      <div className="charity-container">
        <h2 className="charity-events-subtitle">Let's Help Them Together!</h2>
        <h1 className="charity-events-title">Join Our Upcoming Events</h1>
        <div className="charity-events-grid">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharityEventsSection;