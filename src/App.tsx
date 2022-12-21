import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Header } from './components/Header';
import { Row } from './components/Row';
import { useSelector } from 'react-redux'
import { RootState } from './store';
import './sass/main.sass';

function App() {
  const items = useSelector((state: RootState) => state.commodities);

  return (
    <div className="container">
      <Table>
        <Header />
        <TableBody>
          {
            items.commodities.map((item, index) => {
              const { id, name } = item;
              return (
                <Row key={id + index + name} {...item} />
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
