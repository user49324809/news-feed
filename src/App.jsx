import React, { useState } from 'react';
import ArticleList, { mockArticles } from './components/ArticleList';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [filteredCategory, setFilteredCategory] = useState('Все');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const categories = ['Все', ...new Set(mockArticles.map(article => article.category))];

  const filteredArticles =
    filteredCategory === 'Все'
      ? mockArticles
      : mockArticles.filter(article => article.category === filteredCategory);

  const lastIndex = currentPage * articlesPerPage;
  const firstIndex = lastIndex - articlesPerPage;
  const currentArticles = filteredArticles.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  return (
    <div className="app-container">
      <h1>Новостная лента</h1>

      <CategoryFilter
        categories={categories}
        activeCategory={filteredCategory}
        onCategoryChange={category => {
          setFilteredCategory(category);
          setCurrentPage(1);
        }}
      />

      <ArticleList articles={currentArticles} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;