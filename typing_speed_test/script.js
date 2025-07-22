
const texts = [
    {
        title: "The Honey Bee Dance",
        content: "Honey bees communicate the location of flowers through an intricate dance called the waggle dance. When a scout bee finds a good source of nectar, she returns to the hive and performs this figure-eight dance on the honeycomb. The angle of the dance relative to vertical indicates the direction of the flowers relative to the sun, while the duration of the waggle run tells other bees how far away the flowers are. This remarkable form of communication allows the entire colony to efficiently harvest nectar from the best available sources."
    },
    {
        title: "The Library of Alexandria",
        content: "The ancient Library of Alexandria was one of the largest and most significant libraries of the ancient world. Founded in the 3rd century BC in Alexandria, Egypt, it was part of the larger research institution called the Mouseion, which was dedicated to the Muses. The library attempted to collect all human knowledge and at its peak may have contained between 400,000 to 700,000 scrolls. Scholars from around the Mediterranean world came to study there, making it a center of learning and intellectual exchange that influenced the development of mathematics, astronomy, medicine, and philosophy."
    },
    {
        title: "Octopus Intelligence",
        content: "Octopuses are among the most intelligent invertebrates on Earth, displaying problem-solving abilities that rival those of many vertebrates. They can navigate complex mazes, use tools, and even exhibit what appears to be playful behavior. Perhaps most remarkably, octopuses can change not only their color but also their skin texture to perfectly mimic their surroundings. Each of their eight arms contains millions of chemoreceptors that can taste whatever they touch, essentially giving them the ability to taste with their hands. Their intelligence is all the more impressive considering they have a relatively short lifespan of only one to two years."
    },
    {
        title: "The Northern Lights",
        content: "The aurora borealis, commonly known as the northern lights, is one of nature's most spectacular displays. This phenomenon occurs when electrically charged particles from the sun collide with gases in Earth's atmosphere, creating brilliant curtains of light that dance across the night sky. The colors depend on which gases are involved: oxygen produces green and red lights, while nitrogen creates blue and purple hues. The lights are most commonly visible near the magnetic poles, which is why they're called northern and southern lights. Indigenous peoples of the Arctic have many legends about these lights, often viewing them as the spirits of their ancestors dancing in the sky."
    },
    {
        title: "The Mystery of Rapa Nui",
        content: "Easter Island, known to its inhabitants as Rapa Nui, is famous for its nearly 1,000 monumental statues called moai. These massive stone figures, carved between 1250 and 1500 CE, have puzzled archaeologists and visitors for centuries. Recent research has revealed that the moai were likely walked upright from the quarry to their final positions using a sophisticated rocking motion technique. The island's Polynesian inhabitants demonstrated remarkable engineering skills, creating these monuments without metal tools or wheels. The moai face inland, watching over the island's villages, with only a few exceptions that face the ocean. Each statue is unique, possibly representing important ancestors or chiefs of the island's clans."
    },
    {
        title: "The Fibonacci Spiral in Nature",
        content: "The Fibonacci sequence, where each number is the sum of the two preceding ones, appears throughout nature in surprising ways. From the spiral arrangement of seeds in sunflowers to the chambers of nautilus shells, this mathematical pattern seems to be nature's blueprint for efficiency and beauty. Flower petals often follow Fibonacci numbers: lilies have 3 petals, buttercups have 5, delphiniums have 8, and daisies typically have 34 or 55. Pine cones, pineapples, and even galaxies display this spiral pattern. Scientists believe this occurs because the Fibonacci spiral is the most efficient way to pack seeds or maximize exposure to sunlight and rain, demonstrating how mathematics and nature are intimately connected."
    },
    {
        title: "The Immortal Jellyfish",
        content: "Turritopsis dohrnii, known as the immortal jellyfish, has achieved what humans have long dreamed of: biological immortality. This small, transparent jellyfish can reverse its aging process and return to its juvenile polyp stage after reaching sexual maturity. When faced with physical damage, starvation, or old age, it can transform all of its existing cells into a younger state through a process called transdifferentiation. This means that theoretically, these jellyfish could live forever if they avoid predation and disease. Originally from the Caribbean, they have spread to oceans worldwide, possibly aided by their remarkable survival ability. Scientists are studying these creatures to understand the mechanisms of aging and cellular regeneration."
    },
    {
        title: "The Underground Railroad",
        content: "The Underground Railroad was a network of secret routes and safe houses used by enslaved African Americans to escape to free states and Canada during the 19th century. Despite its name, it was neither underground nor a railroad, but rather a metaphorical description of the covert operation. Conductors like Harriet Tubman, who made 19 trips and never lost a single person, guided freedom seekers along these routes. The network included safe houses called stations, operated by both free African Americans and white abolitionists known as station masters. Code words were used for security: Canada was called the Promised Land, and guides were called conductors. It's estimated that between 1810 and 1850, approximately 100,000 people escaped slavery through this remarkable network of courage and cooperation."
    },
    {
        title: "The Deep Sea Anglerfish",
        content: "In the crushing depths of the ocean, where sunlight never penetrates, the anglerfish has evolved one of nature's most bizarre survival strategies. These deep-sea predators use a bioluminescent lure, called an esca, which dangles from their heads like a fishing rod to attract prey in the eternal darkness. The light is produced by symbiotic bacteria that live in the lure, creating an eerie glow that draws unsuspecting fish close enough to be swallowed whole. What makes anglerfish even more unusual is their reproductive strategy: the tiny male permanently fuses to the much larger female's body, essentially becoming a living sperm factory. This extreme sexual dimorphism ensures that in the vast, sparsely populated deep ocean, the fish never miss an opportunity to reproduce."
    },
    {
        title: "The Great Wall of China",
        content: "Contrary to popular belief, the Great Wall of China is not a single continuous wall but rather a series of walls and fortifications built over many centuries by different Chinese dynasties. The wall we see today was largely built during the Ming Dynasty between 1368 and 1644, though earlier versions date back over 2,000 years. The wall stretches over 13,000 miles when all of its branches are included, winding through mountains, deserts, and grasslands. It was built using a variety of materials including stone, brick, wood, and even rice flour as mortar. Millions of workers, including soldiers, peasants, and prisoners, participated in its construction. While it's often said the wall is visible from space, this is actually a myth - it's no more visible than any other human-made structure of similar size."
    },
    {
        title: "The Invention of the Transistor",
        content: "In 1947, at Bell Labs, three physicists—John Bardeen, Walter Brattain, and William Shockley—created the first working transistor, a breakthrough that would revolutionize modern electronics. Replacing bulky vacuum tubes, transistors allowed for miniaturization and led to the development of computers, smartphones, and countless other devices. These tiny switches, capable of amplifying and switching electrical signals, laid the groundwork for integrated circuits and microprocessors. The invention was so impactful that it earned the team the Nobel Prize in Physics in 1956. Without the transistor, the digital age as we know it would never have taken shape."
    },
    {
        title: "The Rise and Fall of Netscape",
        content: "In the mid-1990s, Netscape Navigator was the dominant web browser, pioneering many features that are now standard in the internet world. Founded by Marc Andreessen and Jim Clark, Netscape played a major role in the early days of the web and even triggered the infamous 'browser wars' against Microsoft’s Internet Explorer. Despite a strong start and a wildly successful IPO in 1995, Netscape couldn’t keep pace with Microsoft's bundling tactics and eventually lost market share. The company was acquired by AOL in 1999, and its legacy code became the foundation for Mozilla Firefox. Netscape’s brief but influential reign reminds us how fast the tech landscape can shift."
    },
    {
        title: "The First Computer Bug",
        content: "The term 'computer bug' is widely used to describe errors in software or hardware, but its origin dates back to 1947 when engineers working on the Harvard Mark II computer found a moth trapped in a relay, disrupting the machine’s operation. Grace Hopper, a pioneering computer scientist, documented the incident by taping the insect into the logbook and noting it as the 'first actual case of bug being found.' Though software glitches existed before, the story became legendary in tech history and helped solidify the term 'bug' in computing vernacular. Today, debugging remains an essential part of software development, thanks in part to that literal bug."
    },
    {
        title: "Moore’s Law and the Power of Prediction",
        content: "In 1965, Gordon Moore, co-founder of Intel, made a bold observation: the number of transistors on a microchip doubles approximately every two years, while the cost of computers is halved. This insight, known as Moore’s Law, became a guiding principle for the semiconductor industry for decades. It fueled rapid advances in computing power, enabling smartphones, AI, and cloud computing. While physical limitations have slowed the pace in recent years, the influence of Moore’s Law on innovation, investment, and technology roadmaps remains significant. It’s a rare example of a prediction that became a self-fulfilling prophecy in the world of tech."
    },
    {
        title: "The Origins of Open Source",
        content: "The open source movement began as a grassroots response to proprietary software restrictions. In the 1980s, Richard Stallman launched the GNU Project and founded the Free Software Foundation to promote freely distributable software. The movement gained major traction in the 1990s with the release of the Linux kernel by Linus Torvalds, inspiring a global community of developers to contribute to collaborative projects. Today, open source powers much of the internet, from web servers to operating systems and programming languages. Its principles of transparency, community, and freedom have transformed the software industry and continue to shape the future of technology."
    },
    {
        title: "Ada Lovelace: The First Programmer",
        content: "In the 19th century, long before the first computer was built, a brilliant mathematician named Ada Lovelace wrote what is now considered the first computer program. Working alongside Charles Babbage, who designed the Analytical Engine—a mechanical general-purpose computer—Lovelace envisioned how the machine could be used to manipulate symbols and perform tasks beyond mere number crunching. In her notes on Babbage’s design, she included an algorithm for calculating Bernoulli numbers, marking the first instance of a published computer program. But even more visionary was her understanding that machines like the Analytical Engine could one day create music, graphics, and other forms of art using symbols and logic. This foresight, combined with her contributions to early computing theory, earned her the title of the world’s first computer programmer. Though the Analytical Engine was never completed in her lifetime, Lovelace’s legacy laid the philosophical groundwork for modern computing."
    },
    {
        title: "The Birth of the Internet",
        content: "The internet, as we know it today, began as a military research project during the Cold War. In 1969, the United States Department of Defense initiated ARPANET, a network designed to connect computers across various research institutions for secure communication. Using packet switching technology, ARPANET allowed data to be broken into small chunks, sent independently, and reassembled at the destination—an idea that became fundamental to the internet’s architecture. Over the next two decades, protocols like TCP/IP were developed, allowing different networks to interconnect. By the early 1990s, the World Wide Web, created by Tim Berners-Lee at CERN, brought a user-friendly interface to the internet, using URLs, hyperlinks, and HTML pages. This innovation transformed the internet from an academic tool into a global phenomenon, forever changing how we communicate, learn, and do business. The internet’s growth has been exponential, connecting over five billion people and becoming one of the most transformative inventions in human history."
    },
    {
        title: "The Fall of BlackBerry",
        content: "In the early 2000s, BlackBerry was the undisputed king of smartphones. Known for its physical keyboard, enterprise-grade security, and efficient email service, it became the go-to device for professionals, politicians, and even world leaders. At its peak, BlackBerry controlled over 40% of the U.S. smartphone market and had millions of loyal users around the world. However, the company failed to adapt quickly enough to the rise of touchscreen smartphones. When Apple introduced the iPhone in 2007 and Google followed with Android, the smartphone landscape shifted dramatically. Users wanted rich app ecosystems, intuitive interfaces, and larger screens—areas where BlackBerry lagged behind. Despite several attempts to reinvent itself with new operating systems and devices, BlackBerry couldn’t regain its former dominance. By the mid-2010s, it had exited the phone market entirely, focusing instead on software and security solutions. The story of BlackBerry serves as a cautionary tale in tech history: innovation alone isn’t enough—companies must anticipate change and adapt quickly or risk becoming obsolete."
    },
    {
        title: "The Space Race and Silicon Valley",
        content: "The mid-20th century space race between the United States and the Soviet Union didn’t just send humans to the Moon—it also sparked an explosion of innovation that laid the foundation for Silicon Valley. In an effort to develop advanced computing systems, communications, and guidance technologies, NASA and other government agencies poured funding into electronics research. This led to breakthroughs in semiconductors, integrated circuits, and microprocessors, which became the backbone of modern computing. Many early Silicon Valley companies, such as Fairchild Semiconductor and Intel, were founded by scientists and engineers who had worked on government space and defense projects. The demand for smaller, faster, and more reliable technology for space exploration accelerated the development of computing hardware and helped establish the region as a hub for tech entrepreneurship. Over time, the culture of rapid prototyping, venture capital funding, and collaborative innovation took root, giving rise to the modern tech industry. The moon landing wasn’t just a leap for mankind—it was a giant step for technology that continues to shape our digital world."
    },
    {
        title: "The Dot-Com Bubble",
        content: "In the late 1990s, the rapid rise of internet-based businesses triggered one of the most dramatic financial bubbles in history: the dot-com bubble. As the internet became more accessible and venture capital flowed freely, countless startups emerged with little more than a website, a bold idea, and a '.com' domain. Investors were eager to get in on the ground floor of the so-called 'new economy,' driving stock prices of tech companies to astronomical levels. Companies with no revenue and unsustainable business models were valued in the billions. At the height of the bubble, companies like Pets.com and Webvan spent millions on marketing while failing to build profitable operations. In March 2000, the Nasdaq peaked, and when the market realized that many of these companies couldn’t deliver on their promises, the bubble burst. Within months, trillions of dollars in market value evaporated, and thousands of jobs were lost. However, not all was lost—some survivors, like Amazon and eBay, emerged stronger than ever. The dot-com bubble stands as a pivotal moment in tech history, illustrating both the promise and peril of innovation fueled by hype and speculation."
    }
];

