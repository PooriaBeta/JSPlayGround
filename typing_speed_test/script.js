
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
        title: "The Underground Railroad",
        content: "The Underground Railroad was a network of secret routes and safe houses used by enslaved African Americans to escape to free states and Canada during the 19th century. Despite its name, it was neither underground nor a railroad, but rather a metaphorical description of the covert operation. Conductors like Harriet Tubman, who made 19 trips and never lost a single person, guided freedom seekers along these routes. The network included safe houses called stations, operated by both free African Americans and white abolitionists known as station masters. Code words were used for security: Canada was called the Promised Land, and guides were called conductors. It's estimated that between 1810 and 1850, approximately 100,000 people escaped slavery through this remarkable network of courage and cooperation."
    },

    {
        title: "The Great Wall of China",
        content: "Contrary to popular belief, the Great Wall of China is not a single continuous wall but rather a series of walls and fortifications built over many centuries by different Chinese dynasties. The wall we see today was largely built during the Ming Dynasty between 1368 and 1644, though earlier versions date back over 2,000 years. The wall stretches over 13,000 miles when all of its branches are included, winding through mountains, deserts, and grasslands. It was built using a variety of materials including stone, brick, wood, and even rice flour as mortar. Millions of workers, including soldiers, peasants, and prisoners, participated in its construction. While it's often said the wall is visible from space, this is actually a myth - it's no more visible than any other human-made structure of similar size."
    },
    {
        title: "The Invention of the Transistor",
        content: "In 1947, at Bell Labs, three physicists-John Bardeen, Walter Brattain, and William Shockley-created the first working transistor, a breakthrough that would revolutionize modern electronics. Replacing bulky vacuum tubes, transistors allowed for miniaturization and led to the development of computers, smartphones, and countless other devices. These tiny switches, capable of amplifying and switching electrical signals, laid the groundwork for integrated circuits and microprocessors. The invention was so impactful that it earned the team the Nobel Prize in Physics in 1956. Without the transistor, the digital age as we know it would never have taken shape."
    },
    {
        title: "The Rise and Fall of Netscape",
        content: "In the mid-1990s, Netscape Navigator was the dominant web browser, pioneering many features that are now standard in the internet world. Founded by Marc Andreessen and Jim Clark, Netscape played a major role in the early days of the web and even triggered the infamous 'browser wars' against Microsoft's Internet Explorer. Despite a strong start and a wildly successful IPO in 1995, Netscape couldn't keep pace with Microsoft's bundling tactics and eventually lost market share. The company was acquired by AOL in 1999, and its legacy code became the foundation for Mozilla Firefox. Netscape's brief but influential reign reminds us how fast the tech landscape can shift."
    },
    {
        title: "The First Computer Bug",
        content: "The term 'computer bug' is widely used to describe errors in software or hardware, but its origin dates back to 1947 when engineers working on the Harvard Mark II computer found a moth trapped in a relay, disrupting the machine's operation. Grace Hopper, a pioneering computer scientist, documented the incident by taping the insect into the logbook and noting it as the 'first actual case of bug being found.' Though software glitches existed before, the story became legendary in tech history and helped solidify the term 'bug' in computing vernacular. Today, debugging remains an essential part of software development, thanks in part to that literal bug."
    },
    {
        title: "Moore's Law and the Power of Prediction",
        content: "In 1965, Gordon Moore, co-founder of Intel, made a bold observation: the number of transistors on a microchip doubles approximately every two years, while the cost of computers is halved. This insight, known as Moore's Law, became a guiding principle for the semiconductor industry for decades. It fueled rapid advances in computing power, enabling smartphones, AI, and cloud computing. While physical limitations have slowed the pace in recent years, the influence of Moore's Law on innovation, investment, and technology roadmaps remains significant. It's a rare example of a prediction that became a self-fulfilling prophecy in the world of tech."
    },
    {
        title: "The Origins of Open Source",
        content: "The open source movement began as a grassroots response to proprietary software restrictions. In the 1980s, Richard Stallman launched the GNU Project and founded the Free Software Foundation to promote freely distributable software. The movement gained major traction in the 1990s with the release of the Linux kernel by Linus Torvalds, inspiring a global community of developers to contribute to collaborative projects. Today, open source powers much of the internet, from web servers to operating systems and programming languages. Its principles of transparency, community, and freedom have transformed the software industry and continue to shape the future of technology."
    },
    {
        title: "Ada Lovelace: The First Programmer",
        content: "In the 19th century, long before the first computer was built, a brilliant mathematician named Ada Lovelace wrote what is now considered the first computer program. Working alongside Charles Babbage, who designed the Analytical Engine-a mechanical general-purpose computer-Lovelace envisioned how the machine could be used to manipulate symbols and perform tasks beyond mere number crunching. In her notes on Babbage's design, she included an algorithm for calculating Bernoulli numbers, marking the first instance of a published computer program. But even more visionary was her understanding that machines like the Analytical Engine could one day create music, graphics, and other forms of art using symbols and logic. This foresight, combined with her contributions to early computing theory, earned her the title of the world's first computer programmer. Though the Analytical Engine was never completed in her lifetime, Lovelace's legacy laid the philosophical groundwork for modern computing."
    },
    {
        title: "The Birth of the Internet",
        content: "The internet, as we know it today, began as a military research project during the Cold War. In 1969, the United States Department of Defense initiated ARPANET, a network designed to connect computers across various research institutions for secure communication. Using packet switching technology, ARPANET allowed data to be broken into small chunks, sent independently, and reassembled at the destination-an idea that became fundamental to the internet's architecture. Over the next two decades, protocols like TCP/IP were developed, allowing different networks to interconnect. By the early 1990s, the World Wide Web, created by Tim Berners-Lee at CERN, brought a user-friendly interface to the internet, using URLs, hyperlinks, and HTML pages. This innovation transformed the internet from an academic tool into a global phenomenon, forever changing how we communicate, learn, and do business. The internet's growth has been exponential, connecting over five billion people and becoming one of the most transformative inventions in human history."
    },
    {
        title: "The Fall of BlackBerry",
        content: "In the early 2000s, BlackBerry was the undisputed king of smartphones. Known for its physical keyboard, enterprise-grade security, and efficient email service, it became the go-to device for professionals, politicians, and even world leaders. At its peak, BlackBerry controlled over 40% of the U.S. smartphone market and had millions of loyal users around the world. However, the company failed to adapt quickly enough to the rise of touchscreen smartphones. When Apple introduced the iPhone in 2007 and Google followed with Android, the smartphone landscape shifted dramatically. Users wanted rich app ecosystems, intuitive interfaces, and larger screens-areas where BlackBerry lagged behind. Despite several attempts to reinvent itself with new operating systems and devices, BlackBerry couldn't regain its former dominance. By the mid-2010s, it had exited the phone market entirely, focusing instead on software and security solutions. The story of BlackBerry serves as a cautionary tale in tech history: innovation alone isn't enough-companies must anticipate change and adapt quickly or risk becoming obsolete."
    },
    {
        title: "The Space Race and Silicon Valley",
        content: "The mid-20th century space race between the United States and the Soviet Union didn't just send humans to the Moon-it also sparked an explosion of innovation that laid the foundation for Silicon Valley. In an effort to develop advanced computing systems, communications, and guidance technologies, NASA and other government agencies poured funding into electronics research. This led to breakthroughs in semiconductors, integrated circuits, and microprocessors, which became the backbone of modern computing. Many early Silicon Valley companies, such as Fairchild Semiconductor and Intel, were founded by scientists and engineers who had worked on government space and defense projects. The demand for smaller, faster, and more reliable technology for space exploration accelerated the development of computing hardware and helped establish the region as a hub for tech entrepreneurship. Over time, the culture of rapid prototyping, venture capital funding, and collaborative innovation took root, giving rise to the modern tech industry. The moon landing wasn't just a leap for mankind-it was a giant step for technology that continues to shape our digital world."
    },
    {
        title: "The Dot-Com Bubble",
        content: "In the late 1990s, the rapid rise of internet-based businesses triggered one of the most dramatic financial bubbles in history: the dot-com bubble. As the internet became more accessible and venture capital flowed freely, countless startups emerged with little more than a website, a bold idea, and a '.com' domain. Investors were eager to get in on the ground floor of the so-called 'new economy,' driving stock prices of tech companies to astronomical levels. Companies with no revenue and unsustainable business models were valued in the billions. At the height of the bubble, companies like Pets.com and Webvan spent millions on marketing while failing to build profitable operations. In March 2000, the Nasdaq peaked, and when the market realized that many of these companies couldn't deliver on their promises, the bubble burst. Within months, trillions of dollars in market value evaporated, and thousands of jobs were lost. However, not all was lost-some survivors, like Amazon and eBay, emerged stronger than ever. The dot-com bubble stands as a pivotal moment in tech history, illustrating both the promise and peril of innovation fueled by hype and speculation."
    },
        {
        title: "Children of the sky",
        content: "Alright, yeah Open up your heart, what do you feel? Open up your heart, what do you feel is real? Yeah The big bang may be a million years away, oh But I can't think of a better time to say World , hold on Instead of messing with our future, open up inside World (World), hold on (Hold on) One day you will have to answer to the children of the sky Children of the sky, oh-whoa Children of the sky Look inside, you'll find a deeper love The kind that only comes from high above If you ever meet your inner child, don't cry, no, no, oh Tell them everything is gonna be alright World , hold on Instead of messing with our future, open up inside World (World), hold on One day you will have to answer to the children of the sky World (World), hold on (Hold on) Instead of messing with our future, tell me no more lies World (Come on), hold on (Come on) One day you will have to answer to the children of the sky World, hold on, come on Everybody in the universe, come on Children of the sky, sing it, sing it, sing it really loud (Sing it really loud), come on All the ladies of the world, hold on, listen to the children of the sky Everybody, I and I, it's gonna be alright, love"
    },
{
    title: "Artificial Intelligence",
    content: "Artificial Intelligence (AI) has evolved from a niche field of computer science into one of the most transformative forces shaping modern society. From recommendation systems on streaming platforms to autonomous vehicles, AI is embedded in daily life more than most people realize. Machine learning algorithms analyze enormous datasets at incredible speeds, identifying patterns that would take humans years to uncover. This ability to process data rapidly has opened doors to innovations in medicine, finance, and communication. Despite its benefits, AI also raises significant ethical questions. Concerns over job automation, algorithmic bias, and data privacy continue to fuel debate worldwide. Policymakers and researchers are tasked with balancing progress with responsibility, ensuring that AI serves humanity rather than undermining it. As the technology grows more sophisticated, the importance of developing transparent, fair, and secure AI systems becomes increasingly urgent."
},
{
    title: "Quantum Computing",
    content: "Quantum computing represents one of the most groundbreaking shifts in computing power humanity has ever attempted. Unlike classical computers, which process information in binary bits of 0s and 1s, quantum computers use qubits that can exist in multiple states simultaneously. This phenomenon, known as superposition, allows quantum machines to tackle problems that would take traditional computers millions of years to solve. In fields such as drug discovery and cryptography, this leap could unlock possibilities that were once considered impossible. However, building stable quantum computers remains one of the greatest engineering challenges of our time. Qubits are highly sensitive to environmental disturbances, making them difficult to maintain in a reliable state. Tech giants and research institutions are racing to develop error-correcting techniques and scalable designs. While practical, widespread quantum computers may still be years away, progress continues steadily, hinting at a future where today's limits in computing power no longer exist."
},
{
    title: "The Internet",
    content: "The internet as we know it is just over three decades old, yet it has reshaped every aspect of human life. Initially designed to connect a small number of researchers, it has grown into a global network connecting billions of people. The invention of the World Wide Web in 1989 by Tim Berners-Lee made the internet accessible and user-friendly, laying the groundwork for online communication, commerce, and entertainment. Today, nearly every industry depends on internet infrastructure to operate efficiently. But the expansion of the internet has also introduced new vulnerabilities. Cybersecurity threats, misinformation, and digital addiction are pressing challenges that societies must address. As technologies like 5G and satellite internet push connectivity into remote regions, the need for robust online safety measures grows stronger. Balancing open access with security and privacy is one of the defining struggles of the digital age."
},
{
    title: "Virtual & Augmented Reality",
    content: "Virtual Reality (VR) and Augmented Reality (AR) are changing the way humans interact with digital environments. VR immerses users in entirely computer-generated worlds, allowing experiences like exploring distant planets or training in simulated workspaces. AR, by contrast, overlays digital information onto the real world, enabling applications such as navigation aids, educational tools, and real-time translations. Together, these technologies are blurring the boundaries between the physical and digital realms. The applications of VR and AR extend beyond gaming and entertainment. Industries such as healthcare, education, and architecture use immersive simulations to train professionals, visualize projects, and improve patient outcomes. However, accessibility and affordability remain hurdles to mainstream adoption. As hardware becomes lighter, cheaper, and more powerful, experts predict these immersive technologies will become as commonplace as smartphones within the next decade."
},
{
    title: "Space Exploration",
    content: "Space exploration is no longer limited to government agencies. Private companies have entered the race, lowering costs and accelerating innovation. Reusable rockets, pioneered by firms like SpaceX, have drastically reduced the price of launching payloads into orbit. This democratization of space travel opens doors for scientific research, satellite deployment, and even future colonization missions to Mars. The dream of making humanity a multi-planetary species feels closer now than ever before. Yet, space exploration also presents significant challenges. Harsh radiation, microgravity effects on the human body, and the vast distances involved make long-term missions incredibly complex. There are also environmental concerns about space debris and its impact on Earth's orbit. Despite these obstacles, international collaboration and private-public partnerships continue to push the boundaries of what is possible beyond our planet."
},
{
    title: "Cybersecurity",
    content: "Cybersecurity has become a cornerstone of the digital world. As individuals, companies, and governments rely more heavily on online platforms, the risk of cyberattacks grows proportionally. Data breaches, ransomware, and identity theft are no longer rare occurrences, they are part of a global landscape where billions of dollars are at stake. Hackers constantly develop new methods to exploit vulnerabilities, forcing cybersecurity experts to stay ahead with innovative defense mechanisms. Education and awareness are as critical as advanced technology in fighting cybercrime. Simple practices like strong passwords, two-factor authentication, and cautious browsing habits can prevent many attacks. On a larger scale, businesses and governments invest heavily in encryption, threat detection, and security audits. Cybersecurity is not just a technical challenge-it's a cultural shift that requires everyone to take responsibility for their digital safety."
},
{
    title: "Biotechnology",
    content: "Biotechnology is rapidly advancing, merging biology with cutting-edge technology to improve human health and the environment. CRISPR gene-editing tools, for example, allow scientists to precisely alter DNA, opening doors for curing genetic diseases that were previously untreatable. Innovations in biotechnology also extend to agriculture, where genetically modified crops are designed to withstand droughts and pests, addressing global food security concerns. However, biotechnology also raises ethical and safety debates. Editing the human genome introduces questions about unintended consequences and the possibility of 'designer babies'. Similarly, genetically modified organisms (GMOs) face public skepticism despite scientific consensus on their safety. The challenge lies in balancing the incredible potential of biotechnology with responsible governance and transparent communication to earn public trust."
},
{
    title: "Robotics",
    content: "Robotics has evolved far beyond factory automation. Modern robots assist in surgery, explore dangerous environments, and even provide companionship in elder care. Advances in sensors and machine learning allow robots to adapt to complex environments, performing tasks that once required human intuition. This progress hints at a future where robotics may play an even larger role in everyday life, from household chores to transportation. Despite these advancements, robots are not without limitations. They often struggle with tasks that require creativity, empathy, or nuanced decision-making. Engineers continue to work on bridging this gap by developing more advanced forms of artificial intelligence and human-robot interaction. As robots become more capable and widespread, society must consider the ethical, economic, and cultural impacts of sharing spaces and responsibilities with machines."
},
{
    title: "Renewable Energy",
    content: "Renewable energy technology is transforming how the world generates power. Solar, wind, and hydroelectric energy sources are expanding rapidly as costs decline and efficiency improves. Countries worldwide are investing heavily in clean energy infrastructure, aiming to reduce reliance on fossil fuels and combat climate change. Innovations like floating solar farms and offshore wind turbines demonstrate how creative engineering can unlock new possibilities for sustainable energy. Nevertheless, renewable energy still faces challenges such as energy storage and distribution. The intermittent nature of sunlight and wind requires advanced battery technology and smart grids to ensure reliable power delivery. While progress continues, the transition to renewable energy demands global cooperation, long-term investment, and public support. If successful, it could mark one of the most significant shifts in human history toward sustainability."
},
{
    title: "3D Printing",
    content: "3D printing, also known as additive manufacturing, has revolutionized the way objects are designed and produced. Instead of carving materials away, 3D printers build objects layer by layer using plastics, metals, or even biological materials. This method allows for unprecedented customization, faster prototyping, and reduced waste compared to traditional manufacturing. Industries from aerospace to healthcare are adopting 3D printing for everything from aircraft components to custom prosthetics. The future of 3D printing extends beyond industrial use. Researchers are experimenting with bioprinting, creating human tissue and organs that could one day replace transplants. Entire houses have been built using large-scale 3D printers, offering affordable housing solutions in record time. While challenges such as cost, scalability, and regulation remain, the potential of 3D printing to reshape economies and improve lives is immense."
},
{
    title: "Neural Interfaces",
    content: "Neural interfaces, also called brain-computer interfaces (BCIs), are technologies that enable direct communication between the human brain and external devices. Unlike traditional input methods such as keyboards or touchscreens, BCIs interpret neural signals in real time to control machines, potentially restoring movement to paralyzed patients or enhancing human capabilities. Current research explores both invasive implants and non-invasive approaches using EEG or fNIRS, each offering different trade-offs in accuracy and safety. Beyond medicine, neural interfaces could reshape how we interact with digital systems entirely. Imagine controlling augmented reality overlays or robotic limbs purely through thought. However, challenges remain, such as ensuring long-term biocompatibility, managing neural data privacy, and avoiding cognitive overload. The ethical implications are profound, as BCIs may blur the line between biological identity and digital augmentation."
},
{
    title: "Synthetic Biology",
    content: "Synthetic biology takes genetic engineering further by designing and constructing entirely new biological systems from scratch. Instead of merely editing genes, researchers create novel metabolic pathways, synthetic genomes, and engineered microorganisms with specific functions. For example, scientists have engineered bacteria to produce biofuels, biodegradable plastics, and even anti-malarial drugs at scale. This approach combines biology with principles from computer science and engineering, treating DNA as programmable code. Yet, the field also raises significant questions about safety and regulation. Releasing engineered organisms into the environment could have unpredictable ecological impacts. Biosecurity concerns also exist, as the same technologies could theoretically be misused for harmful purposes. Despite this, synthetic biology promises breakthroughs in medicine, agriculture, and climate change mitigation if developed responsibly."
},
{
    title: "Edge AI",
    content: "Edge AI refers to deploying artificial intelligence models directly on local devices-such as smartphones, drones, or IoT sensors-rather than relying entirely on cloud servers. This approach reduces latency, improves privacy, and allows critical decisions to be made in real time without a stable internet connection. For example, autonomous vehicles process massive amounts of sensor data locally to react instantly to road conditions. The rise of compact AI chips, such as tensor processing units (TPUs) and neuromorphic processors, is accelerating this trend. However, training large models still requires centralized computing power, so edge devices often run optimized or distilled versions of those models. Balancing efficiency, accuracy, and energy consumption is at the heart of edge AI development. As networks grow, this hybrid approach may form the backbone of truly distributed intelligence."
},
{
    title: "Nanorobotics",
    content: "Nanorobotics is the application of robotic principles at the nanometer scale, where machines are built from molecules and atoms. These devices are envisioned to perform tasks such as targeted drug delivery, repairing tissues at the cellular level, or detecting diseases before symptoms arise. For instance, researchers are experimenting with DNA origami techniques to fold strands of genetic material into nanoscale machines capable of transporting drugs directly to cancer cells. The potential of nanorobotics extends to environmental cleanup as well, where nanoscale devices could break down pollutants with extreme precision. The primary challenges include controlling movement at such a small scale, powering the devices, and ensuring biocompatibility inside the human body. Despite these hurdles, progress in materials science and molecular engineering continues to bring the vision of nanorobots closer to reality."
},
{
    title: "Photonic Computing",
    content: "Photonic computing uses light instead of electricity to process and transmit information, potentially surpassing the speed and efficiency limits of traditional silicon-based electronics. Photons can carry more data with less energy loss compared to electrons, and they do not generate as much heat. This makes photonic processors ideal for high-performance tasks such as machine learning, cryptography, and massive-scale simulations. Optical interconnects are already being integrated into data centers to reduce latency and improve bandwidth. Yet, creating full photonic processors remains challenging due to difficulties in miniaturizing optical components and integrating them with existing semiconductor technology. If solved, photonic computing could lead to ultra-fast, energy-efficient machines that redefine computational limits."
},
{
    title: "Bioinformatics and Genomic AI",
    content: "Bioinformatics combines computer science with biology to analyze massive amounts of genetic data. With the sequencing of the human genome and the advent of AI-driven analysis, researchers can now identify disease-causing mutations, predict drug responses, and design personalized treatments. Machine learning models trained on genomic datasets accelerate drug discovery and help map complex gene-environment interactions that influence health. The integration of cloud computing enables global collaboration, allowing scientists to compare genetic information across populations. However, managing the ethical use of genomic data remains critical. Issues of consent, data ownership, and genetic discrimination must be addressed to ensure trust. In the future, bioinformatics may unlock precision medicine, where treatments are tailored not only to a patient's condition but to their unique genetic blueprint."
},
{
    title: "Swarm Intelligence",
    content: "Swarm intelligence draws inspiration from the collective behavior of ants, bees, and other social organisms to design decentralized systems that solve complex problems. In technology, this concept is applied to fleets of drones coordinating without central control, distributed sensor networks monitoring environments, and algorithms optimizing logistics routes. The strength of swarm intelligence lies in its scalability and resilience-if one agent fails, the group adapts collectively. Engineers use mathematical models such as particle swarm optimization and ant colony optimization to replicate this emergent intelligence in artificial systems. Potential applications extend to disaster recovery, planetary exploration, and even traffic management in smart cities. However, the lack of centralized oversight raises challenges in predictability and control, making responsible deployment essential."
},
{
    title: "Cryptographic Post-Quantum Security",
    content: "Post-quantum cryptography is a rapidly developing field that seeks to secure digital communication against quantum computers. Traditional encryption methods, such as RSA and ECC, rely on mathematical problems like prime factorization, which quantum algorithms could solve exponentially faster. If large-scale quantum machines become practical, much of today's secure communication-including banking and government systems-would be vulnerable. To counter this, researchers are developing lattice-based, multivariate, and hash-based cryptographic algorithms resistant to quantum attacks. Standardization efforts are already underway by organizations like NIST to prepare for a quantum-safe internet. Transitioning to these systems requires global cooperation, as upgrading the world's cryptographic infrastructure is a massive undertaking. The shift to post-quantum security is not just technical but also strategic, shaping the resilience of the digital world for decades to come."
},
{
    title: "Brain-Inspired Hardware",
    content: "Brain-inspired hardware, or neuromorphic computing, mimics the architecture of the human brain to achieve more efficient and adaptive computation. Instead of processing information in linear steps like traditional CPUs, neuromorphic chips rely on spiking neural networks, where artificial neurons transmit information through electrical pulses. This design enables low-power, parallel processing ideal for real-time learning and sensory applications such as vision and speech recognition. Unlike conventional AI accelerators, neuromorphic systems can adapt to new data on the fly, potentially bringing machines closer to human-like perception. However, building scalable neuromorphic hardware requires breakthroughs in materials, algorithms, and integration with existing digital systems. If successful, these chips could power the next generation of autonomous robots, wearable AI devices, and energy-efficient supercomputers."
},
{
    title: "Digital Twins",
    content: "Digital twins are virtual replicas of physical systems that allow real-time monitoring, simulation, and optimization. Using sensors, data streams, and advanced modeling, digital twins provide a dynamic mirror of assets ranging from aircraft engines to entire smart cities. Engineers can run simulations on these virtual models to predict failures, optimize performance, and plan maintenance before issues occur in the real world. In healthcare, digital twins of organs are being explored to test treatments on virtual patients before applying them to humans. The integration of IoT, AI, and cloud platforms makes digital twins increasingly powerful and accessible. Yet, challenges such as data integration, cybersecurity, and standardization remain. As adoption grows, digital twins may redefine how industries operate, enabling predictive and adaptive systems that continuously improve themselves."
},
{
    title: "Digital Audio Workstations",
    content: "A Digital Audio Workstation (DAW) is the central hub of modern music production, providing tools for recording, editing, arranging, and mixing audio. Professional DAWs such as Ableton Live, Logic Pro, and Pro Tools offer advanced features like automation lanes, MIDI sequencing, and plugin hosting. Unlike traditional tape-based studios, DAWs allow non-linear editing, enabling infinite experimentation without destructive changes. The flexibility of DAWs has democratized music creation, giving producers with a laptop access to workflows once limited to multimillion-dollar studios. However, mastering a DAW requires both technical skill and creative vision, as the vast array of options can overwhelm beginners."
},
{
    title: "Analog vs Digital Synthesizers",
    content: "Synthesizers generate sound electronically, but the method differs between analog and digital designs. Analog synths use continuous electrical signals to create rich, organic tones often prized for their warmth and unpredictability. Digital synths, by contrast, rely on algorithms and digital signal processing, offering precise control, complex modulation, and the ability to replicate a wide variety of instruments. Many producers use hybrid setups, combining the tactile immediacy of analog gear with the versatility of digital software instruments. Understanding the strengths of each type helps musicians craft unique sonic identities, whether in electronic music, film scoring, or experimental sound design."
},
{
    title: "Prosecco Terroir",
    content: "The quality of Prosecco is deeply tied to terroir, the unique combination of soil, climate, and geography where grapes are grown. The Veneto and Friuli Venezia Giulia regions of Italy provide the ideal conditions for cultivating the Glera grape, which is the foundation of authentic Prosecco. Hillside vineyards benefit from better drainage, sunlight exposure, and cooler nighttime temperatures, producing grapes with higher acidity and more aromatic complexity. These environmental nuances directly influence the final flavor profile, from crisp citrus notes to floral undertones. Terroir is so critical that only sparkling wines from these designated regions can legally bear the name 'Prosecco.'"
},
{
    title: "Microphones in Studio Recording",
    content: "Microphones are the first link in the recording chain and significantly affect the captured sound. Condenser microphones are favored for their sensitivity and frequency response, making them ideal for vocals and acoustic instruments. Dynamic microphones, more durable and less sensitive, are often used for drums, guitar amplifiers, and live settings. Ribbon microphones provide a warm, vintage tone but require careful handling. Engineers often choose microphones not only for their specifications but also for their unique coloration and character. The placement, polar pattern, and preamp pairing further shape how a microphone translates sound into an audio signal."
},
{
    title: "Prosecco Production Method",
    content: "Unlike Champagne, which is made using the traditional method of secondary fermentation in the bottle, Prosecco is crafted primarily through the Charmat method. In this process, secondary fermentation occurs in large pressurized stainless steel tanks, which preserve the grape's natural freshness and fruit-forward characteristics. This approach produces sparkling wines that are lighter, more aromatic, and typically more affordable than traditional-method sparkling wines. The method emphasizes efficiency without compromising quality, making Prosecco one of the most globally popular sparkling wines. However, high-end Prosecco Superiore DOCG varieties may include longer fermentation periods to enhance complexity and texture."
},
{
    title: "Mastering Engineering",
    content: "Mastering is the final stage of music production, where a stereo mix is polished to ensure it translates consistently across playback systems. Mastering engineers apply equalization, compression, stereo enhancement, and limiting to optimize loudness and tonal balance. Unlike mixing, which balances individual instruments, mastering focuses on the track as a whole, preparing it for streaming, radio, or physical formats like vinyl. Advances in AI-based mastering platforms have made the process more accessible, though seasoned engineers argue that human ears remain irreplaceable for nuanced decisions. Proper mastering can be the difference between a good track and one that competes professionally in today's saturated music market."
},
{
    title: "Barrels and Fermentation in Prosecco",
    content: "Although Prosecco is primarily associated with stainless steel tank fermentation, some producers experiment with wooden barrels to add complexity. Stainless steel preserves bright fruit flavors and crisp acidity, while oak can impart subtle notes of vanilla, spice, or creaminess. Yeast selection also plays a crucial role, influencing mouthfeel and aromatic development during fermentation. Extended lees contact, where wine rests on spent yeast cells, can add texture and richness. These micro-decisions by winemakers highlight the artistry behind Prosecco production, demonstrating that even within standardized processes, craftsmanship and experimentation shape the final expression."
},
{
    title: "Audio Interfaces",
    content: "An audio interface is the bridge between analog sound and digital recording, converting microphone and instrument signals into a format usable by computers. High-quality interfaces offer superior analog-to-digital converters (ADCs), low-latency monitoring, and multiple input/output options for complex setups. Some models include built-in preamps, DSP-powered effects, and high-impedance instrument inputs. Choosing the right interface depends on workflow-solo producers may require just two channels, while studios handling full bands need dozens. With advancements in USB-C, Thunderbolt, and network-based audio protocols, modern interfaces balance portability with professional-grade fidelity."
},
{
    title: "Loudspeaker Design",
    content: "Studio monitors differ from consumer speakers by providing flat frequency response, ensuring that producers hear the true representation of their mix. Active monitors include built-in amplifiers optimized for the drivers, while passive monitors require external amplification. Key design elements such as cabinet material, porting, and crossover networks affect sound clarity and accuracy. High-end monitors employ technologies like ribbon tweeters, coaxial drivers, or waveguide designs to improve imaging and reduce distortion. Proper placement and acoustic treatment of the studio space are equally important, as even the best monitors can mislead if used in an untreated room."
},
{
    title: "Prosecco Global Market",
    content: "Prosecco has grown into one of the world's most consumed sparkling wines, with exports reaching record highs in Europe, North America, and Asia. Its approachable price point, light body, and versatility in cocktails such as the Bellini and Aperol Spritz have fueled its popularity. The global demand has led to debates about protecting the authenticity of Prosecco, as only wine produced within designated Italian regions can legally use the name. Producers face the challenge of balancing mass-market appeal with maintaining quality and heritage. Climate change also adds pressure, as shifting weather patterns threaten grape yields and consistency, prompting innovation in vineyard management."
},{
    title: "The Origins of the Piano",
    content: "The piano was invented around 1700 by Bartolomeo Cristofori, an Italian instrument maker working in Florence. Unlike the harpsichord, which plucked strings, Cristofori's design used hammers to strike strings, allowing musicians to play both soft (piano) and loud (forte) dynamics, hence the name 'pianoforte.' Over the centuries, the piano evolved with stronger frames, steel strings, and an expanded range of 88 keys. This versatility made it central to classical, jazz, and popular music, serving both as a solo instrument and a foundational tool for composition."
},
{
    title: "Classical Music and the Romantic Era",
    content: "Classical music from the 18th and 19th centuries laid the foundation for much of Western music theory. Composers like Mozart, Beethoven, and Chopin expanded musical structures and emotional expression. The Romantic era emphasized individuality and passion, leading to works with greater harmonic complexity and virtuosity. The piano became the dominant instrument of the salon and concert hall, inspiring innovations in technique and repertoire. These developments continue to influence modern genres, as contemporary music still borrows harmonic progressions and forms pioneered during this period."
},
{
    title: "Techno Music Origins",
    content: "Techno emerged in Detroit during the mid-1980s, pioneered by artists such as Juan Atkins, Derrick May, and Kevin Saunderson. Drawing influence from funk, electro, and European electronic music, techno emphasized repetitive rhythms, synthetic textures, and futuristic themes. Unlike disco or house, techno focused on machine-driven precision, often created with drum machines like the Roland TR-909 and synthesizers such as the Yamaha DX7. The genre spread globally, inspiring rave culture and festivals where music, technology, and community converged into immersive experiences."
},
{
    title: "Jazz Improvisation",
    content: "Jazz, which developed in the early 20th century, is distinguished by its improvisational nature. Rather than strictly following written scores, jazz musicians often build spontaneous melodies over chord progressions. Instruments like the piano, trumpet, and saxophone became iconic within jazz ensembles. Figures such as Miles Davis and John Coltrane pushed the boundaries of improvisation, influencing genres as diverse as hip-hop and electronic music. The emphasis on creativity and dialogue between musicians makes each jazz performance unique, capturing the moment rather than reproducing it."
},
{
    title: "Beethoven's Symphony No. 9",
    content: "Beethoven's Symphony No. 9, premiered in 1824, is one of the most influential works in classical music. Despite being completely deaf at the time, Beethoven composed a symphony that broke conventions by including a choral finale based on Friedrich Schiller's 'Ode to Joy.' The piece symbolizes human unity and has been adopted as an anthem for freedom and peace, even becoming the official anthem of the European Union. Its blend of orchestral power and vocal expression set a precedent for symphonic music that continues to resonate today."
},
{
    title: "Electronic Dance Music Evolution",
    content: "Electronic Dance Music (EDM) evolved from underground club culture in the 1980s into a global phenomenon by the 2000s. Early forms like house, techno, and trance shaped the foundations, while digital production tools expanded possibilities. Festivals such as Tomorrowland and Ultra Music Festival showcase massive audiences united by high-energy beats, LED visuals, and stage production. While criticized at times for commercialization, EDM continues to innovate with hybrid genres like future bass, dubstep, and melodic techno, keeping dance floors and streaming charts alive worldwide."
},
{
    title: "Chopin and Piano Virtuosity",
    content: "Frederic Chopin revolutionized piano music in the 19th century with compositions that emphasized lyrical melodies, expressive harmonies, and technical brilliance. His etudes, nocturnes, and ballades elevated piano performance to new levels of virtuosity, challenging pianists with rapid passages, intricate rhythms, and delicate touch. Chopin's music remains central to classical training and performance, with his works often described as the 'soul of the piano.' His influence extended beyond classical concert halls, shaping the expressive possibilities of piano in jazz and popular music."
},
{
    title: "The Story of 'Bohemian Rhapsody'",
    content: "Queen's 'Bohemian Rhapsody,' released in 1975, defied pop music conventions with its operatic structure, multiple sections, and six-minute runtime. Written by Freddie Mercury, the song blended ballad, opera, and rock in a way no major single had attempted before. Initially considered too long for radio, it became a global hit and remains one of the most iconic songs ever recorded. Its success was amplified by one of the first major promotional music videos, foreshadowing the MTV era and the rise of visual storytelling in music."
},
{
    title: "Minimalism in Music",
    content: "Minimalism, a movement in the late 20th century, focused on repetitive patterns, gradual changes, and simplicity in musical form. Composers like Steve Reich, Philip Glass, and Terry Riley pioneered this style, which contrasts with the complexity of Romantic and modernist works. Minimalism influenced not only classical music but also film scores, ambient music, and electronic genres. Its emphasis on texture and atmosphere over traditional melody and harmony reshaped how audiences perceive time, space, and emotion in music."
},
{
    title: "The Beatles and Studio Innovation",
    content: "The Beatles transformed studio recording into an art form during the 1960s. Albums such as 'Sgt. Pepper's Lonely Hearts Club Band' featured groundbreaking use of multitrack recording, tape loops, and unconventional instruments like sitars and orchestras within pop songs. Producer George Martin played a crucial role in pushing technical boundaries, turning Abbey Road Studios into a creative laboratory. The Beatles' experimentation influenced generations of musicians, proving that the studio itself could be an instrument of limitless creative expression."
},

