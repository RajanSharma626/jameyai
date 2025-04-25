document.addEventListener("DOMContentLoaded", () => {
    // Initialize particles
    // Check if particlesJS is defined before using it
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00e1ff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00e1ff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
            push: {
              particles_nb: 3,
            },
          },
        },
        retina_detect: true,
      })
    } else {
      console.error("particlesJS is not defined. Make sure the particles.js library is included.")
    }
  
    // Countdown timer
    const countdownDate = new Date()
    countdownDate.setDate(countdownDate.getDate() + 91) // 91 days from now
  
    function updateCountdown() {
      const now = new Date().getTime()
      const distance = countdownDate - now
  
      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
      // Display the result
      document.getElementById("days").textContent = days.toString().padStart(2, "0")
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
    }
  
    // Update countdown every second
    updateCountdown()
    setInterval(updateCountdown, 1000)
  
    // Animate elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )
  
    // Observe all feature cards and section titles
    document.querySelectorAll(".feature-card, .section-title").forEach((el) => {
      el.classList.add("fade-in-element")
      observer.observe(el)
    })
  
    // Add hover effects to feature cards
    document.querySelectorAll(".feature-card").forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px)"
        this.style.boxShadow = "0 15px 30px rgba(0, 225, 255, 0.3)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
        this.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)"
      })
    })
  
    // Add glow effect to logo on hover
    const logo = document.querySelector(".logo")
    if (logo) {
      logo.addEventListener("mouseenter", () => {
        document.querySelector(".logo-glow").style.animation = "pulse 2s ease-in-out infinite"
      })
  
      logo.addEventListener("mouseleave", () => {
        document.querySelector(".logo-glow").style.animation = "pulse 4s ease-in-out infinite"
      })
    }
  
    // Form submission animation
    const form = document.querySelector(".signup-form")
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault()
        const button = this.querySelector(".btn-signup")
        const input = this.querySelector('input[type="email"]')
  
        if (input.value.trim() !== "") {
          button.textContent = "Thanks!"
          button.style.backgroundColor = "#00ff9d"
  
          setTimeout(() => {
            button.textContent = "Join Waitlist"
            button.style.backgroundColor = ""
            input.value = ""
          }, 2000)
        }
      })
    }
  
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  
    // Add CSS for fade-in animations
    const style = document.createElement("style")
    style.textContent = `
      .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
      
      .icon-container {
        animation: float 4s ease-in-out infinite;
      }
      
      .feature-card:nth-child(2) .icon-container {
        animation-delay: 0.5s;
      }
      
      .feature-card:nth-child(3) .icon-container {
        animation-delay: 1s;
      }
      
      .feature-card:nth-child(4) .icon-container {
        animation-delay: 1.5s;
      }
    `
    document.head.appendChild(style)
  })
  