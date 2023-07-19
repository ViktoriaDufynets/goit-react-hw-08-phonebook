import propTypes from 'prop-types';
import {
  TitlePage,
  Label,
  Title,
  StyledField,
  Button,
} from './ContactForm.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import GoBack from 'components/GoBack';

function ContactForm({
  title,
  initialValues,
  onSubmitForm,
  validationSchema,
  buttonLabel,
}) {
  return (
    <>
      <TitlePage>{title}</TitlePage>
      <GoBack text="Contact list" path="/contacts" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              <Title>Name</Title>
              <StyledField
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <Title>Number</Title>
              <StyledField
                type="tel"
                name="number"
                onChange={handleChange}
                value={values.number}
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              />
              <ErrorMessage name="number" component="div" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? '...' : buttonLabel}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

ContactForm.prototype = {
  title: propTypes.string,
  initialValues: propTypes.shape({
    name: propTypes.string,
    number: propTypes.string,
  }),
  onSubmitForm: propTypes.func,
  validationSchema: propTypes.shape({
    name: propTypes.func,
    number: propTypes.func,
  }),
  buttonLabel: propTypes.string,
};

export default ContactForm;