let currentText = '';
let currentIndex = 0;
let startTime = null;
let endTime = null;
let timerInterval = null;
let errors = 0;
let isTestActive = false;

let isPaused = false;



function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const button = document.querySelector('.dark-mode-toggle');
    button.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function newText() {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    currentText = randomText.content;
    currentIndex = 0;
    errors = 0;
    startTime = null;
    endTime = null;
    isTestActive = false;

    document.getElementById('textInfo').innerHTML = `📚 <strong>${randomText.title}</strong>`;
    document.getElementById('textToType').innerHTML = currentText;
    document.getElementById('typingArea').value = '';
    document.getElementById('typingArea').disabled = false;
    document.getElementById('typingArea').focus();
    document.getElementById('results').classList.remove('show');

    updateStats();
    updateProgress();
    isPaused = false;
    document.getElementById('pauseButton').textContent = '⏸ Pause';

}

function resetTest() {
    currentIndex = 0;
    errors = 0;
    startTime = null;
    endTime = null;
    isTestActive = false;

    document.getElementById('typingArea').value = '';
    document.getElementById('typingArea').disabled = false;
    document.getElementById('results').classList.remove('show');

    updateDisplay();
    updateStats();
    updateProgress();
    isPaused = false;
    document.getElementById('pauseButton').textContent = '⏸ Pause';

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateDisplay() {
    const textElement = document.getElementById('textToType');
    const typedText = document.getElementById('typingArea').value;

    let html = '';
    for (let i = 0; i < currentText.length; i++) {
        const char = currentText[i];
        if (i < typedText.length) {
            if (typedText[i] === char) {
                html += `<span class="correct">${char}</span>`;
            } else {
                html += `<span class="incorrect">${char}</span>`;
            }
        } else if (i === typedText.length) {
            html += `<span class="current">${char}</span>`;
        } else {
            html += char;
        }
    }

    textElement.innerHTML = html;
}

function updateStats() {
    if (!startTime) {
        document.getElementById('wpm').textContent = '0';
        document.getElementById('accuracy').textContent = '100%';
        document.getElementById('time').textContent = '0s';
        document.getElementById('errors').textContent = '0';
        return;
    }

    const currentTime = endTime || new Date().getTime();
    const timeElapsed = (currentTime - startTime) / 1000;
    const typedText = document.getElementById('typingArea').value;

    // Calculate WPM (words per minute)
    const wordsTyped = typedText.trim().split(/\s+/).length;
    const wpm = Math.round((wordsTyped / timeElapsed) * 60);

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentText[i]) {
            correctChars++;
        }
    }
    const accuracy = typedText.length > 0 ? Math.round((correctChars / typedText.length) * 100) : 100;

    document.getElementById('wpm').textContent = wpm;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    document.getElementById('time').textContent = `${Math.round(timeElapsed)}s`;
    document.getElementById('errors').textContent = errors;
}

