export const addRotationAnimation = () => {
  document.querySelectorAll("img[class*='processing']").forEach(image => {
    image.animate(
      [
        { transform: "rotate(360deg)" }
      ], {
        duration: 10000,
        iterations: Infinity,
      }
    )
  })
}

export const addPopupAnimation = () => {
  const targets = document.querySelectorAll("div[class*='popup']")

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
      } else {
        entry.target.classList.remove("active")
      }
    })
  }, { rootMargin: "-30% 0%", threshold: 0.5 })


  const sheet = window.document.styleSheets[1]

  sheet.insertRule(/*css*/`
    div[class*='popup'] {
      opacity: 0.5;
      transform: translateY(2vw);
      transition: opacity 300ms, transform 1s;
    }
  `)

  sheet.insertRule(/*css */`
    div[class*='popup'].active {
      opacity: 1;
      transform: translateY(0);
    }
  `)

  targets.forEach(target => {
    observer.observe(target)
  })

}
