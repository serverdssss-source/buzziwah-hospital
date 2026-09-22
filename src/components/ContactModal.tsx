import React, { useState } from 'react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/80 p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mb-4 text-4xl">✅</div>
            <h3 className="mb-2 font-serif text-2xl font-semibold text-text-dark">Thank you!</h3>
            <p className="text-text-gray">
              A Buzziwah strategist will reach out to you shortly — typical reply in 2 minutes during working hours.
            </p>
          </div>
        ) : (
          <>
            <h3 className="mb-1 font-serif text-2xl font-semibold text-text-dark">Talk to an Expert</h3>
            <p className="mb-6 text-sm text-text-gray">
              Tell us a little about your hospital and we'll get back to you — no obligation, free audit included.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-text-dark placeholder:text-slate-400 focus:border-primary-orange focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-text-dark placeholder:text-slate-400 focus:border-primary-orange focus:outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-text-dark placeholder:text-slate-400 focus:border-primary-orange focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Tell us about your hospital (optional)"
                className="resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-text-dark placeholder:text-slate-400 focus:border-primary-orange focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 rounded-lg bg-primary-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-orange-hover"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
