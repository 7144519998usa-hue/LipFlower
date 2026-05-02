export default function ComparisonTable({ columns = [], rows = [] }) {
  if (!columns.length || !rows.length) {
    return null;
  }

  return (
    <div className="table-shell">
      <table className="comparison-table">
        <thead>
          <tr>
            <th scope="col">Decision factor</th>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.values.map((value, index) => (
                <td key={`${row.label}-${columns[index]}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
