'use client';
import backencito from '../../../public/backencito.png';
import { GoPerson } from 'react-icons/go';
import { MdSubject, MdMessage } from 'react-icons/md';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Ingresa un nombre')
      .min(3, 'El nombre debe tener al menos 3 caracteres'),
    subject: Yup.string()
      .required('Ingresa el asunto')
      .min(3, 'El asunto debe tener al menos 3 caracteres'),
    consult: Yup.string()
      .required('Ingresa la consulta')
      .min(3, 'La consulta debe tener al menos 3 caracteres'),
  });

  const handleSubmit = async values => {
    const { name, subject, consult } = values;

    try {
      await emailjs.send(
        'service_a321e3i', // Tu Service ID de EmailJS
        'template_2r68jda', // Tu Template ID de EmailJS
        {
          name,
          subject,
          consult,
        },
        'GzyTkTApJsNRe_qQM', // Tu User ID de EmailJS
      );

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      console.log('Datos enviados:', values);
    } catch (error) {
      console.error('Error al enviar el correo', error);
    }
  };

  return (
    <div className="min-h-screen  pt-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {isSubmitted && (
        <div className="p-4 mb-4 text-white bg-green-500 rounded-md">
          ¡Formulario enviado con éxito!
        </div>
      )}
      <Formik
        initialValues={{ name: '', subject: '', consult: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <div className="flex w-full h-[90vh] justify-evenly items-center">
            <Form className="flex flex-col gap-6 justify-center items-center border-2 shadow-md rounded-md border-gray w-[25rem] h-[35rem]">
              <span className="font-bold text-blue-700 text-[2rem]">
                Contáctanos
              </span>

              <div>
                <div className="flex relative border-[1px] shadow-sm border-gray rounded-md w-72 h-10 bg-white dark:bg-gray-800">
                  <GoPerson className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                  <Field
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="pl-10 flex-grow outline-none bg-transparent text-gray-900 dark:text-white"
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <div className="flex relative border-[1px] w-72 shadow-sm border-gray rounded-md h-10 bg-white dark:bg-gray-800">
                  <MdSubject className="absolute top-[30%] left-3 text-gray-500" />
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    className="pl-10 flex-grow outline-none bg-transparent text-gray-900 dark:text-white"
                  />
                </div>
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <div className="flex relative border-[1px] w-72 h-48 shadow-sm border-gray rounded-md bg-white dark:bg-gray-800">
                  <MdMessage className="absolute top-3 left-3 text-gray-500" />
                  <Field
                    as="textarea"
                    name="consult"
                    placeholder="Tu consulta"
                    className="pl-10 pt-2 flex-grow outline-none bg-transparent resize-none text-gray-900 dark:text-white"
                  />
                </div>
                <ErrorMessage
                  name="consult"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-72 h-10 bg-blue-700 text-white rounded-md shadow-md font-bold hover:bg-blue-800 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </Form>
            <div className="hidden md:flex imagentexto h-[35rem] w-96  flex-col items-start">
              <span className="text-blue-700 font-medium text-[2rem]">
                Backendito
              </span>
              <span className="text-gray-800 text-[1.2rem]">
                Hacemos tu proyecto realidad
              </span>
              <Image
                className="rounded-md w-96 h-96 mt-4"
                src={backencito}
                alt="backencito imagen"
              />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
