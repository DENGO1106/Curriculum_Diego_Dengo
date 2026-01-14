import SkillCard from '../components/SkillCard'
import SkillsRadar from '../components/SkillsRadar'
import { Linkedin, MessageCircle } from 'lucide-react'

const Dashboard = () => {
    const skills = [
        { name: 'Python', useCase: 'Automatización de scripts y análisis de datos complejos.' },
        { name: 'Excel/VBA', useCase: 'Modelos financieros avanzados y macros de automatización.' },
        { name: 'SQL', useCase: 'Gestión eficiente de bases de datos y consultas complejas.' },
        { name: 'Power BI', useCase: 'Dashboard dinámico para toma de decisiones estratégicas.' },
    ]

    return (
        <div style={{ padding: '2rem 4rem' }}>
            {/* Header Dinámico */}
            <header className="animate-fade-in-up" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4rem',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        background: 'linear-gradient(to right, #fff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Diego Alberto Dengo Soto
                    </h1>
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: 'var(--text-accent)',
                        marginBottom: '2rem',
                        fontWeight: '600'
                    }}>
                        Futuro Ingeniero Industrial & Contador Público
                    </h2>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="/cv_diego_dengo.pdf" download="CV_Diego_Dengo.pdf" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                            Descargar CV
                        </a>
                        <a href="https://wa.me/50687095195" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                            <MessageCircle size={20} /> Contactar WhatsApp
                        </a>
                        <a href="https://www.linkedin.com/in/diego-dengo-soto-70782b199" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">
                            <Linkedin size={20} /> Perfil LinkedIn
                        </a>
                    </div>
                </div>

                <div style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid var(--text-accent)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
                }}>
                    <img src="/profile-photo.jpg" alt="Diego Dengo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </header>

            {/* Grid Principal: Info y Radar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                {/* Resumen Ejecutivo */}
                <section className="animate-fade-in-up delay-100">
                    <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--text-gold)', height: '100%' }}>
                        <h3 style={{ color: 'var(--text-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Acerca de Mí</h3>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                            "Estudiante de Ingeniería Industrial 3.er año y Contaduría Pública 2.º año, con un perfil dual centrado en la optimización estratégica mediante el análisis y visualización de datos. Experiencia sólida en automatización, modelado financiero y BI. Busco aplicar mi enfoque detallista para la mejora continua en el sector industrial."
                        </p>
                    </div>
                </section>

                {/* Radar Chart */}
                <section className="animate-fade-in-up delay-200">
                    <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ color: 'var(--text-accent)', marginBottom: '1rem' }}>Balance de Competencias</h3>
                        <SkillsRadar />
                    </div>
                </section>
            </div>

            {/* Power Stack */}
            <section className="animate-fade-in-up delay-300">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Power Stack</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill.name} useCase={skill.useCase} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Dashboard
