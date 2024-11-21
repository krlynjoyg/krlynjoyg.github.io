// Select the About Me section
const aboutMeSection = document.querySelector(".about-content");

// Intersection Observer setup for "About Me" section
const aboutObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'visible' class when in view
                entry.target.classList.add("visible");
            } else {
                // Optional: Remove 'visible' class when out of view
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.3, // Trigger when 30% of the section is visible
    }
);

// Observe the About Me section
aboutObserver.observe(aboutMeSection);


// My Favorites section animation
const favoriteItems = document.querySelectorAll(".favorite-item");

// Intersection Observer setup for "My Favorites" section
const favoritesObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'visible' class when in view
                entry.target.classList.add("visible");
            } else {
                // Optional: Remove 'visible' class when out of view
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.3, // Trigger when 30% of the item is visible
    }
);

// Observe each favorite item
favoriteItems.forEach((item) => favoritesObserver.observe(item));


// School Projects section animation
const projectItems = document.querySelectorAll(".project-item");

// Intersection Observer setup for "School Projects" section
const projectsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'visible' class when in view
                entry.target.classList.add("visible");
            } else {
                // Optional: Remove 'visible' class when out of view
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.3, // Trigger when 30% of the item is visible
    }
);

// Observe each project item
projectItems.forEach((item) => projectsObserver.observe(item));


// HTML Activities section animation
const htmlItems = document.querySelectorAll(".html-item");

// Intersection Observer setup for "HTML Activities" section
const htmlObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'visible' class when in view
                entry.target.classList.add("visible");
            } else {
                // Optional: Remove 'visible' class when out of view
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.3, // Trigger when 30% of the item is visible
    }
);

// Observe each HTML item
htmlItems.forEach((item) => htmlObserver.observe(item));


// Select all talent items
const talentItems = document.querySelectorAll(".talent-item");

// Intersection Observer setup for talent items
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'active' class when in view
                entry.target.classList.add("active");
            } else {
                // Optional: Remove 'active' class if leaving viewport
                entry.target.classList.remove("active");
            }
        });
    },
    {
        threshold: 0.2, // Trigger when 20% of the item is visible
    }
);

// Observe each talent item
talentItems.forEach((item) => observer.observe(item));


// Select all sections that need animations (Contact Me and Web Trivia)
const animatedSections = document.querySelectorAll(".booking-form, .api");

// Function to handle visibility using Intersection Observer
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'visible' class when in view
                entry.target.classList.add("visible");
            } else {
                // Remove 'visible' class when out of view
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.5, // Trigger animation when 50% of the section is visible
    }
);

// Attach the observer to all targeted sections
animatedSections.forEach((section) => {
    section.classList.add("hidden"); // Start with hidden state
    sectionObserver.observe(section);
});


// Set the minimum date to today
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', formattedDate);
document.getElementById('date').value = formattedDate;

// Handle form submission
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Gather form data
    const name = document.getElementById("firstName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value.trim();
    const message = document.getElementById("purpose").value.trim();

    // Validate the form data
    const errors = [];
    if (!name) errors.push("Name is required.");
    if (!phone) errors.push("Phone number is required.");
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push("Valid email is required.");
    if (!message) errors.push("Message cannot be empty.");

    if (errors.length > 0) {
        alert("Please fix the following errors:\n" + errors.join("\n"));
        return;
    }

    // Simulate data submission
    console.log("Form Submitted:", { name, phone, email, date, message });

    // Show success feedback
    alert("Thank you for your message! We will get back to you soon.");
    
    // Optionally reset the form
    contactForm.reset();
    document.getElementById('date').value = formattedDate; // Reset date to today's date
});

// Add real-time email validation
document.getElementById("email").addEventListener("input", (e) => {
    const email = e.target.value.trim();
    const emailField = e.target;
    if (!/\S+@\S+\.\S+/.test(email)) {
        emailField.style.border = "2px solid red";
    } else {
        emailField.style.border = "";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const questionElement = document.getElementById("trivia-question");
    const answersElement = document.getElementById("trivia-answers");
    const newQuestionButton = document.getElementById("new-question");

    // Web development-related questions
    const webDevQuestions = [
        {
            question: "What does HTML stand for?",
            correctAnswer: "HyperText Markup Language",
            incorrectAnswers: ["Hyperlink and Text Markup Language", "Home Tool Markup Language", "HyperTransfer Markup Language"],
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            correctAnswer: "color",
            incorrectAnswers: ["font-color", "text-color", "background-color"],
        },
        {
            question: "What does the <title> tag in HTML specify?",
            correctAnswer: "The title of the document in the browser tab",
            incorrectAnswers: ["The main heading of the webpage", "The footer of the document", "A hidden meta description"],
        },
        {
            question: "Which JavaScript method is used to add an element to the end of an array?",
            correctAnswer: ".push()",
            incorrectAnswers: [".add()", ".concat()", ".append()"],
        },
        {
            question: "What does CSS stand for?",
            correctAnswer: "Cascading Style Sheets",
            incorrectAnswers: ["Creative Style System", "Cascading Sheet Styles", "Computer Style Sheets"],
        },
        {
            question: "What does the DOM stand for in web development?",
            correctAnswer: "Document Object Model",
            incorrectAnswers: ["Data Object Module", "Document Operational Model", "Desktop Object Manager"],
        },
        {
            question: "Which HTTP status code means 'Not Found'?",
            correctAnswer: "404",
            incorrectAnswers: ["403", "500", "301"],
        },
        {
            question: "Which tag is used to include JavaScript in an HTML file?",
            correctAnswer: "<script>",
            incorrectAnswers: ["<js>", "<link>", "<code>"],
        },
    ];

    // Function to shuffle an array
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Fetch a random question from the custom set
    function fetchWebDevQuestion() {
        const randomIndex = Math.floor(Math.random() * webDevQuestions.length);
        const questionData = webDevQuestions[randomIndex];
        const { question, correctAnswer, incorrectAnswers } = questionData;

        // Log question data to the console
        console.log("Fetched Question Data:", questionData);

        // Combine and shuffle correct and incorrect answers
        const allAnswers = shuffleArray([...incorrectAnswers, correctAnswer]);

        // Display question
        questionElement.textContent = question;

        // Display answers
        answersElement.innerHTML = "";
        allAnswers.forEach((answer) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("submit-Btn");
            button.addEventListener("click", () => {
                if (answer === correctAnswer) {
                    alert("Correct!");
                } else {
                    alert("Wrong! The correct answer was: " + correctAnswer);
                }
                fetchWebDevQuestion(); // Load new question after answer
            });
            answersElement.appendChild(button);
        });
    }

    // Fetch a new question on page load and button click
    fetchWebDevQuestion();
    newQuestionButton.addEventListener("click", fetchWebDevQuestion);
});


