# ⚡ DevStack — Tech Stack Builder

A modern, curated tech stack builder web application designed for developers to discover technologies and compose their dream developer stack.

🔗 **Live Site:** [Live Demo]https://dev-stack-by-rana.netlify.app  
📁 **GitHub Repository:** [GitHub Repository]https://github.com/rana123l/DevStack

---

## 📖 Description

**DevStack** is an interactive web platform where developers can explore top software engineering tools, libraries, frameworks, and databases across various domains (Frontend, Backend, Database, Language, DevOps, Styling). Users can inspect technology specifications, ratings, and difficulty levels, and interactively assemble a personalized technology stack with real-time feedback and validation.

---

## 🛠️ Technologies Used

- **Core Framework:** React.js (v19)
- **Styling & UI:** Tailwind CSS & DaisyUI
- **Build Tool:** Vite
- **Alerts & Notifications:** React-Toastify
- **Data Source:** Custom Mock JSON (`data.json`)
- **Icons:** SVG Tech Icons & Devicons

---

## ✨ Key Features

1. **Interactive Stack Management:** Users can add technologies to their custom stack panel with a single click. The card button dynamically reflects status ("✓ Added to Stack" and disabled), and individual items can be removed or cleared all at once.
2. **Duplicate Prevention & Real-Time Alerts:** Integrated with **React-Toastify** to display instant notifications when an item is successfully added, removed, or when a user attempts to add an already selected technology.
3. **Dynamic Filtering & Loading State:** Fetches technology data asynchronously from a local JSON dataset using `useEffect`, featuring a smooth loading state while the catalog initializes.

---

## ❓ React Concepts & Questions

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript files.  
**Why it is used:** It makes writing and reading component UI structures intuitive, expressive, and cleaner. Under the hood, JSX is compiled into regular `React.createElement()` calls that build and update the DOM efficiently.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed from a parent component to a child component. Props are immutable from the child's perspective and are used for unidirectional data flow.
- **State:** An internal, mutable storage managed directly inside a component using hooks like `useState`. State holds dynamic values that trigger re-rendering of the UI whenever updated.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
`useState` is a React Hook that allows functional components to declare and track local reactive state variables. When the state updater function is called, React re-renders the component with the new value.  
**Usage in this project:**
- `const [technologies, setTechnologies] = useState([])`: To store the loaded technology list fetched from `data.json`.
- `const [selectedStack, setSelectedStack] = useState([])`: To track and manage technologies selected by the user in their stack panel.
- `const [loading, setLoading] = useState(true)`: To toggle the loading indicator while fetching the JSON data.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
`useEffect` lets components perform **side effects**, such as fetching data from APIs or local files, subscribing to events, or manually interacting with the DOM after rendering.  
**Why it was needed:** Loading `data.json` via `fetch()` is an asynchronous side effect. Placing it inside `useEffect` with an empty dependency array `[]` ensures the data is fetched once when the component first mounts, preventing infinite re-rendering loops.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
The `key` prop provides each list item with a stable identity. React's virtual DOM diffing algorithm relies on keys to identify which elements were added, changed, or removed. Without unique keys, React may unnecessarily re-render or mistakenly reuse component instances, leading to UI inconsistencies and poor performance.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering is the technique of rendering different UI elements or components based on specific conditions or state values (using ternary operators `? :`, logical `&&`, or if-else statements).  
**Example from this project:**  
In the "Your Stack" sidebar, conditional rendering is used to display either the empty placeholder message or the list of selected technologies:
```jsx
{selectedStack.length === 0 ? (
  <p className="text-gray-400">Your stack is empty.</p>
) : (
  <div className="space-y-3">
    {selectedStack.map((tech) => (
      <StackItem key={tech.id} tech={tech} onRemove={handleRemove} />
    ))}
  </div>
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** The parent passes data downwards through **props** (e.g., `<TechCard tech={tech} />`).
- **Child to Parent:** The parent passes a **callback function** as a prop to the child (e.g., `<TechCard onAdd={handleAddToStack} />`). When an action occurs inside the child (such as clicking the "Add to Stack" button), the child invokes that callback function with necessary arguments, sending the data back up to the parent.
