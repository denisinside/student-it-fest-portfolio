# 📚 Git команди для роботи з проєктом

## 🚀 Початкове налаштування

\`\`\`bash
# Клонування репозиторію
git clone https://github.com/YOUR_USERNAME/student-it-fest-portfolio.git
cd student-it-fest-portfolio

# Налаштування користувача (якщо не налаштовано глобально)
git config user.name "Your Name"
git config user.email "your.email@example.com"
\`\`\`

## 💾 Базові команди для роботи

\`\`\`bash
# Перевірка статусу репозиторію
git status

# Додавання всіх змін
git add .

# Додавання конкретного файлу
git add filename.html

# Створення коміту
git commit -m "Add team member information"

# Відправка змін на GitHub
git push origin main

# Отримання останніх змін з GitHub
git pull origin main
\`\`\`

## 🌟 Приклади комітів для проєкту

\`\`\`bash
# Додавання нового контенту
git commit -m "Add Denis member card with skills"  
git commit -m "Update Git push and Pray team description"
git commit -m "Add hero section animations"
git commit -m "Add member photos support"

# Виправлення помилок
git commit -m "Fix responsive design on mobile"
git commit -m "Fix JavaScript animation timing"

# Оновлення стилів
git commit -m "Improve member card hover effects"
git commit -m "Update color scheme and gradients"

# Додавання функціональності
git commit -m "Add smooth scroll functionality"
git commit -m "Implement stats counter animation"
\`\`\`

## 🔧 Корисні команди

\`\`\`bash
# Перегляд історії комітів
git log --oneline

# Перегляд змін в файлах
git diff

# Скасування незакомічених змін
git checkout -- filename.html

# Перегляд гілок
git branch

# Створення нової гілки
git checkout -b feature/new-member

# Перемикання між гілками
git checkout main
git checkout feature/new-member

# Об'єднання гілки
git checkout main
git merge feature/new-member
\`\`\`

## 🚨 Екстрені команди

\`\`\`bash
# Скасування останнього коміту (зберігає зміни)
git reset --soft HEAD~1

# Повне скасування останнього коміту (УВАГА: втрачає зміни!)
git reset --hard HEAD~1

# Відміна конкретного коміту
git revert <commit-hash>

# Примусове оновлення з віддаленого репозиторію (УВАГА: втрачає локальні зміни!)
git fetch origin
git reset --hard origin/main
\`\`\`

## 🤝 Робота в команді

\`\`\`bash
# Перед початком роботи завжди отримуйте останні зміни
git pull origin main

# Створіть гілку для вашої функції
git checkout -b feature/your-feature

# Після завершення роботи:
git add .
git commit -m "Implement your feature"
git push origin feature/your-feature

# Потім створіть Pull Request на GitHub
\`\`\`

## 📋 Чек-лист перед комітом

- [ ] Перевірити, що код працює локально
- [ ] Переконатися, що немає синтаксичних помилок
- [ ] Написати зрозумілий коміт-месидж
- [ ] Перевірити, що не додаєте непотрібні файли

## 🎯 Рекомендації для команди

1. **Часто робіть коміти** - краще багато маленьких, ніж один великий
2. **Використовуйте зрозумілі назви** для комітів англійською мовою
3. **Завжди пуліть перед пушем** - `git pull origin main` перед `git push`
4. **Не комітьте великі файли** - використовуйте `.gitignore`
5. **Тестуйте локально** перед пушем на GitHub

## 📝 Шаблон для коміт-месіджів

\`\`\`
<type>: <short description>

<detailed description if needed>

Examples:
- feat: add new team member card
- fix: correct mobile responsive layout
- style: update button hover effects
- docs: update README with deployment instructions
- refactor: reorganize CSS structure
\`\`\`

## 🆘 Допомога

Якщо щось пішло не так:

1. **Не панікуйте!** Git дозволяє відмінити майже все
2. **Копіюйте проєкт** перед експериментами з незнайомими командами
3. **Запитайте в команді** або загугліть проблему
4. **Використовуйте GUI клієнти** як GitHub Desktop для спрощення

---

**Git push and Pray! Нехай ваш код завжди деплоїться успішно! 🎉🚀**
