// ================== Example Recipe Data ==================
const recipes = [
  {
    title: "Fluffy Pancakes",
    image: "pictures/hussein-lazim-sVxDMXluCjQ-unsplash.jpg",
    mealType: "Breakfast",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 4,
    kcal: 250,
    difficulty: "Easy",
    dietary: ["Vegetarian"],
    description: "Light and fluffy pancakes perfect for a weekend breakfast.",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tbsp granulated sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "3/4 cup milk",
      "2 tbsp melted butter",
      "1 large egg"
    ],
    instructions: [
      "Whisk together flour, sugar, baking powder, and salt.",
      "In another bowl, whisk milk, egg, and melted butter.",
      "Combine wet and dry ingredients until just mixed. Batter should be slightly lumpy.",
      "Cook on a hot griddle until golden brown on both sides."
    ]
  },
  {
    title: "Avocado Toast",
    image: "pictures/avocado.jpg",
    mealType: "Breakfast",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: 2,
    kcal: 320,
    difficulty: "Easy",
    dietary: ["Vegetarian", "Dairy-Free"],
    description: "A healthy and delicious start to your day.",
    ingredients: [
      "2 slices whole-grain bread",
      "1 ripe avocado",
      "2 poached eggs",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Toast the bread slices.",
      "Mash avocado and spread evenly on toast.",
      "Top each slice with a poached egg.",
      "Season with salt and pepper."
    ]
  },
  {
    title: "Slow Cooker Beef Bourguignon",
    image: "pictures/beefstew.jpg",
    mealType: "Dinner",
    prepTime: "30 mins",
    cookTime: "9 hours",
    servings: 6,
    kcal: 550,
    difficulty: "Hard",
    dietary: ["Beef"],
    description: "French classic with beef simmered in red wine, herbs, and vegetables.",
    ingredients: [
      "2 lbs beef chuck, cubed",
      "2 cups red wine",
      "2 carrots, chopped",
      "1 onion, chopped",
      "3 garlic cloves, minced",
      "1 cup mushrooms",
      "1 tsp thyme"
    ],
    instructions: [
      "Brown beef in skillet.",
      "Add vegetables, garlic, and thyme.",
      "Transfer to slow cooker with wine.",
      "Cook on low for 8–9 hours until tender.",
      "Serve with mashed potatoes or bread."
    ],
    credit: "The Recipe Critic"
  },
  {
    title: "Vegetarian Lasagna",
    image: "pictures/Vegetable_lasagna.jpg",
    mealType: "Dinner",
    prepTime: "20 mins",
    cookTime: "1 hour",
    servings: 6,
    kcal: 480,
    difficulty: "Medium",
    dietary: ["Vegetarian"],
    description: "Layered lasagna with vegetables, tomato sauce, and creamy ricotta.",
    ingredients: [
      "9 lasagna noodles",
      "2 cups zucchini, sliced",
      "2 cups spinach",
      "3 cups tomato sauce",
      "1 cup ricotta cheese",
      "2 cups mozzarella cheese"
    ],
    instructions: [
      "Cook lasagna noodles according to package.",
      "Layer noodles with tomato sauce, vegetables, ricotta, and mozzarella.",
      "Repeat layers and finish with cheese.",
      "Bake at 375°F for 40 minutes until golden.",
      "Cool slightly before serving."
    ],
    credit: "Green Kitchen Stories (Keevee)"
  },
  {
    title: "Caprese Salad",
    image: "pictures/caprese-salad.jpg",
    mealType: "Lunch",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: 2,
    kcal: 220,
    difficulty: "Easy",
    dietary: ["Vegetarian", "Gluten-Free"],
    description: "A refreshing Italian salad with ripe tomatoes, mozzarella, and basil.",
    ingredients: [
      "2 large ripe tomatoes",
      "8 oz fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Balsamic glaze",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Slice tomatoes and mozzarella.",
      "Layer tomato, mozzarella, and basil leaves.",
      "Drizzle with olive oil and balsamic glaze.",
      "Season with salt and pepper."
    ],
    credit: "Delish"
  },
  {
    title: "Beef Wellington",
    image: "pictures/Beef-wellington.jpg",
    mealType: "Dinner",
    prepTime: "45 mins",
    cookTime: "2 hours",
    servings: 6,
    kcal: 650,
    difficulty: "Hard",
    dietary: ["Beef"],
    description: "An elegant dish of beef tenderloin wrapped in puff pastry with mushroom duxelles.",
    ingredients: [
      "2 lb beef tenderloin",
      "1 sheet puff pastry",
      "1 cup mushrooms, finely chopped",
      "2 tbsp Dijon mustard",
      "Prosciutto slices",
      "1 egg yolk (for brushing)"
    ],
    instructions: [
      "Sear beef tenderloin and brush with mustard.",
      "Prepare mushroom duxelles and layer with prosciutto.",
      "Wrap beef in puff pastry.",
      "Bake until golden brown and beef is medium-rare."
    ],
    credit: "BBC Good Food"
  },
  {
    title: "Thai Noodle Salad",
    image: "pictures/thai-chicken.jpg",
    mealType: "Lunch",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    kcal: 400,
    difficulty: "Easy",
    dietary: ["Chicken"],
    description: "A refreshing noodle salad with chicken, crisp vegetables, and a tangy Thai-inspired dressing.",
    ingredients: [
      "8 oz rice noodles",
      "2 cups cooked chicken, shredded",
      "1 red bell pepper, sliced",
      "1 carrot, julienned",
      "1/2 cup cucumber, sliced",
      "1/4 cup chopped peanuts",
      "Fresh cilantro",
      "2 tbsp soy sauce",
      "2 tbsp lime juice",
      "1 tbsp fish sauce",
      "1 tbsp sesame oil"
    ],
    instructions: [
      "Cook rice noodles according to package instructions and rinse under cold water.",
      "Combine noodles, chicken, bell pepper, carrot, and cucumber in a large bowl.",
      "Whisk together soy sauce, lime juice, fish sauce, and sesame oil for dressing.",
      "Pour dressing over salad and toss to coat.",
      "Top with peanuts and cilantro before serving."
    ],
    credit: "Taste of Home"
  },
  {
  title: "Matzo Ball Soup",
  image: "pictures/matzo-ball.jpg",
  mealType: "Dinner",
  prepTime: "20 mins",
  cookTime: "1 hour",
  servings: 4,
  kcal: 350,
  difficulty: "Easy",
  dietary: ["Kosher","Chicken"],
  description: "A comforting Jewish soup with fluffy matzo balls simmered in chicken broth.",
  ingredients: [
    "4 eggs",
    "1 cup matzo meal",
    "1/4 cup schmaltz (or oil)",
    "Salt and pepper",
    "8 cups chicken broth",
    "2 carrots, sliced",
    "2 celery stalks, sliced"
  ],
  instructions: [
    "Mix eggs, matzo meal, fat, and seasoning to form dough.",
    "Chill, then shape into balls.",
    "Simmer balls in chicken broth with carrots and celery until cooked through."
  ],
  credit: "Kosher.com"
},
{
  title: "Chicken Akni",
  image: "pictures/anki-rice.jpg",
  mealType: "Dinner",
  prepTime: "20 mins",
  cookTime: "1 hour",
  servings: 6,
  kcal: 500,
  difficulty: "Medium",
  dietary: ["Halal", "Chicken"],
  description: "A fragrant South African rice and chicken dish cooked with spices and saffron.",
  ingredients: [
    "2 cups basmati rice",
    "1 kg chicken pieces",
    "2 onions, sliced",
    "2 tomatoes, chopped",
    "1 cup yogurt",
    "2 tbsp biryani masala",
    "1 tsp saffron threads",
    "Fresh cilantro and mint"
  ],
  instructions: [
    "Marinate chicken with yogurt and spices.",
    "Cook onions and tomatoes, then add chicken.",
    "Layer rice and chicken, add saffron milk.",
    "Steam until rice is fluffy and chicken is tender."
  ],
  credit: "Halaal Recipes Community"
},
  {
    id: "pumpkin-pie",
    title: "Classic Pumpkin Pie",
    description: "A creamy, spiced pumpkin pie baked in a flaky crust — perfect for autumn gatherings.",
    image: "pictures/pumpkin-pie.jpg", 
    prepTime: "20 mins",
    cookTime: "55 mins",
    servings: "8",
    difficulty: "Medium",
    dietary: ["Dessert"],
    ingredients: [
      "1 (15 oz) can pumpkin puree",
      "1 (14 oz) can sweetened condensed milk",
      "2 large eggs",
      "1 tsp ground cinnamon",
      "1/2 tsp ground ginger",
      "1/2 tsp ground nutmeg",
      "1/2 tsp salt",
      "1 (9-inch) unbaked pie crust"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "In a large bowl, whisk together pumpkin puree, condensed milk, eggs, spices, and salt until smooth.",
      "Pour filling into the pie crust.",
      "Bake for 15 minutes, then reduce oven temperature to 350°F (175°C).",
      "Continue baking for 35–40 minutes, or until a knife inserted near the center comes out clean.",
      "Cool on a wire rack for 2 hours. Refrigerate leftovers."
    ],
    credit: "JoCooks"
  },
  {
  id: "brownies",
  title: "Fudgy Brownies",
  description: "Rich, chocolatey brownies with a crackly top and gooey center.",
  image: "pictures/brownies.jpg",
  prepTime: "15 mins",
  cookTime: "30 mins",
  servings: "12",
  difficulty: "Easy",
  dietary: ["Dessert"],
  ingredients: [
    "1/2 cup unsalted butter, melted",
    "1 cup granulated sugar",
    "2 large eggs",
    "1/3 cup unsweetened cocoa powder",
    "1/2 cup all-purpose flour",
    "1/4 tsp salt",
    "1/4 tsp baking powder"
  ],
  instructions: [
    "Preheat oven to 350°F (175°C). Grease a 9x9-inch pan.",
    "Mix melted butter, sugar, and eggs until smooth.",
    "Stir in cocoa, flour, salt, and baking powder.",
    "Spread batter into prepared pan.",
    "Bake 25–30 minutes until edges are set and center is slightly soft.",
    "Cool before cutting into squares."
  ],
  credit:"Allrecipes" 
},
{
  id: "chocolate-chip-cookies",
  title: "Chocolate Chip Cookies",
  description: "Classic chewy cookies loaded with melty chocolate chips.",
  image: "pictures/chocolate-chip.jpg",
  prepTime: "20 mins",
  cookTime: "10 mins",
  servings: "24",
  difficulty: "Easy",
  dietary: ["Dessert"],
  ingredients: [
    "1 cup unsalted butter, softened",
    "1 cup white sugar",
    "1 cup packed brown sugar",
    "2 large eggs",
    "2 tsp vanilla extract",
    "3 cups all-purpose flour",
    "1 tsp baking soda",
    "2 tsp hot water",
    "1/2 tsp salt",
    "2 cups semisweet chocolate chips"
  ],
  instructions: [
    "Preheat oven to 350°F (175°C).",
    "Cream together butter and sugars until smooth.",
    "Beat in eggs one at a time, then stir in vanilla.",
    "Dissolve baking soda in hot water and add to batter with salt.",
    "Stir in flour and chocolate chips.",
    "Drop spoonfuls onto ungreased baking sheets.",
    "Bake 8–10 minutes until edges are golden."
  ],
  credit: "Allrecipes"
}
];


