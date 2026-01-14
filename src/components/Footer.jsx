import { Mail, MapPin, Linkedin, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="main-footer">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <a href="mailto:diegodengosoto@gmail.com" className="btn btn-secondary">
                    <Mail size={18} /> diegodengosoto@gmail.com
                </a>
                <a href="https://wa.me/50687095195" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <Phone size={18} /> 8709-5195
                </a>
                <a href="https://www.linkedin.com/in/diego-dengo-soto-70782b199" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <Linkedin size={18} /> LinkedIn
                </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: 0.7 }}>
                <MapPin size={16} />
                <span>San Pedro, Montes de Oca, Costa Rica</span>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.5 }}>
                © {new Date().getFullYear()} Diego Dengo. Engineered for Excellence.
            </p>
        </footer>
    )
}

export default Footer
