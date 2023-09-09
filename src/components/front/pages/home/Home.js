import React from "react";
import FullCarousel from "../../common/carousels/FullCarousel";
import "./home.css";
import FeaturedCourses from "../../common/featuredCourses/FeaturedCourses";
import AboutUs from "../../common/about/AboutUs";
import Testimonials from "../../common/testimonials/Testimonials";
import Contact from "../../common/contact/Contact";
import Footer from "../../common/footer/footer";




function Home() {
  // Dummy data for featured courses
  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the fundamentals of React.js.",
      image: `./images/home//dummy.png`,
    },
    {
      id: 2,
      title: "JavaScript for Beginners",
      description: "Start your journey with JavaScript.",
      image: `./images/home//dummy.png`,
    },
    {
      id: 3,
      title: "Web Design Fundamentals",
      description: "Master the art of web design.",
      image: `./images/home//dummy.png`,
    },
  ];

  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      text: "This platform changed my life! Thank you!",
      author: "John Doe",
    },
    {
      id: 2,
      text: "I learned so much in such a short time.",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "Highly recommended for anyone eager to learn.",
      author: "Alice Johnson",
    },
  ];

  return (
    <div>
      <div className="home-banner-section">
        <div className="container">
          <FullCarousel />
        </div>
      </div>
      <div className="top-course">
        {/* Pass the featuredCourses data as props */}
        <FeaturedCourses courses={featuredCourses} />
      </div>
      {/* Uncomment the next line to pass the testimonials data */}
      <Testimonials testimonials={testimonials} />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