// ================== Favorites (local) ==================
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// ================== Utilities ==================
function getDifficultyStars(level) {
  switch (level) {
    case "Easy": return "⭐";
    case "Medium": return "⭐⭐";
    case "Hard": return "⭐⭐⭐";
    default: return "";
  }
}

// ================== Module-level DOM refs (populated on init) ==================
let gridRef = null;
let mealRow = null;
let proteinRow = null;
let dietRow = null;
let clearBtn = null;
let resultsCountEl = null;
let activeFiltersEl = null;

// ================== Card template ==================
function createRecipeCard(recipe, index) {
  const isFavorite = Array.isArray(favorites) && favorites.includes(recipe.title);
  const dietaryHtml = Array.isArray(recipe.dietary) ? recipe.dietary.map(d => `<span class="diet-tag">${d}</span>`).join('') : '';
  return `
    <div class="recipe-card" data-index="${index}" onclick="showRecipeDetail(${index})">
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.title}">
        <span class="meal-tag">${recipe.mealType || ''}</span>
        <button class="card-favorite-btn ${isFavorite ? "active" : ""}" data-index="${index}" type="button" aria-pressed="${isFavorite ? "true" : "false"}" onclick="toggleFavorite(event, ${index})">
          <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>
      <div class="recipe-content">
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="description">${recipe.description || ''}</p>
        <div class="diet-tags">${dietaryHtml}</div>
        <div class="info-bar">
          <span class="info-item"><i class="fa-regular fa-clock"></i> ${recipe.cookTime || '—'}</span>
          <span class="info-item"><i class="fa-solid fa-utensils"></i> ${recipe.servings || '—'} servings</span>
          <span class="info-item">${getDifficultyStars(recipe.difficulty)} ${recipe.difficulty || ''}</span>
        </div>
        ${recipe.credit ? `<p class="credit">Source: ${recipe.credit}</p>` : ''}
      </div>
    </div>
  `;
}


