document.addEventListener('DOMContentLoaded', () => {
   let tg = window.Telegram.WebApp;
   tg.expand();

   document.getElementById('btnPromotions').addEventListener('click', function() {
      document.getElementById('promotionsSection').classList.add('active');
      document.getElementById('categoriesSection').classList.remove('active');
      document.getElementById('descriptionSection').classList.remove('active');
      document.getElementById('promotionListSection').classList.remove('active');
      this.classList.add('active');
      document.getElementById('btnCategories').classList.remove('active');
   });

   document.getElementById('btnCategories').addEventListener('click', function() {
      document.getElementById('categoriesSection').classList.add('active');
      document.getElementById('promotionsSection').classList.remove('active');
      document.getElementById('descriptionSection').classList.remove('active');
      document.getElementById('promotionListSection').classList.remove('active');
      this.classList.add('active');
      document.getElementById('btnPromotions').classList.remove('active');
   });

   document.querySelectorAll('.promotion').forEach(button => {
      button.addEventListener('click', function() {
         const description = this.getAttribute('data-description');
         document.getElementById('descriptionText').innerText = description;
         document.getElementById('descriptionSection').classList.add('active');
         document.getElementById('promotionsSection').classList.remove('active');
         document.getElementById('categoriesSection').classList.remove('active');
         document.getElementById('promotionListSection').classList.remove('active');
      });
   });

   function showPromotionsForCategory(category) {
      const promotionsData = {
         "Категория 1": ["Акция 1", "Акция 2"],
         "Категория 2": ["Акция 3", "Акция 4"]
      };

      const promotions = promotionsData[category] || [];
      const promotionListContainer = document.getElementById('promotionListButtons');

      promotionListContainer.innerHTML = '';

      promotions.forEach(promotion => {
         const button = document.createElement('button');
         button.classList.add('promotion-button');
         button.innerText = promotion;
         button.addEventListener('click', function() {
            document.querySelectorAll('.promotion').forEach(btn => {
               if (btn.innerText === promotion) {
                  btn.click();
               }
            });
         });
         promotionListContainer.appendChild(button);
      });

      document.getElementById('promotionListText').innerText = `Акции для ${category}:`;
      document.getElementById('promotionListSection').classList.add('active');
      document.getElementById('categoriesSection').classList.remove('active');
      document.getElementById('promotionsSection').classList.remove('active');
      document.getElementById('descriptionSection').classList.remove('active');
   }

   document.querySelectorAll('.category').forEach(button => {
      button.addEventListener('click', function() {
         const category = this.getAttribute('data-category');
         showPromotionsForCategory(category);
      });
   });

   tg.MainButton.text = "Выбрать";
   tg.MainButton.setText("Выбрать");
   tg.MainButton.textColor = "#F55353";
   tg.MainButton.color = "#143F6B";
   tg.MainButton.setParams({ "color": "#143F6B" });

   tg.MainButton.onClick(() => {
      tg.sendData("Выбранные данные");
   });
});
