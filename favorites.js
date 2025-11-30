// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Recipe data array - contains all available recipes
    const ALL_RECIPES = [
        { name: "Fluffy Pancakes", image: "pictures/hussein-lazim-sVxDMXluCjQ-unsplash.jpg", id: "Fluffy_Pancakes", mealType: "Breakfast" },
        { name: "Avocado Toast", image: "pictures/caprese-salad.jpg", id: "Avocado_Toast", mealType: "Breakfast" },
        { name: "Caprese Salad", image: "pictures/caprese-salad.jpg", id: "Caprese_Salad", mealType: "Lunch" },
        { name: "Thai Noodle Salad", image: "pictures/thai-chicken.jpg", id: "Thai_Noodle_Salad", mealType: "Lunch" },
        { name: "Slow Cooker Beef Bourguignon", image: "pictures/beefstew.jpg", id: "Slow_Cooker_Beef_Bourguignon", mealType: "Dinner" },
        { name: "Vegetarian Lasagna", image: "pictures/Vegetable_lasagna.jpg", id: "Vegetarian_Lasagna", mealType: "Dinner" },
        { name: "Beef Wellington", image: "pictures/Beef-wellington.jpg", id: "Beef_Wellington", mealType: "Dinner" }
    ];

    // Current state variables
    let currentRecipes = [...ALL_RECIPES]; // Currently displayed recipes
    let currentFilter = 'All'; // Current active filter
    
    // Pagination settings
    const RECIPES_PER_PAGE = 6;
    let currentPage = 1;
    
    // DOM element references
    const recipeContainer = document.getElementById('recipe-cards-container');
    const paginationContainer = document.querySelector('.pagination');
    const navLinks = document.querySelectorAll('.main-nav a');
    const mealFilterNav = document.getElementById('meal-filter-nav'); 

    // Search functionality elements
    const searchInput = document.getElementById('favSearchInput');
    const searchButton = document.getElementById('search-button');

    // Function to create HTML for a recipe card
    const createRecipeCard = (recipe) => {
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

    // Function to display recipes with pagination
    const displayRecipes = (page, recipesArray) => {
        const totalRecipes = recipesArray.length;
        const totalPages = Math.ceil(totalRecipes / RECIPES_PER_PAGE);

        // Handle page boundaries
        if (page > totalPages && totalPages > 0) {
            page = totalPages;
            currentPage = totalPages;
        } else if (totalPages === 0) {
            // Show message when no recipes found
            recipeContainer.innerHTML = "<p style='text-align:center;'>No recipes found matching the criteria.</p>";
            paginationContainer.innerHTML = '';
            return;
        }

        // Calculate which recipes to show on current page
        const startIndex = (page - 1) * RECIPES_PER_PAGE;
        const endIndex = startIndex + RECIPES_PER_PAGE;
        
        const recipesToDisplay = recipesArray.slice(startIndex, endIndex);

        // Generate HTML for recipe cards
        let recipesHTML = '';
        recipesToDisplay.forEach(recipe => {
            recipesHTML += createRecipeCard(recipe);
        });

        // Update the DOM
        recipeContainer.innerHTML = recipesHTML;
        setupPagination(totalPages);
    };

    // Function to set up pagination controls
    const setupPagination = (totalPages) => {
        let paginationHTML = '';

        // Previous page button
        paginationHTML += `<a href="#" data-page="prev" class="${currentPage === 1 ? 'disabled' : ''}">&lt;</a>`;

        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
        }

        // Next page button
        paginationHTML += `<a href="#" data-page="next" class="${currentPage === totalPages ? 'disabled' : ''}">&gt;</a>`;

        // Update pagination container
        paginationContainer.innerHTML = paginationHTML;

        // Add click event listeners to pagination buttons
        paginationContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                
                // Ignore clicks on disabled links
                if (link.classList.contains('disabled')) return;

                const targetPage = link.getAttribute('data-page');
                let newPage = currentPage;

                // Determine which page to navigate to
                if (targetPage === 'prev') {
                    newPage = currentPage - 1;
                } else if (targetPage === 'next') {
                    newPage = currentPage + 1;
                } else {
                    newPage = parseInt(targetPage);
                }

                // Update current page and re-render if valid
                if (newPage >= 1 && newPage <= totalPages) {
                    currentPage = newPage;
                    displayRecipes(currentPage, currentRecipes);
                }
            });
        });
    };

    // Function to filter recipes by meal type
    const filterRecipes = (mealType) => {
        currentFilter = mealType;
        searchInput.value = ''; // Clear search when using filters
        
        let filteredRecipes;

        // Apply filter logic
        if (mealType === 'All') {
            filteredRecipes = ALL_RECIPES;
        } else {
            filteredRecipes = ALL_RECIPES.filter(recipe => recipe.mealType === mealType);
        }

        // Update state and re-render
        currentRecipes = filteredRecipes;
        currentPage = 1; // Reset to first page
        displayRecipes(currentPage, currentRecipes);
        updateActiveNav(mealType);
    };

    // Function to update active navigation state
    const updateActiveNav = (mealType) => {
        // Update meal filter navigation
        mealFilterNav.querySelectorAll('a').forEach(link => {
            link.classList.remove('nav-active');
            if (link.textContent === mealType) {
                link.classList.add('nav-active');
            }
        });
        // Update main navigation if needed
        navLinks.forEach(link => link.classList.remove('nav-active'));
    };
    
    // Add event listeners to meal filter navigation
    if (mealFilterNav) {
        mealFilterNav.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                const mealType = event.target.textContent;
                filterRecipes(mealType);
            }
        });
    }

    // Function to handle search functionality
    const handleSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        updateActiveNav(null); // Clear active nav during search
        currentFilter = 'Search'; // Set current filter state

        // Filter recipes based on search term
        let filteredRecipes = ALL_RECIPES.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm)
        );

        // Update state and re-render
        currentRecipes = filteredRecipes;
        currentPage = 1; // Reset to first page
        displayRecipes(currentPage, currentRecipes);
    };
    
    // Add event listeners for search functionality
    searchButton.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            handleSearch();
        }
    });

    // Initial page load - display all recipes
    displayRecipes(currentPage, currentRecipes);
    updateActiveNav('All'); 
});