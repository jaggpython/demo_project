import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: "Home",
    about_us: "About us",
    products: "Products",
    contact_us: "Contact us",
    about_us_content:
      "Thandra, is a destination where the ancient wisdom of traditional Indian Ayurvedic medicine comes to life. Our roots trace back to a family with a rich heritage in the practice of these time-honed remedies. Founded by the Pandith Munesh Gowda a descendant of a humble former family living in the village Yanadahalli of the Kolar district, Thandra is dedicated to preserving and sharing the profound knowledge of traditional medicines passed down through generations."
  },
  kn: {
    home: "ಮುಖಪುಟ",
    about_us: "ನಮ್ಮ ಬಗ್ಗೆ",
    products: "ಉತ್ಪನ್ನಗಳು",
    contact_us: "ಸಂಪರ್ಕಿಸಿ",
    about_us_content:
      "ಸಮಸ್ತ ನಾಡಿನ ಜನತೆಗೆ ಹೃದಯಾಳದಿಂದ ನನ್ನದೊಂದಿಷ್ಟು ಮಾತು ತಾಯಿನಾಡಿನ ರಾಜ್ಯದ ನನ್ನ ಜನತೆಗೆ ಹೃದಯ ಪೂರ್ವಕ ನಮಸ್ಕಾರಗಳು. ನಾನು ಪಂಡಿತ ಮುನೇಶ್‌ಗೌಡ ಕೋಲಾರ ತಾಲ್ಲೂಕು ಮತ್ತು ಜಿಲ್ಲೆ ಹುತ್ತೂರು ಹೋಬಳಿ ಯಾನಾದಹಳ್ಳಿಯ ಸಾಮಾನ್ಯ ರೈತಾಪಿ ಕುಟುಂಬದ ಹಿನ್ನಲೆಯಿಂದ ಬಂದವನು. ನನ್ನ ಕುಟುಂಬ ಈಗಲು ಬೇಸಾಯ ಅವಲಂಭಿಸಿ ಬದುಕುತ್ತಿರುವರು “ತಾಂಡ್ರ” ಎಂದರೆ ಕನ್ನಡದಲ್ಲಿ “ಶಾಂತಿಮರ” ಅಂತಲೂ ಶನೇಶ್ವರಸ್ವಾಮಿಯ ಅಚ್ಚುಮೆಚ್ಚಿನ ವೃಕ್ಷವಾಗಿರುತ್ತದೆ. “ತಾಂಡ್ರ” ಕಂಪನಿಯೊಂದು ಹುಟ್ಟಿಗೆ ಕಾರಣ-ಸುಮಾರು ತಲೆಮಾರುಗಳಿಂದ ನನ್ನ ಮನೆತನದಲ್ಲಿ (ನಾಟಿಪದ್ದತಿ. ದೇಶಿಪದ್ದತಿ ಪಾರಂಪರಿಕ ಪದ್ದತಿ. ಆಯುರ್ವೇದ ಅಂದರೇನು ಅನ್ನುವುದೇ ಗೊತ್ತಿಲ್ಲದ (ಓದು ಬರಹ ಗೊತ್ತಿಲ್ಲದವರು ) ಕಾಲಂದಿಂದಲೂ ನನ್ನ ಅಮ್ಮ, ಅವರಮ್ಮ, ಅವರಮ್ಮ ಹೀಗೆ ಯಾವ ತಲೆಮಾರಕ್ಕು ನಿಲ್ಲಿಸದೆ ಪ್ರತಿ ಕಾಯಿಲೆಗೂ ಉಚಿತ ಔಷಧ ನೀಡುತ್ತ ಬಂದಿರುವ ಕುಟುಂಬದಲ್ಲಿ ಹುಟ್ಟಿದ್ದು ನನ್ನ ಪುಣ್ಯ, ಅದು ಬರಿ ಸುತ್ತ ಮುತ್ತ ಹಳ್ಳಿಗಳಿಗೆ ಸೀಮಿತವಾಗಬಾರದು ಅಂತಲೂ ಮತ್ತು ರಾಜ್ಯ ಹಾಗೂ ರಾಷ್ಟದ ಜನತೆಗೆ ಉಪಯೋಗ ಆಗಬೇಕೆಂಬ ಮಹಾದಾಸೆಯಿಂದ ಈ “ತಾಂಡ್ರ” ಕಂಪನಿಯ ಉಗಮಕ್ಕೆ ಕಾರಣವಾಯಿತು."
  }
};

const i18n = createI18n({
  legacy: false,        // Use Composition API
  locale: 'en',         // Default language
  fallbackLocale: 'en', // Fallback language
  messages,
});

export default i18n;
