document.addEventListener('DOMContentLoaded', () => {
    // 1. Define the data with mealType AND a unique ID for linking
    const ALL_RECIPES = [
        // Ensure ALL recipes have a unique 'id' for linking
        { name: "Fluffy Pancakes", image: "images/fluffy_pancakes.jpg", id: "pancake707", mealType: "Breakfast" },
        { name: "Avocado Toast", image: "images/avocado_toast.jpg", id: "avocado808", mealType: "Breakfast" },
        
        { name: "Sheet Pan Quesadillas", image: "images/quesadillas.jpg", id: "quesadilla505", mealType: "Lunch" },
        { name: "Caribbean Jerk Chicken", image: "images/caribbean_chicken.jpg", id: "jerk404", mealType: "Lunch" },
        { name: "Easy Pork Tacos", image: "images/pork_tacos.jpg", id: "pork606", mealType: "Lunch" },
        
        { name: "Salmon and Asparagus (Garlic Lemon Butter)", image: "images/salmon_asparagus.jpg", id: "salmon101", mealType: "Dinner" },
        { name: "Pesto Chicken Pasta", image: "images/pesto_chicken_pasta.jpg", id: "pesto202", mealType: "Dinner" },
        { name: "Lemon Garlic Butter and Green Beans Skillet", image: "images/lemon_garlic_chicken_skillet.jpg", id: "lemon303", mealType: "Dinner" },
        { name: "Spicy Beef Stir Fry", image: "images/stir_fry.jpg", id: "stirfry909", mealType: "Dinner" },
        { name: "Chocolate Chip Cookies", image: "images/cookies.jpg", id: "cookie1010", mealType: "Dinner" }, 
    ];

    let currentRecipes = [...ALL_RECIPES]; 
    let currentFilter = 'All'; 
    
    const RECIPES_PER_PAGE = 6;
    let currentPage = 1;
    
    const recipeContainer = document.getElementById('recipe-cards-container');
    const paginationContainer = document.querySelector('.pagination');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Search input references
    const searchInput = document.getElementById('favSearchInput');
    const searchButton = document.getElementById('search-button');


    // --- CORE RENDERING FUNCTIONS ---

    const createRecipeCard = (recipe) => {
        // MODIFIED: Link points to recipes.html with the recipe's unique ID as a parameter
        const recipeUrl = `recipes.html?id=${recipe.id}`; 
        
        return `
            <a href="${recipeUrl}" class="recipe-card-link">
                <div class="recipe-card">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <div class="recipe-info">
                        <h3>${recipe.name}</h3>
                    </div>
                </div>
            </a>
        `;
    };

    const displayRecipes = (page, recipesArray) => {
        const totalRecipes = recipesArray.length;
        const totalPages = Math.ceil(totalRecipes / RECIPES_PER_PAGE);

        if (page > totalPages && totalPages > 0) {
            page = totalPages;
            currentPage = totalPages;
        } else if (totalPages === 0) {
            recipeContainer.innerHTML = "<p style='text-align:center;'>No recipes found matching the criteria.</p>";
            paginationContainer.innerHTML = '';
            return;
        }

        const startIndex = (page - 1) * RECIPES_PER_PAGE;
        const endIndex = startIndex + RECIPES_PER_PAGE;
        
        const recipesToDisplay = recipesArray.slice(startIndex, endIndex);

        let recipesHTML = '';
        recipesToDisplay.forEach(recipe => {
            recipesHTML += createRecipeCard(recipe);
        });

        recipeContainer.innerHTML = recipesHTML;
        setupPagination(totalPages);
    };

    const setupPagination = (totalPages) => {
        let paginationHTML = '';

        paginationHTML += `<a href="#" data-page="prev" class="${currentPage === 1 ? 'disabled' : ''}">&lt;</a>`;

        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
        }

        paginationHTML += `<a href="#" data-page="next" class="${currentPage === totalPages ? 'disabled' : ''}">&gt;</a>`;

        paginationContainer.innerHTML = paginationHTML;

        paginationContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                
                if (link.classList.contains('disabled')) return;

                const targetPage = link.getAttribute('data-page');
                let newPage = currentPage;

                if (targetPage === 'prev') {
                    newPage = currentPage - 1;
                } else if (targetPage === 'next') {
                    newPage = currentPage + 1;
                } else {
                    newPage = parseInt(targetPage);
                }

                if (newPage >= 1 && newPage <= totalPages) {
                    currentPage = newPage;
                    displayRecipes(currentPage, currentRecipes);
                }
            });
        });
    };

    // --- MEAL TYPE FILTERING ---

    const filterRecipes = (mealType) => {
        currentFilter = mealType;
        searchInput.value = ''; 
        
        let filteredRecipes;

        if (mealType === 'All') {
            filteredRecipes = ALL_RECIPES;
        } else {
            filteredRecipes = ALL_RECIPES.filter(recipe => recipe.mealType === mealType);
        }

        currentRecipes = filteredRecipes;
        currentPage = 1; 
        
        displayRecipes(currentPage, currentRecipes);
        updateActiveNav(mealType);
    };

    const updateActiveNav = (mealType) => {
        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.textContent === mealType) {
                link.classList.add('nav-active');
            }
        });
    };
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const mealType = event.target.textContent;
            filterRecipes(mealType);
        });
    });
    
    // --- SEARCH FUNCTIONALITY ---

    const handleSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        updateActiveNav(null); 
        currentFilter = 'Search'; 

        let filteredRecipes = ALL_RECIPES.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm)
        );

        currentRecipes = filteredRecipes;
        currentPage = 1; 
        displayRecipes(currentPage, currentRecipes);
    };
    
    searchButton.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            handleSearch();
        }
    });

    // 5. Initial load
    displayRecipes(currentPage, currentRecipes);
    updateActiveNav('All'); 
});