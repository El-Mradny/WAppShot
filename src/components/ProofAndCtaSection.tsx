import { useState, type FormEvent } from 'react';
import { MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { buildWhatsAppUrl } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const PHP_CHECKLIST_ENDPOINT = '/send-checklist.php';

export function ProofAndCtaSection() {
  const { t, lang, isRtl } = useLanguage();
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedTopic = t.proofCta.topics[selectedTopicIndex] ?? t.proofCta.topics[0];
  const composedMessage = t.proofCta.buildPreviewMessage(name, company, selectedTopic);
  const whatsappDirectUrl = buildWhatsAppUrl(composedMessage);

  const checklistWhatsAppMessage = t.proofCta.buildChecklistWhatsAppMessage(
    name,
    company,
    email,
    selectedTopic,
  );
  const checklistWhatsAppUrl = buildWhatsAppUrl(checklistWhatsAppMessage);

  function sendChecklistInBackground(trimmedName: string, trimmedCompany: string, trimmedEmail: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedName || !emailPattern.test(trimmedEmail)) return;

    void fetch(PHP_CHECKLIST_ENDPOINT, {
      method: 'POST',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: trimmedName,
        company: trimmedCompany,
        email: trimmedEmail,
        topic: selectedTopic,
        language: lang,
        website,
      }),
    }).catch(() => {});
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setFormError(t.proofCta.errorMissingName);
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setFormError(t.proofCta.errorInvalidEmail);
      return;
    }

    setFormError('');
    sendChecklistInBackground(trimmedName, trimmedCompany, trimmedEmail);
    setSubmitted(true);
  }

  return (
    <section
      id="whatsapp-cta"
      className="bg-[#F8FAFC] py-16 dark:bg-slate-950 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Strong Conversion Block: Chat with Me on WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
          className="rounded-2xl border border-slate-200 bg-[#0F172A] p-6 text-white dark:border-slate-800 dark:bg-slate-900 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: Direct WhatsApp CTA & Topic Builder */}
            <div className="lg:col-span-7">
              <p className="text-xs font-medium text-emerald-400">{t.proofCta.kicker}</p>
              <h2
                className="font-display mt-2 font-bold tracking-tight text-white"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
              >
                {t.proofCta.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {t.proofCta.subtitle}
              </p>

              {/* Functional Topic Selector */}
              <div className="mt-6">
                <p className="text-xs font-medium text-slate-300">{t.proofCta.topicPrompt}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {t.proofCta.topics.map((topic, index) => {
                    const active = index === selectedTopicIndex;
                    return (
                      <motion.button
                        key={topic}
                        type="button"
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.12 }}
                        onClick={() => setSelectedTopicIndex(index)}
                        className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                          active
                            ? 'bg-[#047857] text-white'
                            : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-white'
                        }`}
                      >
                        {topic}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Message Preview */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-xs font-medium text-slate-400">{t.proofCta.previewLabel}</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${selectedTopicIndex}-${selectedTopic}`}
                    initial={{ opacity: 0.4, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="mt-1.5 text-sm leading-relaxed text-slate-100"
                  >
                    {composedMessage}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.15 }}
                  className="group inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-lg bg-[#047857] px-6 py-3 text-sm font-semibold text-white hover:bg-[#059669] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.proofCta.primaryCta}</span>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
                      isRtl
                        ? 'rotate-180 group-hover:-translate-x-0.5'
                        : 'group-hover:translate-x-0.5'
                    }`}
                    aria-hidden="true"
                  />
                </motion.a>
                <span className="text-xs text-slate-400">{t.proofCta.ctaHint}</span>
              </div>
            </div>

            {/* Right: Checklist Email + WhatsApp Request Form */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-6 lg:col-span-5">
              <h3 className="font-display text-lg font-semibold text-white">
                {t.proofCta.formTitle}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {t.proofCta.formSubtitle}
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                    className="mt-6 rounded-lg border border-emerald-800/70 bg-emerald-950/60 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                        aria-hidden="true"
                      />
                      <div className="w-full">
                        <p className="text-sm font-semibold text-white">
                          {t.proofCta.submittedTitle(name)}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-300">
                          {t.proofCta.submittedBodyBeforeEmail}
                          <span className="font-medium text-white">{email}</span>
                          {t.proofCta.submittedBodyAfterEmail}
                        </p>

                        <div className="mt-4 flex flex-col gap-2.5">
                          <a
                            href={checklistWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-[#047857] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#059669] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                          >
                            <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>{t.proofCta.whatsappConfirmationCta}</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => {
                              setSubmitted(false);
                              setEmail('');
                            }}
                            className="self-start text-xs font-medium text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                          >
                            {t.proofCta.submitAnother}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={PHP_CHECKLIST_ENDPOINT}
                    method="POST"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onSubmit={handleFormSubmit}
                    noValidate
                    className="mt-5 space-y-4"
                  >
                    {/* Honeypot field for spam bots */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="lead-website">Website</label>
                      <input
                        id="lead-website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-medium text-slate-300">
                        {t.proofCta.nameLabel}
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.proofCta.namePlaceholder}
                        className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors duration-150 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-company"
                        className="block text-xs font-medium text-slate-300"
                      >
                        {t.proofCta.companyLabel}
                      </label>
                      <input
                        id="lead-company"
                        name="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={t.proofCta.companyPlaceholder}
                        className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors duration-150 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-email"
                        className="block text-xs font-medium text-slate-300"
                      >
                        {t.proofCta.emailLabel}
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        dir="ltr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.proofCta.emailPlaceholder}
                        className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors duration-150 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    {formError && (
                      <p role="alert" className="text-xs font-medium text-rose-400">
                        {formError}
                      </p>
                    )}

                    <div className="pt-1">
                      <motion.a
                        href={checklistWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setFormError('');
                          sendChecklistInBackground(name.trim(), company.trim(), email.trim());
                        }}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.985 }}
                        transition={{ duration: 0.15 }}
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#047857] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#059669] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                      >
                        <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{t.proofCta.sendViaWhatsAppCta}</span>
                      </motion.a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
