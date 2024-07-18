const observe = function () {
  const aboutGrid = document.querySelector(".about__grid");
  const menuBox = document.querySelector(".menu__box");
  const testimonials = document.querySelector(".testimonials__container");

  //about
  const animateAbout = function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      aboutGrid.classList.add("animate");
      aboutGrid.classList.remove("hidden");
    } else {
      aboutGrid.classList.add("hidden");
      aboutGrid.classList.remove("animate");
    }
  };

  const aboutObserver = new IntersectionObserver(animateAbout, {
    root: null,
    threshold: 0.1,
  });
  aboutObserver.observe(aboutGrid);

  //menu
  const animateMenu = function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      menuBox.classList.add("animate");
      menuBox.classList.remove("hidden");
    } else {
      menuBox.classList.add("hidden");
      menuBox.classList.remove("animate");
    }
  };

  const menuObserver = new IntersectionObserver(animateMenu, {
    root: null,
    threshold: 0.1,
  });
  menuObserver.observe(menuBox);

  // testimonials
  const animateTestimonials = function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      testimonials.classList.add("animate");
      testimonials.classList.remove("hidden");
    } else {
      testimonials.classList.add("hidden");
      testimonials.classList.remove("animate");
    }
  };

  const testimonialsObserver = new IntersectionObserver(animateTestimonials, {
    root: null,
    threshold: 0.1,
  });
  testimonialsObserver.observe(testimonials);
};

export default observe;
