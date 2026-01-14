
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    { subject: 'Estrategia', A: 90, fullMark: 100 },
    { subject: 'Programación', A: 85, fullMark: 100 },
    { subject: 'Visualización', A: 95, fullMark: 100 },
    { subject: 'Gestión DB', A: 80, fullMark: 100 },
    { subject: 'Liderazgo', A: 85, fullMark: 100 },
    { subject: 'Finanzas', A: 90, fullMark: 100 },
];

const SkillsRadar = () => {
    return (
        <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="var(--glass-border)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name="Diego"
                        dataKey="A"
                        stroke="var(--text-accent)"
                        strokeWidth={2}
                        fill="var(--text-accent)"
                        fillOpacity={0.3}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SkillsRadar;
