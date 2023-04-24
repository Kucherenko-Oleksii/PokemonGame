# Опис додатку:
Розробити веб-додаток, де користувачі можуть переглядати список покемонів,
додавати їх до свого списку та еволюціонувати їх, використовуючи Metamask для
підпису повідомлень.

# Stack технологій:
Для розробки Front-end частини використовував React,
Для побудови бази даних використовував MongoDB, з подальшим розгортанням її в хмарі Atlas, оскільки це забезпечує високу доступність та швидкість.

В ході розробки клієнт-серверної взаємодії було використано web-фреймворк Express

# Функціонал який реалізовано:
Реалізовано Pokemon List, My Pokemons, парсинг покемонів з БД,адаптив, еволюцію покемонів.
При натисканні на певного покемона, відкривається popup вікно у якому виводиться детальна інформація цього покемона, зображення та дві кнопки:

**Add to My List** - Наразі функціонал не реалізований, це буде додано у пункт ***"ToDo List для вдосконалення"***

**Evolution Pokemon** - При натисканні на неї відбувається еволюція покемона, змінюється його зображення та рівень.

У додатку наявна пагінація, за неї відповідають дві кнопки:

**Prev** - виконує перехід на попередню сторінку;
**Next** - виконує перехід на нову сторінку.


# Використання:
Якщо ви знаходитесь у кореневій папці, та хочете запустити клієнт,потрібно виконати наступні кроки:  
**1) cd Client/pokemons**           
**2) npm start**                      
Для запуску сервера потрібно виконати наступні кроки:   
**1) cd Server**                   
**2) npm run dev**

Також у ході винонання завдання, було приділено увагу тестуванню серверної частини. Детальніше про тестування прописано у пункті **Тестування**

# Тестування:
Щоб виконати тестування потрібно зробити наступне:  
**1) cd Server/_ _tests_ _**  
**2) npm run test**     
Процес тестування включає наступні кроки:

1) Імпорт потрібних залежностей: request та app. request є   бібліотекою, яка дозволяє виконувати HTTP запити, а app є об'єктом, який представляє серверний додаток.

2) Використовуючи describe функцію, задаємо основні вимоги до API.

3) Далі, за допомогою it функції, виконуються тестові сценарії, які перевіряють певні частини API.

4) У першому тестовому сценарії виконується GET запит до кореневого шляху серверного додатку. Очікується, що статус відповіді буде 200 (OK), а повідомлення відповіді буде 'Hello, World ✌️'.

5) У другому тестовому сценарії виконується GET запит до шляху /api/pokemons. Очікується, що статус відповіді буде 200 (OK), а довжина відповідного масиву більше 0.

Для запуску цього тесту вам потрібно мати встановлені на своєму комп'ютері наступні залежності:

**Node.js** - це середовище виконання JavaScript, яке дозволяє запускати JavaScript на стороні сервера.     
**NPM** - це менеджер пакетів для Node.js, який дозволяє легко встановлювати та керувати залежностями вашого проекту.
**supertest** - це бібліотека для тестування HTTP-запитів у Node.js.
Щоб встановити **supertest**, ви можете ввести наступну команду у терміналі, якщо ви перебуваєте у директорії вашого проекту:

### `npm install supertest --save-dev`

Для встановлення jest, потрібно прописати наступну команду:

### `npm install --save-dev jest`

# ToDo List для вдосконалення додатку:

Загалом, як я бачив реалізацію даної системи?

Коли ми початково попадаємо на наший сайт, ми бачимо, що у  нас активна сторінка Pokemon List і в ній є покемони, які відвантажується з нашої бази даних. При натисканні на певного покемона відкривається popup   з детальним описом цього покемона, а також його зображення. І можна зробити так, щоб при натисканні на кнопку Add to my List викликався metamask, відбувалося підтвердження додавання покемона, після чого на сторінці My Pokemons з'являвся цей доданий покемон, і ми на нього могли натиснути, перед нами також відкрився popup, але замість кнопки Add to My List, була кнопка Evolution Pokemon, при натисканні на яку у нас відбувалась еволюція покемона, яка в мене вже реалізована.
Додані покемони зберігались у іншій колекції в БД.

Хотів також реалізувати ітеграційний тест.

# Відео, що демонструє функціонування програми: 