<?php
require __DIR__ . '/../includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . site_url());
    exit;
}

if (!empty($_POST['website'])) {
    $_SESSION['form_error'] = 'Проверка не пройдена.';
    header('Location: ' . site_url('#registration'));
    exit;
}

$required = ['name', 'email', 'phone', 'captcha_answer', 'agree_pd', 'agree_offer'];
foreach ($required as $field) {
    if (empty($_POST[$field])) {
        $_SESSION['form_error'] = 'Заполните обязательные поля.';
        header('Location: ' . site_url('#registration'));
        exit;
    }
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $_SESSION['form_error'] = 'Некорректный email.';
    header('Location: ' . site_url('#registration'));
    exit;
}

if ((int) ($_POST['captcha_answer']) !== (int) ($_SESSION['captcha']['a'] ?? -1)) {
    $_SESSION['form_error'] = 'Неверный ответ CAPTCHA.';
    header('Location: ' . site_url('#registration'));
    exit;
}

if (!empty($_POST['inn']) && !preg_match('/^(\d{10}|\d{12})$/', $_POST['inn'])) {
    $_SESSION['form_error'] = 'ИНН должен содержать 10 или 12 цифр.';
    header('Location: ' . site_url('#registration'));
    exit;
}

// TODO: Verify Yandex SmartCaptcha token from $_POST['smart-token'] on production.
$_SESSION['form_success'] = true;
$a = random_int(1, 20);
$b = random_int(1, 20);
$_SESSION['captcha'] = ['q' => "$a + $b = ?", 'a' => $a + $b];

header('Location: ' . site_url('#registration'));
exit;
