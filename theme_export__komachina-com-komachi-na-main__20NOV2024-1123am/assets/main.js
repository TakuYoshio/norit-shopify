document.addEventListener('DOMContentLoaded', function() {
    // h3要素のクリックイベントを設定
    document.querySelectorAll('.cat h3').forEach(function(h3) {
      h3.addEventListener('click', function(e) {
        e.stopPropagation();
        
        var parentCat = this.closest('.cat');
        var lists = parentCat.querySelector('ul.lists');
  
        if (parentCat.classList.contains('active')) {
          // 現在の.catがアクティブなら非表示にする
          parentCat.classList.remove('active');
          lists.classList.remove('active');
        } else {
          // すべての.catを非アクティブ化し、そのリストも非表示にする
          document.querySelectorAll('.cat').forEach(function(cat) {
            cat.classList.remove('active');
            var catLists = cat.querySelector('ul.lists');
            if (catLists) {
              catLists.classList.remove('active');
            }
          });
  
          // クリックされた.catだけをアクティブにし、そのリストを表示する
          parentCat.classList.add('active');
          lists.classList.add('active');
        }
      });
    });
  
    // .cat以外の部分をクリックしたらリストを非表示にする
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.cat')) {
        document.querySelectorAll('.cat').forEach(function(cat) {
          cat.classList.remove('active');
          var catLists = cat.querySelector('ul.lists');
          if (catLists) {
            catLists.classList.remove('active');
          }
        });
      }
    });
  });
  






    /* -----------------------------------------------------
    スムーススクロール
    ------------------------------------------------------ */
    // #から始まるリンクがクリックされたときの処理
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  
    /* -----------------------------------------------------
    マップの地名をクリックしたら下に移動
    ------------------------------------------------------ */
    // 上部の地図エリアの要素がクリックされたときの処理
    document.querySelectorAll('.map span').forEach(function(mapItem) {
      mapItem.addEventListener('click', function(event) {
        event.preventDefault();
        const targetClass = this.className.split(' ')[0];
        const target = document.querySelector('.city .' + targetClass);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  
    /* -----------------------------------------------------
    素材リストのアコーディオン
    ------------------------------------------------------ */
    // 初期設定：ddを非表示
    document.querySelectorAll('dd').forEach(function(dd) {
      dd.style.display = 'none';
    });
  
    // dtクリック時のアコーディオン処理
    document.querySelectorAll('dt').forEach(function(dt) {
      dt.addEventListener('click', function() {
        // 矢印画像を90度回転
        const img = this.querySelector('img');
        if (img) img.classList.toggle('rotate');
  
        // margin-bottomを変更するクラスを付け外し
        this.classList.toggle('expanded');
  
        // ddをスライドダウン/アップ
        const nextDd = this.nextElementSibling;
        if (nextDd && nextDd.tagName.toLowerCase() === 'dd') {
          if (nextDd.style.display === 'none') {
            nextDd.style.display = 'block';
            nextDd.style.maxHeight = nextDd.scrollHeight + 'px';
          } else {
            nextDd.style.display = 'none';
            nextDd.style.maxHeight = '0';
          }
        }
      });
    });
   