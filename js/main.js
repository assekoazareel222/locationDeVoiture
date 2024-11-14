(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
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
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


        const reservations = [
            { id: 1, user: "Jean Dupont", vehicle: "Renault Clio", start: "2023-05-10", end: "2023-05-12", status: "En cours" },
            { id: 2, user: "Marie Martin", vehicle: "Peugeot 308", start: "2023-05-11", end: "2023-05-13", status: "À venir" },
            { id: 3, user: "Pierre Durand", vehicle: "Citroën C3", start: "2023-05-09", end: "2023-05-11", status: "Terminée" },
            { id: 4, user: "Sophie Lefebvre", vehicle: "Volkswagen Golf", start: "2023-05-12", end: "2023-05-14", status: "À venir" },
            { id: 5, user: "Luc Moreau", vehicle: "Ford Fiesta", start: "2023-05-10", end: "2023-05-11", status: "En cours" }
        ];

        function populateReservationsTable() {
            const tableBody = document.getElementById('reservations-table');
            tableBody.innerHTML = '';
            reservations.forEach(reservation => {
                const row = `
                    <tr>
                        <td>${reservation.id}</td>
                        <td>${reservation.user}</td>
                        <td>${reservation.vehicle}</td>
                        <td>${reservation.start}</td>
                        <td>${reservation.end}</td>
                        <td>${reservation.status}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="deleteReservation(${reservation.id})">Supprimer</button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        }

        function deleteReservation(id) {
            const index = reservations.findIndex(res => res.id === id);
            if (index > -1) {
                reservations.splice(index, 1);
                populateReservationsTable();
                alert(`Réservation avec l'ID ${id} supprimée.`);
            }
        }

        function showDashboard() {
            document.getElementById('main-content').innerHTML = `
                <h1>Tableau de bord</h1>
                <div class="card">
                    <h2>Statistiques</h2>
                    <canvas id="statsChart"></canvas>
                </div>
                <div class="card">
                    <h2>Dernières réservations</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Utilisateur</th>
                                <th>Véhicule</th>
                                <th>Date de début</th>
                                <th>Date de fin</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="reservations-table"></tbody>
                    </table>
                </div>
            `;
            populateReservationsTable();
            createStatsChart();
        }

        function createStatsChart() {
            const ctx = document.getElementById('statsChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Utilisateurs actifs', 'Véhicules disponibles', 'Réservations du jour'],
                    datasets: [{
                        label: 'Statistiques',
                        data: [1250, 87, 42],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        function showVehicles() {
            document.getElementById('main-content').innerHTML = `
                <h1>Gestion des véhicules</h1>
                <div class="card">
                    <h2>Liste des véhicules</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Marque</th>
                                <th>Modèle</th>
                                <th>Année</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="vehicles-table">
                            <!-- Les données seront insérées ici par JavaScript -->
                        </tbody>
                    </table>
                </div>
            `;
        }

        function showUsers() {
            document.getElementById('main-content').innerHTML = `
                <h1>Gestion des utilisateurs</h1>
                <div class="card">
                    <h2>Liste des utilisateurs</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Date d'inscription</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="users-table">
                            <!-- Les données seront insérées ici par JavaScript -->
                        </tbody>
                    </table>
                </div>
            `;
        }

        function showReservations() {
            document.getElementById('main-content').innerHTML = `
                <h1>Gestion des réservations</h1>
                <div class="card">
                    <h2>Liste des réservations</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Utilisateur</th>
                                <th>Véhicule</th>
                                <th>Date de début</th>
                                <th>Date de fin</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="reservations-table"></tbody>
                    </table>
                </div>
            `;
            populateReservationsTable();
        }

        function showSettings() {
            document.getElementById('main-content').innerHTML = `
                <h1>Paramètres</h1>
                <div class="card">
                    <h2>Gestion des administrateurs</h2>
                    <form id="add-admin-form">
                        <div class="form-group">
                            <label for="admin-name">Nom de l'admin :</label>
                            <input type="text" class="form-control" id="admin-name" required>
                        </div>
                        <div class="form-group">
                            <label for="admin-email">Email de l'admin :</label>
                            <input type="email" class="form-control" id="admin-email" required>
                        </div>
                        <button type="submit" class="btn btn-success">Ajouter Admin</button>
                    </form>
                    <h3>Liste des administrateurs</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="admins-table"></tbody>
                    </table>
                </div>
                <div class="card">
                    <h2>Changer le mot de passe</h2>
                    <form id="change-password-form">
                        <div class="form-group">
                            <label for="current-password">Mot de passe actuel :</label>
                            <input type="password" class="form-control" id="current-password" required>
                        </div>
                        <div class="form-group">
                            <label for="new-password">Nouveau mot de passe :</label>
                            <input type="password" class="form-control" id="new-password" required>
                        </div>
                        <button type="submit" class="btn btn-warning">Changer le mot de passe</button>
                    </form>
                </div>
            `;
            populateAdminsTable();
            document.getElementById('add-admin-form').addEventListener('submit', addAdmin);
            document.getElementById('change-password-form').addEventListener('submit', changePassword);
        }

        const admins = [
            { id: 1, name: "Admin 1", email: "admin1@example.com" },
            { id: 2, name: "Admin 2", email: "admin2@example.com" }
        ];

        function populateAdminsTable() {
            const tableBody = document.getElementById('admins-table');
            tableBody.innerHTML = '';
            admins.forEach(admin => {
                const row = `
                    <tr>
                        <td>${admin.id}</td>
                        <td>${admin.name}</td>
                        <td>${admin.email}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="deleteAdmin(${admin.id})">Supprimer</button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        }

        function addAdmin(event) {
            event.preventDefault();
            const name = document.getElementById('admin-name').value;
            const email = document.getElementById('admin-email').value;
            const newAdmin = { id: admins.length + 1, name, email };
            admins.push(newAdmin);
            populateAdminsTable();
            document.getElementById('add-admin-form').reset();
        }

        function deleteAdmin(id) {
            const index = admins.findIndex(admin => admin.id === id);
            if (index > -1) {
                admins.splice(index, 1);
                populateAdminsTable();
            }
        }

        function changePassword(event) {
            event.preventDefault();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            // Logique pour changer le mot de passe
            alert("Mot de passe changé avec succès !");
            document.getElementById('change-password-form').reset();
        }
