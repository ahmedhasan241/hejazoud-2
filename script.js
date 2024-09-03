let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
  if (step < 1 || step > totalSteps || step > currentStep + 1) {
    return;
  }

  // Check conditions when moving from step 1 to step 2
  const content1 = document.getElementById("content1"); // Correct element
  const singleProduct = document.getElementById("single-product");
  if (step === 1) {
          // Hide the content1 div
      content1.style.display = "block";

      // Show the single-product div
      singleProduct.style.display = "none";
  }
  if (currentStep === 1 && step === 2) {
    const form = document.getElementById("step1-form");
    const warning = document.getElementById("step1-warning");
                  singleProduct.style.display = "none";
    const isChecked = Array.from(
      form.querySelectorAll('input[type="checkbox"]')
    ).some((checkbox) => checkbox.checked);

    if (!isChecked) {
      warning.style.display = "block";
      return;
    } else {
      warning.style.display = "none";
      const step2 = document.querySelectorAll(".step")[1];
      step2.classList.remove("disabled");
    }
  }
  if (currentStep === 2 && step === 3) {
    const form = document.getElementById("step2-form");
    const warning = document.getElementById("step2-warning");
                  singleProduct.style.display = "none";
    const isChecked = Array.from(
      form.querySelectorAll('input[type="checkbox"]')
    ).some((checkbox) => checkbox.checked);

    if (!isChecked) {
      warning.style.display = "block";
      return;
    } else {
      warning.style.display = "none";
      const step3 = document.querySelectorAll(".step")[2];
      step3.classList.remove("disabled");
    }
  }
  if (currentStep === 3 && step === 4) {
    const form = document.getElementById("step3-form");
    const warning = document.getElementById("step3-warning");
                  singleProduct.style.display = "none";
    const isChecked = Array.from(
      form.querySelectorAll('input[type="checkbox"]')
    ).some((checkbox) => checkbox.checked);

    if (!isChecked) {
      warning.style.display = "block";
      return;
    } else {
      warning.style.display = "none";
      const step4 = document.querySelectorAll(".step")[3];
      step3.classList.remove("disabled");
    }
  }

  // Update current step
  currentStep = step;

  const progressBar = document.querySelector(".progress-bar");

  // Update progress bar width
  const progressPercent = step === 1 ? "25%" : step === 2 ? "50%" : "100%";
  progressBar.style.width = progressPercent;

  // Hide all content divs
  const contents = document.querySelectorAll(".dynamic-content");
  contents.forEach((content) => (content.style.display = "none"));

  // Show the content div for the current step
  document.getElementById("content" + step).style.display = "block";

  // Update the steps' classes and images
  const steps = document.querySelectorAll(".step");
  steps.forEach((stepElement, index) => {
    const imageContain = stepElement.querySelector(".image-contain");
    const stepText = stepElement.querySelector(".step-text");

    const activeImage = imageContain.querySelector(".active-image");
    const nonActiveImage = imageContain.querySelector(".non-active-image");

    stepElement.classList.remove("active");
    imageContain.classList.remove("active");
    stepText.classList.remove("text-active");

    if (index + 1 <= currentStep) {
      stepElement.classList.add("active");
      imageContain.classList.add("active");
      stepText.classList.add("text-active");
    }

    activeImage.style.display = stepElement.classList.contains("active")
      ? "block"
      : "none";
    nonActiveImage.style.display = stepElement.classList.contains("active")
      ? "none"
      : "block";
  });

  // Update step clickability based on current step
  steps.forEach((stepElement, index) => {
    stepElement.style.pointerEvents =
      index + 1 <= currentStep + 1 ? "auto" : "none";
  });

  // Handle completion of all steps
  if (currentStep === totalSteps) {
    //   alert("You have completed all steps!");
  }
}

function nextStep() {
  const form = document.getElementById("step1-form");
  const form2 = document.getElementById("step2-form");
  const form3 = document.getElementById("step3-form");
  const warning = document.getElementById("step1-warning");
  const warning2 = document.getElementById("step2-warning");
  const warning3 = document.getElementById("step3-warning");
    const prevButton = document.querySelector(".previous-btn");
    const nextButton = document.querySelector(".next-btn");
    const stepSection = document.querySelector(".second-section");
    const contentContain = document.querySelector(".content-contain");
  const containerAll = document.querySelector(".container-all");
    const singleProduct = document.getElementById("single-product");
  const step4 = document.getElementById("content4");
              singleProduct.style.display = "none";
  if (currentStep === 1) {
              singleProduct.style.display = "none";
       }
        if (currentStep === 2) {
    const isChecked = Array.from(
      form2.querySelectorAll('input[type="checkbox"]')
    ).some((checkbox) => checkbox.checked);
     singleProduct.style.display = "none";
    if (!isChecked) {
      warning2.style.display = "block";
      return;
    } else {
      warning2.style.display = "none";
    }

    const step3 = document.querySelectorAll(".step")[2];
    step3.classList.remove("disabled");
    }
    
    if (currentStep === 3) {
    const isChecked3= Array.from(
      form3.querySelectorAll('input[type="checkbox"]')
    ).some((checkbox) => checkbox.checked);
     singleProduct.style.display = "none";
    if (!isChecked3) {
      warning3.style.display = "block";
      return;
    } else {
      warning3.style.display = "none";
    }

  }


if (currentStep < totalSteps) {
    showStep(currentStep + 1);
    prevButton.style.visibility = "hidden";
    nextButton.style.visibility = "visible";
    step4.style.display = "none";
    containerAll.style.height = "100vh";
    document.body.style.overflow = "hidden"; 
} else {
    prevButton.style.visibility = "visible";
    nextButton.style.visibility = "hidden";
    step4.style.display = "block";
    contentContain.style.display = "none";
    stepSection.style.display = "none";
    containerAll.style.height = "auto";
    document.body.style.overflow = "auto"; 
}

}

