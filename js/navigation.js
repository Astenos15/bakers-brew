const navigation = function () {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".navigation");

  const animateTestimonials = function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      nav.classList.remove("sticky");
    } else {
      nav.classList.add("sticky");
    }
  };

  const headerObserver = new IntersectionObserver(animateTestimonials, {
    root: null,
    threshold: 0.1,
  });
  headerObserver.observe(header);
};

export default navigation;
