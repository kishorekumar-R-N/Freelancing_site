
// Toggle the dropdown menu
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function() {
    dropdownMenu.classList.toggle('open');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar') && !event.target.closest('.dropdown_menu')) {
        dropdownMenu.classList.remove('open');
    }
});

// Animation for scroll effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(30, 30, 46, 0.97)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'var(--dark-bg)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    }
});

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
// Get the "Explore All" link in the Popular Services section
const exploreAllBtn = document.querySelector('.content .view-all');

// Create a container for additional services
const additionalServicesContainer = document.createElement('div');
additionalServicesContainer.className = 'additional-services';
additionalServicesContainer.style.display = 'none'; // Initially hidden
additionalServicesContainer.innerHTML = `
<div class="service-grid">
    <!-- Additional Service Card 1 -->
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="email_marketing.jpg" alt="Email Marketing">
        <div class="card-content">
            <h3>Email Marketing Campaigns</h3>
            <p>Strategic email marketing services to boost engagement and conversions.</p>
            <div class="card-footer">
                <div class="price">From $150</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.7 (88)</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Additional Service Card 2 -->
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="copywriting.jpg" alt="Copywriting">
        <div class="card-content">
            <h3>Conversion Copywriting</h3>
            <p>Persuasive copy that drives action and increases your conversion rates.</p>
            <div class="card-footer">
                <div class="price">From $200</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.8 (112)</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Additional Service Card 3 -->
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="data_analytics.jpg" alt="Data Analytics">
        <div class="card-content">
            <h3>Data Analytics & Insights</h3>
            <p>Comprehensive data analysis to uncover valuable business insights.</p>
            <div class="card-footer">
                <div class="price">From $280</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.9 (76)</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Additional Service Card 4 -->
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="ecommerce.jpg" alt="E-commerce Development">
        <div class="card-content">
            <h3>E-commerce Development</h3>
            <p>Custom online store development with secure payment integration.</p>
            <div class="card-footer">
                <div class="price">From $450</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.8 (92)</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// Insert the additional services container after the existing service grid
const contentSection = document.querySelector('.content');
const existingServiceGrid = document.querySelector('.content .service-grid');
contentSection.insertBefore(additionalServicesContainer, existingServiceGrid.nextSibling);

// Add click event listener to the "Explore All" button
exploreAllBtn.addEventListener('click', function(e) {
e.preventDefault(); // Prevent default link behavior

// Toggle visibility of additional services
if (additionalServicesContainer.style.display === 'none') {
    // Show additional services with a smooth animation
    additionalServicesContainer.style.display = 'block';
    additionalServicesContainer.style.opacity = '0';
    additionalServicesContainer.style.transform = 'translateY(20px)';
    additionalServicesContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Trigger animation
    setTimeout(() => {
        additionalServicesContainer.style.opacity = '1';
        additionalServicesContainer.style.transform = 'translateY(0)';
    }, 10);
    
    // Change button text to "Show Less"
    exploreAllBtn.innerHTML = 'Show Less <i class="fa-solid fa-arrow-up"></i>';
} else {
    // Hide with animation
    additionalServicesContainer.style.opacity = '0';
    additionalServicesContainer.style.transform = 'translateY(20px)';
    
    // After animation completes, hide the container
    setTimeout(() => {
        additionalServicesContainer.style.display = 'none';
    }, 500);
    
    // Change button text back to original
    exploreAllBtn.innerHTML = 'Explore All <i class="fa-solid fa-arrow-right"></i>';
}
});
});

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
// Get all category pills
const categoryPills = document.querySelectorAll('.categories .category-pill');

// Create service content for different categories
const categoryContent = {
// Trending category (default)
"Trending": `
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="ai_development.jpg" alt="AI Development Service">
        <div class="card-content">
            <h3>AI Integration Services</h3>
            <p>Custom AI solutions to automate workflows and enhance your business intelligence.</p>
            <div class="card-footer">
                <div class="price">From $350</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.9 (203)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="social_media.jpg" alt="Social Media Management">
        <div class="card-content">
            <h3>Social Media Management</h3>
            <p>Strategic content creation and community management for growing your social presence.</p>
            <div class="card-footer">
                <div class="price">From $180</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.8 (176)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="mobile_app.jpg" alt="Mobile App Development">
        <div class="card-content">
            <h3>Mobile App Development</h3>
            <p>Professional iOS and Android app development with user-centered design approach.</p>
            <div class="card-footer">
                <div class="price">From $500</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.9 (124)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="content_writing.jpg" alt="Content Writing">
        <div class="card-content">
            <h3>SEO Content Writing</h3>
            <p>Engaging, keyword-optimized content that ranks well and converts visitors.</p>
            <div class="card-footer">
                <div class="price">From $120</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.7 (98)</span>
                </div>
            </div>
        </div>
    </div>
