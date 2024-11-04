(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 25,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(document).ready(function () {
    // Vérifiez si les données sont déjà dans le Local Storage
    let voitures = localStorage.getItem("voituresData");

    if (voitures) {
      // Les données existent dans le Local Storage, les afficher directement
      afficherVoitures(JSON.parse(voitures));
    } else {
      // Les données ne sont pas dans le Local Storage, les récupérer depuis le backend
      $.ajax({
        url: "https://my-project-i2o4.onrender.com/", // Remplacez par l'URL de votre API
        method: "GET",
        success: function (data) {
          // Afficher les données
          afficherVoitures(data);

          // Stocker les données dans le Local Storage
          localStorage.setItem("voituresData", JSON.stringify(data));
        },
        error: function (error) {
          console.error("Erreur lors de la récupération des données:", error);
        },
      });
    }
  });

  // Fonction pour afficher les données sur la page
  function afficherVoitures(voitures) {
    voitures.forEach(function (voiture) {
      $("#voituresContainer").append(
        ` <div class="col-md-4">
        <div class="card">
          <img
            src="${voiture.image}"  // Utilise une image par défaut si aucune n'est fournie
            class="card-img-top "
            alt="${voiture.nom}"
          />
          <div class="card-body">
            <h5 class="card-title">${voiture.nom}</h5>
            <p class="card-text">
              Marque: ${voiture.nom}<br />
              Boite de vitesse: ${voiture.boiteDeVitesse}<br />
              Condition: ${voiture.condition}<br />
              Consommation: ${voiture.consommation}<br />
              Prix: ${voiture.prix} FCFA/jour
            </p>
            <a href="#" class="btn btn-primary">Réserver</a>
          </div>
        </div>
      </div>`
      );
    });
  }

  $.get("https://my-project-i2o4.onrender.com/", function (data) {
    console.log(data);
  }).fail(function (error) {
    console.error("Il y a eu un problème avec la requête GET:", error);
  });

  $(document).ready(function () {
    const apiUrl = "https://my-project-i2o4.onrender.com/"; // Remplacez par votre URL

    $.get(apiUrl, function (carData) {
      const $carContainer = $("#car-container");

      $.each(carData, function (index, car) {
        const cardHTML = `
        <div class="col-md-4">
          <div class="card">
            <img
              src="${car.image}"  // Utilise une image par défaut si aucune n'est fournie
              class="card-img-top "
              alt="${car.nom}"
            />
            <div class="card-body">
              <h5 class="card-title">${car.nom}</h5>
              <p class="card-text">
                Marque: ${car.nom}<br />
                Boite de vitesse: ${car.boiteDeVitesse}<br />
                Condition: ${car.condition}<br />
                Consommation: ${car.consommation}<br />
                Prix: ${car.prix} FCFA/jour
              </p>
              <a href="#" class="btn btn-primary">Réserver</a>
            </div>
          </div>
        </div>
      `;
        $carContainer.append(cardHTML);
      });
    }).fail(function (error) {
      console.error("Erreur lors de la récupération des données:", error);
    });
  });
  $.get("https://my-project-i2o4.onrender.com/", function (data) {
    console.log(data);
  }).fail(function (error) {
    console.error("Il y a eu un problème avec la requête GET:", error);
  });

  $(document).ready(function () {
    const apiUrl = "https://my-project-i2o4.onrender.com/vente"; // Remplacez par votre URL

    $.get(apiUrl, function (carData) {
      const $carContainer = $("#car-container2");

      $.each(carData, function (index, car) {
        const cardHTML = `
        <div class="col-md-4">
          <div class="card">
            <img
              src="${
                car.image || ""
              }"  // Utilise une image par défaut si aucune n'est fournie
              class="card-img-top "
              alt="${car.nom}"
            />
            <div class="card-body">
              <h5 class="card-title">${car.nom}</h5>
              <p class="card-text">
                Marque: ${car.nom}<br />
                Boite de vitesse: ${car.boiteDeVitesse}<br />
                Condition: ${car.condition}<br />
                Consommation: ${car.consommation}<br />
                Prix: ${car.prix} FCFA/jour
              </p>
              <a href="#" class="btn btn-primary">Acheter</a>
            </div>
          </div>
        </div>
      `;
        $carContainer.append(cardHTML);
      });
    }).fail(function (error) {
      console.error("Erreur lors de la récupération des données:", error);
    });
  });
})(jQuery);
