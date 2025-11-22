// Carousel Templates for P6K Solutions

// Template for Case Studies
function createCaseStudySlide(caseStudy) {
	return `
    <div class="swiper-slide d-flex justify-content-center">
      <div class="case-study-card p-6 h-100 text-center" style="max-width: 600px; width: 100%;">
        <h4 class="case-study-title mb-4">
          ${caseStudy.title}
        </h4>

        <p class="challenge-text mb-4">
          ${caseStudy.challenge}
        </p>
        
        <p class="approach-text mb-4">
          ${caseStudy.approach}
        </p>
        
        <p class="outcome-text">
          ${caseStudy.outcome}
        </p>
      </div>
    </div>
  `;
}

// Template for Testimonials
function createTestimonialSlide(testimonial) {
	return `
    <div class="swiper-slide">
      <div class="testimonial-card p-6 h-100">
        <div class="company-header mb-4 d-flex align-items-center">
          ${
						testimonial.logo
							? `
            <img src="${testimonial.logo}" alt="${testimonial.companyName}" class="company-logo me-3">
          `
							: ""
					}
          <h2 class="company-name mb-0">
            ${testimonial.companyName}
          </h2>
        </div>
        
        <p class="testimonial-text mb-4">
          ${testimonial.testimonial}
        </p>
        
        <div class="author-info text-end">
          <span class="author-details">
            ${testimonial.author.name}, ${testimonial.author.title}
          </span>
        </div>
      </div>
    </div>
  `;
}

// populate case studies carousel
function renderCaseStudies() {
	const container = document.getElementById("case-studies-container");
	if (container && typeof caseStudyData !== "undefined") {
		container.innerHTML = caseStudyData
			.map((caseStudy) => createCaseStudySlide(caseStudy))
			.join("");

		// reinitialize swiper after content is added
		setTimeout(() => {
			const swiperContainer = container.closest(".tf-swiper");
			if (swiperContainer && typeof Swiper !== "undefined") {
				if (swiperContainer.swiper) {
					swiperContainer.swiper.destroy(true, true);
				}
				const config = JSON.parse(
					swiperContainer.getAttribute("data-swiper") || "{}"
				);
				new Swiper(swiperContainer, config);
			}
		}, 50);
	}
}

// initialize when DOM loads
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(renderCaseStudies, 100);
});
