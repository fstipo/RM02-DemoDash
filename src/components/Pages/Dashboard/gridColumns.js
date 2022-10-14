import { Link } from 'react-router-dom';
const detailsBtn = () => (
  <button className="btn btn-link">
    <Link to="/details" onClick={() => console.log('click')}>
      ...details
    </Link>
  </button>
);

export const gridColumns = [
  {
    field: 'id',
    checkboxSelection: true,
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'User id',
    resizable: true,
    width: 90,
  },
  {
    headerName: 'Name',
    field: 'name',
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'Name',
  },
  {
    field: 'sector',
    sortable: 'true',
    filter: 'true',
    headerTooltip: 'Sector',
  },

  {
    field: 'details',
    headerTooltip: 'Details',
    cellRenderer: detailsBtn,
  },
];