function updateProgress() {
    const typedText = document.getElementById('typingArea').value;
    const progress = (typedText.length / currentText.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

function showResults() {
    const currentTime = new Date().getTime();
    const timeElapsed = (currentTime - startTime) / 1000;
    const typedText = document.getElementById('typingArea').value;

    const wordsTyped = typedText.trim().split(/\s+/).length;
    const wpm = Math.round((wordsTyped / timeElapsed) * 60);

    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentText[i]) {
            correctChars++;
        }
    }
    const accuracy = Math.round((correctChars / typedText.length) * 100);

    document.getElementById('finalResults').innerHTML = `
                Your typing speed: <strong>${wpm} WPM</strong><br>
                Accuracy: <strong>${accuracy}%</strong><br>
                Time: <strong>${Math.round(timeElapsed)}s</strong><br>
                Errors: <strong>${errors}</strong>
            `;

    document.getElementById('results').classList.add('show');
    document.getElementById('typingArea').disabled = true;
}

document.getElementById('typingArea').addEventListener('input', function (e) {

    if (isPaused) return; // Ignore input when paused


    const typedText = e.target.value;

    // if (!startTime && typedText.length > 0) {
    //     startTime = new Date().getTime();
    //     isTestActive = true;
    //     timerInterval = setInterval(updateStats, 100);
    // }


    if (!startTime && typedText.length > 0) {
        startTime = new Date().getTime();
        isTestActive = true;
        timerInterval = setInterval(updateStats, 100);
    }

    // Check for errors
    if (typedText.length > 0) {
        const lastChar = typedText[typedText.length - 1];
        const expectedChar = currentText[typedText.length - 1];

        if (lastChar !== expectedChar) {
            errors++;
        }
    }

    // Check if test is complete
    if (typedText === currentText) {
        endTime = new Date().getTime();
        isTestActive = false;
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        showResults();
    }

    updateDisplay();
    updateStats();
    updateProgress();
});






document.getElementById('pauseButton').addEventListener('click', pauseTest);

function pauseTest() {
    if (!isTestActive) return; // Don't pause if test hasn't started

    isPaused = !isPaused;

    const pauseBtn = document.getElementById('pauseButton');
    const typingArea = document.getElementById('typingArea');

    if (isPaused) {
        clearInterval(timerInterval);
        timerInterval = null;
        typingArea.disabled = true;
        pauseBtn.textContent = '▶ Resume';
    } else {
        startTime = new Date().getTime() - getElapsedTime(); // Keep elapsed time
        typingArea.disabled = false;
        typingArea.focus();
        timerInterval = setInterval(updateStats, 100);
        pauseBtn.textContent = '⏸ Pause';
    }
}

function getElapsedTime() {
    const typedText = document.getElementById('typingArea').value;
    const time = document.getElementById('time').textContent;
    return parseFloat(time) * 1000;
}


document.getElementById('pauseButton2').addEventListener('click', function () {
    // Option 1: simulate clicking the pause button
    document.getElementById('pauseButton').click();

    // Option 2: directly call the function
    // pauseTest();
});







// Initialize with first text
newText();
