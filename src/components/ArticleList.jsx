import React from 'react';

const mockArticles = [
  {
    id: 1,
    title: 'Экономика растет',
    description: 'В этом году экономика показала значительный рост.',
    url: '#',
    category: 'Business',
  },
  {
    id: 2,
    title: 'Новый смартфон вышел',
    description: 'Обзор последнего смартфона с уникальными функциями.',
    url: '#',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Спорт и здоровье',
    description: 'Почему спорт важен для здоровья каждого человека.',
    url: '#',
    category: 'Health',
  },
  {
    id: 4,
    title: 'Космические исследования',
    description: 'Новые открытия в космосе удивляют ученых.',
    url: '#',
    category: 'Science',
  },
  {
    id: 5,
    title: 'Кинофестиваль стартовал',
    description: 'Лучшие фильмы и премьеры на международном кинофестивале.',
    url: '#',
    category: 'Entertainment',
  },
  {
    id: 6,
    title: 'Футбольный чемпионат',
    description: 'Главные матчи и новости футбольного сезона.',
    url: '#',
    category: 'Sports',
  },
  {
    id: 7,
    title: 'Новые технологии в медицине',
    description: 'Как инновации меняют подход к лечению болезней.',
    url: '#',
    category: 'Health',
  },
  {
    id: 8,
    title: 'Научные открытия 2025',
    description: 'Обзор самых важных научных достижений.',
    url: '#',
    category: 'Science',
  },
];

function ArticleList({ articles }) {
  return (
    <div className="news-list">
      {articles.length === 0 && <p>Новостей нет.</p>}
      {articles.map((article, idx) => (
        <div key={idx} className="news-item">
          <h3>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </h3>
          <p>{article.description}</p>
          <small>{article.category}</small>
        </div>
      ))}
    </div>
  );
}

export { mockArticles };
export default ArticleList;