const terms = [

    {
        term: "Artificial Intelligence",
        kz: "Жасанды интеллект",
        ru: "Искусственный интеллект",
        category: "AI",
        definition: "Technology that enables computers to perform tasks that normally require human intelligence.",
        example: "Artificial intelligence can analyze large amounts of data."
    },

    {
        term: "Machine Learning",
        kz: "Машиналық оқыту",
        ru: "Машинное обучение",
        category: "AI",
        definition: "A branch of artificial intelligence in which computers learn patterns from data.",
        example: "Machine learning is used to detect spam emails."
    },

    {
        term: "Neural Network",
        kz: "Нейрондық желі",
        ru: "Нейронная сеть",
        category: "AI",
        definition: "A computing system inspired by the structure of the human brain.",
        example: "A neural network can recognize objects in images."
    },

    {
        term: "Deep Learning",
        kz: "Терең оқыту",
        ru: "Глубокое обучение",
        category: "AI",
        definition: "A type of machine learning that uses multiple layers of neural networks.",
        example: "Deep learning is widely used in image recognition."
    },

    {
        term: "Natural Language Processing",
        kz: "Табиғи тілді өңдеу",
        ru: "Обработка естественного языка",
        category: "AI",
        definition: "A field of artificial intelligence that enables computers to understand human language.",
        example: "Natural language processing is used in translation systems."
    },

    {
        term: "Computer Vision",
        kz: "Компьютерлік көру",
        ru: "Компьютерное зрение",
        category: "AI",
        definition: "Technology that allows computers to interpret visual information.",
        example: "Computer vision can identify objects in photographs."
    },

    {
        term: "Generative AI",
        kz: "Генеративті жасанды интеллект",
        ru: "Генеративный искусственный интеллект",
        category: "AI",
        definition: "Artificial intelligence that can generate new text, images, audio or other content.",
        example: "Generative AI can create text from a short prompt."
    },

    {
        term: "Chatbot",
        kz: "Чат-бот",
        ru: "Чат-бот",
        category: "AI",
        definition: "A software application designed to communicate with users through conversation.",
        example: "The company uses a chatbot to answer customer questions."
    },

    {
        term: "Algorithm",
        kz: "Алгоритм",
        ru: "Алгоритм",
        category: "Programming",
        definition: "A step-by-step procedure used to solve a problem or perform a task.",
        example: "The algorithm sorts a list of numbers."
    },

    {
        term: "Programming Language",
        kz: "Бағдарламалау тілі",
        ru: "Язык программирования",
        category: "Programming",
        definition: "A formal language used to write instructions for computers.",
        example: "Python is a popular programming language."
    },

    {
        term: "Python",
        kz: "Python бағдарламалау тілі",
        ru: "Язык программирования Python",
        category: "Programming",
        definition: "A high-level programming language known for its simple syntax.",
        example: "Python is widely used for data analysis and artificial intelligence."
    },

    {
        term: "JavaScript",
        kz: "JavaScript бағдарламалау тілі",
        ru: "Язык программирования JavaScript",
        category: "Programming",
        definition: "A programming language commonly used to make websites interactive.",
        example: "JavaScript adds interactive features to websites."
    },

    {
        term: "Variable",
        kz: "Айнымалы",
        ru: "Переменная",
        category: "Programming",
        definition: "A named storage location used to hold a value in a program.",
        example: "The variable stores the user's name."
    },

    {
        term: "Function",
        kz: "Функция",
        ru: "Функция",
        category: "Programming",
        definition: "A reusable block of code that performs a specific task.",
        example: "The function calculates the total price."
    },

    {
        term: "Loop",
        kz: "Цикл",
        ru: "Цикл",
        category: "Programming",
        definition: "A programming structure that repeats a set of instructions.",
        example: "The loop processes every item in the list."
    },

    {
        term: "Compiler",
        kz: "Компилятор",
        ru: "Компилятор",
        category: "Programming",
        definition: "A program that translates source code into machine code or another executable form.",
        example: "The compiler converts the program into executable code."
    },

    {
        term: "Source Code",
        kz: "Бастапқы код",
        ru: "Исходный код",
        category: "Programming",
        definition: "Human-readable code written by a programmer.",
        example: "The developer uploaded the source code to GitHub."
    },

    {
        term: "Database",
        kz: "Дерекқор",
        ru: "База данных",
        category: "Data",
        definition: "An organized collection of data that can be stored and accessed electronically.",
        example: "The website stores customer information in a database."
    },

    {
        term: "Data",
        kz: "Деректер",
        ru: "Данные",
        category: "Data",
        definition: "Information that can be collected, stored and processed by a computer.",
        example: "The application collects data from users."
    },

    {
        term: "Dataset",
        kz: "Деректер жиынтығы",
        ru: "Набор данных",
        category: "Data",
        definition: "A structured collection of related data used for analysis or machine learning.",
        example: "Researchers trained the model using a large dataset."
    },

    {
        term: "Big Data",
        kz: "Үлкен деректер",
        ru: "Большие данные",
        category: "Data",
        definition: "Extremely large and complex datasets that require specialized technologies.",
        example: "Big data helps companies analyze customer behavior."
    },

    {
        term: "Data Analysis",
        kz: "Деректерді талдау",
        ru: "Анализ данных",
        category: "Data",
        definition: "The process of examining data to discover useful information and patterns.",
        example: "Data analysis helps researchers identify trends."
    },

    {
        term: "Data Visualization",
        kz: "Деректерді визуализациялау",
        ru: "Визуализация данных",
        category: "Data",
        definition: "The graphical representation of data using charts and graphs.",
        example: "Data visualization makes complex information easier to understand."
    },

    {
        term: "Cloud Computing",
        kz: "Бұлттық есептеу",
        ru: "Облачные вычисления",
        category: "Cloud",
        definition: "The delivery of computing services over the internet.",
        example: "Cloud computing allows companies to use remote servers."
    },

    {
        term: "Cloud Storage",
        kz: "Бұлттық сақтау",
        ru: "Облачное хранилище",
        category: "Cloud",
        definition: "A service that stores data on remote servers accessed through the internet.",
        example: "Users can save photos in cloud storage."
    },

    {
        term: "Virtual Machine",
        kz: "Виртуалды машина",
        ru: "Виртуальная машина",
        category: "Cloud",
        definition: "A software-based computer that runs inside another physical computer.",
        example: "The developer created a virtual machine for testing."
    },

    {
        term: "Server",
        kz: "Сервер",
        ru: "Сервер",
        category: "Cloud",
        definition: "A computer or system that provides services or resources to other computers.",
        example: "The server stores the website files."
    },

    {
        term: "Container",
        kz: "Контейнер",
        ru: "Контейнер",
        category: "Cloud",
        definition: "A lightweight package containing an application and everything it needs to run.",
        example: "The application runs inside a container."
    },

    {
        term: "Network",
        kz: "Желі",
        ru: "Сеть",
        category: "Networking",
        definition: "A group of connected computers or devices that communicate with each other.",
        example: "The office network connects all employee computers."
    },

    {
        term: "IP Address",
        kz: "IP мекенжайы",
        ru: "IP-адрес",
        category: "Networking",
        definition: "A numerical address used to identify a device on a network.",
        example: "Every device on the network has an IP address."
    },

    {
        term: "Router",
        kz: "Маршрутизатор",
        ru: "Маршрутизатор",
        category: "Networking",
        definition: "A device that forwards data between computer networks.",
        example: "The router connects the local network to the internet."
    },

    {
        term: "HTTP",
        kz: "HTTP протоколы",
        ru: "Протокол HTTP",
        category: "Networking",
        definition: "A protocol used for transferring information between web browsers and servers.",
        example: "The browser uses HTTP to request a web page."
    },

    {
        term: "DNS",
        kz: "Домендік атаулар жүйесі",
        ru: "Система доменных имён",
        category: "Networking",
        definition: "A system that translates domain names into IP addresses.",
        example: "DNS converts a website name into an IP address."
    },

    {
        term: "Bandwidth",
        kz: "Өткізу қабілеті",
        ru: "Пропускная способность",
        category: "Networking",
        definition: "The amount of data that can be transmitted over a network in a given period.",
        example: "Higher bandwidth allows more data to be transferred."
    },

    {
        term: "Latency",
        kz: "Кідіріс",
        ru: "Задержка",
        category: "Networking",
        definition: "The time it takes for data to travel from one point to another.",
        example: "Low latency is important for online gaming."
    },

    {
        term: "Wi-Fi",
        kz: "Wi-Fi сымсыз желісі",
        ru: "Беспроводная сеть Wi-Fi",
        category: "Networking",
        definition: "A technology that allows devices to connect to a network wirelessly.",
        example: "The laptop connects to the internet through Wi-Fi."
    },

    {
        term: "Cybersecurity",
        kz: "Киберқауіпсіздік",
        ru: "Кибербезопасность",
        category: "Security",
        definition: "The practice of protecting computer systems, networks and data from digital threats.",
        example: "Cybersecurity protects organizations from cyber attacks."
    },

    {
        term: "Encryption",
        kz: "Шифрлау",
        ru: "Шифрование",
        category: "Security",
        definition: "The process of converting information into a protected form.",
        example: "Encryption protects sensitive information."
    },

    {
        term: "Authentication",
        kz: "Аутентификация",
        ru: "Аутентификация",
        category: "Security",
        definition: "The process of verifying the identity of a user or system.",
        example: "Authentication is required before accessing the account."
    },

    {
        term: "Firewall",
        kz: "Брандмауэр",
        ru: "Межсетевой экран",
        category: "Security",
        definition: "A security system that monitors and controls network traffic.",
        example: "The firewall blocks unauthorized network connections."
    },

    {
        term: "Malware",
        kz: "Зиянды бағдарлама",
        ru: "Вредоносное программное обеспечение",
        category: "Security",
        definition: "Software designed to damage systems or gain unauthorized access.",
        example: "The security program detected malware."
    },

    {
        term: "Data Privacy",
        kz: "Деректер құпиялылығы",
        ru: "Конфиденциальность данных",
        category: "Security",
        definition: "The protection and proper handling of personal and sensitive information.",
        example: "Data privacy is important when collecting user information."
    },

    {
        term: "Backup",
        kz: "Сақтық көшірме",
        ru: "Резервная копия",
        category: "Security",
        definition: "A copy of data created so it can be restored if the original is lost.",
        example: "The company makes a backup every day."
    },

    {
        term: "Operating System",
        kz: "Операциялық жүйе",
        ru: "Операционная система",
        category: "Systems",
        definition: "Software that manages computer hardware and provides services for applications.",
        example: "Windows is an operating system."
    },

    {
        term: "Kernel",
        kz: "Ядро",
        ru: "Ядро",
        category: "Systems",
        definition: "The core part of an operating system that manages hardware and system resources.",
        example: "The kernel manages access to computer memory."
    },

    {
        term: "Process",
        kz: "Процесс",
        ru: "Процесс",
        category: "Systems",
        definition: "A program or task that is currently being executed by a computer.",
        example: "The operating system manages running processes."
    },

    {
        term: "CPU",
        kz: "Орталық процессор",
        ru: "Центральный процессор",
        category: "Systems",
        definition: "The main component of a computer that executes instructions.",
        example: "The CPU processes program instructions."
    },

    {
        term: "Memory",
        kz: "Жад",
        ru: "Память",
        category: "Systems",
        definition: "Computer storage used to hold data and instructions for processing.",
        example: "The application requires more memory to run."
    },

    {
        term: "Software",
        kz: "Бағдарламалық жасақтама",
        ru: "Программное обеспечение",
        category: "Systems",
        definition: "Programs and applications that run on a computer.",
        example: "The company develops software for businesses."
    },

    {
        term: "Hardware",
        kz: "Аппараттық құралдар",
        ru: "Аппаратное обеспечение",
        category: "Systems",
        definition: "The physical components of a computer system.",
        example: "The keyboard is a hardware device."
    },

    {
        term: "API",
        kz: "Қолданбалы бағдарламалау интерфейсі",
        ru: "Программный интерфейс приложения",
        category: "Development",
        definition: "A set of rules that allows different software applications to communicate.",
        example: "The website uses an API to access weather data."
    },

    {
        term: "Frontend",
        kz: "Алдыңғы интерфейс бөлігі",
        ru: "Фронтенд",
        category: "Development",
        definition: "The part of a website or application that users directly interact with.",
        example: "The frontend displays the user interface."
    },

    {
        term: "Backend",
        kz: "Серверлік бөлік",
        ru: "Бэкенд",
        category: "Development",
        definition: "The server-side part of an application that handles data and business logic.",
        example: "The backend processes user requests."
    },

    {
        term: "HTML",
        kz: "Гипермәтінді белгілеу тілі",
        ru: "Язык гипертекстовой разметки",
        category: "Development",
        definition: "The standard markup language used to structure web pages.",
        example: "HTML defines the structure of a web page."
    },

    {
        term: "CSS",
        kz: "Стильдердің каскадтық кестелері",
        ru: "Каскадные таблицы стилей",
        category: "Development",
        definition: "A language used to control the appearance and layout of web pages.",
        example: "CSS controls the colors and spacing of the website."
    },

    {
        term: "Git",
        kz: "Git нұсқаларды басқару жүйесі",
        ru: "Система контроля версий Git",
        category: "Development",
        definition: "A distributed version control system used to track changes in files.",
        example: "Developers use Git to track changes in their code."
    },

    {
        term: "Repository",
        kz: "Репозиторий",
        ru: "Репозиторий",
        category: "Development",
        definition: "A storage location for a project's files and version history.",
        example: "The website code is stored in a GitHub repository."
    },

    {
        term: "Debugging",
        kz: "Қателерді түзету",
        ru: "Отладка",
        category: "Development",
        definition: "The process of finding and fixing errors in computer programs.",
        example: "Debugging helped the developer fix the website."
    },

    {
        term: "Version Control",
        kz: "Нұсқаларды басқару",
        ru: "Контроль версий",
        category: "Development",
        definition: "A system for tracking and managing changes to files over time.",
        example: "Version control allows developers to restore older versions."
    },

    {
        term: "Bug",
        kz: "Бағдарламалық қате",
        ru: "Программная ошибка",
        category: "Development",
        definition: "An error or unexpected behavior in a computer program.",
        example: "The developer found a bug in the application."
    },

    {
        term: "Framework",
        kz: "Фреймворк",
        ru: "Фреймворк",
        category: "Development",
        definition: "A reusable structure that provides tools and components for software development.",
        example: "The developer uses a web framework to build the application."
    },

    {
        term: "Web Browser",
        kz: "Веб-браузер",
        ru: "Веб-браузер",
        category: "Development",
        definition: "Software used to access and display websites on the internet.",
        example: "Chrome is a popular web browser."
    },

    {
        term: "Website",
        kz: "Веб-сайт",
        ru: "Веб-сайт",
        category: "Development",
        definition: "A collection of related web pages available on the internet.",
        example: "The company launched a new website."
    },

    {
        term: "Open Source",
        kz: "Ашық бастапқы код",
        ru: "Открытый исходный код",
        category: "Development",
        definition: "Software whose source code is available for inspection and modification.",
        example: "Linux is an open-source operating system."
    },

    {
        term: "URL",
        kz: "URL мекенжайы",
        ru: "URL-адрес",
        category: "Networking",
        definition: "The address used to locate a resource on the internet.",
        example: "Enter the URL in the browser's address bar."
    },

    {
        term: "Blockchain",
        kz: "Блокчейн",
        ru: "Блокчейн",
        category: "Emerging Tech",
        definition: "A distributed digital ledger that records transactions in linked blocks.",
        example: "Blockchain can be used to record digital transactions."
    },

    {
        term: "Internet of Things",
        kz: "Заттар интернеті",
        ru: "Интернет вещей",
        category: "Emerging Tech",
        definition: "A network of physical devices that collect and exchange data over the internet.",
        example: "Smart home devices are part of the Internet of Things."
    },

    {
        term: "Virtual Reality",
        kz: "Виртуалды шындық",
        ru: "Виртуальная реальность",
        category: "Emerging Tech",
        definition: "A technology that creates an immersive computer-generated environment.",
        example: "Virtual reality can be used for training simulations."
    },

    {
        term: "Augmented Reality",
        kz: "Толықтырылған шындық",
        ru: "Дополненная реальность",
        category: "Emerging Tech",
        definition: "Technology that adds digital information to the user's view of the real world.",
        example: "Augmented reality can display directions over a real street."
    },

    {
        term: "Digital Transformation",
        kz: "Цифрлық трансформация",
        ru: "Цифровая трансформация",
        category: "Emerging Tech",
        definition: "The use of digital technologies to change business processes and services.",
        example: "Digital transformation can improve customer services."
    },

    {
        term: "Automation",
        kz: "Автоматтандыру",
        ru: "Автоматизация",
        category: "Emerging Tech",
        definition: "The use of technology to perform tasks with minimal human intervention.",
        example: "Automation can reduce repetitive manual work."
    }

];


