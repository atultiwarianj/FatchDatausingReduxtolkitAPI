import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToDo } from './Redux/todo';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  // const getData = async () => {
  //     try {
  //       const response = await axios.get("https://cat-fact.herokuapp.com/facts/");        
  //       // console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // router.push("/login");

  //       // dispatch(loginStatus(false));
  //     }
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <button onClick={(e) => { dispatch(fetchToDo()) }}
      >Fetch Todo</button>
      {
        state.todo.data && state.todo.data.map((e, ind) => {
          console.log(e)
          return (
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>createdAt</TableCell>
            <TableCell align="right">type</TableCell>
            <TableCell align="right">source</TableCell>
            <TableCell align="right">user</TableCell>
            <TableCell align="right">Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.todo.data && state.todo.data.map((row) => (
            <TableRow
              key={row.createdAt}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.createdAt}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.source}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
          )
        })
      }
    </div>
  );
}

export default App;
