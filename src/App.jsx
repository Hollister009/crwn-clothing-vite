const CATEGORIES = ['Hats', 'Jackets', 'Sneakers', 'Womens', 'Mens'];

const App = () => (
  <div className="categories-container">
    {CATEGORIES.map((cat) => (
      <div key={cat} className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>{cat}</h2>
          <button>Shop Now</button>
        </div>
      </div>
    ))}
  </div>
);

export default App;
