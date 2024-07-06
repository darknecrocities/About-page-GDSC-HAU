document.addEventListener('DOMContentLoaded', function() {
    const heroPic = document.querySelector('.hero-pic');

    function handleScroll() {
        if (window.scrollY > 10) {
            heroPic.classList.add('slide-down');
        } else {
            heroPic.classList.remove('slide-down');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.querySelector('.welcome-to-google-developer-student-clubs');
    function handleScroll() {
        // Get the top position of the element
        const topPosition = welcomeMessage.getBoundingClientRect().top;

        // Check if the top position is within the viewport height minus the slideUpHeight
        if (topPosition < 716) {
            welcomeMessage.classList.add('animation-slide-up');
        } else {
            welcomeMessage.classList.remove('animation-slide-up');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const row5 = document.querySelector('.row-5');

    function handleScroll() {
        // Get the top position of the element
        const topPosition = row5.getBoundingClientRect().top;

        // Check if the top position is within the viewport height
        if (topPosition < 700) {
            row5.classList.add('slide-in');
        } else {
            row5.classList.remove('slide-in');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const rectangle = document.querySelector('.rectangle');

    function handleScroll() {
        // Get the top position of the element
        const topPosition = rectangle.getBoundingClientRect().top;

        // Check if the top position is within the viewport height
        if (topPosition < 500) {
            rectangle.classList.add('slide-in');
        } else {
            rectangle.classList.remove('slide-in');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.google-developer-student-clubs, .google-developer-student-clubs-7');

    function handleScroll() {
        elements.forEach(element => {
            const topPosition = element.getBoundingClientRect().top;

            if (topPosition < 500) {
                element.classList.add('slide-in');
            } else {
                element.classList.remove('slide-in');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check position on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const elementsToSlideIn = document.querySelectorAll('.row-a, .group-of-students, .group-of-students-b, .bring-students-together, .group-of-students-c');
    const imageToPop = document.querySelector('.rectangle-9');

    function handleScroll() {
        elementsToSlideIn.forEach(element => {
            const topPosition = element.getBoundingClientRect().top;

            if (topPosition < 500) {
                element.classList.add('slide-in-up');
            } else {
                element.classList.remove('slide-in-up');
            }
        });

        const imagePosition = imageToPop.getBoundingClientRect().top;
        if (imagePosition < 300) {
            imageToPop.classList.add('pop-in');
        } else {
            imageToPop.classList.remove('pop-in');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check position on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const elementsToPop = document.querySelectorAll('.join-google-developer-student-club, .google-developer-student-clubs-holy-angel-university-f');

    function handleScroll() {
        elementsToPop.forEach(element => {
            const topPosition = element.getBoundingClientRect().top;

            if (topPosition < 500) {
                element.classList.add('pop-in');
            } else {
                element.classList.remove('pop-in');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check position on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const elementToSlideIn = document.querySelector('.column-13');

    function handleScroll() {
        const topPosition = elementToSlideIn.getBoundingClientRect().top;

        if (topPosition < window.innerHeight) {
            elementToSlideIn.classList.add('slide-in-right');
        } else {
            elementToSlideIn.classList.remove('slide-in-right');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check position on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const elementToSlideUp = document.querySelector('.column-16');

    function handleScroll() {
        const topPosition = elementToSlideUp.getBoundingClientRect().top;

        if (topPosition < window.innerHeight) {
            elementToSlideUp.classList.add('slide-up');
        } else {
            elementToSlideUp.classList.remove('slide-up');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check position on page load
});

document.addEventListener("DOMContentLoaded", function() {
  // Find the element with the class "column-18"
  const column18 = document.querySelector('.column-18');

  // Add the "slide-up" class after a delay (e.g., 500ms)
  setTimeout(() => {
    column18.classList.add('slide-up');
  }, 500); // Adjust the delay as needed
});


document.addEventListener('DOMContentLoaded', function() {
    const column18 = document.querySelector('.column-18');
  
    function handleScroll() {
      const topPosition = column18.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (topPosition < windowHeight) {
        column18.classList.add('slide-up');
      } else {
        column18.classList.remove('slide-up');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
  });

  document.addEventListener('DOMContentLoaded', function() {
    const column1c = document.querySelector('.column-1c');
  
    function handleScroll() {
      const topPosition = column1c.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (topPosition < windowHeight) {
        column1c.classList.add('slide-up');
      } else {
        column1c.classList.remove('slide-up');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Find the element with the class "column-1c"
    const column1c = document.querySelector('.column-1c');
  
    // Add the "slide-up" class after a delay (e.g., 500ms)
    setTimeout(() => {
      column1c.classList.add('slide-up');
    }, 500); // Adjust the delay as needed
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const column20 = document.querySelector('.column-20');
  
    function handleScroll() {
      const topPosition = column20.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (topPosition < windowHeight) {
        column20.classList.add('slide-up');
      } else {
        column20.classList.remove('slide-up');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const howToJoinGDSC = document.querySelector('.how-to-join-gdsc-hau');
  
    function handleScroll() {
      const topPosition = howToJoinGDSC.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (topPosition < 750 ) {
        howToJoinGDSC.classList.add('fade-in');
      } else {
        howToJoinGDSC.classList.remove('fade-in');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector(".strong-interest-in-technology");
  
    function handleScroll() {
      const rect = element.getBoundingClientRect();
      if (rect.top < 750) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    // Initial check in case the element is already in view on load
    handleScroll();
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector(".follow-us");
  
    function handleScroll() {
      const rect = element.getBoundingClientRect();
      if (rect.top < 750) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    // Initial check in case the element is already in view on load
    handleScroll();
  });
   
  
