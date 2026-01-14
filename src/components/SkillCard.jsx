import { Code, Database, BarChart, FileSpreadsheet } from 'lucide-react'

const icons = {
    Python: <Code size={48} />,
    SQL: <Database size={48} />,
    'Power BI': <BarChart size={48} />,
    'Excel/VBA': <FileSpreadsheet size={48} />,
}

const SkillCard = ({ skill, useCase }) => {
    return (
        <div className="card skill-card">
            <div className="skill-icon">
                {icons[skill] || <Code size={48} />}
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{skill}</h3>

            <div className="skill-tooltip">
                <p style={{ textAlign: 'center', fontWeight: '500' }}>
                    {useCase}
                </p>
            </div>
        </div>
    )
}

export default SkillCard
