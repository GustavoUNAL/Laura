import React from 'react';
import './CourseInfo.css';

function CourseInfo({ student }) {
    const courseData = {
        name: student.course,
        code: 'HIST-ART-001',
        professor: 'Laura María Chaves Timarán',
        credits: 3,
        schedule: 'Lunes y Miércoles 10:00 AM - 12:00 PM',
        classroom: 'Aula 201 - Edificio de Humanidades',
        semester: student.semester,
        description: 'Exploración de los movimientos artísticos más importantes de la historia, desde el arte clásico hasta las expresiones contemporáneas.',
        objectives: [
            'Comprender la evolución del arte a través de la historia',
            'Analizar obras representativas de cada período',
            'Desarrollar habilidades críticas de apreciación artística',
            'Conectar el arte con su contexto histórico y social'
        ]
    };

    return (
        <div className="course-info">
            <h2>Información del Curso</h2>
            
            <div className="course-header">
                <h3>{courseData.name}</h3>
                <span className="course-code">{courseData.code}</span>
            </div>
            
            <div className="course-details">
                <div className="detail-item">
                    <span className="label">Profesora:</span>
                    <span className="value">{courseData.professor}</span>
                </div>
                
                <div className="detail-item">
                    <span className="label">Créditos:</span>
                    <span className="value">{courseData.credits}</span>
                </div>
                
                <div className="detail-item">
                    <span className="label">Horario:</span>
                    <span className="value">{courseData.schedule}</span>
                </div>
                
                <div className="detail-item">
                    <span className="label">Aula:</span>
                    <span className="value">{courseData.classroom}</span>
                </div>
                
                <div className="detail-item">
                    <span className="label">Semestre:</span>
                    <span className="value">{courseData.semester}</span>
                </div>
            </div>
            
            <div className="course-description">
                <h4>Descripción</h4>
                <p>{courseData.description}</p>
            </div>
            
            <div className="course-objectives">
                <h4>Objetivos de Aprendizaje</h4>
                <ul>
                    {courseData.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CourseInfo;
