# 🚀 Інструкція з розгортання на GitHub Pages

## Крок 1: Створення репозиторію на GitHub

1. Перейдіть на [GitHub](https://github.com)
2. Натисніть кнопку **"New repository"** (зелена кнопка)
3. Заповніть поля:
   - **Repository name:** `student-it-fest-portfolio`
   - **Description:** `Командне портфоліо Git push and Pray для Student IT Fest 2024`
   - Оберіть **Public** (обов'язково для безкоштовного GitHub Pages)
   - Не додавайте README, .gitignore чи ліцензію (вони вже є в проєкті)
4. Натисніть **"Create repository"**

## Крок 2: Завантаження коду в репозиторій

### Через командний рядок (рекомендовано):

1. Відкрийте термінал у папці проєкту
2. Виконайте команди:

\`\`\`bash
# Ініціалізація Git репозиторію
git init

# Додавання всіх файлів
git add .

# Перший коміт
git commit -m "Initial commit: Git push and Pray portfolio"

# Додавання remote origin (замініть YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/student-it-fest-portfolio.git

# Відправка коду на GitHub
git branch -M main
git push -u origin main
\`\`\`

### Через веб-інтерфейс GitHub:

1. На сторінці створеного репозиторію натисніть **"uploading an existing file"**
2. Перетягніть всі файли проєкту або оберіть їх через **"choose your files"**
3. Додайте коміт: `Initial commit: Git push and Pray portfolio`
4. Натисніть **"Commit changes"**

## Крок 3: Активація GitHub Pages

1. В репозиторії перейдіть у вкладку **"Settings"**
2. Прокрутіть до розділу **"Pages"** (ліва панель)
3. У секції **"Source"** оберіть:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
4. Натисніть **"Save"**

## Крок 4: Отримання посилання на сайт

1. Через кілька хвилин (зазвичай 1-5 хвилин) ваш сайт буде доступний за адресою:
   \`https://YOUR_USERNAME.github.io/student-it-fest-portfolio\`

2. Посилання також з'явиться у секції **"Pages"** в налаштуваннях репозиторію

3. GitHub може надіслати email з підтвердженням успішного розгортання

## 🔧 Налаштування домену (опційно)

Якщо у вас є власний домен:

1. У секції **"Pages"** додайте ваш домен у поле **"Custom domain"**
2. Створіть файл `CNAME` в корені репозиторію з вашим доменом
3. Налаштуйте DNS записи у вашого провайдера домену

## ✅ Перевірка роботи

1. Відкрийте ваш сайт у браузері
2. Перевірте, що всі елементи завантажуються коректно:
   - ✅ Анімації працюють
   - ✅ Стилі застосовуються
   - ✅ JavaScript інтерактивність функціонує
   - ✅ Сайт адаптивний на мобільних пристроях

## 🔄 Оновлення сайту

Для оновлення сайту після змін:

\`\`\`bash
# Додати зміни
git add .

# Зробити коміт
git commit -m "Update: описання змін"

# Відправити на GitHub
git push origin main
\`\`\`

Сайт автоматично оновиться протягом декількох хвилин.

## 🐛 Вирішення проблем

### Сайт не завантажується:
- Перевірте, що репозиторій публічний
- Переконайтеся, що файл `index.html` знаходиться в корені репозиторію
- Зачекайте кілька хвилин після активації Pages

### Стилі не застосовуються:
- Перевірте, що `styles.css` та `script.js` знаходяться в корені
- Переконайтеся, що посилання в HTML використовують відносні шляхи

### 404 помилка:
- Переконайтеся, що URL введений правильно
- Перевірте назву репозиторію та username

## 📝 Корисні посилання

- [Документація GitHub Pages](https://docs.github.com/en/pages)
- [Налаштування кастомного домену](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Git чит-шит](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Успіхів з розгортанням! 🚀**
