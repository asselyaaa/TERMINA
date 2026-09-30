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
        definition: "A branch of AI in which computer systems learn patterns from data.",
        example: "Machine learning is used to detect spam emails."
    },

    {
        term: "Neural Network",
        kz: "Нейрондық желі",
        ru: "Нейронная сеть",
        category: "AI",
        definition: "A computational model inspired by the structure of the human brain.",
        example: "A neural network can recognize objects in images."
    },

    {
        term: "Deep Learning",
        kz: "Терең оқыту",
        ru: "Глубокое обучение",
        category: "AI",
        definition: "A type of machine learning based on multi-layer neural networks.",
        example: "Deep learning is widely used in speech recognition."
    },

    {
        term: "Natural Language Processing",
        kz: "Табиғи тілді өңдеу",
        ru: "Обработка естественного языка",
        category: "AI",
        definition: "Technology that enables computers to understand and process human language.",
        example: "Natural language processing is used in chatbots."
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
        term: "Algorithm",
        kz: "Алгоритм",
        ru: "Алгоритм",
        category: "Programming",
        definition: "A step-by-step procedure for solving a problem or completing a task.",
        example: "The algorithm sorts the numbers from smallest to largest."
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
        example: "Python is often used for data analysis and AI."
    },

    {
        term: "JavaScript",
        kz: "JavaScript бағдарламалау тілі",
        ru: "Язык программирования JavaScript",
        category: "Programming",
        definition: "A programming language commonly used to create interactive web pages.",
        example: "JavaScript makes the glossary search interactive."
    },

    {
        term: "Variable",
        kz: "Айнымалы",
        ru: "Переменная",
        category: "Programming",
        definition: "A named storage location used to hold a value in a program.",
        example: "The variable stores the user's search query."
    },

    {
        term: "Function",
        kz: "Функция",
        ru: "Функция",
        category: "Programming",
        definition: "A reusable block of code designed to perform a specific task.",
        example: "The function displays the glossary terms."
    },

    {
        term: "Loop",
        kz: "Цикл",
        ru: "Цикл",
        category: "Programming",
        definition: "A programming structure that repeats a block of instructions.",
        example: "The loop processes every term in the glossary."
    },

    {
        term: "Database",
        kz: "Дерекқор",
        ru: "База данных",
        category: "Data",
        definition: "An organized collection of data that can be stored and accessed electronically.",
        example: "The application stores user information in a database."
    },

    {
        term: "Data",
        kz: "Деректер",
        ru: "Данные",
        category: "Data",
        definition: "Information that can be collected, stored and processed by a computer.",
        example: "The system processes customer data."
    },

    {
        term: "Dataset",
        kz: "Деректер жиынтығы",
        ru: "Набор данных",
        category: "Data",
        definition: "A structured collection of related data.",
        example: "The researchers used a large dataset for training."
    },

    {
        term: "Big Data",
        kz: "Үлкен деректер",
        ru: "Большие данные",
        category: "Data",
        definition: "Very large and complex datasets that require specialized technologies to process.",
        example: "Big data can help companies identify market trends."
    },

    {
        term: "Data Analysis",
        kz: "Деректерді талдау",
        ru: "Анализ данных",
        category: "Data",
        definition: "The process of examining data to discover useful information and patterns.",
        example: "Data analysis helps researchers understand user behavior."
    },

    {
        term: "Data Visualization",
        kz: "Деректерді визуализациялау",
        ru: "Визуализация данных",
        category: "Data",
        definition: "The representation of data using charts, graphs and other visual forms.",
        example: "Data visualization makes complex statistics easier to understand."
    },

    {
        term: "Cloud Computing",
        kz: "Бұлттық есептеу",
        ru: "Облачные вычисления",
        category: "Cloud",
        definition: "The delivery of computing services over the internet.",
        example: "Cloud computing allows users to access files from different devices."
    },

    {
        term: "Cloud Storage",
        kz: "Бұлттық сақтау",
        ru: "Облачное хранилище",
        category: "Cloud",
        definition: "A service that stores digital data on remote servers accessed through the internet.",
        example: "Cloud storage can be used to back up documents."
    },

    {
        term: "Virtual Machine",
        kz: "Виртуалды машина",
        ru: "Виртуальная машина",
        category: "Cloud",
        definition: "A software-based computer that runs inside another physical computer.",
        example: "Developers use virtual machines to test applications."
    },

    {
        term: "Server",
        kz: "Сервер",
        ru: "Сервер",
        category: "Cloud",
        definition: "A computer or system that provides services or resources to other computers.",
        example: "The web server delivers the website to users."
    },

    {
        term: "Network",
        kz: "Желі",
        ru: "Сеть",
        category: "Networking",
        definition: "A group of connected computers and devices that communicate with each other.",
        example: "The office computers are connected to the same network."
    },

    {
        term: "IP Address",
        kz: "IP мекенжайы",
        ru: "IP-адрес",
        category: "Networking",
        definition: "A numerical address used to identify a device on a network.",
        example: "Every device connected to the network can have an IP address."
    },

    {
        term: "Router",
        kz: "Маршрутизатор",
        ru: "Маршрутизатор",
        category: "Networking",
        definition: "A device that directs data between different networks.",
        example: "The router connects the local network to the internet."
    },

    {
        term: "Protocol",
        kz: "Хаттама",
        ru: "Протокол",
        category: "Networking",
        definition: "A set of rules that determines how devices communicate.",
        example: "HTTP is a protocol used for communication on the web."
    },

    {
        term: "HTTP",
        kz: "HTTP хаттамасы",
        ru: "Протокол HTTP",
        category: "Networking",
        definition: "A protocol used to transfer information between web browsers and servers.",
        example: "A browser uses HTTP to request a web page."
    },

    {
        term: "DNS",
        kz: "Домендік атаулар жүйесі",
        ru: "Система доменных имён",
        category: "Networking",
        definition: "A system that translates domain names into IP addresses.",
        example: "DNS helps browsers find the correct web server."
    },

    {
        term: "Cybersecurity",
        kz: "Киберқауіпсіздік",
        ru: "Кибербезопасность",
        category: "Security",
        definition: "The practice of protecting systems, networks and data from digital attacks.",
        example: "Cybersecurity is important for protecting personal information."
    },

    {
        term: "Encryption",
        kz: "Шифрлау",
        ru: "Шифрование",
        category: "Security",
        definition: "The process of converting information into a protected form.",
        example: "Encryption protects sensitive information during transmission."
    },

    {
        term: "Password",
        kz: "Құпиясөз",
        ru: "Пароль",
        category: "Security",
        definition: "A secret sequence of characters used to authenticate a user.",
        example: "A strong password should be difficult to guess."
    },

    {
        term: "Authentication",
        kz: "Аутентификация",
        ru: "Аутентификация",
        category: "Security",
        definition: "The process of verifying the identity of a user or system.",
        example: "Two-factor authentication provides an additional security layer."
    },

    {
        term: "Firewall",
        kz: "Брандмауэр",
        ru: "Межсетевой экран",
        category: "Security",
        definition: "A security system that monitors and controls network traffic.",
        example: "The firewall blocks unauthorized connections."
    },

    {
        term: "Malware",
        kz: "Зиянды бағдарлама",
        ru: "Вредоносное программное обеспечение",
        category: "Security",
        definition: "Software designed to damage systems or gain unauthorized access.",
        example: "The antivirus program detected malware."
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
        example: "The kernel controls access to computer memory."
    },

    {
        term: "Process",
        kz: "Процесс",
        ru: "Процесс",
        category: "Systems",
        definition: "A program or part of a program that is currently being executed.",
        example: "The operating system manages running processes."
    },

    {
        term: "Memory",
        kz: "Жад",
        ru: "Память",
        category: "Systems",
        definition: "Computer hardware used to store data temporarily or permanently.",
        example: "The application requires enough memory to run."
    },

    {
        term: "CPU",
        kz: "Орталық процессор",
        ru: "Центральный процессор",
        category: "Systems",
        definition: "The main processor responsible for executing computer instructions.",
        example: "The CPU performs calculations required by applications."
    },

    {
        term: "API",
        kz: "Қолданбалы бағдарламалау интерфейсі",
        ru: "Программный интерфейс приложения",
        category: "Development",
        definition: "A set of rules that allows different software systems to communicate.",
        example: "The website uses an API to retrieve information."
    },

    {
        term: "Frontend",
        kz: "Интерфейс бөлігі",
        ru: "Фронтенд",
        category: "Development",
        definition: "The part of a website or application that users directly interact with.",
        example: "HTML, CSS and JavaScript are commonly used for frontend development."
    },

    {
        term: "Backend",
        kz: "Серверлік бөлік",
        ru: "Бэкенд",
        category: "Development",
        definition: "The server-side part of an application that handles data and business logic.",
        example: "The backend processes requests from the frontend."
    },

    {
        term: "HTML",
        kz: "HTML белгілеу тілі",
        ru: "Язык разметки HTML",
        category: "Development",
        definition: "A markup language used to structure content on web pages.",
        example: "HTML defines the structure of the glossary page."
    },

    {
        term: "CSS",
        kz: "CSS стильдер тілі",
        ru: "Язык стилей CSS",
        category: "Development",
        definition: "A language used to control the appearance and layout of web pages.",
        example: "CSS defines the colors, spacing and typography of the website."
    },

    {
        term: "Git",
        kz: "Git нұсқаларды басқару жүйесі",
        ru: "Система контроля версий Git",
        category: "Development",
        definition: "A distributed version control system used to track changes in files.",
        example: "Git allows developers to keep a history of code changes."
    },

    {
        term: "Repository",
        kz: "Репозиторий",
        ru: "Репозиторий",
        category: "Development",
        definition: "A storage location for a project's files and version history.",
        example: "The TERMINA project is stored in a GitHub repository."
    },

    {
        term: "Debugging",
        kz: "Қателерді жөндеу",
        ru: "Отладка",
        category: "Development",
        definition: "The process of finding and fixing errors in software.",
        example: "Debugging helped the developer find the problem in the script."
    },

    {
        term: "Version Control",
        kz: "Нұсқаларды басқару",
        ru: "Контроль версий",
        category: "Development",
        definition: "A system for tracking and managing changes to files over time.",
        example: "Version control makes collaboration between developers easier."
    },

    {
        term: "Blockchain",
        kz: "Блокчейн",
        ru: "Блокчейн",
        category: "Emerging Tech",
        definition: "A distributed digital ledger that records transactions in linked blocks.",
        example: "Blockchain technology can be used to record transactions."
    },

    {
        term: "Internet of Things",
        kz: "Заттар интернеті",
        ru: "Интернет вещей",
        category: "Emerging Tech",
        definition: "A network of physical devices connected to the internet.",
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
        kz: "Кеңейтілген шындық",
        ru: "Дополненная реальность",
        category: "Emerging Tech",
        definition: "Technology that adds digital information to the user's view of the real world.",
        example: "Augmented reality can display navigation information on a phone screen."
    },

    {
        term: "Cloud Security",
        kz: "Бұлттық қауіпсіздік",
        ru: "Безопасность облака",
        category: "Cloud",
        definition: "Practices used to protect data and services in cloud environments.",
        example: "Cloud security helps protect applications hosted online."
    },

    {
        term: "Container",
        kz: "Контейнер",
        ru: "Контейнер",
        category: "Cloud",
        definition: "A lightweight isolated environment used to run an application and its dependencies.",
        example: "Developers use containers to package applications."
    },

    {
        term: "Docker",
        kz: "Docker контейнерлік платформасы",
        ru: "Платформа контейнеризации Docker",
        category: "Cloud",
        definition: "A platform used to develop, package and run applications in containers.",
        example: "Docker can simplify application deployment."
    },

    {
        term: "Kubernetes",
        kz: "Kubernetes контейнерлерді басқару жүйесі",
        ru: "Система оркестрации контейнеров Kubernetes",
        category: "Cloud",
        definition: "A platform for automating the deployment and management of containers.",
        example: "Kubernetes can manage containers across multiple servers."
    },

    {
        term: "Virtualization",
        kz: "Виртуализация",
        ru: "Виртуализация",
        category: "Systems",
        definition: "Technology that creates virtual versions of computing resources.",
        example: "Virtualization allows multiple virtual machines to run on one physical server."
    },

    {
        term: "Open Source",
        kz: "Ашық бастапқы код",
        ru: "Открытый исходный код",
        category: "Development",
        definition: "Software whose source code is available for inspection and modification.",
        example: "Linux is an example of open-source software."
    },

    {
        term: "Software",
        kz: "Бағдарламалық жасақтама",
        ru: "Программное обеспечение",
        category: "Systems",
        definition: "Programs and instructions that tell a computer what to do.",
        example: "The software needs to be updated."
    },

    {
        term: "Hardware",
        kz: "Аппараттық құралдар",
        ru: "Аппаратное обеспечение",
        category: "Systems",
        definition: "The physical components of a computer system.",
        example: "A keyboard is a hardware component."
    },

    {
        term: "Web Browser",
        kz: "Веб-браузер",
        ru: "Веб-браузер",
        category: "Development",
        definition: "Software used to access and display websites.",
        example: "Chrome is a widely used web browser."
    },

    {
        term: "Website",
        kz: "Веб-сайт",
        ru: "Веб-сайт",
        category: "Development",
        definition: "A collection of related web pages available on the internet.",
        example: "The TERMINA website contains a trilingual glossary."
    },

    {
        term: "URL",
        kz: "URL мекенжайы",
        ru: "URL-адрес",
        category: "Networking",
        definition: "A web address used to locate a resource on the internet.",
        example: "The browser uses a URL to open a website."
    },

    {
        term: "Data Privacy",
        kz: "Деректердің құпиялылығы",
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
        definition: "A copy of data created to protect against loss or damage.",
        example: "The company creates a backup of important files every day."
    },

    {
        term: "Antivirus",
        kz: "Антивирус",
        ru: "Антивирус",
        category: "Security",
        definition: "Software designed to detect, prevent and remove malicious software.",
        example: "The antivirus scans the computer for threats."
    },

    {
        term: "Authentication Token",
        kz: "Аутентификация токені",
        ru: "Токен аутентификации",
        category: "Security",
        definition: "A digital value used to prove that a user or application has been authenticated.",
        example: "The application uses an authentication token to access an API."
    },

    {
        term: "Biometrics",
        kz: "Биометрия",
        ru: "Биометрия",
        category: "Security",
        definition: "The use of physical or behavioral characteristics to identify a person.",
        example: "Fingerprint recognition is a biometric authentication method."
    },

    {
        term: "Data Mining",
        kz: "Деректерді іздеу",
        ru: "Интеллектуальный анализ данных",
        category: "Data",
        definition: "The process of discovering patterns and useful information in large datasets.",
        example: "Data mining can reveal customer purchasing patterns."
    },

    {
        term: "Data Science",
        kz: "Деректер ғылымы",
        ru: "Наука о данных",
        category: "Data",
        definition: "An interdisciplinary field that uses statistics, programming and computing to analyze data.",
        example: "Data science combines programming with statistical analysis."
    },

    {
        term: "Cloud Service",
        kz: "Бұлттық қызмет",
        ru: "Облачный сервис",
        category: "Cloud",
        definition: "A computing service delivered through a cloud platform.",
        example: "The company uses a cloud service to host its application."
    },

    {
        term: "Bandwidth",
        kz: "Өткізу қабілеті",
        ru: "Пропускная способность",
        category: "Networking",
        definition: "The amount of data that can be transmitted through a network in a given period.",
        example: "Higher bandwidth allows more data to be transferred quickly."
    },

    {
        term: "Latency",
        kz: "Кідіріс",
        ru: "Задержка",
        category: "Networking",
        definition: "The time required for data to travel from one point to another.",
        example: "Low latency is important for online gaming."
    },

    {
        term: "Wi-Fi",
        kz: "Wi-Fi сымсыз желісі",
        ru: "Беспроводная сеть Wi-Fi",
        category: "Networking",
        definition: "A technology that allows devices to connect to a network wirelessly.",
        example: "The laptop connects to the internet using Wi-Fi."
    },

    {
        term: "Malware Detection",
        kz: "Зиянды бағдарламаны анықтау",
        ru: "Обнаружение вредоносного ПО",
        category: "Security",
        definition: "The process of identifying potentially malicious software.",
        example: "Malware detection helps identify suspicious files."
    },

    {
        term: "Software Update",
        kz: "Бағдарламалық жасақтаманы жаңарту",
        ru: "Обновление программного обеспечения",
        category: "Systems",
        definition: "A newer version of software that may include fixes, improvements or new features.",
        example: "The software update fixed several security issues."
    },

    {
        term: "Compiler",
        kz: "Компилятор",
        ru: "Компилятор",
        category: "Programming",
        definition: "A program that translates source code into another form that a computer can execute.",
        example: "The compiler converts the source code into machine-readable instructions."
    },

    {
        term: "Source Code",
        kz: "Бастапқы код",
        ru: "Исходный код",
        category: "Programming",
        definition: "Human-readable instructions written by a programmer.",
        example: "The developer reviewed the source code before publishing the application."
    },

    {
        term: "Bug",
        kz: "Бағдарламалық қате",
        ru: "Программная ошибка",
        category: "Development",
        definition: "An error or defect in software that causes unexpected behavior.",
        example: "The developer fixed a bug in the search function."
    },

    {
        term: "Framework",
        kz: "Бағдарламалық құрылым",
        ru: "Фреймворк",
        category: "Development",
        definition: "A reusable software structure that provides tools and conventions for development.",
        example: "A web framework can speed up application development."
    },

    {
        term: "Machine Learning Model",
        kz: "Машиналық оқыту моделі",
        ru: "Модель машинного обучения",
        category: "AI",
        definition: "A computational model trained to recognize patterns and make predictions from data.",
        example: "The machine learning model predicts customer behavior."
    },

    {
        term: "Training Data",
        kz: "Оқыту деректері",
        ru: "Обучающие данные",
        category: "AI",
        definition: "Data used to train a machine learning model.",
        example: "The model requires high-quality training data."
    },

    {
        term: "Chatbot",
        kz: "Чат-бот",
        ru: "Чат-бот",
        category: "AI",
        definition: "A software application that communicates with users through text or voice.",
        example: "The university uses a chatbot to answer common questions."
    },

    {
        term: "Generative AI",
        kz: "Генеративті жасанды интеллект",
        ru: "Генеративный искусственный интеллект",
        category: "AI",
        definition: "AI systems that can generate new text, images, audio, code or other content.",
        example: "Generative AI can create text based on a user's instructions."
    },

    {
        term: "Prompt",
        kz: "Сұрау нұсқауы",
        ru: "Промпт",
        category: "AI",
        definition: "An instruction or input given to an AI system to produce a response.",
        example: "A clear prompt can help an AI system produce a more useful answer."
    },

    {
        term: "Cloud Platform",
        kz: "Бұлттық платформа",
        ru: "Облачная платформа",
        category: "Cloud",
        definition: "An online environment that provides computing resources and services.",
        example: "Developers can deploy applications on a cloud platform."
    },

    {
        term: "Digital Transformation",
        kz: "Цифрлық трансформация",
        ru: "Цифровая трансформация",
        category: "Emerging Tech",
        definition: "The adoption of digital technologies to change how organizations operate and deliver value.",
        example: "Digital transformation can improve business processes."
    },

    {
        term: "Automation",
        kz: "Автоматтандыру",
        ru: "Автоматизация",
        category: "Emerging Tech",
        definition: "The use of technology to perform tasks with limited human intervention.",
        example: "Automation can reduce repetitive manual work."
    }

];


// Получаем элементы страницы

const glossaryGrid = document.getElementById("glossaryGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category");


// Отображение терминов

function displayTerms(list) {

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


    list.forEach(item => {

        const card = document.createElement("article");

        card.className = "term-card";

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


// Фильтрация

function filterTerms() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const activeButton =
        document.querySelector(".category.active");

    const selectedCategory =
        activeButton.dataset.category;


    const filtered = terms.filter(item => {

        const matchesSearch =
            item.term.toLowerCase().includes(searchValue) ||
            item.kz.toLowerCase().includes(searchValue) ||
            item.ru.toLowerCase().includes(searchValue) ||
            item.definition.toLowerCase().includes(searchValue);


        const matchesCategory =
            selectedCategory === "All" ||
            item.category === selectedCategory;


        return matchesSearch && matchesCategory;

    });


    displayTerms(filtered);

}


// Поиск

searchInput.addEventListener(
    "input",
    filterTerms
);


// Категории

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterTerms();

    });

});


// Первоначальное отображение

displayTerms(terms);