// renderGrid uses the module-level gridRef by default
function renderGrid(list, container = gridRef) {
  if (!container) return;
  container.innerHTML = list.map(r => {
    const originalIndex = recipes.indexOf(r);
    return createRecipeCard(r, originalIndex);
  }).join("");
}

// ================== Favorite toggle (local favorites) ==================
function toggleFavorite(event, index) {
  event.stopPropagation();
  const recipe = recipes[index];
  if (!recipe) return;
  const btn = event.currentTarget;

  if (!Array.isArray(favorites)) favorites = [];

  if (favorites.includes(recipe.title)) {
    favorites = favorites.filter(f => f !== recipe.title);
    if (btn) {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  } else {
    favorites.push(recipe.title);
    if (btn) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderGrid(recipes);
}

// ================== Filters ==================
const mealTypes = ["All","Breakfast","Lunch","Dinner", "Dessert"];
const proteinTags = ["Chicken", "Beef", "Pork", "Fish", "Shellfish"];
const diets = [
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Keto",
  "Low-Carb",
  "Halal",
  "Kosher",
  "Shellfish-Free",
  "Egg-Free",
  "Soy-Free" ];
let activeMeals = new Set(["All"]);
let activeDiets = new Set();
let activeProteins = new Set();
const STORAGE_KEY = "recipeFilters_v1";

function saveFilters() {
  try {
    const matchAll = matchAllToggle ? (matchAllToggle.getAttribute('aria-pressed') === 'true') : false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      meals: Array.from(activeMeals),
      diets: Array.from(activeDiets),
      proteins: Array.from(activeProteins),
      matchAll: matchAll
    }));
  } catch {}
}

