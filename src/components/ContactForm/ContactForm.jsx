import React from 'react';
import css from './ContactForm.module.css';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(addContact(value));
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
        <Form className={css.contactForm} autoComplete="off">
          <label className={css.contactForm__label} htmlFor="name">
            Name
            <Field
              className={css.contactForm__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Contact Name"
              required
            />
          </label>
          <label className={css.contactForm__label} htmlFor="phone">
            Phone
            <Field
              className={css.contactForm__input}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              name="phone"
              placeholder="Contact phone"
              required
            />
          </label>
          <button className={css.contactForm__btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
