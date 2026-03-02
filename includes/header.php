<?php
if (empty($_SESSION['captcha'])) {
  $a = random_int(1, 20);
  $b = random_int(1, 20);
  $_SESSION['captcha'] = ['q' => "$a + $b = ?", 'a' => $a + $b];
}
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>30-й юбилейный Пленум ФУМО ВО ИБ</title>
  <meta name="description" content="30-й юбилейный Пленум Федерального учебно-методического объединения в сфере высшего образования по информационной безопасности.">
  <link rel="stylesheet" href="<?= site_url('assets/css/main.css') ?>">
  <script src="https://smartcaptcha.yandexcloud.net/captcha.js" defer></script>
  <script defer src="<?= site_url('assets/js/main.js') ?>"></script>
</head>
<body>
<header class="site-header" id="top">
  <nav class="container nav">
    <a href="#top" class="brand"><span class="logo">ФУ<br>МО</span><span>ФУМО ВО ИБ</span></a>
    <button class="menu-toggle" aria-label="Открыть меню" aria-expanded="false">☰</button>
    <ul class="nav-links">
      <?php foreach ($navLinks as $link): ?>
        <li><a href="<?= $link['href'] ?>"><?= $link['label'] ?></a></li>
      <?php endforeach; ?>
      <li><a class="btn" href="<?= site_url('#registration') ?>">Регистрация</a></li>
    </ul>
  </nav>
</header>
