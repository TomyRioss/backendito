'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MessageSquare, Send, Sparkles } from 'lucide-react';
import backendito from '../../../public/backendito.png';
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
    try {
      await emailjs.send(
        'service_a321e3i',
        'template_2r68jda',
        values,
        'GzyTkTApJsNRe_qQM',
      );
      setIsSubmitted(true);
      resetForm();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error al enviar el correo', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 px-4 relative overflow-hidden transition-colors duration-500">
      {/* Success notification */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 py-3 px-6 rounded-full shadow-lg flex items-center gap-2 bg-green-50 dark:bg-green-500 text-green-700 dark:text-white border border-green-100 dark:border-transparent"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">{t('thanks')}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Formik
        initialValues={{ name: '', subject: '', consult: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <div className=" flex flex-col lg:flex-row max-w-6xl mx-auto gap-12 items-center justify-center mt-10 h-full">
            {/* Form section */}
            <div className="w-full max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative p-8 md:p-10 rounded-2xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl shadow-2xl"
              >
                {/* Decorative gradient borders */}
                <div className="absolute inset-px rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500" />
                </div>

                <div className="relative">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-indigo-200">
                      {t('header')}
                    </h2>
                  </div>

                  <Form className="space-y-6">
                    {/* Name field */}
                    <div className="space-y-1">
                      <div
                        className={`group relative rounded-xl transition-all duration-300 bg-slate-100 dark:bg-slate-800/50 focus-within:ring-2 ring-indigo-500 ${
                          touched.name && errors.name
                            ? 'ring-2 ring-red-500'
                            : ''
                        }`}
                      >
                        <div className="flex items-center px-4 gap-3">
                          <User className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                          <Field
                            type="text"
                            name="name"
                            placeholder={t('placeholders.name')}
                            className="w-full py-4 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500"
                          />
                        </div>
                      </div>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm ml-1"
                      />
                    </div>

                    {/* Subject field */}
                    <div className="space-y-1">
                      <div
                        className={`group relative rounded-xl transition-all duration-300 bg-slate-100 dark:bg-slate-800/50 focus-within:ring-2 ring-indigo-500 ${
                          touched.subject && errors.subject
                            ? 'ring-2 ring-red-500'
                            : ''
                        }`}
                      >
                        <div className="flex items-center px-4 gap-3">
                          <MessageSquare className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                          <Field
                            type="text"
                            name="subject"
                            placeholder={t('placeholders.subject')}
                            className="w-full py-4 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500"
                          />
                        </div>
                      </div>
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-sm ml-1"
                      />
                    </div>

                    {/* Message field */}
                    <div className="space-y-1">
                      <div
                        className={`group relative rounded-xl transition-all duration-300 bg-slate-100 dark:bg-slate-800/50 focus-within:ring-2 ring-indigo-500 ${
                          touched.consult && errors.consult
                            ? 'ring-2 ring-red-500'
                            : ''
                        }`}
                      >
                        <Field
                          as="textarea"
                          name="consult"
                          placeholder={t('placeholders.message')}
                          rows={4}
                          className="w-full p-4 bg-transparent outline-none rounded-xl resize-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500"
                        />
                      </div>
                      <ErrorMessage
                        name="consult"
                        component="div"
                        className="text-red-500 text-sm ml-1"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-indigo-600 text-white hover:opacity-90 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <Send className="w-5 h-5" />
                      <span>{isSubmitting ? t('sending') : t('send')}</span>
                    </button>
                  </Form>
                </div>
              </motion.div>
            </div>

            {/* Image section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-md lg:w-1/2 space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl opacity-50 blur-xl transition-all duration-500 group-hover:opacity-100 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500" />
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                    src={backendito}
                    width={500}
                    height={500}
                    alt="backencito imagen"
                    className="rounded-2xl w-full aspect-square object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </Formik>
    </div>
  );
}
