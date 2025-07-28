import React, { useEffect, useState } from 'react'

const Body = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Trending');
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);
  const [activeRecentlyViewedCategory, setActiveRecentlyViewedCategory] = useState('All');
  
  // Category content data
  const categoryContent = {
    "Trending": [
      { img: "ai_development.jpg", title: "AI Integration Services", desc: "Custom AI solutions to automate workflows and enhance your business intelligence.", price: "$350", rating: "4.9 (203)" },
      { img: "social_media.jpg", title: "Social Media Management", desc: "Strategic content creation and community management for growing your social presence.", price: "$180", rating: "4.8 (176)" },
      { img: "mobile_app.jpg", title: "Mobile App Development", desc: "Professional iOS and Android app development with user-centered design approach.", price: "$500", rating: "4.9 (124)" },
      { img: "content_writing.jpg", title: "SEO Content Writing", desc: "Engaging, keyword-optimized content that ranks well and converts visitors.", price: "$120", rating: "4.7 (98)" }
    ],
    "Most Hired": [
      { img: "web_development.jpg", title: "Full-Stack Web Development", desc: "End-to-end web application development with modern frameworks and technologies.", price: "$600", rating: "4.9 (358)" },
      { img: "graphic_design.jpg", title: "Brand Identity Design", desc: "Complete branding package including logo, color palette, typography and brand guidelines.", price: "$300", rating: "4.8 (271)" },
      { img: "digital_marketing.jpg", title: "Digital Marketing Strategy", desc: "Comprehensive marketing plan tailored to your business goals and target audience.", price: "$450", rating: "4.7 (189)" },
      { img: "video_editing.jpg", title: "Professional Video Editing", desc: "High-quality video editing services for promotional content and social media.", price: "$250", rating: "4.8 (215)" }
    ],
    "Top Rated": [
      { img: "ui_ux_design.jpg", title: "UI/UX Design Excellence", desc: "User-centered design process with wireframing, prototyping, and usability testing.", price: "$400", rating: "5.0 (132)" },
      { img: "translation.jpg", title: "Professional Translation", desc: "Accurate and culturally-sensitive translation services for multiple languages.", price: "$150", rating: "5.0 (97)" },
      { img: "copywriting.jpg", title: "Conversion Copywriting", desc: "Compelling copy that drives engagement and boosts conversion rates.", price: "$200", rating: "5.0 (118)" },
      { img: "animation.jpg", title: "Motion Graphics & Animation", desc: "Captivating animated videos and motion graphics for your brand.", price: "$350", rating: "5.0 (86)" }
    ],
    "New Services": [
      { img: "ai_chatbot.jpg", title: "AI Chatbot Development", desc: "Custom chatbot solutions powered by AI to enhance customer service.", price: "$400", rating: "4.6 (28)" },
      { img: "vr_development.jpg", title: "VR/AR Experience Design", desc: "Immersive virtual and augmented reality experiences for various applications.", price: "$700", rating: "4.8 (12)" },
      { img: "podcast_production.jpg", title: "Podcast Production", desc: "End-to-end podcast production including recording, editing, and distribution.", price: "$220", rating: "4.7 (19)" },
      { img: "sustainability.jpg", title: "Sustainability Consulting", desc: "Strategic guidance for implementing sustainable business practices.", price: "$500", rating: "4.9 (8)" }
    ]
  };

  // Recently Viewed category content data
  const recentlyViewedContent = {
    "All": [
      { img: "web.jpg", title: "Custom WordPress Development", desc: "Professional WordPress site with custom features and responsive design.", price: "$250", rating: "4.9 (142)" },
      { img: "logo.jpg", title: "Professional Logo Design", desc: "Eye-catching logo design with unlimited revisions and source files included.", price: "$120", rating: "4.8 (89)" },
      { img: "video_editing.jpg", title: "Video Editing & Production", desc: "Professional video editing, color grading, and special effects for your content.", price: "$150", rating: "4.7 (56)" },
      { img: "SEO.jpg", title: "SEO Optimization Package", desc: "Comprehensive SEO audit and optimization to boost your website ranking.", price: "$199", rating: "4.9 (75)" }
    ],
    "Web Development": [
      { img: "web.jpg", title: "Custom WordPress Development", desc: "Professional WordPress site with custom features and responsive design.", price: "$250", rating: "4.9 (142)" },
      { img: "web_development.jpg", title: "Full-Stack Web Development", desc: "End-to-end web application development with modern frameworks and technologies.", price: "$600", rating: "4.9 (358)" },
      { img: "ai_development.jpg", title: "AI Integration Services", desc: "Custom AI solutions to automate workflows and enhance your business intelligence.", price: "$350", rating: "4.9 (203)" },
      { img: "mobile_app.jpg", title: "Mobile App Development", desc: "Professional iOS and Android app development with user-centered design approach.", price: "$500", rating: "4.9 (124)" }
    ],
    "Design": [
      { img: "logo.jpg", title: "Professional Logo Design", desc: "Eye-catching logo design with unlimited revisions and source files included.", price: "$120", rating: "4.8 (89)" },
      { img: "graphic_design.jpg", title: "Brand Identity Design", desc: "Complete branding package including logo, color palette, typography and brand guidelines.", price: "$300", rating: "4.8 (271)" },
      { img: "ui_ux_design.jpg", title: "UI/UX Design Excellence", desc: "User-centered design process with wireframing, prototyping, and usability testing.", price: "$400", rating: "5.0 (132)" },
      { img: "animation.jpg", title: "Motion Graphics & Animation", desc: "Captivating animated videos and motion graphics for your brand.", price: "$350", rating: "5.0 (86)" }
    ],
    "Writing": [
      { img: "content_writing.jpg", title: "SEO Content Writing", desc: "Engaging, keyword-optimized content that ranks well and converts visitors.", price: "$120", rating: "4.7 (98)" },
      { img: "copywriting.jpg", title: "Conversion Copywriting", desc: "Compelling copy that drives engagement and boosts conversion rates.", price: "$200", rating: "5.0 (118)" },
      { img: "translation.jpg", title: "Professional Translation", desc: "Accurate and culturally-sensitive translation services for multiple languages.", price: "$150", rating: "5.0 (97)" },
      { img: "podcast_production.jpg", title: "Podcast Production", desc: "End-to-end podcast production including recording, editing, and distribution.", price: "$220", rating: "4.7 (19)" }
    ],
    "Marketing": [
      { img: "digital_marketing.jpg", title: "Digital Marketing Strategy", desc: "Comprehensive marketing plan tailored to your business goals and target audience.", price: "$450", rating: "4.7 (189)" },
      { img: "social_media.jpg", title: "Social Media Management", desc: "Strategic content creation and community management for growing your social presence.", price: "$180", rating: "4.8 (176)" },
      { img: "SEO.jpg", title: "SEO Optimization Package", desc: "Comprehensive SEO audit and optimization to boost your website ranking.", price: "$199", rating: "4.9 (75)" },
      { img: "email_marketing.jpg", title: "Email Marketing Campaigns", desc: "Strategic email marketing services to boost engagement and conversions.", price: "$150", rating: "4.7 (88)" }
    ],
    "Video & Animation": [
      { img: "video_editing.jpg", title: "Video Editing & Production", desc: "Professional video editing, color grading, and special effects for your content.", price: "$150", rating: "4.7 (56)" },
      { img: "animation.jpg", title: "Motion Graphics & Animation", desc: "Captivating animated videos and motion graphics for your brand.", price: "$350", rating: "5.0 (86)" },
      { img: "vr_development.jpg", title: "VR/AR Experience Design", desc: "Immersive virtual and augmented reality experiences for various applications.", price: "$700", rating: "4.8 (12)" },
      { img: "podcast_production.jpg", title: "Podcast Production", desc: "End-to-end podcast production including recording, editing, and distribution.", price: "$220", rating: "4.7 (19)" }
    ]
  };

  // Additional services data
  const additionalServices = [
    { img: "email_marketing.jpg", title: "Email Marketing Campaigns", desc: "Strategic email marketing services to boost engagement and conversions.", price: "$150", rating: "4.7 (88)" },
    { img: "copywriting.jpg", title: "Conversion Copywriting", desc: "Persuasive copy that drives action and increases your conversion rates.", price: "$200", rating: "4.8 (112)" },
    { img: "data_analytics.jpg", title: "Data Analytics & Insights", desc: "Comprehensive data analysis to uncover valuable business insights.", price: "$280", rating: "4.9 (76)" },
    { img: "ecommerce.jpg", title: "E-commerce Development", desc: "Custom online store development with secure payment integration.", price: "$450", rating: "4.8 (92)" }
  ];
  
  useEffect(() => {
    // Toggle the dropdown menu
    const toggleBtn = document.querySelector('.toggle_btn');
    const dropdownMenu = document.querySelector('.dropdown_menu');

    if (toggleBtn && dropdownMenu) {
      toggleBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('open');
      });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar') && !event.target.closest('.dropdown_menu')) {
        if (dropdownMenu) {
          dropdownMenu.classList.remove('open');
        }
      }
    });

    // Animation for scroll effects
    const handleScroll = function() {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.background = 'rgba(30, 30, 46, 0.97)';
          header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
          header.style.background = 'var(--dark-bg)';
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (toggleBtn) {
        toggleBtn.removeEventListener('click', function() {});
      }
      document.removeEventListener('click', function() {});
    };
  }, []);

  // Function to handle "Explore All" button click
  const handleExploreClick = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setShowAdditionalServices(!showAdditionalServices);
  };

  // Animate additional services section
  useEffect(() => {
    const additionalServicesContainer = document.querySelector('.additional-services');
    if (additionalServicesContainer) {
      if (showAdditionalServices) {
        // Show with animation
        additionalServicesContainer.style.display = 'block';
        additionalServicesContainer.style.opacity = '0';
        additionalServicesContainer.style.transform = 'translateY(20px)';
        additionalServicesContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Trigger animation
        setTimeout(() => {
          additionalServicesContainer.style.opacity = '1';
          additionalServicesContainer.style.transform = 'translateY(0)';
        }, 10);
      } else {
        // Hide with animation
        additionalServicesContainer.style.opacity = '0';
        additionalServicesContainer.style.transform = 'translateY(20px)';
        
        // After animation completes, hide the container
        setTimeout(() => {
          additionalServicesContainer.style.display = 'none';
        }, 500);
      }
    }
  }, [showAdditionalServices]);

  // Function to handle category pill clicks
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Function to handle bookmark clicks
  const handleBookmarkClick = (e) => {
    if (e.target.closest('.bookmark')) {
      const bookmarkIcon = e.target.closest('.bookmark').querySelector('i');
      
      if (bookmarkIcon.classList.contains('fa-regular')) {
        bookmarkIcon.classList.remove('fa-regular');
        bookmarkIcon.classList.add('fa-solid');
        bookmarkIcon.style.color = 'var(--accent-color)';
      } else {
        bookmarkIcon.classList.remove('fa-solid');
        bookmarkIcon.classList.add('fa-regular');
        bookmarkIcon.style.color = '';
      }
    }
  };

  // Add click event listener for bookmarks
  useEffect(() => {
    document.addEventListener('click', handleBookmarkClick);
    
    return () => {
      document.removeEventListener('click', handleBookmarkClick);
    };
  }, []);

  // Add transition effects to service grid
  useEffect(() => {
    const serviceGrid = document.querySelector('.service-grid');
    if (serviceGrid) {
      serviceGrid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
  }, []);

  // Animate category switching
  useEffect(() => {
    const serviceGrid = document.querySelector('.service-grid');
    if (serviceGrid) {
      // Fade out
      serviceGrid.style.opacity = '0';
      serviceGrid.style.transform = 'translateY(10px)';
      
      // After fade out, fade in
      setTimeout(() => {
        serviceGrid.style.opacity = '1';
        serviceGrid.style.transform = 'translateY(0)';
      }, 300);
    }
  }, [activeCategory]);

  // Animate recently viewed category switching
  useEffect(() => {
    const recentlyViewedGrid = document.querySelector('.recently-viewed .service-grid');
    if (recentlyViewedGrid) {
      // Fade out
      recentlyViewedGrid.style.opacity = '0';
      recentlyViewedGrid.style.transform = 'translateY(10px)';
      
      // After fade out, fade in
      setTimeout(() => {
        recentlyViewedGrid.style.opacity = '1';
        recentlyViewedGrid.style.transform = 'translateY(0)';
      }, 300);
    }
  }, [activeRecentlyViewedCategory]);

  // Add hover animations to service cards
  useEffect(() => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      // Add staggered entrance animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100); // Staggered delay
    });
  }, [activeRecentlyViewedCategory, activeCategory]);

  // Add hover effects to category pills
  useEffect(() => {
    const categoryPills = document.querySelectorAll('.category-pill');
    categoryPills.forEach(pill => {
      pill.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
      });
      
      pill.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  }, [activeRecentlyViewedCategory, activeCategory]);

  // Add animation to "View All" button
  useEffect(() => {
    const viewAllBtn = document.querySelector('.recently-viewed .view-all');
    if (viewAllBtn) {
      viewAllBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      viewAllBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
      });
    }
  }, []);

  // Add loading animation to service cards
  useEffect(() => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      // Add pulse animation on load
      card.style.animation = `pulse 0.6s ease-in-out ${index * 0.1}s`;
    });
  }, [activeRecentlyViewedCategory, activeCategory]);

  // Add CSS animations to the document
  useEffect(() => {
    // Add keyframe animations if they don't exist
    if (!document.querySelector('#animation-styles')) {
      const style = document.createElement('style');
      style.id = 'animation-styles';
      style.textContent = `
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        @keyframes slideInFromBottom {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeInScale {
          0% { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .service-card {
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .category-pill {
          transition: all 0.3s ease;
        }
        
        .category-pill:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .view-all {
          transition: all 0.3s ease;
        }
        
        .view-all:hover {
          transform: translateX(5px);
        }
        
        .recently-viewed .service-grid {
          animation: slideInFromBottom 0.8s ease-out;
        }
        
        .recently-viewed .category-pill.active {
          animation: fadeInScale 0.5s ease-out;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Add entrance animation for recently viewed section
  useEffect(() => {
    const recentlyViewedSection = document.querySelector('.recently-viewed');
    if (recentlyViewedSection) {
      recentlyViewedSection.style.opacity = '0';
      recentlyViewedSection.style.transform = 'translateY(20px)';
      recentlyViewedSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      setTimeout(() => {
        recentlyViewedSection.style.opacity = '1';
        recentlyViewedSection.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  // Render service card component
  const renderServiceCard = (service, index) => (
    <div key={index} className="service-card">
      <div className="bookmark"><i className="fa-regular fa-bookmark"></i></div>
      <img src={service.img} alt={service.title}/>
      <div className="card-content">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <div className="card-footer">
          <div className="price">From {service.price}</div>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <span>{service.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="content">
        <h2>POPULAR SERVICES</h2>
        <a href="#" className="view-all" onClick={handleExploreClick}>
          {isExpanded ? 'Show Less' : 'Explore All'} 
          <i className={`fa-solid fa-arrow-${isExpanded ? 'up' : 'right'}`}></i>
        </a>
        
                <div className="categories">
            {Object.keys(categoryContent).map((category) => (
                <div 
                    key={category}
                    className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </div>
            ))}
        </div>
        
        <div className="service-grid">
            {categoryContent[activeCategory].map((service, index) => renderServiceCard(service, index))}
        </div>

        {/* Additional Services Section */}
        {showAdditionalServices && (
            <div className="additional-services" style={{ display: 'block', opacity: 1, transform: 'translateY(0)' }}>
                <div className="service-grid">
                    {additionalServices.map((service, index) => renderServiceCard(service, index))}
                </div>
            </div>
        )}
    </div>
 
        <div className="recently-viewed">
        <h2>RECENTLY VIEWED & MORE</h2>
        <a href="#" className="view-all">View All <i className="fa-solid fa-arrow-right"></i></a>
        
        <div className="categories">
            {Object.keys(recentlyViewedContent).map((category) => (
                <div 
                    key={category}
                    className={`category-pill ${activeRecentlyViewedCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveRecentlyViewedCategory(category)}
                >
                    {category}
                </div>
            ))}
        </div>
        
        <div className="service-grid">
            {recentlyViewedContent[activeRecentlyViewedCategory].map((service, index) => renderServiceCard(service, index))}
        </div>
    </div>

    <footer>
    <div className="footer-container">
        <div className="footer-top">
            <div className="footer-column">
                <div className="footer-logo">
                    <a href="#">FreelancerHub</a>
                </div>
                <p className="footer-description">Connect with top-tier freelance talent from around the world and scale your business with high-quality services.</p>
                <div className="social-icons">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            
            <div className="footer-column">
                <h3><i className="fa-solid fa-users"></i> For Clients</h3>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-search"></i> Find Freelancers</a></li>
                    <li><a href="#"><i className="fa-solid fa-plus-circle"></i> Post a Project</a></li>
                    <li><a href="#"><i className="fa-solid fa-tasks"></i> Project Management</a></li>
                    <li><a href="#"><i className="fa-solid fa-building"></i> Enterprise Solutions</a></li>
                    <li><a href="#"><i className="fa-solid fa-star"></i> Success Stories</a></li>
                </ul>
            </div>
            
            <div className="footer-column">
                <h3><i className="fa-solid fa-briefcase"></i> For Freelancers</h3>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-search"></i> Find Projects</a></li>
                    <li><a href="#"><i className="fa-solid fa-user-plus"></i> Create Profile</a></li>
                    <li><a href="#"><i className="fa-solid fa-chart-line"></i> Skills Assessment</a></li>
                    <li><a href="#"><i className="fa-solid fa-users"></i> Community</a></li>
                    <li><a href="#"><i className="fa-solid fa-tools"></i> Tools & Resources</a></li>
                </ul>
            </div>
            
            <div className="footer-column">
                <h3><i className="fa-solid fa-book"></i> Resources</h3>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-question-circle"></i> Help Center</a></li>
                    <li><a href="#"><i className="fa-solid fa-blog"></i> Blog</a></li>
                    <li><a href="#"><i className="fa-solid fa-graduation-cap"></i> Guides & Tutorials</a></li>
                    <li><a href="#"><i className="fa-solid fa-comments"></i> Freelancer Forum</a></li>
                    <li><a href="#"><i className="fa-solid fa-code"></i> API Documentation</a></li>
                </ul>
            </div>
            
            <div className="footer-column">
                <h3><i className="fa-solid fa-envelope"></i> Newsletter</h3>
                <p><i className="fa-solid fa-info-circle"></i> Subscribe to our newsletter for the latest updates and offers.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email address"/>
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        
        <div className="footer-bottom">
            <div className="copyright">
                <p><i className="fa-solid fa-copyright"></i> &copy; 2025 FreelancerHub. All Rights Reserved.</p>
            </div>
            <div className="footer-links">
                <a href="#"><i className="fa-solid fa-file-contract"></i> Terms of Service</a>
                <a href="#"><i className="fa-solid fa-shield-alt"></i> Privacy Policy</a>
                <a href="#"><i className="fa-solid fa-universal-access"></i> Accessibility</a>
                <a href="#"><i className="fa-solid fa-sitemap"></i> Sitemap</a>
            </div>
        </div>
    </div>
</footer>
<script src="js1.js"></script>
    </div>
  )
}

export default Body
