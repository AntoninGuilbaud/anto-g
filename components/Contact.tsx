import React, { useState } from 'react';
import ShimmerButton from './ui/ShimmerButton'; // Assure-toi d'importer le composant
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, message } = formData;

        // Validation des champs
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('https://us-central1-portfolio-antonin-guilbaud.cloudfunctions.net/sendEmailNotification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nom: name, mail: email, message }),
            });

            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Erreur API: ${response.status} - ${errorDetails}`);
            }

            setFormData({ name: '', email: '', message: '' });
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erreur détaillée:', error.message);
            } else {
                console.error('Erreur inconnue');
            }
            alert('Une erreur est survenue, veuillez réessayer plus tard.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='pt-24 relative z-20'>
            <h1 className="heading text-center text-3xl md:text-4xl font-bold text-gray-800 dark:text-white px-4 pb-14">
                Pour me
                <span className="text-blue-300"> contacter</span>
            </h1>
            <form
                onSubmit={submitForm}
                className="max-w-md mx-auto mt-0 p-4 dark:bg-[#1f1f1f] rounded-lg shadow-md dark:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]
                transition-all dark:hover:shadow-blue-300"
            >
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:border-white"
                        required
                        placeholder='Exemple: Dupont'
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:border-white"
                        required
                        placeholder="Exemple: mail@gmail.com"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:border-white"
                        required
                        placeholder="Votre message..."
                    ></textarea>
                </div>
                <div className="flex items-center justify-center pb-2">
                    <ShimmerButton
                        title={isLoading ? 'Envoi...' : 'Envoyer'}
                        icon={isLoading ? null : <IoIosSend />}
                        position="right"
                        handleClick={() => submitForm} // Associe la fonction de soumission
                        otherClasses="mt-4" // Tu peux personnaliser les classes
                    />
                </div>
            </form>
            {isLoading && (
                <div className="loading-overlay text-center">
                    <div className="loading-message text-center">Envoi en cours...</div>
                </div>
            )}
            {isSuccess && (
                <div id="check" className="text-green-500 text-center mt-4">
                    Message envoyé avec succès !
                </div>
            )}
        </div>
    );
};

export default Contact;