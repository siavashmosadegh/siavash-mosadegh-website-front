'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};
// Using this in useForm<ContactFormData>() ensures full type safety across inputs, validation, and submission.

export default function ContactPage() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>();

    //useForm hook sets up the form. It gives us:

        //register: connects each <input> to the form state.

        //handleSubmit: wraps the onSubmit handler.

        //errors: object holding any validation errors.

        //isSubmitting: true while the form is submitting.

        //isSubmitSuccessful: true once submission succeeds.

        //reset: clears the form after submission.

    const onSubmit = async (data: ContactFormData) => {

        // This is the handler that runs when the form is submitted and validated.
        //Sends form data to your backend API (/api/contact) as JSON.
        //If submission is successful, we reset() the form.

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) reset();

    };

    return (
        <div className={styles.container}>
            <h1>Contact Me</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label>
                    Name:
                    <input {...register('name', { required: 'Name is required' })} />
                    {errors.name && <span>{errors.name.message}</span>}
                </label>

                <label>
                    Email:
                    <input
                        {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email format',
                        },
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>

                <label>
                    Message:
                    <textarea {...register('message', { required: 'Message is required' })} />
                    {errors.message && <span>{errors.message.message}</span>}
                </label>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {isSubmitSuccessful && <p className={styles.success}>Message sent!</p>}
            </form>
        </div>
    );
}