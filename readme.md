# тестовое задание для М18
## ссылка на деплой [здесь](https://abramsea.github.io/m18test/)

---

Приветствую! в данном репозитории находится тестовое задание для М18.

_version 1.0_

### Клонирование

    git clone https://abramsea.github.io/m18test.git

### Зависимости

    "devDependencies": {
        "babel-core": "^6.26.3",
        "babel-preset-env": "^1.7.0",
        "gulp-autoprefixer": "^7.0.1",
        "gulp-babel": "^7.0.1",
        "gulp-cssmin": "^0.2.0",
        "gulp-gh-pages": "^0.5.4"
    }

    
### Сборка

&bull; для запуска сборки:

    gulp html:build
    gulp sass
    gulp js:build


&bull; для запуска деплоя:

    gulp deploy