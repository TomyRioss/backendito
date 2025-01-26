'use client';
import backendito from '../../../public/backendito.png';
import { GoPerson } from 'react-icons/go';
import { MdSubject, MdMessage } from 'react-icons/md';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contactUs');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('errors.nameRequired'))
      .min(3, t('errors.3charsName')),
    subject: Yup.string()
      .required(t('errors.subjectInvalid'))
      .min(3, t('errors.3charsSubject')),
    consult: Yup.string()
      .required(t('errors.messageRequired'))
      .min(3, t('errors.3charsMessage')),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { name, subject, consult } = values;

    try {
      await emailjs.send(
        'service_a321e3i',
        'template_2r68jda',
        {
          name,
          subject,
          consult,
        },
        'GzyTkTApJsNRe_qQM',
      );

      setIsSubmitted(true);
      resetForm();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error al enviar el correo', error);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 mt-10">
      {isSubmitted && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 text-white bg-green-500 rounded-md shadow-lg animate-bounce">
          {t('thanks')}
        </div>
      )}
      <Formik
        initialValues={{ name: '', subject: '', consult: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto justify-center items-center space-y-8 md:space-y-0 md:space-x-12 px-4">
            <Form className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">
                {t('header')}
              </h2>

              <div className="space-y-4">
                <div className="relative">
                  <div
                    className={`flex items-center border-2 rounded-lg transition-all duration-300 ${
                      touched.name && errors.name
                        ? 'border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus-within:border-blue-500'
                    }`}
                  >
                    <div className="pl-3 text-gray-500">
                      <GoPerson size={20} />
                    </div>
                    <Field
                      type="text"
                      name="name"
                      placeholder={t('placeholders.name')}
                      className="w-full p-3 bg-transparent outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1 pl-2"
                  />
                </div>

                <div className="relative">
                  <div
                    className={`flex items-center border-2 rounded-lg transition-all duration-300 ${
                      touched.subject && errors.subject
                        ? 'border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus-within:border-blue-500'
                    }`}
                  >
                    <div className="pl-3 text-gray-500">
                      <MdSubject size={20} />
                    </div>
                    <Field
                      type="text"
                      name="subject"
                      placeholder={t('placeholders.subject')}
                      className="w-full p-3 bg-transparent outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 text-sm mt-1 pl-2"
                  />
                </div>

                <div className="relative">
                  <div
                    className={`flex items-start border-2 rounded-lg transition-all duration-300 ${
                      touched.consult && errors.consult
                        ? 'border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus-within:border-blue-500'
                    }`}
                  >
                    <div className="pl-3 pt-3 text-gray-500">
                      <MdMessage size={20} />
                    </div>
                    <Field
                      as="textarea"
                      name="consult"
                      placeholder={t('placeholders.message')}
                      rows={4}
                      className="w-full p-3 bg-transparent outline-none resize-none"
                    />
                  </div>
                  <ErrorMessage
                    name="consult"
                    component="div"
                    className="text-red-500 text-sm mt-1 pl-2"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? t('sending') : t('send')}
                </button>
              </div>
            </Form>

            <div className="hidden md:flex flex-col w-full max-w-md space-y-4">
              <span className="text-blue-700 font-medium text-4xl">
                Backendito
              </span>
              <span className="text-gray-800 dark:text-white text-xl">
                {t('tagline')}
              </span>
              <Image
                className="rounded-2xl w-full aspect-square object-cover shadow-lg"
                src={backendito}
                width={400}
                height={400}
                alt="backencito imagen"
              />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
