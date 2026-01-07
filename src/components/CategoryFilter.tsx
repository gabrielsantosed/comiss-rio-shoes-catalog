interface CategoryFilterProps {
  selected: 'todos' | 'masculino' | 'feminino';
  onSelect: (category: 'todos' | 'masculino' | 'feminino') => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  const categories = [
    { value: 'todos' as const, label: 'Todos', icon: '👟' },
    { value: 'masculino' as const, label: 'Masculino', icon: '👞' },
    { value: 'feminino' as const, label: 'Feminino', icon: '👠' },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onSelect(category.value)}
          className={`filter-chip flex items-center gap-2 ${
            selected === category.value ? 'filter-chip-active' : ''
          }`}
        >
          <span>{category.icon}</span>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
