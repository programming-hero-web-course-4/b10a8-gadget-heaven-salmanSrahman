# GadgetHeaven✨ - README

## Live Website
[View Live Website](#)

## Project Requirements
[Requirement Document](#)

---

## Key React Concepts
- **Components**: Modular and reusable UI elements.
- **React Router**: Seamless navigation across pages (Home, Dashboard, Details).
- **Context API**: Efficient state management for cart and wishlist.
- **React Hooks**: Used `useState`, `useEffect`, `useContext`, and `useNavigate` for dynamic interactivity.
- **React Toastify**: Instant feedback with notifications.

---

## Data Management
- **State Handling**: Managed via Context API.
- **Data Persistence**: Cart and Wishlist saved using LocalStorage.

---

## Key Features

1. **User-Friendly Navigation**
   - Highlighted active routes in the Navbar.
   - Sidebar for category-based product filtering.

2. **Product Details**
   - Display product image, name, price, specifications, availability, and ratings.
   - Add to Cart and Wishlist buttons with disabled state after action.

3. **Dashboard**
   - Tabs for Cart and Wishlist.
   - "Sort by Price" in Cart (descending order).

4. **Notifications & Feedback**
   - Toast messages for Cart and Wishlist updates.
   - Modal confirmation on successful purchase.

5. **Additional Enhancements**
   - Dynamic page titles and favicon.
   - Custom background colors based on pages.
   - Price vs. Product chart on the "Stats" page.
   - Robust error handling with a 404 page.

---

## Notes
- **Cart Limit**: Maximum total value capped at $1000.
- **Wishlist Integration**: Items can be moved to Cart if within the limit.
- Navbar and Footer consistently appear across all pages.
