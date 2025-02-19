const SizeSelector = ({ options, selectedValue, onChange }) => (
  <select
    value={selectedValue}
    onChange={(e) => onChange(e.target.value)}
    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
)

export default SizeSelector