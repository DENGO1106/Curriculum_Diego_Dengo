import { Compass, Zap, Users, ShieldCheck, Brain, MessageSquare, Briefcase } from 'lucide-react'

const Vision = () => {
    return (
        <div className="animate-fade-in" style={{ padding: '2rem 4rem' }}>
            <h1 style={{ marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '800' }}>Visión Estratégica</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>

                {/* Strategic Focus */}
                <section className="card" style={{
                    padding: '3rem',
                    textAlign: 'center',
                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))',
                    border: '1px solid var(--text-gold)'
                }}>
                    <Compass size={64} color="var(--text-gold)" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-gold)' }}>Proyección Profesional</h2>
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        "Mejora continua para la optimización de procesos en el sector industrial, integrando la precisión financiera con la eficiencia operativa."
                    </p>
                </section>

                {/* Soft Skills */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Habilidades Blandas</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                            <Brain size={48} color="var(--text-accent)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Pensamiento Crítico</h3>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Y resolución de problemas.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                            <MessageSquare size={48} color="var(--text-accent-secondary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Comunicación Efectiva</h3>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Clara y asertiva en entornos profesionales.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                            <Users size={48} color="var(--text-gold)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trabajo en Equipo</h3>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Y colaboración interdisciplinaria.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                            <ShieldCheck size={48} color="var(--text-accent)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Adaptabilidad</h3>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Y flexibilidad ante desafíos.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                            <Zap size={48} color="var(--text-accent-secondary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Aprendizaje Ágil</h3>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Capacidad para aprender rápidamente.</p>
                        </div>

                        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                            <Briefcase size={48} color="var(--text-gold)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Liderazgo</h3>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Y toma de decisiones con capacidad de análisis.</p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Vision