function loadFilters() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const { meals, diets: ds, proteins: ps, matchAll } = JSON.parse(raw);
    activeMeals = new Set(meals && meals.length ? meals : ["All"]);
    activeDiets = new Set(ds || []);
    activeProteins = new Set(ps || []);
    if (matchAllToggle) matchAllToggle.setAttribute('aria-pressed', !!matchAll ? 'true' : 'false');
  } catch {}
}

function chipHtml(label, active = false) {
  return `<button class="chip" role="button" aria-pressed="${active}" data-label="${label}" type="button">
    <span class="label">${label}</span>
  </button>`;
}

function renderChips() {
  if (mealRow) mealRow.innerHTML = mealTypes.map(m => chipHtml(m, activeMeals.has(m))).join("");
  if (proteinRow) proteinRow.innerHTML = proteinTags.map(p => chipHtml(p, activeProteins.has(p))).join("");
  if (dietRow) dietRow.innerHTML = diets.map(d => chipHtml(d, activeDiets.has(d))).join("");
  attachChipListeners();
  updateCounts();
  renderActiveFilters();
}

function attachChipListeners() {
  if (mealRow) {
    mealRow.querySelectorAll(".chip").forEach(btn => {
      btn.onclick = () => {
        const label = btn.dataset.label;
          if (label === "All") {
            activeMeals = new Set(["All"]);
          } else {
            activeMeals.delete("All");
            if (activeMeals.has(label)) activeMeals.delete(label); else activeMeals.add(label);
            if (activeMeals.size === 0) activeMeals.add("All");
          }
        saveFilters();
        renderChips();
        applyFilters();
      };
    });
  }

  if (proteinRow) {
    proteinRow.querySelectorAll(".chip").forEach(btn => {
      btn.onclick = () => {
        const label = btn.dataset.label;
        if (activeProteins.has(label)) activeProteins.delete(label); else activeProteins.add(label);
        saveFilters();
        renderChips();
        applyFilters();
      };
    });
  }

  if (dietRow) {
    dietRow.querySelectorAll(".chip").forEach(btn => {
      btn.onclick = () => {
        const label = btn.dataset.label;
        if (activeDiets.has(label)) activeDiets.delete(label); else activeDiets.add(label);
        saveFilters();
        renderChips();
        applyFilters();
      };
    });
  }
}

function recipeMatchesProteins(recipe) {
  if (activeProteins.size === 0) return true;
  const proteins = Array.from(activeProteins);
  const ingredientsText = (recipe.ingredients || []).join(' ').toLowerCase();
  const dietaryText = (recipe.dietary || []).map(t => t.toLowerCase());
  return proteins.some(p => {
    const pLower = p.toLowerCase();
    if (dietaryText.includes(pLower)) return true;
    return ingredientsText.includes(pLower);
  });
}

function computeFilteredRecipes() {
  const meals = activeMeals.has("All") ? null : Array.from(activeMeals);
  const dietsArr = Array.from(activeDiets);
  const matchAll = isMatchAll();
  

  return recipes.filter(r => {
    const mealOk = !meals || meals.includes(r.mealType);
    const dietOk = dietsArr.length === 0 ? true : (matchAll
      ? dietsArr.every(d => (r.dietary || []).map(t => t.toLowerCase()).includes(d.toLowerCase()))
      : dietsArr.some(d => (r.dietary || []).map(t => t.toLowerCase()).includes(d.toLowerCase())));
    const proteinOk = recipeMatchesProteins(r);
    return mealOk && dietOk && proteinOk;
  });
}


function isMatchAll() {
  return matchAllToggle ? (matchAllToggle.getAttribute('aria-pressed') === 'true') : false;
}


function updateCounts() {
  if (!resultsCountEl) return;
  const current = computeFilteredRecipes();
  resultsCountEl.textContent = `${current.length} recipes`;
}

function applyFilters() {
  const filtered = computeFilteredRecipes();
  renderGrid(filtered);
  updateCounts();
  renderActiveFilters();
}

function renderActiveFilters() {
  if (!activeFiltersEl) return;
  const parts = [];
  if (!activeMeals.has("All")) parts.push(`Meal: ${Array.from(activeMeals).join(", ")}`);
  if (activeDiets.size) parts.push(`Diet: ${Array.from(activeDiets).join(", ")}`);
  activeFiltersEl.textContent = parts.length ? `Active filters: ${parts.join(" • ")}` : "No filters active";
}

function wireFilterControls() {
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      activeMeals = new Set(["All"]);
      activeDiets.clear();
      // reset toggle if present
      if (matchAllToggle) matchAllToggle.setAttribute('aria-pressed', 'false');
      saveFilters();
      renderChips();
      applyFilters();
    });
  }

  if (matchAllCheckbox) {
    matchAllCheckbox.addEventListener('change', () => {
      // keep toggle in sync if both exist
      if (matchAllToggle) matchAllToggle.setAttribute('aria-pressed', matchAllCheckbox.checked ? 'true' : 'false');
      saveFilters();
      applyFilters();
    });
  }
}