{
    title: "The Birth of the Automobile",
    content: "The modern automobile traces its origins to Karl Benz, who patented the Benz Patent-Motorwagen in 1886. This three-wheeled vehicle used an internal combustion engine and marked the beginning of the automotive age. Benz's wife, Bertha, famously undertook the first long-distance drive to prove its practicality, leading to public fascination and commercial success. The invention revolutionized transportation, setting the foundation for over a century of innovation that would reshape cities, economies, and human mobility."
},
{
    title: "Henry Ford and the Assembly Line",
    content: "Henry Ford transformed car manufacturing in 1913 by introducing the moving assembly line at the Ford Motor Company. This innovation drastically reduced production time and costs, making automobiles affordable for the average consumer. The Model T became a symbol of industrial efficiency and accessibility, selling millions worldwide. Ford's methods also influenced industries beyond automotive manufacturing, setting the standard for mass production that defined 20th-century industry."
},
{
    title: "The Evolution of Electric Vehicles",
    content: "Electric vehicles (EVs) date back to the 19th century but faded with the rise of gasoline engines. However, environmental concerns and advances in battery technology revived the EV movement in the 21st century. Companies like Tesla, Rivian, and BYD are leading this revolution, developing long-range electric cars that rival traditional vehicles in performance. Solid-state batteries, regenerative braking, and rapid charging are pushing the limits of what electric mobility can achieve, marking a fundamental shift in how the world drives."
},
{
    title: "Hybrid Technology",
    content: "Hybrid vehicles combine internal combustion engines with electric motors to maximize fuel efficiency and reduce emissions. The Toyota Prius, launched in 1997, popularized this concept and became a symbol of sustainable driving. Hybrids use regenerative braking to recapture energy and optimize power usage. Plug-in hybrids extend this idea further, allowing short all-electric trips before switching to gasoline. As battery technology improves, hybrids serve as a crucial bridge between fossil fuels and full electrification."
},
{
    title: "Tesla's Disruption of the Auto Industry",
    content: "Tesla, founded by Elon Musk and Martin Eberhard in 2003, redefined public perception of electric cars. The Tesla Roadster proved EVs could be fast and stylish, while the Model S set new benchmarks for range and technology. Tesla's innovations, including over-the-air updates, Autopilot driver assistance, and a proprietary charging network, have forced legacy automakers to accelerate their electrification plans. The company's focus on vertical integration and software-driven design continues to influence the future of mobility."
},
{
    title: "The Legacy of Ferrari",
    content: "Ferrari, founded by Enzo Ferrari in 1939, epitomizes performance, craftsmanship, and racing heritage. Emerging from the world of Formula 1, Ferrari's road cars are designed with the same engineering precision as its race machines. Iconic models like the 250 GTO, F40, and LaFerrari have become benchmarks of automotive excellence. The brand's distinctive red color, prancing horse emblem, and roaring V12 engines symbolize Italian passion and mechanical artistry that transcends generations."
},
{
    title: "Japanese Automotive Precision",
    content: "Japan's automotive industry rose to global dominance after World War II through an obsession with quality and innovation. Toyota introduced the concept of 'Kaizen'continuous improvement while Honda, Nissan, and Mazda became known for engineering reliability and efficiency. The 1980s and 1990s saw Japanese performance icons like the Nissan Skyline GT-R, Mazda RX-7, and Toyota Supra achieve cult status worldwide. Today, Japan continues to lead in hybrid and hydrogen technologies, emphasizing sustainability without sacrificing performance."
},
{
    title: "German Engineering Excellence",
    content: "German manufacturers such as Mercedes-Benz, BMW, Audi, and Porsche are synonymous with precision engineering and luxury. Mercedes introduced countless safety innovations, including the crumple zone and anti-lock brakes. BMW's focus on driving dynamics made it the benchmark for performance sedans, while Porsche perfected sports car design with models like the 911. Germany's commitment to research, mechanical perfection, and long-term engineering philosophy has kept its automotive industry at the forefront for decades."
},
{
    title: "Autonomous Driving Technology",
    content: "Autonomous vehicles use sensors, cameras, radar, and artificial intelligence to navigate without human input. Companies like Waymo, Tesla, and Mercedes are advancing levels of automation defined by the SAE scale, ranging from driver assistance to full autonomy. LiDAR and neural network algorithms enable cars to interpret surroundings in real time. While challenges in regulation and safety remain, autonomous driving promises to reduce accidents, improve traffic flow, and redefine personal mobility in the coming decades."
},
{
    title: "The Role of Aerodynamics in Car Design",
    content: "Aerodynamics has become central to modern car design, influencing performance, efficiency, and stability. Engineers use wind tunnels and computational fluid dynamics (CFD) to reduce drag and optimize airflow. Features like active spoilers, diffusers, and air curtains help manage turbulence and downforce. Electric vehicles benefit particularly from aerodynamic efficiency, as reduced drag directly translates into extended range. From race cars to city commuters, the pursuit of aerodynamic perfection remains a defining factor in automotive innovation."
},
{
    title: "The Rise of Luxury Electric Brands",
    content: "As electrification reshapes the automotive landscape, luxury brands such as Lucid Motors, Polestar, and Porsche have entered the EV space with cutting-edge technology and design. Lucid Air's 500-mile range and Porsche's Taycan performance demonstrate that electric mobility can coexist with opulence and speed. Advanced battery cooling systems, immersive infotainment, and sustainable materials redefine what luxury means in a zero-emission future. These brands are setting new standards for elegance powered by electricity."
},
{
    title: "Formula 1 Technology Transfer",
    content: "Formula 1 racing is a testing ground for automotive innovation. Technologies like carbon-fiber construction, hybrid power units, and advanced telemetry systems often originate from F1 before reaching consumer vehicles. The sport's extreme conditions push engineers to the limits of efficiency and performance. Teams collect gigabytes of data each race, optimizing aerodynamics and power management. This relentless pursuit of marginal gains drives progress not only in motorsports but across the global automotive industry."
},
{
    title: "The Diesel Revolution and Its Decline",
    content: "Diesel engines became popular in Europe for their fuel efficiency and torque characteristics, with manufacturers like Volkswagen and Peugeot leading the charge. However, the Dieselgate scandal of 2015 exposed widespread emissions manipulation, damaging consumer trust and prompting stricter environmental regulations. While diesel technology continues in commercial and heavy-duty vehicles, its role in passenger cars is rapidly diminishing as electrification and clean energy solutions take precedence in global markets."
},
{
    title: "Car Safety Innovations",
    content: "Automotive safety has advanced from simple seatbelts to complex systems that actively prevent accidents. Airbags, crumple zones, and electronic stability control were early milestones, followed by adaptive cruise control, lane-keeping assist, and automatic emergency braking. Modern cars integrate AI-driven predictive safety systems capable of identifying potential collisions before they occur. As vehicle-to-vehicle (V2V) communication becomes widespread, cars will soon be able to coordinate maneuvers collectively, reducing crashes even further."
},
{
    title: "Italian Design Philosophy",
    content: "Italy's contribution to automotive design is legendary, with studios like Pininfarina, Bertone, and Italdesign shaping some of the most iconic vehicles ever built. Italian design emphasizes emotion, proportion, and elegance over pure function. Cars such as the Alfa Romeo Spider and Lamborghini Miura embody the nation's artistic heritage and flair for beauty. Even in the era of electrification, Italian automakers maintain their commitment to craftsmanship and aesthetics, ensuring that form and function remain inseparable."
},
{
    title: "Carbon Fiber and Lightweight Engineering",
    content: "Reducing weight has always been key to improving vehicle performance and efficiency. Carbon fiber, with its exceptional strength-to-weight ratio, has become the material of choice in high-end and racing vehicles. Originally exclusive to aerospace and Formula 1, carbon composites are now appearing in production supercars and even luxury sedans. Combined with aluminum and high-strength steel, these materials allow for faster acceleration, better handling, and reduced emissions, demonstrating how material science drives progress in automotive design."
},
{
    title: "Hydrogen Fuel Cell Vehicles",
    content: "Hydrogen fuel cell vehicles (FCVs) generate electricity through a chemical reaction between hydrogen and oxygen, emitting only water vapor. Models like the Toyota Mirai and Hyundai Nexo represent early commercial attempts at this clean technology. Fuel cells offer quick refueling and long range, rivaling gasoline cars, but infrastructure challenges and high production costs hinder widespread adoption. As renewable hydrogen production scales up, FCVs could play a key role in achieving carbon-neutral transportation."
},
{
    title: "The Story of Lamborghini",
    content: "Lamborghini was founded in 1963 by Ferruccio Lamborghini, originally a tractor manufacturer who sought to build a car that could rival Ferrari. His vision produced some of the most iconic supercars in history, including the Miura, Countach, and Aventador. Lamborghini cars are defined by bold design, high-revving engines, and uncompromising performance. The brand has since embraced hybrid and aerodynamic innovation while maintaining the theatrical flair that makes every Lamborghini instantly recognizable."
},
{
    title: "Connected Car Technology",
    content: "Connected cars use internet-based communication to link vehicles with each other and with external systems. This technology enables real-time navigation updates, remote diagnostics, and over-the-air software upgrades. Automakers integrate voice assistants, predictive maintenance, and infotainment ecosystems that merge seamlessly with smartphones. However, as connectivity grows, so do cybersecurity concerns. Balancing convenience with data privacy has become a central challenge in the era of digital mobility."
},
{
    title: "The Future of Urban Mobility",
    content: "As cities grow more congested, the concept of urban mobility is shifting from car ownership to shared, electric, and autonomous transport systems. Companies are developing compact EVs, e-bikes, and autonomous shuttles to reduce emissions and improve efficiency. Smart city infrastructure, powered by 5G and AI, will coordinate traffic flow dynamically. Traditional automakers are evolving into mobility service providers, recognizing that the next revolution in transportation may not be about owning cars but about accessing smarter, cleaner movement."
},{
    title: "The Birth of Artificial Intelligence",
    content: "Artificial Intelligence (AI) emerged as a formal academic discipline in 1956 at the Dartmouth Conference, where pioneers like John McCarthy, Marvin Minsky, and Claude Shannon envisioned machines that could simulate human intelligence. Early AI focused on symbolic reasoning and problem-solving, but progress was limited by computational power. Decades later, advances in data availability, machine learning algorithms, and processing hardware transformed AI from theoretical curiosity to practical technology driving global innovation."
},
{
    title: "Stuart J. Russell and Peter Norvig's Influence",
    content: "Stuart J. Russell and Peter Norvig co-authored 'Artificial Intelligence: A Modern Approach,' first published in 1995, which became the definitive textbook for AI education worldwide. The book integrates concepts from logic, probability, and computer science to provide a unified framework for understanding intelligent behavior. Russell has also emphasized AI safety and ethics, advocating for alignment between machine objectives and human values, while Norvig, as Google's Director of Research, has helped scale AI to real-world applications impacting billions."
},
{
    title: "Andrew Ng and the Rise of Deep Learning",
    content: "Andrew Ng is one of the most influential figures in modern AI, known for his work in deep learning and online education. As a co-founder of Google Brain, he helped pioneer large-scale neural networks capable of learning complex visual and auditory patterns. Ng later joined Baidu to lead AI research and founded DeepLearning.AI to make AI education accessible globally. His Coursera courses on machine learning have trained millions, shaping a generation of engineers who drive today's AI revolution."
},
{
    title: "The AI Winter and Revival",
    content: "AI has experienced cycles of optimism and disappointment known as 'AI winters.' In the 1970s and late 1980s, inflated expectations met technical limitations, leading to funding cuts and skepticism. However, breakthroughs in statistical learning, neural networks, and big data in the 2000s reignited progress. The rise of GPUs and deep learning transformed AI into a practical tool powering speech recognition, computer vision, and natural language processing, ushering in a new golden age of intelligent systems."
},
{
    title: "Neural Networks and the Human Brain",
    content: "Artificial neural networks are computational models inspired by the structure of the human brain. They consist of interconnected layers of artificial neurons that process data through weighted connections. Deep learning networks with multiple layers can identify abstract features from raw inputs, allowing them to recognize images, translate languages, and generate text. Although simplified compared to biological neurons, these systems have revolutionized pattern recognition and continue to bridge neuroscience and computer science."
},
{
    title: "Ethics and AI Alignment",
    content: "As AI systems become more autonomous, ensuring that their goals align with human values has become a central challenge. Stuart Russell advocates for a new paradigm of 'provably beneficial AI,' where machines remain uncertain about human preferences and seek guidance. Ethical concerns span bias, privacy, surveillance, and employment disruption. Researchers and policymakers are working toward frameworks that balance innovation with safety, recognizing that the societal impact of AI extends far beyond technology itself."
},
{
    title: "The Role of Data in Machine Learning",
    content: "Modern AI relies heavily on large datasets for training models to recognize patterns and make predictions. The quality, diversity, and quantity of data directly influence model performance. Techniques such as supervised, unsupervised, and reinforcement learning allow algorithms to learn from examples or interactions. However, data bias and privacy remain major concerns, prompting the development of synthetic data generation and federated learning to train AI systems responsibly while protecting user information."
},
{
    title: "Generative AI and Creativity",
    content: "Generative AI models, such as GPT and DALL·E, have demonstrated the ability to produce human-like text, images, and music. These systems use large-scale language models trained on diverse datasets to understand and generate creative outputs. While celebrated for artistic and productivity applications, generative AI raises questions about authorship, misinformation, and ethical use. The fusion of creativity and computation represents both a technological milestone and a cultural turning point in the digital era."
},
{
    title: "AI in Robotics and Automation",
    content: "Artificial intelligence has transformed robotics, enabling machines to perceive, learn, and adapt to complex environments. From industrial robots assembling cars to autonomous drones and surgical assistants, AI-powered systems combine computer vision, reinforcement learning, and motion planning to operate safely and efficiently. Research in humanoid robotics, such as Boston Dynamics' Atlas, continues to push boundaries, merging physical dexterity with cognitive intelligence in pursuit of truly autonomous agents."
},
{
    title: "The Future of Artificial Intelligence",
    content: "AI's trajectory points toward increasingly general and adaptive systems capable of performing a wide range of cognitive tasks. Research in artificial general intelligence (AGI) aims to create machines that can reason and learn like humans, raising profound philosophical and ethical questions. Thought leaders like Stuart Russell, Yoshua Bengio, and Demis Hassabis emphasize responsible development and global cooperation. Whether AI becomes humanity's greatest tool or its greatest risk will depend on how we guide its evolution."
},
{
    title: "The Birth of Computer Science",
    content: "Computer science as a formal discipline emerged in the mid-20th century, combining mathematics, logic, and engineering. Alan Turing's 1936 paper on computable numbers introduced the concept of the Turing Machine, a theoretical model that defines the limits of computation. Later, figures like John von Neumann developed architectures still used in modern computers. The field has since expanded to include algorithms, software engineering, artificial intelligence, and human-computer interaction, shaping nearly every aspect of modern life."
},
{
    title: "The Evolution of Programming Languages",
    content: "Programming languages evolved from low-level assembly code to high-level languages that prioritize readability and abstraction. Early languages like FORTRAN and COBOL paved the way for structured programming with C, while Java and Python emphasized portability and simplicity. Functional programming paradigms, exemplified by Lisp and Haskell, introduced new ways of reasoning about computation. Today, languages such as Rust and Go focus on safety and concurrency, reflecting how software development continually adapts to technological change."
},
{
    title: "Algorithms and Computational Complexity",
    content: "At the heart of computer science lies the study of algorithms step-by-step procedures for solving problems efficiently. Computational complexity theory, introduced by researchers like Stephen Cook and Richard Karp, classifies problems based on the resources required to solve them. The distinction between P and NP problems remains one of the most profound unsolved questions in mathematics and computer science. Understanding algorithmic efficiency is vital for optimizing everything from web search engines to quantum computing."
},
{
    title: "The Internet and Network Architecture",
    content: "The Internet began as ARPANET in the late 1960s, a U.S. research project aimed at enabling resilient communication between computers. The development of TCP/IP protocols by Vint Cerf and Bob Kahn standardized how data moves across networks, laying the foundation for the global Internet. Subsequent innovations like the World Wide Web, cloud computing, and distributed systems have transformed how information is shared and stored, making the Internet the backbone of the digital age(pooria was here)."
},
{
    title: "The Rise of Quantum Computing",
    content: "Quantum computing harnesses principles of quantum mechanics such as superposition and entanglement to perform computations beyond the reach of classical computers. Companies like IBM, Google, and D-Wave are developing quantum processors capable of solving optimization and cryptography problems exponentially faster than traditional systems. Although still in early stages, quantum algorithms such as Shor's and Grover's demonstrate the transformative potential of this technology, which could redefine fields from materials science to artificial intelligence."
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
const targetDiv = document.getElementById('finalResults');



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
    targetDiv.scrollIntoView({ behavior: 'smooth' });

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
