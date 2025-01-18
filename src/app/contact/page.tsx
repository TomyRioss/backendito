"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Ingresa un nombre").min(3, "El nombre debe tener al menos 3 caracteres"),
    subject: Yup.string().required("Ingresa el asunto").min(3, "El asunto debe tener al menos 3 caracteres"),
    consult: Yup.string().required("Ingresa la consulta").min(3, "La consulta debe tener al menos 3 caracteres"),
  });

  const handleSubmit = async (values) => {
    const { name, subject, consult } = values;

    try {
      // Usando EmailJS para enviar el correo
      await emailjs.send(
        'service_a321e3i',   // Tu Service ID de EmailJS
        'template_2r68jda',  // Tu Template ID de EmailJS
        {
          name,
          subject,
          consult,
        },
        'GzyTkTApJsNRe_qQM'       // Tu User ID de EmailJS
      );

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      console.log("Datos enviados:", values);
    } catch (error) {
      console.error("Error al enviar el correo", error);
    }
  };

  return (
    <div className="container mx-auto mt-32 p-6 bg-gray-50 rounded-md shadow-md max-w-lg">
      {isSubmitted && (
        <div className="alert alert-success bg-green-500 text-white text-center py-2 rounded mb-4">
          ¡Formulario enviado con éxito!
        </div>
      )}
      <Formik
        initialValues={{ name: "", subject: "", consult: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Nombre</label>
              <Field 
                type="text" 
                name="name" 
                placeholder="Tu nombre" 
                className="input-field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-semibold mb-2">Asunto</label>
              <Field 
                type="text" 
                name="subject" 
                placeholder="Asunto" 
                className="input-field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="consult" className="block text-lg font-semibold mb-2">Consulta</label>
              <Field 
                as="textarea" 
                name="consult" 
                placeholder="Tu consulta" 
                className="input-field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="consult" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
