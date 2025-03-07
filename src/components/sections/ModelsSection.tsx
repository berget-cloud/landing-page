import { motion } from 'framer-motion'
import { Bot, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const models = [
  {
    name: 'Llama 3 70B',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'State-of-the-art',
    status: 'Available',
  },
  {
    name: 'Mixtral 8x7B',
    type: 'Text Generation',
    context: '32k tokens',
    performance: 'High',
    status: 'Available',
  },
  {
    name: 'Whisper Large v3',
    type: 'Speech-to-Text',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
  {
    name: 'Stable Diffusion XL',
    type: 'Image Generation',
    context: 'N/A',
    performance: 'High',
    status: 'Coming Soon',
  },
]

export function ModelsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8 rounded-3xl border border-white/10 h-full">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium">Our Models</h2>
          <Button asChild variant="ghost" size="sm" className="group">
            <Link to="/docs/models">
              View Model Documentation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <p className="text-white/60 mb-6">
          We aim to provide access to the most powerful and popular open models you need to power your AI applications.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Comprehensive Model Selection</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span>Broad selection of model types including instruct, re-rerank, and moderation models</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Optimized for agentic applications and complex AI workflows</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                <span>Support for multiple modalities: text, image, speech-to-text, and text-to-speech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Context</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model) => (
                <TableRow key={model.name}>
                  <TableCell className="font-medium">{model.name}</TableCell>
                  <TableCell>{model.type}</TableCell>
                  <TableCell>{model.context}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      model.status === 'Available' 
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      {model.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.div>
  )
}