// ================== Modal ==================
function openModal() {
  const modal = document.getElementById('recipeModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  const closeBtn = document.getElementById('closeModal');
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  const modal = document.getElementById('recipeModal');
  if (!modal) return;
  modal.classList.add('hidden');

  // Reset ingredient checklist when modal closes
  const ingEl = document.getElementById('detailIngredients');
  if (ingEl) {
    ingEl.querySelectorAll('.ingredient-step').forEach(btn => {
      btn.setAttribute('aria-pressed', 'false');
      btn.classList.remove('completed');
    });
    ingEl.querySelectorAll('.ingredient-item').forEach(li => {
      li.classList.remove('collected');
    });
  }

  // Optionally clear saved state in localStorage
  const recipeTitle = document.getElementById('detailTitle')?.textContent || '';
  if (recipeTitle) {
    localStorage.removeItem(`ingredients_checked::${recipeTitle}`);
  }

  const trigger = document.querySelector('[data-open-modal]');
  if (trigger) trigger.focus();
}


function showRecipeDetail(index) {
  const recipe = recipes[index];
  if (!recipe) return;

  const titleEl = document.getElementById('detailTitle');
  const imgEl = document.getElementById('detailImage');
  const descEl = document.getElementById('detailDescription');
  const prepEl = document.getElementById('prepTime');

  const servingsEl = document.getElementById('servings');
  const cookEl = document.getElementById('cookTime');
  const difficultyEl = document.getElementById('difficulty');
  const kcalEl = document.getElementById('kcal');

  const ingEl = document.getElementById('detailIngredients');
  const instEl = document.getElementById('detailInstructions');

  if (titleEl) titleEl.textContent = recipe.title || '';
  if (imgEl) { imgEl.src = recipe.image || ''; imgEl.alt = recipe.title || ''; }
  if (descEl) descEl.textContent = recipe.description || '';

  if (prepEl) prepEl.textContent = recipe.prepTime || '';
  if (cookEl) cookEl.textContent = recipe.cookTime || '';
  if (servingsEl) servingsEl.textContent = recipe.servings || '';
  if (kcalEl) kcalEl.textContent = recipe.kcal || '';
  if (difficultyEl) difficultyEl.textContent = recipe.difficulty || '';


function parseIngredient(text) {
  text = String(text || '').trim();
  if (!text) return { qty: '', unit: '', name: '' };

  // normalize unicode fractions and dashes
  const unicodeMap = { '½':'1/2','¼':'1/4','¾':'3/4','⅓':'1/3','⅔':'2/3','⅛':'1/8','⅜':'3/8','⅝':'5/8','⅞':'7/8' };
  text = text.replace(/[\u00BC-\u215E]/g, ch => unicodeMap[ch] || ch);
  text = text.replace(/[-–]/g, ' ').replace(/\s+/g, ' ').trim();

  // common units (keep plural forms)
  const units = '(cup|cups|tbsp|tablespoon|tablespoons|tsp|teaspoon|teaspoons|oz|ounce|ounces|g|kg|ml|l|slice|slices|can|cans|clove|cloves|pinch|handful)';
  // Try: qty + optional unit + rest-of-name
  const re = new RegExp('^\\s*(\\d+(?:\\s+\\d+\\/\\d+|\\/\\d+|\\.\\d+)?|[½¼¾⅓⅔⅛⅜⅝⅞])\\s*(?:' + units + ')?\\s*(.*)$','i');
  const m = text.match(re);

  let qty = '', unit = '', name = text;
  if (m) {
    qty = (m[1] || '').trim();
    const afterQty = text.slice(text.indexOf(qty) + qty.length).trim();
    const unitMatch = afterQty.match(new RegExp('^(' + units + ')\\b','i'));
    if (unitMatch) {
      unit = unitMatch[1];
      name = afterQty.slice(unit.length).trim();
    } else {
      name = afterQty;
    }
    if (!name) {
      const fallback = text.replace(qty, '').trim();
      name = fallback.replace(/^,?\s*/, '');
    }
  } else {
    const lead = text.match(/^(\d+[\/\d\s½¼¾⅓⅔⅛⅜⅝⅞\.]*)\b(.*)$/i);
    if (lead) {
      qty = lead[1].trim();
      name = (lead[2] || '').trim();
    } else {
      name = text;
    }
  }

  // final cleanup
  name = name.replace(/^,?\s*/, '').trim();
  qty = qty.trim();
  unit = unit.trim();

  return { qty, unit, name };
}

function prettyQtyString(qty, unit) {
  if (!qty && !unit) return '';
  let s = String(qty || '').trim();
  const unicodeMap = { '½':'1/2','¼':'1/4','¾':'3/4','⅓':'1/3','⅔':'2/3','⅛':'1/8','⅜':'3/8','⅝':'5/8','⅞':'7/8' };
  s = s.replace(/[\u00BC-\u215E]/g, ch => unicodeMap[ch] || ch);
  s = s.replace(/\s+/g, ' ').trim();
  return (s ? s + (unit ? ' ' + unit : '') : (unit ? unit : '')).trim();
}

if (ingEl) {
  try {
    ingEl.innerHTML = (recipe.ingredients || []).map((raw, idx) => {
      const text = String(raw).trim();
      return `
        <li class="ingredient-item" data-idx="${idx}">
          <button class="ingredient-step" type="button" data-idx="${idx}" aria-pressed="false">
            <span class="checkbox" aria-hidden="true"></span>
            <span class="step-text">${escapeHtml(text)}</span>
          </button>
        </li>
      `;
    }).join('');
    initIngredientInteractions(ingEl);
    restoreIngredientState(recipe.title, ingEl);
  } catch (err) {
    console.error('Ingredient render error', err);
    ingEl.innerHTML = (recipe.ingredients || []).map(i => `<li>${escapeHtml(i)}</li>`).join('');
  }
}

  if (instEl) {
    try {
      instEl.innerHTML = (recipe.instructions || []).map((step, i) => `
        <li>
          <button class="instruction-step" type="button" onclick="toggleStep(this)">
            <span class="checkbox" aria-hidden="true"></span>
            <span class="step-text">${escapeHtml(step)}</span>
          </button>
        </li>
      `).join('');
      instEl.querySelectorAll('.instruction-step').forEach(btn => {
        btn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
          }
        });
      });
    } catch (err) {
      console.error('Instruction render error', err);
      instEl.innerHTML = (recipe.instructions || []).map(s => `<li>${escapeHtml(s)}</li>`).join('');
    }
  }


  // Favorite button in modal 
  const modalFavBtn = document.getElementById("modalFavoriteBtn");
    const printBtn = document.getElementById("modalPrintBtn");
  const isFavorite = Array.isArray(favorites) && favorites.includes(recipe.title);

  if (modalFavBtn) {
    modalFavBtn.dataset.currentTitle = recipe.title;
    modalFavBtn.classList.toggle("active", isFavorite);
    modalFavBtn.setAttribute("aria-pressed", isFavorite ? "true" : "false");
    modalFavBtn.innerHTML = `<i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>`;
    modalFavBtn.onclick = (e) => { e.stopPropagation(); toggleFavoriteFromModal(recipe.title); };
  }

   if (printBtn) {
    printBtn.onclick = () => printRecipe(recipe);
  }

  openModal();
}

