//import Contact from 'components/Contact/Contact';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import { List } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import useFiltredContacts from 'hooks/useFiltredContacts';
import { useEffect } from 'react';
import PaginatedItems from 'components/Pagination/Pagination';

function ContactList() {
  const { data: contacts, isFetching, error, refetch } = useGetContactsQuery();
  const { filteredContactList } = useFiltredContacts();
  console.log(filteredContactList)

  useEffect(() => {
    refetch();
  }, [refetch]);
  

  return (
    <>
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      <List>
        {contacts && <PaginatedItems items={filteredContactList} itemsPerPage={3}/>}
      </List>
    </>
  );
}

export default ContactList;