function prevStep() {
        const prevButton = document.querySelector(".previous-btn");
    const nextButton = document.querySelector(".next-btn");
        const stepSection = document.querySelector(".second-section");
    const contentContain = document.querySelector(".content-contain");
    const containerAll = document.querySelector(".container-all");
      const step4 = document.getElementById("content4");
  if (currentStep > 1) {
      showStep(3);
                 prevButton.style.visibility = "hidden";
      nextButton.style.visibility = "visible";
           contentContain.style.display = "flex";
      stepSection.style.display = "block";
      step4.style.display = "none";
         containerAll.style.height = "100vh";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("step1-form");
  const content1 = document.getElementById("content1"); // Correct element
  const singleProduct = document.getElementById("single-product");

  let selectedCard = null;

  form.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // Uncheck all checkboxes and remove the 'selected' class from all cards
      form.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
      });

      form.querySelectorAll(".card").forEach((c) => {
        c.classList.remove("selected");
      });

      // Check the selected checkbox and add the 'selected' class
      const checkbox = card.querySelector('input[type="checkbox"]');
      checkbox.checked = true;

      if (selectedCard) {
        selectedCard.classList.remove("selected");
      }
      card.classList.add("selected");
      selectedCard = card;

      // Hide the content1 div
      content1.style.display = "none";

      // Show the single-product div
      singleProduct.style.display = "block"; // Ensure single-product is a flex container
    });
  });

  // Initially disable Step 2 if needed
  const step2 = document.querySelectorAll(".step")[1];
  step2.classList.add("disabled");
  step2.style.pointerEvents = "none"; // Disable click
});




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("step2-form");
  let selectedCard = null;

  form.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      form.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
      });

      form.querySelectorAll(".card").forEach((c) => {
        c.classList.remove("selected");
      });

      const checkbox = card.querySelector('input[type="checkbox"]');
      checkbox.checked = true;

      if (selectedCard) {
        selectedCard.classList.remove("selected");
      }
      card.classList.add("selected");
      selectedCard = card;

      // Enable Step 2 when a product is selected
      const step3 = document.querySelectorAll(".step")[2];
      step3.classList.remove("disabled");
      step3.style.pointerEvents = "auto"; // Enable click
    });
  });

  // Initially disable Step 2
  const step3 = document.querySelectorAll(".step")[2];
  step3.classList.add("disabled");
  step3.style.pointerEvents = "none"; // Disable click

  showStep(currentStep); // Initially show the first step as active
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("step3-form");
  let selectedCard = null;

  form.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      form.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
      });

      form.querySelectorAll(".card").forEach((c) => {
        c.classList.remove("selected");
      });

      const checkbox = card.querySelector('input[type="checkbox"]');
      checkbox.checked = true;

      if (selectedCard) {
        selectedCard.classList.remove("selected");
      }
      card.classList.add("selected");
      selectedCard = card;

      // Enable Step 2 when a product is selected
      const step3 = document.querySelectorAll(".step")[2];
      step3.classList.remove("disabled");
      step3.style.pointerEvents = "auto"; // Enable click
    });
  });

  // Initially disable Step 2
  const step4 = document.querySelectorAll(".step")[3];
  step4.classList.add("disabled");
  step4.style.pointerEvents = "none"; // Disable click

  showStep(currentStep); // Initially show the first step as active
});



document.addEventListener('DOMContentLoaded', function() {
  const infoBtn = document.querySelector('.information-btn');
  const ratingBtn = document.querySelector('.rating-btn');
  const infoSection = document.querySelector('.information-section');
  const ratingSection = document.querySelector('.rating-section');

  infoBtn.addEventListener('click', function() {
    infoBtn.classList.add('active-btn');
    ratingBtn.classList.remove('active-btn');
    infoSection.classList.add('active-section');
    ratingSection.classList.remove('active-section');
  });

  ratingBtn.addEventListener('click', function() {
    ratingBtn.classList.add('active-btn');
    infoBtn.classList.remove('active-btn');
    ratingSection.classList.add('active-section');
    infoSection.classList.remove('active-section');
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.play-pause-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the video ID from the data attribute
      const videoId = this.getAttribute('data-video-id');
      // Select the video element with that ID
      const video = document.getElementById(videoId);

      // Pause all other videos
      document.querySelectorAll('.video').forEach(v => {
        if (v !== video && !v.paused) {
          v.pause();
          // Reset the icon of the button associated with other videos
          const otherButton = document.querySelector(`button[data-video-id="${v.id}"]`);
          if (otherButton) {
            otherButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // Reset other buttons to play icon
          }
        }
      });

      // Toggle play/pause for the current video
      if (video.paused) {
        video.play();
        this.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change to pause icon
      } else {
        video.pause();
        this.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change to play icon
      }
    });
  });
});