/* =========================
   ELEMENTS
========================= */

const glossaryGrid = document.getElementById("glossaryGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category");


/* =========================
   DISPLAY TERMS
========================= */

function displayTerms(list) {

    if (!glossaryGrid) {
        return;
    }

    glossaryGrid.innerHTML = "";

    if (list.length === 0) {

        glossaryGrid.innerHTML = `
            <div class="no-results">
                <h2>No terms found</h2>
                <p>Try another search word or category.</p>
            </div>
        `;

        return;
    }

    list.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "term-card";

        card.style.animationDelay = `${index * 0.035}s`;

        card.innerHTML = `

            <div class="term-category">
                ${item.category}
            </div>

            <h2>
                ${item.term}
            </h2>

            <div class="translations">

                <div>
                    <span>ҚАЗ</span>
                    <strong>${item.kz}</strong>
                </div>

                <div>
                    <span>RU</span>
                    <strong>${item.ru}</strong>
                </div>

            </div>

            <div class="definition">

                <span>DEFINITION</span>

                <p>
                    ${item.definition}
                </p>

            </div>

            <div class="example">

                <span>EXAMPLE</span>

                <p>
                    “${item.example}”
                </p>

            </div>

        `;

        glossaryGrid.appendChild(card);

    });
}


/* =========================
   FILTER
========================= */

function filterTerms() {

    if (!searchInput) {
        return;
    }

    const searchValue =
        searchInput.value
        .toLowerCase()
        .trim();

    const activeButton =
        document.querySelector(".category.active");

    const selectedCategory =
        activeButton
        ? activeButton.dataset.category
        : "All";

    const filtered =
        terms.filter(item => {

            const text = `
                ${item.term}
                ${item.kz}
                ${item.ru}
                ${item.definition}
                ${item.example}
            `.toLowerCase();

            const matchesSearch =
                text.includes(searchValue);

            const matchesCategory =
                selectedCategory === "All" ||
                item.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });

    displayTerms(filtered);
}


/* =========================
   SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterTerms
    );

}


/* =========================
   CATEGORY BUTTONS
========================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        filterTerms();

    });

});


/* =========================
   INITIAL DISPLAY
========================= */

displayTerms(terms);


/* =========================
   CURSOR EFFECT
========================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);

document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);
