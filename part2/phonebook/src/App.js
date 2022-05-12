import { useState, useEffect } from 'react';
import phonebook from './services/phonebook';
import PersonForm from './components/PersonForm'
import SearchFilter from './components/SearchFilter'
import PhoneBookView from './components/PhoneBookView'

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect( () => {
    phonebook.getAll().then((response) => {
      setPeople(response.data);
    });
  }, []);

  const addPerson = (newPerson) => {
    setPeople(people.concat(newPerson));
  }

  const [searchFilter, setSearchFilter] = useState('');

  const changeSearchFilter = (filter) => {
    setSearchFilter(filter);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} people={people}></PersonForm>

      <br />
      <SearchFilter changeAppSearchFilter={changeSearchFilter} />

      <h2>Numbers</h2>
      <PhoneBookView people={people} searchfilter={searchFilter} />
    </div>
  )
}

export default App;