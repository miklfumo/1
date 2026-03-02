<section id="registration" class="section alt"><div class="container narrow"><p class="eyebrow">Регистрация</p><h2>Зарегистрироваться</h2>
<?php if (!empty($_SESSION['form_success'])): ?><p class="success">Регистрация завершена. Мы свяжемся с вами по почте.</p><?php unset($_SESSION['form_success']); endif; ?>
<?php if (!empty($_SESSION['form_error'])): ?><p class="error"><?=$_SESSION['form_error']?></p><?php unset($_SESSION['form_error']); endif; ?>
<form method="post" action="<?= site_url('handlers/register.php') ?>" novalidate>
<input type="text" name="website" class="hp" tabindex="-1" autocomplete="off">
<label>ФИО *<input required name="name"></label>
<label>Email *<input required type="email" name="email"></label>
<label>Телефон *<input required type="tel" name="phone"></label>
<label>ИНН<input name="inn" pattern="\d{10}|\d{12}"></label>
<label>Проверка: <?=$_SESSION['captcha']['q']?> <input required type="number" name="captcha_answer"></label>
<div class="checkbox"><input type="checkbox" required name="agree_pd" id="pd"><label for="pd">Согласие на обработку персональных данных</label></div>
<div class="checkbox"><input type="checkbox" required name="agree_offer" id="offer"><label for="offer">Принятие условий оферты</label></div>
<div id="smartcaptcha-container"></div>
<input type="hidden" name="smart-token" id="smart-token">
<button class="btn" type="submit">Зарегистрироваться</button>
</form></div></section>
