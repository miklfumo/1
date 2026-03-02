<section id="gallery" class="section alt">
  <div class="container">
    <p class="eyebrow">Галерея</p>
    <h2>Фотографии с мероприятий</h2>
    <?php foreach ($gallery as $year => $imgs): ?>
      <details>
        <summary><?= $year ?></summary>
        <div class="gallery-grid">
          <?php foreach ($imgs as $img): ?>
            <figure class="gallery-placeholder">
              <div class="ph-gradient" aria-hidden="true"></div>
              <figcaption><?= $img['title'] ?></figcaption>
            </figure>
          <?php endforeach; ?>
        </div>
      </details>
    <?php endforeach; ?>
  </div>
</section>