`,

// Most Hired category
"Most Hired": `
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="web_development.jpg" alt="Web Development">
        <div class="card-content">
            <h3>Full-Stack Web Development</h3>
            <p>End-to-end web application development with modern frameworks and technologies.</p>
            <div class="card-footer">
                <div class="price">From $600</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.9 (358)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="graphic_design.jpg" alt="Graphic Design">
        <div class="card-content">
            <h3>Brand Identity Design</h3>
            <p>Complete branding package including logo, color palette, typography and brand guidelines.</p>
            <div class="card-footer">
                <div class="price">From $300</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.8 (271)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="digital_marketing.jpg" alt="Digital Marketing">
        <div class="card-content">
            <h3>Digital Marketing Strategy</h3>
            <p>Comprehensive marketing plan tailored to your business goals and target audience.</p>
            <div class="card-footer">
                <div class="price">From $450</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.7 (189)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="video_editing.jpg" alt="Video Editing">
        <div class="card-content">
            <h3>Professional Video Editing</h3>
            <p>High-quality video editing services for promotional content and social media.</p>
            <div class="card-footer">
                <div class="price">From $250</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.8 (215)</span>
                </div>
            </div>
        </div>
    </div>
`,

// Top Rated category
"Top Rated": `
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="ui_ux_design.jpg" alt="UI/UX Design">
        <div class="card-content">
            <h3>UI/UX Design Excellence</h3>
            <p>User-centered design process with wireframing, prototyping, and usability testing.</p>
            <div class="card-footer">
                <div class="price">From $400</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>5.0 (132)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="translation.jpg" alt="Translation Services">
        <div class="card-content">
            <h3>Professional Translation</h3>
            <p>Accurate and culturally-sensitive translation services for multiple languages.</p>
            <div class="card-footer">
                <div class="price">From $150</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>5.0 (97)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="copywriting.jpg" alt="Copywriting">
        <div class="card-content">
            <h3>Conversion Copywriting</h3>
            <p>Compelling copy that drives engagement and boosts conversion rates.</p>
            <div class="card-footer">
                <div class="price">From $200</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>5.0 (118)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="animation.jpg" alt="Animation">
        <div class="card-content">
            <h3>Motion Graphics & Animation</h3>
            <p>Captivating animated videos and motion graphics for your brand.</p>
            <div class="card-footer">
                <div class="price">From $350</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>5.0 (86)</span>
                </div>
            </div>
        </div>
    </div>
`,

// New Services category
"New Services": `
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="ai_chatbot.jpg" alt="AI Chatbot">
        <div class="card-content">
            <h3>AI Chatbot Development</h3>
            <p>Custom chatbot solutions powered by AI to enhance customer service.</p>
            <div class="card-footer">
                <div class="price">From $400</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.6 (28)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="vr_development.jpg" alt="VR Development">
        <div class="card-content">
            <h3>VR/AR Experience Design</h3>
            <p>Immersive virtual and augmented reality experiences for various applications.</p>
            <div class="card-footer">
                <div class="price">From $700</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.8 (12)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="podcast_production.jpg" alt="Podcast Production">
        <div class="card-content">
            <h3>Podcast Production</h3>
            <p>End-to-end podcast production including recording, editing, and distribution.</p>
            <div class="card-footer">
                <div class="price">From $220</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.7 (19)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="service-card">
        <div class="bookmark"><i class="fa-regular fa-bookmark"></i></div>
        <img src="sustainability.jpg" alt="Sustainability Consulting">
        <div class="card-content">
            <h3>Sustainability Consulting</h3>
            <p>Strategic guidance for implementing sustainable business practices.</p>
            <div class="card-footer">
                <div class="price">From $500</div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>4.9 (8)</span>
                </div>
            </div>
        </div>
    </div>
`
};

// Get the service grid in the Popular Services section
const serviceGrid = document.querySelector('.content .service-grid');

// Add click event listeners to each category pill
categoryPills.forEach(pill => {
pill.addEventListener('click', function() {
    // Remove active class from all pills
    categoryPills.forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked pill
    this.classList.add('active');
    
    // Get the category name
    const category = this.textContent;
    
    // Update content of the service grid if we have content for this category
    if (categoryContent[category]) {
        // Fade out
        serviceGrid.style.opacity = '0';
        serviceGrid.style.transform = 'translateY(10px)';
        
        // After fade out, update content and fade in
        setTimeout(() => {
            serviceGrid.innerHTML = categoryContent[category];
            
            // Fade in
            serviceGrid.style.opacity = '1';
            serviceGrid.style.transform = 'translateY(0)';
        }, 300);
    }
});
});

// Add transition effects to service grid
serviceGrid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

// Add bookmark functionality to all service cards
document.addEventListener('click', function(e) {
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
});
});
