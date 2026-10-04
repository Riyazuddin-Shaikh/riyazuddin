  const navbar =
      document.getElementById("navbar");


    window.addEventListener(
      "scroll",
      () => {

        if (window.scrollY > 30) {

          navbar.classList.add("scrolled");

        } else {

          navbar.classList.remove("scrolled");

        }

      },
      { passive: true }
    );



    //  bottom to top section start

    
(function () {

  const backTop =
    document.getElementById("backTop");

  if (!backTop) return;

  backTop.addEventListener(
    "click",
    function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

})();