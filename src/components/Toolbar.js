function Toolbar({ filters, selected, onSelectFilter }) {
	return (
		<div className="toolbar">
			{filters.map(filter => {

				return <button className={`toolbar__button ${filter === selected ? 'selected' : ''}`} onClick={() => onSelectFilter(filter)}>{filter}</button>

			})}
		</div>
	)
}

export default Toolbar;