function printRecipe(recipe) {
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>${recipe.title}</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          h1 { margin-bottom: 0.5rem; }
          .meta { margin-bottom: 1rem; font-weight: bold; }
          ul, ol { margin: 0; padding-left: 20px; }
        </style>
      </head>
      <body>
        <h1>${recipe.title}</h1>
        <div class="meta">
          Prep: ${recipe.prepTime || '—'} • Cook: ${recipe.cookTime || '—'} • Serves: ${recipe.servings || '—'} • Kcal: ${recipe.kcal || '—'}
        </div>
        <p>${recipe.description || ''}</p>
        <h3>Ingredients</h3>
        <ul>${(recipe.ingredients || []).map(i => `<li>${i}</li>`).join('')}</ul>
        <h3>Instructions</h3>
        <ol>${(recipe.instructions || []).map(s => `<li>${s}</li>`).join('')}</ol>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function toggleFavoriteFromModal(title) {
  if (!Array.isArray(favorites)) favorites = [];
  const btn = document.getElementById("modalFavoriteBtn");
  if (favorites.includes(title)) {
    favorites = favorites.filter(f => f !== title);
    if (btn) { btn.classList.remove("active"); btn.innerHTML = '<i class="fa-regular fa-heart"></i>'; btn.setAttribute('aria-pressed','false'); }
  } else {
    favorites.push(title);
    if (btn) { btn.classList.add("active"); btn.innerHTML = '<i class="fa-solid fa-heart"></i>'; btn.setAttribute('aria-pressed','true'); }
  }
  localStorage.setItem("favorites", JSON.stringify(favorites || []));
  renderGrid(recipes);
}

function toggleStep(button) {
  button.classList.toggle("completed");
}

// minimal HTML-escape helper
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// normalizeFractionString: convert common fraction formats to a compact readable form
function normalizeFractionString(q) {
  if (!q) return '';
  let s = String(q).trim();

  // map common unicode fractions to ascii
  const unicodeMap = {
    '½': '1/2','¼': '1/4','¾': '3/4',
    '⅓': '1/3','⅔': '2/3','⅛': '1/8',
    '⅜': '3/8','⅝': '5/8','⅞': '7/8'
  };
  s = s.replace(/[\u00BC-\u215E]/g, ch => unicodeMap[ch] || ch);

  // normalize dashes and extra spaces
  s = s.replace(/[-–]/g, ' ').replace(/\s+/g, ' ').trim();

  // mixed number like "1 1/2"
  const mixedMatch = s.match(/^(\d+)\s+(\d+\/\d+)$/);
  if (mixedMatch) return `${mixedMatch[1]} ${mixedMatch[2]}`;

  // simple fraction "3/4"
  if (/^\d+\/\d+$/.test(s)) return s;

  // plain number or decimal
  if (/^\d+(\.\d+)?$/.test(s)) return s;

  // try to extract leading quantity like "2 cups" -> "2"
  const lead = s.match(/^(\d+(?:\s+\d+\/\d+|\s+[½¼¾⅓⅔⅛⅜⅝⅞]|\.\d+)?)/i);
  if (lead) return lead[1].trim();

  return s;
}



// initialize ingredient list interactions (lightweight, delegated)
function initIngredientInteractions(container) {
  const ul = (container && container.tagName === 'UL') ? container : document.getElementById('detailIngredients');
  if (!ul) return;

  // restore visual state if checkboxes were toggled earlier in this modal session
  ul.querySelectorAll('.ingredient-item').forEach(li => {
    const btn = li.querySelector('.ingredient-step');
    if (btn && btn.getAttribute('aria-pressed') === 'true') li.classList.add('collected');
  });

  // remove previous handler if present
  ul.removeEventListener('click', ul._ingClickHandler);
  ul._ingClickHandler = function (e) {
    const btn = e.target.closest('.ingredient-step');
    if (!btn) return;
    e.preventDefault();

    // toggle pressed/completed state
    const li = btn.closest('.ingredient-item');
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', pressed ? 'false' : 'true');
    btn.classList.toggle('completed', !pressed);
    if (li) li.classList.toggle('collected', !pressed);

    // persist state for current recipe
    const recipeTitle = document.getElementById('detailTitle')?.textContent || '';
    if (recipeTitle) saveIngredientState(recipeTitle, ul);
  };
  ul.addEventListener('click', ul._ingClickHandler);

  // keyboard: Enter/Space toggles (for accessibility)
  ul.querySelectorAll('.ingredient-step').forEach(btn => {
    btn.removeEventListener('keydown', btn._ingKeyHandler);
    btn._ingKeyHandler = function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    };
    btn.addEventListener('keydown', btn._ingKeyHandler);
  });
}

