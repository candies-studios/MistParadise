import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';
import { FAQS } from '@/data/content';

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'whatsapp';

const WHATSAPP_NUMBER = '918879161429';

const VISIT_OPTIONS = [
  'Overnight stay',
  'Day visit',
  'Dining',
  'Events & groups',
  'Not sure yet',
];

export function Enquiry() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    visit_type: '',
    check_in: '',
    check_out: '',
    guests: '',
    message: '',
  });

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const whatsappLink = () => {
    const lines = [
      'Hello Mist Paradise, I would like to enquire.',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
    ];
    if (form.phone.trim()) lines.push(`Phone: ${form.phone.trim()}`);
    if (form.visit_type) lines.push(`Visit: ${form.visit_type}`);
    if (form.check_in) lines.push(`Check-in: ${form.check_in}`);
    if (form.check_out) lines.push(`Check-out: ${form.check_out}`);
    if (form.guests) lines.push(`Guests: ${form.guests}`);
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      // No database configured: hand the visitor's own details to WhatsApp.
      window.open(whatsappLink(), '_blank', 'noopener');
      setStatus('whatsapp');
      return;
    }

    setStatus('submitting');

    try {
      const { error } = await supabase.from('enquiries').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        visit_type: form.visit_type || null,
        check_in: form.check_in || null,
        check_out: form.check_out || null,
        guests: form.guests ? parseInt(form.guests, 10) : null,
        message: form.message.trim() || null,
      });

      if (error) throw error;
      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        visit_type: '',
        check_in: '',
        check_out: '',
        guests: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="enquire" className="relative py-24 md:py-32 bg-gradient-to-b from-ink-950 via-mist-900 to-ink-950 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-14 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs tracking-widest2 uppercase text-gold-300/80">Enquire</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
            Tell us your dates
          </h2>
          <p className="mt-4 text-ink-300/70 leading-relaxed">
            We'll reply with availability and current rates. Prefer to talk? Call{' '}
            <span className="text-gold-300">+91 88791 61429</span>.
          </p>
          <p className="mt-2 text-xs text-ink-400/60">
            We use these details only to reply to your enquiry. An enquiry is not a confirmed booking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="rounded-2xl glass p-10 text-center animate-scale-in">
                <span className="grid place-items-center w-16 h-16 mx-auto rounded-full bg-mist-500/20 ring-1 ring-mist-400/40">
                  <CheckCircle2 className="w-8 h-8 text-mist-200" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink-50">Enquiry received</h3>
                <p className="mt-3 text-ink-300/70 max-w-md mx-auto">
                  Thank you — we'll get back to you shortly with availability and rates.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 inline-flex items-center px-6 py-2.5 rounded-full glass-light text-ink-100 hover:bg-white/10 transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl glass p-6 md:p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    required
                    value={form.name}
                    onChange={(v) => update('name', v)}
                    placeholder="Your full name"
                  />
                  <Field
                    label="Email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => update('email', v)}
                    placeholder="you@example.com"
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update('phone', v)}
                    placeholder="+91 ..."
                  />
                  <SelectField
                    label="Visit type"
                    value={form.visit_type}
                    onChange={(v) => update('visit_type', v)}
                    options={VISIT_OPTIONS}
                  />
                  <Field
                    label="Check-in"
                    type="date"
                    value={form.check_in}
                    onChange={(v) => update('check_in', v)}
                  />
                  <Field
                    label="Check-out"
                    type="date"
                    value={form.check_out}
                    onChange={(v) => update('check_out', v)}
                  />
                  <Field
                    label="Guests"
                    type="number"
                    value={form.guests}
                    onChange={(v) => update('guests', v)}
                    placeholder="2"
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-xs tracking-wider uppercase text-ink-300/70 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your plans, any special requests..."
                    className="w-full px-4 py-3 rounded-xl bg-ink-950/50 border border-white/10 text-ink-50 placeholder:text-ink-400/40 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-400 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>
                      Something went wrong. Please{' '}
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline">
                        send it on WhatsApp
                      </a>{' '}
                      or call +91 88791 61429.
                    </span>
                  </div>
                )}

                {status === 'whatsapp' && (
                  <div role="status" className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-mist-500/10 border border-mist-300/30 text-ink-100 text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-gold-300" />
                    <span>
                      WhatsApp has opened with your details. Press send there to reach us.{' '}
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline text-gold-300">
                        Open WhatsApp again
                      </a>
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-6 group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-gold-400 text-ink-950 font-semibold hover:bg-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-ink-50 px-1">Questions</h3>
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl glass-light overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 list-none select-none">
                  <span className="text-sm font-medium text-ink-100/90 pr-3">{faq.q}</span>
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-white/5 text-ink-300 text-lg leading-none shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1 text-sm text-ink-300/70 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-wider uppercase text-ink-300/70 mb-2">
        {label}
        {required && <span className="text-gold-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-ink-950/50 border border-white/10 text-ink-50 placeholder:text-ink-400/40 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <div>
      <label className="block text-xs tracking-wider uppercase text-ink-300/70 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-ink-950/50 border border-white/10 text-ink-50 focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all appearance-none cursor-pointer"
      >
        <option value="" className="bg-ink-900">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink-900">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
