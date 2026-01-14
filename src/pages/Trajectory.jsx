import { GraduationCap, Briefcase } from 'lucide-react'

const Trajectory = () => {
    return (
        <div className="animate-fade-in" style={{ padding: '2rem 4rem' }}>
            <h1 style={{ marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '800' }}>Trayectoria y Formación</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Academic Section */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <GraduationCap size={32} color="var(--text-accent)" />
                        <h2 style={{ fontSize: '1.8rem' }}>Formación Académica</h2>
                    </div>

                    <div className="timeline-container">
                        <div className="timeline-item">
                            <span style={{ color: 'var(--text-accent)', fontWeight: 'bold' }}>2024 - Actualidad</span>
                            <h3 style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Universidad de Costa Rica (UCR)</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Estudiante Ingeniería Industrial</p>
                        </div>

                        <div className="timeline-item">
                            <span style={{ color: 'var(--text-accent)', fontWeight: 'bold' }}>2025 - Actualidad</span>
                            <h3 style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Universidad de Costa Rica (UCR)</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Estudiante Contaduría Pública</p>
                        </div>

                        <div className="timeline-item">
                            <span style={{ color: 'var(--text-accent)', fontWeight: 'bold' }}>2022 - 2023</span>
                            <h3 style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Colegio Científico Sede Guanacaste</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Generación 2022-2023</p>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Briefcase size={32} color="var(--text-accent-secondary)" />
                        <h2 style={{ fontSize: '1.8rem' }}>Experiencia Profesional</h2>
                    </div>

                    {/* Job 1 */}
                    <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--text-accent-secondary)', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Asistente de Investigación</h3>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>UAC - CICA, UCR</span>
                            </div>
                            <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--text-accent-secondary)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem' }}>
                                Ago - Dic 2025
                            </span>
                        </div>

                        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>
                            Asistente en la Unidad de Análisis y Calidad (UAC), enfocado en el control de calidad de informes técnicos.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--text-accent-secondary)' }}>▹</span>
                                <span>Validación de datos analíticos.</span>
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--text-accent-secondary)' }}>▹</span>
                                <span>Creación de gráficos y representación visual de resultados.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--text-accent-secondary)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Encargado de Atención al Cliente y Control de Inventarios</h3>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Bodega</span>
                            </div>
                            <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--text-accent-secondary)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem' }}>
                                2022 - 2024
                            </span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--text-accent-secondary)' }}>▹</span>
                                <span>Responsable de la atención al cliente personalizada y resolución de consultas.</span>
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--text-accent-secondary)' }}>▹</span>
                                <span>Gestión y control de inventario de bodega.</span>
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--text-accent-secondary)' }}>▹</span>
                                <span>Registro de productos y actualización de existencias.</span>
                            </li>
                        </ul>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default Trajectory
