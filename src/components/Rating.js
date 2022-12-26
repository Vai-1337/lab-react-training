import '../css/rating.css'

export default function Rating({ children }) {
  
  const rating = Math.round(children);

  return (
    <div className="Rating">
      {[...Array(5)].map((_, i) => {
        if (i < rating) {
          return '★';
        } else {
          return '☆';
        }
      })}
    </div>
  );
};
