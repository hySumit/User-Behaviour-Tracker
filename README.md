# Reliance Digital Clone, Recommendations Demo Project

This project demonstrates a product recommendation feature by utilizing data collected from user behavior on Reliance Digital Clone- e-commerce. The user's visited product details are stored in cookies and retrieved in this demo project to display personalized product recommendations on a dedicated recommendations page.

## Features

- **Use of Backend API**: Fetches product data from a backend API and categorizes it by type.

- **Use of Cookies Data**: Displays visited product recommendations based on cookies shared from the e-commerce project.

- **Resoinsive Design**: Responsive design for seamless user experience.



---

## Technologies Used

- **Frontend**: `React` (with Vite) and `CSS` for UI styling and responsiveness.

- **API Interaction:**: Axios

- **Data Sharing**: `js-cookie` for accessing cross-domain `cookie` data
---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- Make Sure both of the Projects should run on the LocalHost
- Install cors extension on your Browser if you are having trouble to get data from the API

### Installation

1. Clone the repository of DEMO Project:

    ```bash
    https://github.com/hySumit/User-Behaviour-Tracker.git
    ```

2. Clone the repository of E-commerce Project:

    ```bash
    https://github.com/hySumit/Reliance-Digital-clone-full-stack.git
    ```

3. Environment Variables : Ensure you have the correct API endpoint in your code. Update the API URL if necessary.

The default API URL in the code is:

    
    const url = "https://reliance-digital-clone-full-stack.onrender.com/products";



4. Run both of the Project:

    - `npm start`



---

## How It Works

#### Data Flow Between Projects


1. **E-commerce Project**:
- Whenever a user visits a product page, the product details (name, image, price, rating, etc.) are stored in cookies `(visitedProducts)` using the `js-cookie library`.

- These cookies are shared across domains via the `sameSite: "None"` and `secure: true` attributes.


2. **Demo Project**: 
- On the Recommendations page, the `visitedProducts` cookie is accessed and parsed to retrieve the visited product details.

- The products are displayed as recommendations, showing their name, image, original price, and a calculated discounted price.

3. **API Integration**:
- The `Product` component fetches all available products from the backend API using Axios.
- Products are categorized dynamically based on their category and rendered into respective sections.

4. **Cookie Usage**:
- The `visitedProducts` cookie is the bridge between the e-commerce and demo projects, storing and sharing user activity across the two projects.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your enhancements.

---

## Contact

For further questions or support, reach out via [sumitbth67@gmail.com](mailto:sumitbth67@gmail.com).



