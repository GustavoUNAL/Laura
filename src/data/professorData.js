// Datos específicos para la vista del profesor - Laura Chaves
export const professorData = {
    professor: {
        id: 'laura-chaves',
        name: 'Laura Chaves',
        title: 'Profesora de Inglés',
        email: 'laura.chaves@universidad.edu',
        phone: '+57 300 123 4567',
        experience: '8 años de experiencia',
        specialization: 'Inglés Conversacional y Preparación TOEFL',
        avatar: '👩‍🏫',
        bio: 'Profesora apasionada por la enseñanza del inglés con enfoque en comunicación práctica y desarrollo de confianza en los estudiantes.'
    },
    
    course: {
        id: 'gustavo-arteaga-english',
        title: 'Curso de Inglés - Gustavo Arteaga',
        code: 'ENG-101',
        semester: '2024-1',
        level: 'A1-B2',
        totalStudents: 1,
        totalLessons: 12,
        completedLessons: 4,
        currentLesson: 5,
        progress: 33,
        nextClass: '2025-09-08',
        time: '4:00 PM',
        status: 'En Progreso',
        color: '#4CAF50'
    },
    
    students: [
        {
            id: 'student-001',
            name: 'Gustavo Arteaga',
            email: 'gustavo.arteaga@estudiante.edu',
            level: 'Intermedio',
            progress: 33,
            attendance: 100,
            averageGrade: 87.5,
            lastActivity: '2025-09-02',
            status: 'Activo',
            course: 'Curso de Inglés - Gustavo Arteaga',
            completedLessons: 4,
            totalLessons: 12,
            currentTopics: ['Introducción', 'Saludos y Despedidas', 'Presentación Personal', 'Vocabulario Básico'],
            classDescription: 'Curso personalizado enfocado en comunicación práctica. Cubriendo fundamentos del inglés con énfasis en conversación y confianza.',
            notes: 'Estudiante muy dedicado y participativo. Excelente progreso en pronunciación. Ha completado 4 clases exitosamente.',
            strengths: ['Vocabulario', 'Comprensión auditiva', 'Participación'],
            areasToImprove: ['Gramática avanzada', 'Fluidez en conversación'],
            assignments: [
                {
                    id: 1,
                    title: 'Ejercicio de Presente Simple',
                    status: 'pending',
                    dueDate: '2024-01-18',
                    grade: null
                },
                {
                    id: 2,
                    title: 'Conversación: Mi Rutina Diaria',
                    status: 'pending',
                    dueDate: '2025-09-15',
                    grade: null
                }
            ],
                recentGrades: [
                    { assignment: 'Quiz de Saludos', grade: 85, date: '2025-09-02' },
                    { assignment: 'Ejercicio de Números', grade: 92, date: '2025-08-30' },
                    { assignment: 'Presentación de Familia', grade: 78, date: '2025-08-22' }
                ]
        }
    ],
    
    upcomingClasses: [
        {
            id: 1,
            date: '2025-09-08',
            time: '4:00 PM',
            title: 'Clase 5: Vocabulario Básico - Presencial',
            lesson: 5,
            duration: '60 min',
            students: 4,
            location: 'Edificio Murano',
            topics: ['Basic Vocabulary', 'Common Words', 'Pronunciation Practice'],
            materials: ['Presentación PPT', 'Ejercicios prácticos', 'Audio de pronunciación']
        },
        {
            id: 2,
            date: '2025-09-10',
            time: '7:00 AM',
            title: 'Clase 6: Saludos y Presentaciones - Virtual',
            lesson: 6,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Greetings', 'Introductions', 'Basic Conversations'],
            materials: ['Google Meet', 'Presentación digital', 'Ejercicios online']
        },
        {
            id: 3,
            date: '2025-09-12',
            time: '7:00 AM',
            title: 'Clase 7: Números y Fechas - Virtual',
            lesson: 7,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Numbers 1-100', 'Dates', 'Time Expressions'],
            materials: ['Google Meet', 'Ejercicios numéricos', 'Calendario digital']
        },
        {
            id: 4,
            date: '2025-09-15',
            time: '4:00 PM',
            title: 'Clase 8: La Familia - Presencial',
            lesson: 8,
            duration: '60 min',
            students: 4,
            location: 'Edificio Murano',
            topics: ['Family Members', 'Relationships', 'Describing People'],
            materials: ['Árbol genealógico', 'Fotos familiares', 'Ejercicios de descripción']
        },
        {
            id: 5,
            date: '2025-09-17',
            time: '7:00 AM',
            title: 'Clase 9: La Casa y el Hogar - Virtual',
            lesson: 9,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['House Parts', 'Furniture', 'Prepositions of Place'],
            materials: ['Google Meet', 'Casa visual', 'Ejercicios de ubicación']
        },
        {
            id: 6,
            date: '2025-09-19',
            time: '7:00 AM',
            title: 'Clase 10: Comida y Bebidas - Virtual',
            lesson: 10,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Food Vocabulary', 'Drinks', 'Restaurant Phrases'],
            materials: ['Google Meet', 'Vocabulario de alimentos', 'Frases de restaurante']
        },
        {
            id: 7,
            date: '2025-09-22',
            time: '4:00 PM',
            title: 'Clase 11: Presente Simple - Presencial',
            lesson: 11,
            duration: '60 min',
            students: 4,
            location: 'Edificio Murano',
            topics: ['Present Simple', 'Verb Conjugation', 'Daily Routines'],
            materials: ['Presentación PPT', 'Ejercicios de gramática', 'Rutinas diarias']
        },
        {
            id: 8,
            date: '2025-09-24',
            time: '7:00 AM',
            title: 'Clase 12: Preguntas en Presente Simple - Virtual',
            lesson: 12,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Question Formation', 'Wh- Questions', 'Yes/No Questions'],
            materials: ['Google Meet', 'Estructura de preguntas', 'Ejercicios de conversación']
        }
    ],
    
    recentActivity: [
        {
            id: 1,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Clase 4: Clase Virtual - Google Meet',
            date: '2025-09-01',
            time: '7:00 AM'
        },
        {
            id: 2,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Clase 3: Clase Virtual - Google Meet',
            date: '2025-08-29',
            time: '7:00 AM'
        },
        {
            id: 3,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Clase 2: Clase Virtual - Google Meet',
            date: '2025-08-28',
            time: '7:00 AM'
        },
        {
            id: 4,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Clase 1: Primera Clase Presencial - Edificio Murano',
            date: '2025-08-21',
            time: '4:00 PM'
        },
        {
            id: 5,
            type: 'assignment_graded',
            student: 'Fernanda López',
            assignment: 'Ensayo sobre Tecnología',
            grade: 94,
            date: '2025-09-02',
            time: '2:30 PM'
        }
    ],
    
    statistics: {
        totalStudents: 1,
        activeStudents: 1,
        averageGrade: 87.5,
        totalClasses: 12,
        completedClasses: 4,
        upcomingClasses: 8,
        totalAssignments: 2,
        gradedAssignments: 0,
        pendingGrading: 2,
        averageAttendance: 100
    },
    
    resources: [
        {
            id: 1,
            title: 'Plan de Estudios del Curso',
            type: 'curriculum',
            description: 'Estructura completa del curso de inglés',
            lastUpdated: '2025-08-21'
        },
        {
            id: 2,
            title: 'Materiales de Clase',
            type: 'materials',
            description: 'Presentaciones, ejercicios y recursos multimedia',
            lastUpdated: '2025-09-02'
        },
        {
            id: 3,
            title: 'Evaluaciones y Rúbricas',
            type: 'assessment',
            description: 'Criterios de evaluación y rúbricas de calificación',
            lastUpdated: '2025-08-25'
        }
    ]
};

export default professorData;
