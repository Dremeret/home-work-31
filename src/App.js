import AddContact from './component/AddContact';
import ContactsList from './component/ContactsList';
import { Filter } from './component/Filter';

export const App = () => {
  return (
    <div>
      <h1>Контакти</h1>
      <Filter />
      <AddContact />
      <ContactsList />
    </div>
  );
};
