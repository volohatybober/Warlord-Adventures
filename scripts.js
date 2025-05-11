const scenes = {
  start: {
    title: "Зачарованний світ", //сцена 1 
    text: "Перед тобою два шляхи. Ти — нічний ельф Варлорд у пошуках істини.",
    image: "https://corwyn.wdfiles.com/local--files/tharnia-road/ROAD-48.jpg",
    options: [
      { text: "Піти в ліс", next: "forest" }, //кнопка1
      { text: "До гір", next: "mountains" }, //кнопка2
      
    ]
  },
  forest: {
    title: "Темний ліс", //сцена2 с кнопки1
    text: "У лісі з'являється кабан. Як вчинити?",
    image: "https://media.istockphoto.com/id/1193906801/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%B0%D1%94%D0%BC%D0%BD%D0%B8%D1%87%D0%B8%D0%B9-%D1%81%D0%B8%D0%BD%D1%8C%D0%BE-%D0%BF%D1%96%D0%B4%D1%82%D1%85%D0%BB%D0%B8%D0%B9-%D0%BB%D1%96%D1%81%D0%BE%D0%B2%D0%B8%D0%B9-%D1%88%D0%BB%D1%8F%D1%85-%D1%81%D1%82%D0%B5%D0%B6%D0%BA%D0%B0-%D0%B2-%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC%D1%83-%D1%82%D1%83%D0%BC%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC%D1%83-%D0%BE%D1%81%D1%96%D0%BD%D0%BD%D1%96%D0%B9-%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%BC%D1%83-%D0%BB%D1%96%D1%81%D1%96-%D1%81%D0%B5%D1%80%D0%B5%D0%B4.jpg?s=612x612&w=0&k=20&c=CBvi-SNriWfu5J3bYh_KTbKH8o6OA-ff_d9I29Duw54=",
    options: [
      { text: "Убити кабана", next: "boarBattle" },
      { text: "Пожаліти кабана", next: "spareBoar" },
    ]
  },
  mountains: {
    title: "Дорога веде до височенних гір", //сцена2 с кнопки2 
    text: "Посеред дороги тобі зустрічається Друїд Вахо",
    image: "https://i.pinimg.com/736x/75/a1/de/75a1de4aa7a4d594e7269d0f4cedebd9.jpg",
    options: [
      { text: "Поговорити з Вахо", next: "VahoSpeak" },
      { text: "Піти назад у село", next: "VillageRoad" },
    ]
  },
  boarBattle: { //сцена3 с кнопки1
    title: "Бій з кабаном",
    text: "Ти вступаєш у бій з кабаном.",
    image: "https://masterpiecer-images.s3.yandex.net/2262c1f8745211eebd3092669a1675b3:upscaled",
    options: [
      { text: "Удар ногой", next: "kickBoar" },
      { text: "Заклинання посохом", next: "staffSpell" },
      { text: "Удар мечем", next: "swordStrike" }
    ]
  },
  kickBoar: { //сцена3:1 с кнопки1
    title: "Удар ногой",
    text: "Ти сильно ударив кабана ногой! Він втратив 10 хп.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-jxlLOLnRqp1n9Yf4_dGPSHxPx4ft4ZlHQ&s",
    options: [
      { text: "Продовжити", next: "boarEat", action: () => { player.health -= 100; } }
    ]
  },
  staffSpell: { //сцена3:1 с кнопки2
    title: "Заклинання посохом",
    text: "Ти використовуєш заклинання посохом. Вибери заклинання:",
    image: "https://img.goodfon.com/wallpaper/big/d/af/devushka-elfiyka-dospehi.webp",
    options: [
      { text: "Вогняний шар", next: "fireballSpell" },
      { text: "Льодовий шторм", next: "iceStormSpell" },
      { text: "Блискавка", next: "lightningSpell" }
    ]
  }, 
  boarBattle1: { 
    title: "Ти вступаєш у бій з кабаном.",
    text: "Вогняний шар зпалив кабана у попіл.",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbbd40ac-09e1-4234-bda4-a6c8da93bac6/dfrgz6o-dea1cbad-83f8-48b2-abf5-a0374e5e6adf.png/v1/fill/w_1182,h_676,q_70,strp/blood_elf_mage_by_mathiasjudias_dfrgz6o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvYmJiZDQwYWMtMDllMS00MjM0LWJkYTQtYTZjOGRhOTNiYWM2XC9kZnJnejZvLWRlYTFjYmFkLTgzZjgtNDhiMi1hYmY1LWEwMzc0ZTVlNmFkZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2LEhfxyadtbNfky7Huy0UqHlL_91RCLYFLb9g0eJIn0",
    options: [
      { text: "Зібрати попіл", next: "boarAsh" },
      { text: "Піти далі", next: "VillageRoad" },
    ]
  },
  fireballSpell: {
    title: "Вогняний шар",
    text: "Вогняний шар влучає в кабана!.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYs8o5_aZVGxyncKidFWy483-NGaShT4tDQ&s",
    options: [
      { text: "Продовжити бій", next: "boarBattle1" }
    ]
  },

  iceStormSpell: {
    title: "Льодовий шторм",
    text: "Льодовий шторм знижує швидкість кабана на 50%.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyyIDzv5CtmqtyrYkdhso5JF1QOAKgkZsg&s",
    options: [
      { text: "Продовжити бій", next: "boarBattle2" }
    ]
  },
  lightningSpell: {
    title: "Блискавка",
    text: "Блискавка вражає кабана, втрачає 30 хп.",
    image: "https://img.freepik.com/premium-photo/wild-boar-with-lightning_499268-5633.jpg",
    options: [
      { text: "Продовжити бій", next: "boarBattle3" }
    ]
  
  },
  swordStrike: {//сцена3:1 с кнопки3
    title: "Удар мечем",
    text: "Ти наносиш удар мечем! Кабан втрачає 15 хп.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY58j9vh2qZTVM-XEw3mkCXQR-finnJZB4ah7K9RcPCdv4B_sEqGb2-Z5GEAsLU0m7akA&usqp=CAU",
    options: [
      { text: "Продовжити", next: "boarEat", action: () => { player.health -= 100; } },
    ]
  },
  boarEat: { 
    title: "Ти програв!",
    text: "Твій удар був надто слабким! та кабан тебе з'їв",
    image: "https://clownfishtv.com/wp-content/uploads/2023/03/Dark-Souls-You-Died-Game-Over-Screen.jpg",
    options: [
      { text: "Воскреснути (почати зпочатку)", next: "start", action: () => { player.health -= 100; } },
    ]
  },
  spareBoar: {//сцена3 с кнопки2
    title: "Милосердя",
    text: "Кабан веде тебе до скарбу.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHj5ApyGgv_ULlcZAJtNvP-O6N8aYqZelXXQ&s",
    options: [
      { text: "Взяти золото", next: "takeGold", action: () => { player.gold +=100; } },
    ]
  },
  takeGold: {
    title: "Золото",
    text: "Ти взяв золото! Тепер у тебе є 100 золота.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEsTzjmJJOEJIP6cJy_4ECOiVWNuE25fpMw&s",
    options: [
      { text: "Продовжити подорож", next: "VillageRoad" },
    ]
  },
  boarAsh: {
    title: "Ти почав збирати попіл кабана",
    text: "В тебе тепер брудні руки, а попіл розлетівся по локації",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmsBqZYaz5yxN4wo8DUJ9EE-43IDD8f64hQ&s",
    options: [
      { text: "Піти далі", next: "VillageRoad" },
    ]
  },
  VahoSpeak: {
    title: "Зустріч з Вахо",
    text: "Друїд Вахо питає, що ти шукаєш.",
    image: "https://i.pinimg.com/736x/58/4c/46/584c46d1d77aa20186561913873a5eb7.jpg",
    options: [
      { text: "Істину", next: "vahoTruth" },
      { text: "Силу", next: "vahoPower" },
      { text: "Спокій", next: "vahoPeace" },
    ]
  },
  vahoTruth: {
    title: "Шлях Істини",
    text: "Вахо каже: істина всередині тебе. Але шлях тернистий.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YnaxnSKTknM2G5MGhn_M-teWWFkD2bE56I90xOeaZIchY7JvmmTqmHsFe2t5KsyoUfw&usqp=CAU",
    options: [
      { text: "Піти в храм", next: "templeEntrance" },
      { text: "Відмовити Вахо та піти у село", next: "VillageRoad" }
    ]
  },
  templeEntrance: {
    title: "Храм",
    text: "У храмі тобі пропонують випити зілля",
    image: "https://www.viktoriastable.com/wp-content/uploads/2017/10/purple-moscow-mule-2.jpg",
    options: [
      { text: "Випити", next: "PoisonousPurpleDrank" },
      { text: "Відмовитись та піти до села", next: "VillageRoad" }
    ]
  },
  PoisonousPurpleDrank: {
    title: "Ти погодився випити зілля",
    text: "Тобі стале дуже зле, ти почав засинати",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b1b57d105778549.5f8077dc232c6.png",
    options: [
      { text: "Спати", next: "YOUDIEDFROMLEAN", action: () => { player.health -= 100; } },
    ]
  },
  YOUDIEDFROMLEAN: {
    title: "Ти переміг!",
    text: "Ти помер не як герой, але помер уві сні",
    image: "https://t3.ftcdn.net/jpg/09/89/35/52/360_F_989355236_JTFzAVJKCHhtBt6ITfymae2c25iXcBAH.jpg",
    options: [
      { text: "Воскреснути (початки зпочатку)", next: "start", action: () => { player.health += 100; } },
    ]
  },
  vahoPower: {
    title: "Шлях Сили",
    text: "Вахо накладає на тебе древнє закляття. Твоя сила зростає.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59YXOMI3G2CEvGBoDXx0nZjcBlZIVOfIhxd8zo-bdFDUknkKJ0KeR3aqoSpl5jmQuo6E&usqp=CAU",
    options: [
      { text: "Випробувати силу", next: "trainingDEAD" },
      { text: "Подякувати і піти", next: "VillageRoad" },
  
    ]
  },
  trainingDEAD: {
    title: "Випробування Сили",
    text: "Ти помер від дуже сильного закляття!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDnStnTbwja5vKbwPSzX10uEYD8UciVRWmg&s",
    options: [
      { text: "Воскреснути (почати зпочатку)", next: "start", action: () => { player.health += 100; } },
    ]
  },
  vahoPeace: {
    title: "Шлях Спокою",
    text: "Ти закриваєш очі. Серце заспокоюється. Вахо зникає.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaZ-D0ayXnNmEd8lRfeEGQYziQhMGWcHvEA_6m_G1kwvH6Xi4Y7gisWgNN8GAHFMJRqg&usqp=CAU",
    options: [
      { text: "Прокинутись", next: "start"},
    ] 
  },
  VillageRoad: {
    title: "Дорога до села",
    text: "Попереду невелике село. Селяни дивляться насторожено.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpUINdXmUQt9ipQH2b15MaQPZJACBFwZn0Q&s",
    options: [
      { text: "Поговорити з головою", next: "villageChief" },
      { text: "Обікрасти село", next: "robVillage" },
    ]
  },
  robVillage: {
    title: "Пограбування",
    text: "Ти вкрав 50 золота, але отримав удар по спині",
    image: "https://www.enworld.org/attachments/35553325_1631241240277969_3764519859778486272_o-jpg.111821/",
    options: [
      { text: "Втекти", next: "forestAgain", action: () => { player.gold += 50; player.health -= 50; } }
    ]
  },
  villageChief: {
    title: "Голова села",
    text: "Голова пропонує обміняти золото на магічний амулет.",
    image: "https://spriggans-den.com/wp-content/uploads/2019/04/d7505852fc6eb0e9d2f2246fedc68a55.jpg",
    options: [
      { text: "Прийняти", next: "magicAmulet", action: () => { player.gold -= 30;} },
      { text: "Відмовитись", next: "forestAgain" },
    ]
  },
  magicAmulet: {
    title: "Магічний амулет",
    text: "Ти отримав амулет. Він світиться слабким фіолетовим сяйвом.",
    image: "https://i.etsystatic.com/10574679/r/il/fb3a3b/6192546785/il_fullxfull.6192546785_n0sc.jpg",
    options: [,
      { text: "Використати амулет", next: "AMULETUSE" },
    ]
  },
  AMULETUSE: {
    title: "Магічний амулет",
    text: "Ти використав свій амулет, але він був зламаний!",
    image: "https://i.etsystatic.com/10574679/r/il/fb3a3b/6192546785/il_fullxfull.6192546785_n0sc.jpg",
    options: [,
      { text: "Використати амулет", next: "YOUDIEDFROMAMULET", action: () => { player.health -= 100; } },
    ]
  },
  YOUDIEDEFROMAMULET: {
    title: "Магічний амулет",
    text: "Ти використав свій амулет, але він був зламаний!",
    image: "https://i.etsystatic.com/10574679/r/il/fb3a3b/6192546785/il_fullxfull.6192546785_n0sc.jpg",
    options: [,
      { text: "Ти помер від свого ж амулета!", next: "start", action: () => { player.health += 100; } },
    ]
  },
  forestAgain: {
    title: "Знову ліс",
    text: "Ти опиняєшся в знайомому лісі, але щось змінилось.",
    image: "https://i.pinimg.com/736x/41/00/7c/41007ca83dc2836d8b8d232b58bf493f.jpg",
    options: [
      { text: "Дослідити", next: "strangeCircle" },
      { text: "Піти іншим шляхом", next: "lakeEdge" },
    ]
  },
  strangeCircle: {
    title: "Дивне коло",
    text: "Ти знаходиш коло з каменів. У центрі — сяйво.",
    image: "https://images.stockcake.com/public/3/6/a/36a5d7d6-acc3-4e5c-8d15-4aff6e17b004_large/mystical-stone-circle-stockcake.jpg",
    options: [
      { text: "Увійти в коло", next: "islandRuins" },
      { text: "Залишити", next: "lakeEdge" },
    ]
  },
  lakeEdge: {
    title: "Берег озера",
    text: "Спокійне озеро відбиває твоє обличчя.",
    image: "https://i.pinimg.com/736x/a0/6b/83/a06b83f8c8333f43e777dd5e5caf173f.jpg",
    options: [
      { text: "Напитися", next: "lakeHeal", action: () => { player.health += 20; } },
      { text: "Піти вздовж берега", next: "fishermanHut" }
    ]
  },
  lakeHeal: {
    title: "Цілюща вода",
    text: "Ти відчуваєш, як здоров'я повертається до тіла.",
    image: "https://csvending.com/wp-content/uploads/2025/04/AdobeStock_1067055923-scaled.jpeg",
    options: [
      { text: "Повернутись", next: "lakeEdge1" },
    ]
  },
  fishermanHut: {
    title: "Хатина рибалки",
    text: "Старий рибалка пропонує човен за 40 золота.",
    image: "https://w0.peakpx.com/wallpaper/633/286/HD-wallpaper-legends-of-runeterra-fantasy-boat-luminos-summer-man-blue-fisherman-art-vara-legends-of-runetera.jpg",
    options: [
      { text: "Купити човен", next: "sailAway", action: () => { player.gold -= 40; } },
      { text: "Відмовитись", next: "lakeEdge1" },
    ]
  },
  sailAway: {
    title: "Подорож човном",
    text: "Ти відчалюєш по озеру, туман окутує тебе.",
    image: "https://i.pinimg.com/736x/e5/59/89/e55989ea476cc11266fe6c78d1af2c48.jpg",
    options: [
      { text: "Загребти далі", next: "mistIsland" },
      { text: "Повернутись", next: "lakeEdge1" },
    ]
  },
  mistIsland: {
    title: "Острів Туману",
    text: "Незнаний острів виникає з туману. Що там?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCPPIgX3qY2G6fhoXUknYcaGXJ-Lsy8sfDg&s",
    options: [
      { text: "Зайти на острів", next: "islandRuins" },
      { text: "Повернутись у човен", next: "lakeEdge1" },
    ]
  },
  islandRuins: {
    title: "Руїни острова",
    text: "Руїни здавна покинуті. Але з темряви хтось спостерігає.",
    image: "https://img.atlasobscura.com/Iw6mWoqD7jFKUJSh1txOBrwwgX9m_ZbIwQxIUURvLJ8/rs:fill:600:400:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9hZTEy/ZTFjOS1lNjE2LTQz/NjYtOWY2Zi1mNTM4/MDg3ZTA2MzlhNGU5/MjVkMmQxOWE1ZThk/ZjhfSU1HXzIwMTkx/MjI1XzEzNTkxMy5q/cGc.jpg",
    options: [
      { text: "Дослідити далі", next: "holepit" , action: () => { player.health -= 100; } },
      { text: "Повернутись у човен", next: "lakeEdge1" },

    ]
  },
  holepit: {
    title: "Руїни острова",
    text: "Руїни здавна покинуті. Але з темряви хтось спостерігає.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaR-fUpQeEQQ8yKrOqq7GR8LeYEW5cM_2Qg&s",
    options: [
      { text: "Воскреснути (почати зпочатку)", next: "start", action: () => { player.health += 100; } },
    ]
  },
  lakeEdge1: {
    title: "Човен",
    text: "Щось чи хтось у воді хоче тебе з'їсти!",
    image: 'https://w0.peakpx.com/wallpaper/492/123/HD-wallpaper-fishing-trip-water-boat-fish-monster.jpg',
    options: [
      {text: 'Відбитись від істоти та попливсти далі', next: 'waterpit', action: () => { player.health -= 100; } },
      {text: 'Не відбиватись від істоти', next: 'YOUDIEDFROMFISHLOLKEK', action: () => { player.health -= 100; } },
    ]
  },
  waterpit: {
    title: "Водоворот",
    text: "Тебе затягнуло у водоворот доки ти плив!",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMGjS4KtKw8WDiuT7jKSXvqez7YgkgpBQGg&s',
    options: [
      {text: 'Воскреснути та почати зпочатку', action: () => { player.health += 100; } },
    ]
  },
  YOUDIEDFROMFISHLOLKEK: {
    title: "Ти програв!",
    text: "Істота з'їла тебе!",
    image: 'https://i.pinimg.com/736x/44/be/8a/44be8a7790b4fd024eb90814d512d1f3.jpg',
    options: [
      {text: 'Воскреснути (почати зпочатку)', next: 'start', action: () => { player.health += 100; } },
    ]
  },
}

  let player = {
    health: 100,
    gold: 0,
  };
  
  let history = [];
  let currentScene = "start";
  
  function renderScene(key) {
    const scene = scenes[key];
    currentScene = key;
    history.push(key);
  
    const sceneDiv = document.getElementById("scene");
  
    const imageHtml = scene.image
      ? `<img src="${scene.image}" class="scene-image">`
      : "";
  
    sceneDiv.innerHTML = `
      <h2>${scene.title}</h2>
      ${imageHtml}
      <p>${scene.text}</p>
      <p>Здоров'я: ❤️ ${player.health}</p>
      <p>Золото: 💰 ${player.gold}</p>
      <div class="options">
        ${scene.options.map((opt, index) =>
          `<button onclick="handleOption('${key}', ${index})">${opt.text}</button>`
        ).join("")}
      </div>
    `;
  }
  
  function handleOption(sceneKey, optionIndex) {
    const option = scenes[sceneKey].options[optionIndex];
    if (option.action) option.action();
    renderScene(option.next);
  }
  
  function goBack() {
    history.pop();
    const prev = history.pop();
    if (prev) renderScene(prev);
  }
  
  document.getElementById("startBtn").onclick = () => {
    player = { health: 100, gold: 0 };
    renderScene("start");
  };
  
  document.getElementById("backBtn").onclick = goBack;
  
  renderScene("start");
  