function saveIngredientState(recipeTitle, ul) {
  try {
    if (!recipeTitle || !ul) return;
    const checked = [];
    ul.querySelectorAll('.ingredient-item').forEach(li => {
      const idx = li.dataset.idx;
      const btn = li.querySelector('.ingredient-step');
      if (btn && btn.getAttribute('aria-pressed') === 'true') checked.push(String(idx));
    });
    localStorage.setItem(`ingredients_checked::${recipeTitle}`, JSON.stringify(checked));
  } catch (e) {}
}

function restoreIngredientState(recipeTitle, ul) {
  try {
    if (!recipeTitle || !ul) return;
    const raw = localStorage.getItem(`ingredients_checked::${recipeTitle}`);
    if (!raw) return;
    const set = new Set(JSON.parse(raw || '[]'));
    ul.querySelectorAll('.ingredient-item').forEach(li => {
      const idx = String(li.dataset.idx);
      const btn = li.querySelector('.ingredient-step');
      if (!btn) return;
      const should = set.has(idx);
      btn.setAttribute('aria-pressed', should ? 'true' : 'false');
      btn.classList.toggle('completed', !!should);
      li.classList.toggle('collected', !!should);
    });
  } catch (e) {}
}



// ================== Search + Autocomplete ==================
const navSearchInput = () => document.querySelector(".container-input .input");
const heroSearchInput = () => document.getElementById("hero-search-input");

function debounce(fn, delay = 150) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

function filterRecipes(query) {
  const q = (query || "").toLowerCase();
  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(q) ||
    (r.description || '').toLowerCase().includes(q) ||
    (r.dietary || []).some(tag => tag.toLowerCase().includes(q)) ||
    (r.ingredients || []).some(ing => ing.toLowerCase().includes(q))
  );
  renderGrid(filtered);
}

function highlight(text, query) {
  const q = (query || "").trim();
  if (!q) return text;
  const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
  return text.replace(regex, match => `<strong>${match}</strong>`);
}

function scoreRecipe(r, q) {
  const title = r.title.toLowerCase();
  const meal = (r.mealType || "").toLowerCase();
  const tags = (r.dietary || []).map(t => t.toLowerCase());
  let score = 0;
  if (title.includes(q)) score += 6;
  if (meal.includes(q)) score += 3;
  score += tags.reduce((s, t) => s + (t.includes(q) ? 2 : 0), 0);
  if (title.startsWith(q)) score += 3;
  return score;
}

