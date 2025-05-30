"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Star,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Carrega a preferência salva
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number.parseFloat(scroll))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    console.log("Tema alterado para:", newDarkMode ? "escuro" : "claro")
  }

  const technologies = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript ES6+",
    "React",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
  ]

  const projects = [
    {
      title: "Matheus Barber Style",
      description: "Landing page para barbeiro de alto nível com foco em agendamento digital e presença visual forte.",
      link: "https://andreh-malheiros.github.io/Barber-Site/",
      image: "/images/joao-style.png",
    },
    {
      title: "Flor do Cerrado",
      description:
        "Página moderna e responsiva para loja física de flores e presentes, com foco em pedidos por WhatsApp.",
      link: "https://andreh-malheiros.github.io/Flor-do-Cerrado/",
      image: "/images/flor-cerrado.png",
    },
    {
      title: "Gabriel Fotografia",
      description:
        "Portfólio digital fictício de fotógrafo, com categorias de fotos, agendamento e galeria responsiva.",
      link: "https://v0-gabriel-fotografia-website.vercel.app/#inicio",
      image: "/images/gabriel-fotografia.png",
    },
    {
      title: "Barbearia Seletto",
      description:
        "Landing Page criada para uma barbearia, exibindo seus serviços e contando sua historia",
      link: "https://barbearia-seletto.vercel.app/",
      image: "/images/gabriel-fotografia.png",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      business: "Estúdio de Beleza",
      text: "O Andreh entregou exatamente o que eu precisava! Minha landing page ficou linda e já estou recebendo mais clientes pelo WhatsApp.",
      rating: 5,
    },
    {
      name: "João Santos",
      business: "Consultoria Financeira",
      text: "Profissional excepcional! Entregou no prazo, com qualidade impecável e um design que realmente converte.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      business: "Personal Trainer",
      text: "Superou minhas expectativas! O site é rápido, responsivo e tem um visual muito profissional.",
      rating: 5,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Andreh Malheiros</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              Contato
            </button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-primary/20 hover:bg-primary/10"
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-primary/20 hover:bg-primary/10"
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Andreh Malheiros
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Landing pages com design profissional, velocidade e foco em conversão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => window.open("https://wa.me/5531999656778", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale comigo no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection("projects")}
              >
                Ver meus projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre mim</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Sou desenvolvedor front-end especializado em criar landing pages modernas, responsivas e com foco em
              resultados. Transformo ideias em páginas impactantes e acessíveis, entregando projetos completos em até 3
              dias.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="text-center p-0">
                  <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Código Limpo</h3>
                  <p className="text-muted-foreground">Desenvolvimento com as melhores práticas e padrões modernos</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="text-center p-0">
                  <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Design Profissional</h3>
                  <p className="text-muted-foreground">Interfaces modernas e atrativas que convertem visitantes</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="text-center p-0">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <p className="text-muted-foreground">Sites rápidos e otimizados para todos os dispositivos</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Tecnologias</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi para complementar meu portifolio, focados em conversão e
              resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <Button className="w-full" onClick={() => window.open(project.link, "_blank")}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver projeto
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja o que meus clientes falam sobre o trabalho desenvolvido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato e vamos criar uma landing page que vai transformar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Entre em contato</h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-4"
                    onClick={() => window.open("https://wa.me/5531999656778", "_blank")}
                  >
                    <MessageCircle className="mr-3 h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Resposta rápida garantida</p>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-4"
                    onClick={() => window.open("mailto:andrehmalheirostiberio@gmail.com", "_blank")}
                  >
                    <Mail className="mr-3 h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-sm text-muted-foreground">andrehmalheirostiberio@gmail.com</p>
                    </div>
                  </Button>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open("https://github.com/Andreh-Malheiros", "_blank")}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open("https://www.linkedin.com/in/andreh-malheiros/", "_blank")}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const name = formData.get("name")
                    const email = formData.get("email")
                    const message = formData.get("message")

                    // Enviar email usando mailto (solução simples)
                    window.location.href = `mailto:andrehmalheirostiberio@gmail.com?subject=Contato do Portfólio - ${name}&body=${message}%0A%0AEnviado por: ${email}`

                    // Limpar formulário
                    e.currentTarget.reset()
                  }}
                >
                  <Input name="name" placeholder="Seu nome" required />
                  <Input name="email" type="email" placeholder="Seu e-mail" required />
                  <Textarea name="message" placeholder="Conte-me sobre seu projeto..." rows={5} required />
                  <Button type="submit" className="w-full">
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Andreh Malheiros. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-40 bg-green-500 hover:bg-green-600"
        onClick={() => window.open("https://wa.me/5531999656778", "_blank")}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
