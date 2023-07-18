import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import useChangeContactForm from 'hooks/useChangeContactForm';
import { contactSchema } from 'utilities/validationSchema';

function ChangeContactPage() {
  const { onSubmitForm, initialValues } = useChangeContactForm();

  return (
    <Container>
      <ContactForm
        title={`Edit Contact ${initialValues.name}`}
        initialValues={initialValues}
        onSubmitForm={onSubmitForm}
        validationSchema={contactSchema}
        buttonLabel="Change contact"
      />
    </Container>
  );
}

export default ChangeContactPage;
