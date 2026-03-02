# Conference site (PHP, HTML, CSS, Vanilla JS)

Ниже короткая инструкция, чтобы вы могли быстро создать Pull Request.

## 1) Создать ветку

```bash
git checkout -b fix/my-change
```

## 2) Внести изменения

Измените нужные файлы проекта, затем проверьте синтаксис PHP:

```bash
php -l index.php
php -l handlers/register.php
for f in includes/*.php sections/*.php; do php -l "$f"; done
```

## 3) Запустить локально (опционально)

```bash
php -S 0.0.0.0:8000
```

Откройте в браузере: `http://127.0.0.1:8000`.

## 4) Закоммитить изменения

```bash
git add .
git commit -m "Describe your change"
```

## 5) Отправить ветку в origin

```bash
git push -u origin fix/my-change
```

## 6) Создать PR

### Вариант A: через GitHub UI
После `push` GitHub обычно покажет кнопку **Compare & pull request**.

### Вариант B: через GitHub CLI

```bash
gh pr create \
  --title "Short PR title" \
  --body "Что изменено и как проверено"
```

## Мини-шаблон PR

- **Что сделано:**
- **Зачем:**
- **Как проверить:**
- **Риски/ограничения:**

## Если PR не создаётся

Проверьте:

1. Вы не в `main`, а в feature-ветке.
2. В ветке есть хотя бы один commit.
3. Ветка запушена в `origin`.
4. У вас есть права на репозиторий (или создан fork).
