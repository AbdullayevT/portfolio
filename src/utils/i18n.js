import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        me: "Tapdig Abdullayev",
        about: "About",
        work: "Work",
        portfolio: "Portfolio",
        contact: "Contact",
        name: "Hi I'm Tapdig Abdullayev",
        position: "Front-end Developer",
        aboutMeDesc:
          "In my position as a Front-End engineer, I like to bridge the gap between engineering and design by fusing my technical expertise with my strong sense of aesthetics to produce products.",
        servicesTitle: "My services are...",
        servicesDesc:
          "Providing software solutions characterized by their reliability, scalability, and user-friendliness.",
        getInTouch: "Get in touch",
        planningAndAnalysis: "Planning and Analysis",
        planningAndAnalysisDesc:
          "In order to set clear objectives for revamping a non-profit's website, one needs to carefully review their current site, interact with stakeholders, and carry out user surveys. Employing a particular technological stack was influenced by this approach, which resulted in the development of a user-focused website that greatly improved interaction and communication with supporters.",
        development: "Development",
        developmentDesc:
          "With a background in responsive web application development, I am committed to designing efficient and user-centric digital experiences, and am skilled in HTML, CSS, JavaScript, React, Python, and database technologies such as MSQL.",
        maintenance: "Maintenance",
        maintenanceDesc:
          "I'm skilled in providing continuing assistance, addressing bugs, and improving web projects. I guarantee the project's long-term success by putting a strong emphasis on security and excellent client communication.",
        projectTitle: "Projects",
        coreDbTitle: "CoreDB",
        coreDbDesc:
          "Core data plays an essential role in the decision-making process at different stages of the field development of any oil and gas field. The customer's problem was that the large volume of available core data was stored in an unstructured manner with no conventional naming practices, scattered across the numerous folders of different technical personnel. The lack of an integrated database created additional effort and inefficiency in preconditioning, sorting, and manual transfer of required data between different disciplines, which diminished the potential value that core data could bring in.",
        expenseAppTitle: "Expense App",
        expenseAppDesc:
          "This project is a web-based platform designed for efficient business travel management. It allows users to request travel permissions, track expenses, schedule and book flights, and monitor the entire travel process. The platform aims to simplify and streamline travel-related tasks, enhancing transparency and cost control for organizations.",
        finxAppTitle: "FinX",
        finxAppDesc:
          "Money is an important topic now. Payment card or cash – how to keep track of your expenses? I decided to solve this problem and created an open-source web service using TypeScript. Now everyone can manage their expenses, divide them into categories and keep track of everyday expenses. For the project we used TypeScript in React, Ant Design components, as well as for styling - Tailwind CSS, SASS query, etc.",
        amtAppTitle: "Inventory Management",
        amtAppDesc:
          "The main goal of this project is to create a foundational framework for managing physical devices, providing operators with the ability to efficiently search and filter these devices. The system is designed to validate and refine the core functionality specific to computer assets, creating a strong foundation for future enhancements that will expand the capabilities of the system to include other peripheral devices into it. Integrating your asset management system with Microsoft Intune provides a robust solution for managing physical devices.",
        tradeFinanceTitle: "Trade Finance",
        tradeFinanceDesc:
          "Trade Finance is a comprehensive financial platform that allows users to view and analyze trades, integrate with financial services, and offer real-time trade information, transaction history tracking, and advanced analytics to support informed decision making.",
        gitRepo: "Get the Github repository",
        contactWithMeTitle: "Contact me",
        placeholderEmail: "E-mail",
        placeholderName: "Name",
        placeHolderMessage: "Message",
        submitBtn: "Submit",
        footerMessage: "Created by Tapdig Abdullayev",
        contactSuccessNotification: "Message sent",
        contactErrorNotification: "Something went wrong. Please try again.",
        formValidationEmail: "Please input your E-mail!",
        formTypeValidationEmail: "The input is not valid E-mail!",
        formValidationUserName: "Please input your username!",
        formValidationMessage: "Please input your message!",
      },
    },
    ru: {
      translation: {
        me: "Тапдыг Абдуллаев",
        about: "Обо Мне",
        work: "О работе",
        portfolio: "Портфолио",
        contact: "Связаться",
        name: "Привет, я Тапдыг Абдуллаев",
        position: "Front-end разработчик",
        aboutMeDesc:
          "Занимая должность Front-End инженера, я стараюсь преодолевать разрыв между проектированием и дизайном, объединяя свои технические знания с эстетическим восприятием при создании продуктов.",
        servicesTitle: "Мои услуги ...",
        servicesDesc:
          "Предоставление программных решений, отличающихся надежностью, масштабируемостью и удобством использования.",
        getInTouch: "Связаться",
        planningAndAnalysis: "Планирование и анализ",
        planningAndAnalysisDesc:
          "Для того чтобы поставить четкие задачи по модернизации сайта некоммерческой организации, необходимо тщательно изучить существующий сайт, пообщаться с заинтересованными сторонами, провести опросы пользователей. Под влиянием этого подхода был использован определенный технологический стек, в результате чего был создан сайт, ориентированный на пользователя, что значительно улучшило взаимодействие и коммуникацию со сторонниками.",
        development: "Разработка",
        developmentDesc:
          "Имея опыт разработки отзывчивых веб-приложений, я стремлюсь к созданию эффективного и ориентированного на пользователя цифрового опыта и обладаю навыками работы с HTML, CSS, JavaScript, React, Python и технологиями баз данных, такими как MSQL.",
        maintenance: "Обслуживание",
        maintenanceDesc:
          "Я умею оказывать постоянную помощь, устранять ошибки и улучшать веб-проекты. Я гарантирую долгосрочный успех проекта, уделяя особое внимание безопасности и отличной коммуникации с клиентом.",
        projectTitle: "Проекты",
        coreDbTitle: "CoreDB",
        coreDbDesc:
          "Данные о керне играют важную роль в процессе принятия решений на различных этапах разработки любого нефтегазового месторождения. Проблема заказчика заключалась в том, что большой объем имеющихся керновых данных хранился в неструктурированном виде, без общепринятой практики именования, разбросанным по многочисленным папкам различных технических специалистов. Отсутствие интегрированной базы данных приводило к дополнительным затратам и неэффективности, связанным с предварительной подготовкой, сортировкой и ручной передачей необходимых данных между различными подразделениями, что снижало потенциальную ценность керновых данных.",
        expenseAppTitle: "Expense App",
        expenseAppDesc:
          "Данный проект представляет собой веб-платформу, предназначенную для эффективного управления деловыми поездками. Она позволяет пользователям запрашивать разрешения на командировки, отслеживать расходы, планировать и бронировать рейсы, а также контролировать весь процесс командировки. Платформа призвана упростить и оптимизировать задачи, связанные с командировками, повысить прозрачность и контроль расходов организаций.",
        finxAppTitle: "FinX",
        finxAppDesc:
          "Деньги - важная тема сейчас. Платежная карта или наличные – как следить за своими затратами? Решил решить эту проблему и создал открытый веб-сервис с использованием TypeScript. Теперь каждый может управлять своими расходами, разделять их по категориям и следить за повседневными затратами. Для проекта использовал TypeScript в React, компоненты Ant Design, а также для стилизации – Tailwind CSS, технологию SASS и прочее.",
        amtAppTitle: "Inventory Management",
        amtAppDesc:
          "Основная цель этого проекта — создать основополагающую структуру для управления физическими устройствами, предоставляя операторам возможность эффективно искать и фильтровать эти устройства.Система предназначена для проверки и уточнения основных функций, характерных для компьютерных активов, создавая прочную основу для будущих усовершенствований, которые расширят возможности системы, включив в нее другие периферийные устройства. Интеграция системы управления ресурсами с Microsoft Intune обеспечит надежное решение для управления физическими устройствами.",
        tradeFinanceTitle: "Trade Finance",
        tradeFinanceDesc:
          "Trade Finance представляет собой комплексную финансовую платформу, которая позволяет пользователям просматривать и анализировать сделки, интегрироваться с финансовыми услугами. Она предлагает информацию о сделках в реальном времени, отслеживание истории транзакций и расширенную аналитику для поддержки принятия обоснованных решений.",
        gitRepo: "Перейти в репозиторий github",
        contactWithMeTitle: "Связаться со мной",
        placeholderEmail: "Электронная почта",
        placeholderName: "Имя",
        placeHolderMessage: "Сообщение",
        submitBtn: "Отправить",
        footerMessage: "Создано Тапдыг Абдуллаевым",
        contactSuccessNotification: "Сообщение отправлено",
        contactErrorNotification:
          "Что-то пошло не так. Пожалуйста, попробуйте еще раз.",
        formValidationEmail: "Пожалуйста, введите свой E-mail!",
        formTypeValidationEmail:
          "Входные данные не соответствуют действительности E-mail!",
        formValidationUserName: "Пожалуйста, введите свое имя",
        formValidationMessage: "Пожалуйста, введите ваше сообщение!",
      },
    },
    az: {
      translation: {
        me: "Tapdıq Abdullayev",
        about: "Haqqımda",
        work: "İşim haqqında",
        portfolio: "Portfolio",
        contact: "Əlaqə",
        name: "Salam mən Tapdıq Abdullayev",
        position: "Front-end Developer",
        aboutMeDesc:
          "Front-End mühəndisi vəzifəmdə məhsul istehsal etmək üçün texniki təcrübəmi güclü estetik bacarıqlarımla birləşdirərək mühəndislik və dizayn arasındakı boşluğu aradan qaldırmağa çalışıram.",
        servicesTitle: "Xidmətlərim ...",
        servicesDesc:
          "Etibarlılığı, genişlənməsi və istifadəçi dostu olması ilə xarakterizə olunan proqram həllərinin təmin edilməsi.",
        getInTouch: "Əlaqəyə keç",
        planningAndAnalysis: "Planlaşdırma və Təhlil",
        planningAndAnalysisDesc:
          "Qeyri-kommersiya təşkilatının veb-saytını yeniləmək üçün aydın məqsədlər qoymaq üçün onların cari saytını diqqətlə nəzərdən keçirmək, tərəflərlə əlaqə saxlamaq və istifadəçi sorğuları aparmaq lazımdır. Müəyyən bir texnoloji yığından istifadə bu yanaşmadan təsirləndi və bu, tərəfdarlarla qarşılıqlı əlaqəni və ünsiyyəti xeyli yaxşılaşdıran istifadəçi yönümlü veb-saytın inkişafı ilə nəticələndi.",
        development: "İnkişaf",
        developmentDesc:
          "Cavab verən veb proqramların hazırlanması sahəsində təcrübə ilə mən səmərəli və istifadəçi mərkəzli rəqəmsal məhsullar hazırlamağa sadiqəm və HTML, CSS, JavaScript, React, Python və MSQL kimi verilənlər bazası texnologiyalarında bacarıqlıyam.",
        maintenance: "Xidmət",
        maintenanceDesc:
          "Mən davamlı yardım göstərmək, səhvləri həll etmək və veb layihələri təkmilləşdirməkdə bacarıqlıyam. Təhlükəsizliyə və mükəmməl müştəri ünsiyyətinə böyük diqqət yetirməklə layihənin uzunmüddətli uğuruna zəmanət verirəm.",
        projectTitle: "Layihələr",
        coreDbTitle: "CoreDB",
        coreDbDesc:
          "Kern məlumatlar istənilən neft və qaz yatağının işlənməsinin müxtəlif mərhələlərində qərarların qəbulu prosesində mühüm rol oynayır. Müştərinin problemi ondan ibarət idi ki, mövcud kern məlumatların böyük həcmi müxtəlif texniki personalın çoxsaylı qovluqlarına səpələnmiş, heç bir şərti adlandırma təcrübəsi olmadan strukturlaşdırılmamış şəkildə saxlanılırdı. İnteqrasiya edilmiş məlumat bazasının olmaması lazımi məlumatların müxtəlif şöbələr arasında əvvəlcədən hazırlanması, çeşidlənməsi və əl ilə ötürülməsi ilə bağlı əlavə xərclərə və səmərəsizliyə gətirib çıxardı ki, bu da kern məlumatların potensial dəyərini azaltdı.",
        expenseAppTitle: "Expense App",
        expenseAppDesc:
          "Bu layihə biznes səyahətlərinin səmərəli idarə edilməsi üçün nəzərdə tutulmuş veb əsaslı platformadır. O, istifadəçilərə səyahət icazələri tələb etməyə, xərcləri izləməyə, uçuşları planlaşdırmağa, bron etməyə və bütün səyahət prosesinə nəzarət etməyə imkan verir. Platforma təşkilatlar üçün şəffaflığı və xərclərə nəzarəti artırmaqla səyahətlə bağlı vəzifələri sadələşdirmək məqsədi daşıyır.",
        finxAppTitle: "FinX",
        finxAppDesc:
          "Pul indi vacib bir mövzudur. Ödəniş kartı və ya nağd pul – xərclərinizi necə izləmək olar? Mən bu problemi həll etmək qərarına gəldim və TypeScript istifadə edərək açıq veb xidməti yaratdım. İndi hər kəs öz xərclərini idarə edə, onları kateqoriyalara ayıra və gündəlik xərclərin hesabını apara bilər. Layihə üçün React, Ant Design komponentlərində TypeScript-dən istifadə etdik, eləcə də üslub üçün - Tailwind CSS, SASS sorğusu və s.",
        amtAppTitle: "Inventory Management",
        amtAppDesc:
          "Bu layihənin əsas məqsədi fiziki cihazların idarə edilməsi üçün təməl çərçivə yaratmaq, operatorlara bu cihazları səmərəli şəkildə axtarmaq və filtrləmək imkanı verməkdir və eyni zamanda digər periferik cihazları daxil etmək üçün sistemin imkanlarını genişləndirəcək gələcək təkmilləşdirmələr üçün. Aktivlərin idarə edilməsi sisteminizin Microsoft Intune ilə inteqrasiyası fiziki cihazların idarə edilməsi üçün güclü həll yolu təqdim edir.",
        tradeFinanceTitle: "Trade Finance",
        tradeFinanceDesc:
          "Trade Finance istifadəçilərə hərraclara baxmaq və təhlil etmək, maliyyə xidmətləri ilə inteqrasiya etmək imkanı verən hərtərəfli maliyyə platformasıdır. O, məlumatlı qərar qəbulunu dəstəkləmək üçün real vaxt rejimində əməliyyat məlumatı, əməliyyat tarixinin izlənməsi və qabaqcıl analitika təklif edir.",
        gitRepo: "Github reposuna keçid edin",
        contactWithMeTitle: "Mənimlə əlaqə qur",
        placeholderEmail: "E-poçt",
        placeholderName: "Ad",
        placeHolderMessage: "Mesaj",
        submitBtn: "Göndər",
        footerMessage: "Tapdıq Abdullayev tərəfindən yaradılıb.",
        contactSuccessNotification: "Mesaj göndərildi",
        contactErrorNotification:
          "Nəsə xəta baş verdi. Zəhmət olmasa bir daha cəhd edin.",
        formValidationEmail: "Zəhmət olmasa e-poçtunuzu daxil edin!",
        formTypeValidationEmail: "Daxil edilmiş e-poçt ünvanı səhvdir!",
        formValidationUserName: "Zəhmət olmasa adınızı daxil edin!",
        formValidationMessage: "Zəhmət olmasa mesajınızı daxil edin!",
      },
    },
  },
});

export default i18n;
