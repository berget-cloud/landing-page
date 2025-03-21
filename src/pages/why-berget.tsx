import { motion } from 'framer-motion'
import { Globe, Shield, Server, Lock, ArrowRight, Check, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { PartnerQuotes } from '@/components/sections/PartnerQuotes'
import { Link } from 'react-router-dom'

function WhyBergetPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D6A4F]/30 via-background to-background">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.15)_0%,transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#40916C]/15 text-[#52B788] mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">EU-baserad AI-infrastruktur</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
              Varför välja <span className="text-[#52B788]">Berget AI</span>?
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Säker, regelefterlevande och hållbar AI-infrastruktur byggd för europeisk innovation och datasuveränitet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/signup">
                  Kom igång
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/contact">Boka demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#2D6A4F]/5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Fördelar med Berget AI</h2>
              <p className="text-lg text-white/60">
                Vi erbjuder en unik kombination av säkerhet, regelefterlevnad och flexibilitet för europeiska företag.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center mb-8">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">100% EU-baserad</h3>
              <p className="text-white/60 mb-6">
                All data stannar inom EU:s gränser. Vår infrastruktur är byggd i Europa, för Europa, med full efterlevnad av EU:s regelverk.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">GDPR-kompatibel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">NIS2-förberedd</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">EU AI Act-anpassad</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center mb-8">
                <Leaf className="w-7 h-7 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-medium mb-4">Hållbar AI</h3>
              <p className="text-white/60 mb-6">
                Vår infrastruktur är byggd med hållbarhet i fokus, från fossilfri el till värmeåtervinning och cirkulär hårdvara.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">100% fossilfri energi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">CO₂-spårning per API-anrop</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">Cirkulär hårdvara</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#74C69D] to-[#52B788] flex items-center justify-center mb-8">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4">Flexibel infrastruktur</h3>
              <p className="text-white/60 mb-6">
                Från serverless till dedikerade GPU:er, vi erbjuder den flexibilitet du behöver för att bygga och skala dina AI-applikationer.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">Kubernetes-baserad</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">GitOps-workflow</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                  <span className="text-sm text-white/80">Skalbar beräkningskraft</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Detailed Features */}
          <div className="max-w-7xl mx-auto space-y-24">
            {/* European Innovation & Sovereignty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center shrink-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium mb-6">Europeisk innovation och datasuveränitet</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      På Berget AI ger vi europeiska företag möjlighet att innovera utan kompromisser. Vi bygger en framtid där Europa leder inom säkra och etiska AI-lösningar.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Din data, dina modeller, din infrastruktur—allt på en säker, regelefterlevande plats</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Vi främjar öppen innovation inom EU och driver fram AI- och datasuveränitet</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Anslut dig till oss för att forma en framtid där Europa leder inom säkra, etiska AI-lösningar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Privacy & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52B788] to-[#74C69D] flex items-center justify-center shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium mb-6">Enkel dataintegritet och regelefterlevnad</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      Att navigera genom dataskyddslagar är komplext—vi gör det enkelt. Vår infrastruktur är byggd för att uppfylla de strängaste europeiska regelverken.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Lagra din data, hosta dina applikationer och kör din inferens - allt på ett ställe!</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">All data stannar inom våra EU-baserade servrar och lämnar aldrig vår infrastruktur</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Säkerställ efterlevnad av GDPR och andra regulatoriska ramverk genom design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Alternative to Public Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2D6A4F]/5 via-[#40916C]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 flex items-center justify-center shrink-0">
                    <Server className="w-8 h-8 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium mb-6">Alternativet till on-prem och publik molntjänst</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      När publik molntjänst inte är ett alternativ är Berget AI ditt säkra och skalbara alternativ. Vi kombinerar fördelarna med molntjänster och on-prem-lösningar.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Perfekt för företag med känslig data som inte kan lagras på publik molninfrastruktur</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Inga begränsningar—bearbeta all data fritt med våra LLMs</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Inga initiala investeringar—börja smått och skala upp när dina behov växer</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Security & Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#52B788]/5 via-[#74C69D]/5 to-[#FFB700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#74C69D] to-[#52B788] flex items-center justify-center shrink-0">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium mb-6">Inbyggd säkerhet och integritet</h2>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      Vår infrastruktur är designad för att skydda din data i varje steg. Vi har byggt säkerhet från grunden, inte som ett tillägg.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Utvecklad med OWASP-standarder för att säkerställa säkerhet på högsta nivå</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Inferens körs helt inom vårt säkra nätverk—din data passerar aldrig internet</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-5 h-5 text-[#52B788]" />
                        </div>
                        <span className="text-lg text-white/80">Noll lagring—din data sparas eller behålls aldrig</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Quotes */}
      <PartnerQuotes />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Sustainability Section */}
      <SustainabilitySection />
      
      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Redo att börja bygga med Berget AI?</h2>
            <p className="text-lg text-white/60 mb-8">
              Kom igång idag och upptäck fördelarna med en säker, regelefterlevande och hållbar AI-infrastruktur.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/signup">
                  Skapa konto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/contact">Kontakta försäljning</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default WhyBergetPage