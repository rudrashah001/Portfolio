import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Download, Mail, Send, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/constants";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: SITE.name,
          },
          publicKey,
        );
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Failed to send");
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something elite"
          description="Open to full-time roles, internships, and ambitious SaaS collaborations."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted mb-2 block">
                Name
              </label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted mb-2 block">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm text-muted mb-2 block"
              >
                Message
              </label>
              <Textarea
                id="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                "Sending…"
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-emerald-400 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-red-400 text-sm"
                >
                  Could not send. Email me at{" "}
                  <a
                    href={SITE.emailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-red-200 hover:text-red-100"
                  >
                    {SITE.email}
                  </a>
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">Connect directly</h3>
              <a
                href={SITE.emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-cyan-400 transition-colors mb-6"
              >
                <Mail className="h-5 w-5" />
                {SITE.email}
              </a>

              <div className="flex gap-4 mb-8">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:glow-ring transition-all"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:glow-ring transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <a href={SITE.resumePath} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
