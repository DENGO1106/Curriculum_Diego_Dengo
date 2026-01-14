import { Award, Globe } from 'lucide-react'

const Certifications = () => {
    return (
        <div className="animate-fade-in" style={{ padding: '2rem 4rem' }}>
            <h1 style={{ marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '800' }}>Certificaciones y Logros</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Gallery Section */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Award size={32} color="var(--text-accent)" />
                        <h2 style={{ fontSize: '1.8rem' }}>Credenciales</h2>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{ height: '200px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: '#aaa' }}>Imagen Certificado SMPC</span>
                            </div>
                            <div style={{ padding: '1rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>SMPC (Scrum Master Professional Certificate)</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>CertiProf</p>
                            </div>
                        </div>

                        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{ height: '200px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: '#aaa' }}>Imagen Certificado Excel</span>
                            </div>
                            <div style={{ padding: '1rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>MS Excel para Automatización de Tareas</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>2025</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Languages Section */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Globe size={32} color="var(--text-accent-secondary)" />
                        <h2 style={{ fontSize: '1.8rem' }}>Idiomas</h2>
                    </div>

                    <div className="card" style={{ padding: '2rem' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontWeight: 'bold' }}>Español</span>
                                <span style={{ color: 'var(--text-accent-secondary)' }}>Nativo</span>
                            </div>
                            <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>
                                <div style={{ width: '100%', height: '100%', background: 'var(--text-accent-secondary)', borderRadius: '5px' }}></div>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontWeight: 'bold' }}>Inglés</span>
                                <span style={{ color: 'var(--text-accent)' }}>B2 (Avanzado)</span>
                            </div>
                            <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>
                                <div style={{ width: '75%', height: '100%', background: 'var(--text-accent)', borderRadius: '5px' }}></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Certifications
