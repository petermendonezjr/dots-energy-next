"use client";

import { useState } from "react";

export default function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrate Brevo email capture
    setSubmitted(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Connect with us
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Whether you are a utility partner, project developer, community
            organization, or just curious about what we do — we would like to
            hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-2xl font-bold text-text-primary mb-4">
                Thank you
              </div>
              <p className="text-text-secondary">
                We received your message and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 text-sm rounded-md border border-border bg-bg-card text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 text-sm rounded-md border border-border bg-bg-card text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 text-sm rounded-md border border-border bg-bg-card text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Company name (optional)"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 text-sm rounded-md border border-border bg-bg-card text-text-primary focus:outline-none focus:border-accent transition-colors resize-y"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-sm font-semibold rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">
              General Inquiries
            </p>
            <p className="text-sm text-text-secondary">
              info@dotsenergy.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
