
// import './App.css';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Vacancies from './components/Vacancies'
import Journals from './components/Journals'
import AddJournal from './components/admin/AddJournal';
import AddVacancy from './components/admin/AddVacancy';
import ListAdmins from './components/admin/ListAdmins';
import AddUsers from './components/admin/AddUsers';
import LoginAdmin from './components/admin/LoginAdmin';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/journals' element={<Journals />} />
          <Route path='/vacancies' element={<Vacancies />} />
          <Route path='/admin/journal' element={<AddJournal />} />
          <Route path='/admin/vacancy' element={<AddVacancy />} />
          <Route path='/admin/users' element={<ListAdmins />} />
          <Route path='/admin/add' element={<AddUsers />} />
          <Route path='/admin/login' element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
