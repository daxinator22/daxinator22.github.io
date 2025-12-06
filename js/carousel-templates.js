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
    <div class="swiper-slide d-flex justify-content-center">
      <div class="testimonial-card p-6 h-100" style="width: 90%;">
        <div class="company-header mb-2 d-flex align-items-center justify-content-between">
          <h4 class="company-name mb-0">
            ${testimonial.companyName}
          </h4>
          ${
						testimonial.logo
							? `
            <div class="company-logo-wrapper" style="width: 60px; height: 60px; background: white; display: flex; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid #e0e0e0;">
              <img src="${testimonial.logo}" alt="${testimonial.companyName}" class="company-logo" style="max-width: 50px; max-height: 50px; object-fit: contain;">
            </div>
          `
							: ""
					}
        </div>
        
        <div class="testimonial-content" style="width: 85%; margin: 0 auto;">
          <p class="testimonial-text mb-4 text-muted" style="font-style: italic; line-height: 1.6; text-align: left;">
            "${testimonial.testimonial}"
          </p>
          
          <div class="author-info d-flex justify-content-end">
            <span class="author-details fw-medium">
              ${testimonial.author.name}, ${testimonial.author.title}
            </span>
          </div>
        </div>
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

// populate testimonials carousel
function renderTestimonials() {
	const container = document.getElementById("testimonials-container");
	if (container && typeof testimonialsData !== "undefined") {
		container.innerHTML = testimonialsData
			.map((testimonial) => createTestimonialSlide(testimonial))
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
	setTimeout(() => {
		renderCaseStudies();
		renderTestimonials();
	}, 100);
});
