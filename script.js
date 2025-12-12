// ========================================
// Mobile Navigation Toggle
// ========================================
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// ========================================
// Project Accordion Functionality
// ========================================
const projectHeaders = document.querySelectorAll(".project-header")

projectHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const projectItem = header.parentElement
    const isActive = projectItem.classList.contains("active")

    // Close all other projects
    document.querySelectorAll(".project-item").forEach((item) => {
      item.classList.remove("active")
      item.querySelector(".project-header").setAttribute("aria-expanded", "false")
    })

    // Toggle current project
    if (!isActive) {
      projectItem.classList.add("active")
      header.setAttribute("aria-expanded", "true")
    }
  })
})

// ========================================
// Skill Bar Animation
// ========================================
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress")
    bar.style.width = progress + "%"
  })
}

// Intersection Observer for skill bars
const aboutSection = document.querySelector(".about")
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars()
        skillObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.3 },
)

if (aboutSection) {
  skillObserver.observe(aboutSection)
}

// ========================================
// Smooth Scroll for Navigation
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// ========================================
// Active Navigation Link Highlighting
// ========================================
const sections = document.querySelectorAll("section[id]")

const highlightNav = () => {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active")
      } else {
        navLink.classList.remove("active")
      }
    }
  })
}

window.addEventListener("scroll", highlightNav)

// ========================================
// Typing Effect (Optional Enhancement)
// ========================================
const typeWriter = (element, text, speed = 50) => {
  let i = 0
  element.textContent = ""

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Add any initialization code here
  console.log("Portfolio loaded successfully!")
})