function showSuggestions(query, containerId, limit = 8) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const q = (query || "").trim().toLowerCase();
  if (!q) {
    container.innerHTML = "";
    container.classList.remove("show");
    return;
  }

  const scored = recipes
    .map(r => ({ r, score: scoreRecipe(r, q) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  if (scored.length === 0) {
    container.innerHTML = `<div class="no-results">No results found</div>`;
    container.classList.add("show");
    return;
  }

  container.innerHTML = scored.map(({ r }) => {
    const mealMatch = (r.mealType || "").toLowerCase().includes(q) ? ` • ${highlight(r.mealType, query)}` : "";
    const tagMatch = (r.dietary || []).find(t => t.toLowerCase().includes(q));
    const tagContext = tagMatch ? ` • ${highlight(tagMatch, query)}` : "";
    return `<div class="suggestion-item" data-title="${r.title}" data-index="${recipes.indexOf(r)}">
      ${highlight(r.title, query)}${mealMatch}${tagContext}
    </div>`;
  }).join("");

  container.classList.add("show");

 Array.from(container.children).forEach(div => {
  div.addEventListener("click", () => {
    const input = containerId === "navSuggestions" ? navSearchInput() : heroSearchInput();
    if (!input) return;

    const title = div.getAttribute("data-title");
    const index = div.getAttribute("data-index");

    input.value = title;

    // have a valid index, open the recipe modal directly
    if (index !== null && index !== "-1") {
      showRecipeDetail(Number(index));
    } else {
      // fallback: filter grid if index missing
      filterRecipes(title.toLowerCase());
    }

    container.innerHTML = "";
    container.classList.remove("show");
    input.focus();
  });
});
}

// Surprise Me button
const surpriseBtn = document.getElementById('surprise-btn');
if (surpriseBtn) {
  surpriseBtn.addEventListener('click', () => {
    if (!recipes || recipes.length === 0) return;

    // Pick a random recipe index
    const randomIndex = Math.floor(Math.random() * recipes.length);

    // Show the recipe modal
    showRecipeDetail(randomIndex);
  });
}


function enableKeyboardNavigation(inputEl, containerId) {
  if (!inputEl) return;
  let selectedIndex = -1;
  inputEl.addEventListener('keydown', e => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const items = container.querySelectorAll('.suggestion-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      selectedIndex = (selectedIndex + 1) % items.length;
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      e.preventDefault();
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      items[selectedIndex].click();
      selectedIndex = -1;
    } else if (e.key === 'Escape') {
      container.innerHTML = '';
      container.classList.remove('show');
      selectedIndex = -1;
      return;
    }

    items.forEach((it, i) => it.classList.toggle('active', i === selectedIndex));
  });
}

// ================== Initialize after DOM is ready ==================
document.addEventListener('DOMContentLoaded', () => {
  // populate DOM refs
  gridRef = document.getElementById('recipeGrid');
  mealRow = document.getElementById('mealFilters');
  proteinRow = document.getElementById('proteinFilters');
  dietRow = document.getElementById('dietFilters');
  clearBtn = document.getElementById('clearFilters');
  matchAllToggle = document.getElementById('dietMatchToggle');
  matchAllCheckbox = document.getElementById('dietMatchCheckbox'); // optional fallback id
  resultsCountEl = document.getElementById('resultsCount');
  activeFiltersEl = document.getElementById('activeFilters');

  // initial render and wiring
  loadFilters();
  renderGrid(recipes);
  renderChips();
  applyFilters();
  wireFilterControls();

  if (matchAllToggle) {
    if (!matchAllToggle.hasAttribute('aria-pressed')) matchAllToggle.setAttribute('aria-pressed', 'false');

    matchAllToggle.addEventListener('click', () => {
      const pressed = matchAllToggle.getAttribute('aria-pressed') === 'true';
      matchAllToggle.setAttribute('aria-pressed', pressed ? 'false' : 'true');
      saveFilters();
      applyFilters();
    });

    matchAllToggle.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        matchAllToggle.click();
      }
    });
  }

  // search inputs wiring
  const navInput = navSearchInput();
  const heroInput = heroSearchInput();
  if (navInput) {
    navInput.addEventListener('input', debounce(() => {
      const q = navInput.value;
      filterRecipes(q.toLowerCase());
      showSuggestions(q, 'navSuggestions');
    }));
    enableKeyboardNavigation(navInput, 'navSuggestions');
  }
  if (heroInput) {
    heroInput.addEventListener('input', debounce(() => {
      const q = heroInput.value;
      showSuggestions(q, 'heroSuggestions');
    }));
    enableKeyboardNavigation(heroInput, 'heroSuggestions');
  }

  // modal handlers (close button, overlay click, escape)
  const closeBtn = document.getElementById('closeModal');
  if (closeBtn) {
    closeBtn.setAttribute('type', closeBtn.getAttribute('type') || 'button');
    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
  }
  const modal = document.getElementById('recipeModal');
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});

// Back-to-top
(function setupBackToTop() {
  let btn = document.querySelector('.back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<span class="icon">↑</span>';
    document.body.appendChild(btn);
  }

  // Ensure initial hidden state
  btn.classList.remove('show');
  btn.setAttribute('aria-hidden', 'true');

  // Throttled scroll handler
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const show = window.scrollY > 300; // threshold
      btn.classList.toggle('show', show);
      btn.setAttribute('aria-hidden', show ? 'false' : 'true');
      ticking = false;
    });
  }

  // Smooth scroll on click
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    btn.blur();
  });

  // Keyboard accessibility: Enter/Space
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });

  // Attach scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once to set initial visibility
  onScroll();
})();

const hamburger = document.getElementById('navHamburger');
const overlay = document.getElementById('mobileOverlay');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('mobileClose');

function closeMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  overlay.classList.remove('show');
  overlay.hidden = true;
  mobileMenu.classList.remove('show');
  mobileMenu.hidden = true;
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  overlay.classList.toggle('show', isOpen);
  overlay.hidden = !isOpen;
  mobileMenu.classList.toggle('show', isOpen);
  mobileMenu.hidden = !isOpen;
});

overlay.addEventListener('click', closeMenu);
closeBtn.addEventListener('click', closeMenu);





