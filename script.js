const labels = {
     en: {
       who: "Who We Are",
       what: "What We Do",
       join: "Join Us",
       resources: "Resources",
       donations: "Donations",
       contact: "Contact",
     },
     pt: {
       who: "Quem Somos",
       what: "O Que Fazemos",
       join: "Participe",
       resources: "Recursos",
       donations: "Doações",
       contact: "Contato",
     },
     fr: {
       who: "Qui Nous Sommes",
       what: "Ce Que Nous Faisons",
       join: "Rejoignez-Nous",
       resources: "Ressources",
       donations: "Dons",
       contact: "Contact",
     },
     es: {
       who: "Quiénes Somos",
       what: "Qué Hacemos",
       join: "Únete",
       resources: "Recursos",
       donations: "Donaciones",
       contact: "Contacto",
     },
     ar: {
       who: "من نحن",
       what: "ماذا نفعل",
       join: "انضم إلينا",
       resources: "الموارد",
       donations: "التبرعات",
       contact: "اتصل بنا",
     },
     zh: {
       who: "我们是谁",
       what: "我们的工作",
       join: "加入我们",
       resources: "资源",
       donations: "捐赠",
       contact: "联系我们",
     },
     tl: {
       who: "Sino Kami",
       what: "Ano ang Aming Ginagawa",
       join: "Sumali sa Amin",
       resources: "Mga Mapagkukunan",
       donations: "Mga Donasyon",
       contact: "Makipag-ugnayan",
     },
   };

   function populateDropdown() {
     const dropdown = document.getElementById("languageDropdown");
     const languageNames = {
       en: "English",
       pt: "Português",
       fr: "Français",
       es: "Español",
       ar: "العربية",
       zh: "中文",
       tl: "Tagalog",
     };

     Object.entries(languageNames).forEach(([code, name]) => {
       const option = document.createElement("option");
       option.value = code;
       option.textContent = name;
       dropdown.appendChild(option);
     });

     dropdown.addEventListener("change", () => updateLabels(dropdown.value));
   }

   function updateLabels(lang) {
     const set = labels[lang] || labels.en;
     const coords = {
       who: [0.265, 0.585],
       what: [0.68, 0.585],
       join: [0.265, 0.725],
       resources: [0.68, 0.725],
       donations: [0.265, 0.845],
       contact: [0.68, 0.845],
     };

     const image = document.getElementById("bgImage");
     const imgWidth = image.offsetWidth;
     const imgHeight = image.offsetHeight;

     for (const key in set) {
       const label = document.getElementById("label-" + key);
       const [x, y] = coords[key];
       label.textContent = set[key];
       label.style.left = `${x * imgWidth}px`;
       label.style.top = `${y * imgHeight}px`;
     }

     // Atualiza o dropdown para refletir o idioma atual
     const dropdown = document.getElementById("languageDropdown");
     if (dropdown) dropdown.value = lang;
   }

   window.onload = () => {
     populateDropdown();

     const userLang = navigator.language || navigator.userLanguage;
     const langCode = userLang.split("-")[0];
     const initialLang = labels[langCode] ? langCode : "en";

     updateLabels(initialLang);

     const img = document.getElementById("bgImage");
     img.onload = () => {
       updateLabels(document.getElementById("languageDropdown").value);
     };

     window.addEventListener("resize", () => {
       updateLabels(document.getElementById("languageDropdown").value);
     });
   };
