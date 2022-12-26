import '../css/numbertable.css'

export default function NumbersTable({ limit }) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <table className="NumberTable">
      <tbody>
        {numbers.map((number, index) => (
          <tr key={number}>
            <td style={{ backgroundColor: index % 2 === 0 ? 'white' : 'red' }}>
              {number}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
