import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import useCreateNewContact from 'hooks/useCreateNewContact';
import { contactSchema } from 'utilities/validationSchema';

function AddContactPage() {
  const initialValues = { name: '', number: '' };
  const createNewContact = useCreateNewContact();

  return (
    <Container>
      <ContactForm
        title="Add new contact"
        initialValues={initialValues}
        onSubmitForm={createNewContact}
        validationSchema={contactSchema}
        buttonLabel="Add contact"
      />
    </Container>
  );
}

export default AddContactPage;
