interface SizeFilterProps {
  selected: number | null;
  onSelect: (size: number | null) => void;
  category: 'todos' | 'masculino' | 'feminino';
}

const SizeFilter = ({ selected, onSelect, category }: SizeFilterProps) => {
  const masculinoSizes = [38, 39, 40, 41, 42, 43, 44, 45];
  const femininoSizes = [34, 35, 36, 37, 38, 39, 40];
  
  const sizes = category === 'masculino' 
    ? masculinoSizes 
    : category === 'feminino' 
    ? femininoSizes 
    : [...new Set([...femininoSizes, ...masculinoSizes])].sort((a, b) => a - b);

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect(null)}
        className={`filter-chip min-w-[48px] ${
          selected === null ? 'filter-chip-active' : ''
        }`}
      >
        Todos
      </button>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`filter-chip min-w-[48px] ${
            selected === size ? 'filter-chip-active' : ''
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeFilter;
