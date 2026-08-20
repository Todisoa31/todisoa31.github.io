'use client';

import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setLoading(true);

    await fetch('/api/contact', {
      method: 'POST',

      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }),
    });

    setLoading(false);

    alert('Message envoyé');
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-12">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input name="name" placeholder="Nom" className="w-full p-4 rounded-xl bg-gray-800" />

        <input name="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-800" />

        <input name="subject" placeholder="Sujet" className="w-full p-4 rounded-xl bg-gray-800" />

        <textarea
          rows={6}
          name="message"
          placeholder="Message"
          className="w-full p-4 rounded-xl bg-gray-800"
        />

        <button
          disabled={loading}
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
        >
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
    </section>
  );
}
