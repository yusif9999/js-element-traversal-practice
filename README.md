# Dynamic Cart Management (Vanilla JS)

A dynamic and interactive shopping cart project built entirely with **Vanilla JavaScript, HTML, and CSS**. This project was developed specifically to practice and demonstrate foundational JavaScript concepts, with a heavy emphasis on **DOM Manipulation** and **DOM Traversal**, without relying on external libraries or advanced state management frameworks.

## 🚀 Features

- **Dynamic Total Calculation:** Extracts raw string data from the HTML DOM, cleans it, converts it to numbers, and calculates real-time totals.
- **Smart Campaign Logic:** Automatically applies a 10% discount and free shipping for carts over 2000 TL, or strictly free shipping for carts over 1000 TL.
- **Estimated Delivery Date:** Utilizes the JavaScript `Date` object to dynamically calculate and display an estimated delivery date (current day + 3 days) formatted in a readable string.
- **DOM Traversal for Deletion:** Uses `parentElement` to locate specific product containers in the DOM tree, visually hiding them and removing their identification classes to exclude them from future calculations.
- **Dynamic Stock Alerts:** Iterates through product nodes to check stock values; if stock is critically low (Quantity: 1), it dynamically injects a `data-stock="critical"` attribute and applies inline CSS to highlight the item.

## 🧠 Core Concepts Practiced

This project strictly utilizes the following pure JavaScript concepts:
- **DOM Selectors:** `getElementById`, `querySelectorAll`
- **DOM Traversal:** `parentElement`, `children`, navigating through NodeLists
- **DOM Manipulation:** Altering browser content dynamically via `textContent`
- **Attribute Management:** Reading and writing custom HTML attributes (`getAttribute`, `setAttribute`)
- **CSS Class Management:** Dynamically modifying styles using `classList.add` and `classList.remove`
- **Inline Styling:** Direct style injection (`style.display`, `style.backgroundColor`)
- **Data Types & Variables:** Type conversion (`+string`), String methods (`replace`, `trim`), and Booleans for logical flags.
- **Loops & Conditionals:** `forEach` iterations and complex `if / else if / else` logical flows.

## 🛠️ Technologies Used

- **HTML5:** Semantic structure acting as the primary database for the application.
- **CSS3:** Basic layout and utility classes.
- **JavaScript (ES6):** Pure, Vanilla JS focusing on strict DOM rules.

## 📂 How to Run

1. Clone this repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Click "Calculate / Update Cart" to generate the invoice, or remove items directly to see DOM Traversal in action!

---
*Authored by Yusif Gaziyev.*
