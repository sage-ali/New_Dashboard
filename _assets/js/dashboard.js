/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  try {

      // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })

    
  } catch (error) {

    console.log(error)
    
  }

    
  try {
    
  
    // Sidebar expand
    const toggleButton = document.querySelector('#menu-toggle');
    const sidebar = document.querySelector('#sidebarMenu');
    const main = document.querySelector('main');
    const toggleIcon = document.querySelector('.svg-icon-2');


    // Expand and contract sidebar on click by changing bootstrap class
    toggleButton.addEventListener('click', () => {

      
      sidebar.classList.toggle('col-md-3');
      sidebar.classList.toggle('col-lg-2');
      main.classList.toggle('col-md-9');
      main.classList.toggle('col-lg-10');
      sidebar.classList.toggle('col-md-1');
      sidebar.classList.toggle('col-lg-1');
      main.classList.toggle('col-md-11');
      main.classList.toggle('col-lg-11');
      toggleButton.classList.toggle('rotate-180')
      toggleButton.classList.toggle('active')


    });

    // Toggle button animation


    //Managing display of text and icon when the side bar is docked
    const iconText = document.querySelectorAll('.sidebar-expand');
    const icon = document.querySelectorAll('.sidebar-collapse');

    sidebar.addEventListener('mouseleave', () => {
      if(sidebar.classList.contains('col-lg-1')){
        iconText.forEach(function(elem) {
          elem.classList.add('d-none')
        });
        icon.forEach(function(elem) {
          elem.classList.remove('d-none')
        });

      }

    });

    sidebar.addEventListener('mouseenter', () => {
      if(sidebar.classList.contains('col-lg-1')){
        iconText.forEach(function(elem) {
          elem.classList.remove('d-none')
        });
        icon.forEach(function(elem) {
          elem.classList.add('d-none')
        });

      }

    });


    // Listen to resize to ensure that the sidebar returns to it's default state when resized to a small screen
    window.addEventListener("resize", function() {

      if (window.matchMedia("(max-width: 767px)").matches) {
        document.getElementById("sidebarMenu").addEventListener("show.bs.collapse", function() {
          // Perform actions here
          
            console.log('showing')
            iconText.forEach(function(elem) {
              if (elem.classList.contains('d-none')) {
              elem.classList.remove('d-none')
            }
            });
            icon.forEach(function(elem) {
              if (!elem.classList.contains('d-none')) {
              elem.classList.add('d-none')
              }
            });

            if(sidebar.classList.contains('col-lg-1')){
              sidebar.classList.toggle('col-md-3');
              sidebar.classList.toggle('col-lg-2');
              main.classList.toggle('col-md-9');
              main.classList.toggle('col-lg-10');
              sidebar.classList.toggle('col-md-1');
              sidebar.classList.toggle('col-lg-1');
              main.classList.toggle('col-md-11');
              main.classList.toggle('col-lg-11');

            }

      });

      
      // document.querySelector("button[data-bs-toggle='collapse']").addEventListener("click", function(event) {
      //   // Perform actions here
      // });
      }
    });





  } catch (error) {

    console.log(error)
    
  }

})()
