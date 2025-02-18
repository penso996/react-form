// Main.jsx
import { useState } from "react";

// Initial list of articles  (Obj Array)
const initialArticles = [
    { id: 1, title: "10 Tricks to Improve Productivity" },
    { id: 2, title: "Complete JavaScript Guide for Beginners" },
    { id: 3, title: "Top CSS Frameworks of 2025" },
    { id: 4, title: "How to Start a Successful Blog" },
    { id: 5, title: "Digital Marketing Strategies for Emerging Businesses" },
    { id: 6, title: "Artificial Intelligence in the Workplace" },
    { id: 7, title: "How to Optimize Your Website for SEO" },
    { id: 8, title: "Tech Trends to Follow This Year" },
    { id: 9, title: "Time Management: Effective Techniques to Stay Organized" },
    { id: 10, title: "The Benefits of Cloud Computing for Small Businesses" }
];

export default function Main() {

    // State for the list of articles
    const [articles, setArticles] = useState(initialArticles);
    // State for handling the input text
    const [newArticle, setNewArticle] = useState("");

    // FUNCTION to add a new article
    function addArticle(event) {
        event.preventDefault(); // Prevents default behaviour (doesn't reload page)

        // If the input is empty do nothing
        if (newArticle.trim() === "") {
            return;
        }

        // Create a new article object with a unique ID
        const newArticleObj = {
            id: articles.length === 0 ? 1 : articles[articles.length - 1].id + 1,
            title: newArticle
        };

        // Adds the new article to the list
        setArticles([...articles, newArticleObj]);

        // Clears the input after adding
        setNewArticle("");
    }

    // FUNCTION to remove an article by ID
    function removeArticle(id) {
        // Filters the list to remove the article with the given ID
        const updatedArticles = articles.filter(article => article.id !== id);
        setArticles(updatedArticles);
    }

    // RETURN in page
    return (
        <main>

            {/* Form to add a new article */}
            <form onSubmit={addArticle}>
                <input
                    type="text"
                    value={newArticle}
                    onChange={(e) => setNewArticle(e.target.value)}
                    placeholder="Add a new article..."
                />
                <button type="submit">Add</button>
            </form>

            {/* If the list is empty, show a message */}
            {articles.length === 0 ? (<h2>Your list is empty</h2>) : (
                <ul> {/* Or display each article in the list */}
                    {articles.map((article) => (
                        <li key={article.id}>
                            {article.title}
                            <button onClick={() => removeArticle(article.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}

        </main>
    );
}