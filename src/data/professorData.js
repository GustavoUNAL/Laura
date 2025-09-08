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
        totalStudents: 2,
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
        },
        {
            id: 'student-002',
            name: 'Vicente Rodríguez',
            email: 'vicente.rodriguez@estudiante.edu',
            level: 'Básico',
            progress: 33,
            attendance: 100,
            averageGrade: 82.3,
            lastActivity: '2025-09-02',
            status: 'Activo',
            course: 'Curso de Inglés - Gustavo Arteaga',
            completedLessons: 4,
            totalLessons: 12,
            currentTopics: ['Introducción', 'Saludos y Despedidas', 'Presentación Personal', 'Vocabulario Básico'],
            classDescription: 'Curso personalizado enfocado en comunicación práctica. Cubriendo fundamentos del inglés con énfasis en conversación y confianza.',
            notes: 'Estudiante nuevo con gran motivación. Ha completado las 4 clases iniciales con buen desempeño. Necesita más práctica en pronunciación.',
            strengths: ['Motivación', 'Puntualidad', 'Trabajo en equipo'],
            areasToImprove: ['Pronunciación', 'Vocabulario básico', 'Confianza al hablar'],
            assignments: [
                {
                    id: 3,
                    title: 'Ejercicio de Alfabeto',
                    status: 'completed',
                    dueDate: '2024-01-10',
                    grade: 88
                },
                {
                    id: 4,
                    title: 'Presentación Personal',
                    status: 'pending',
                    dueDate: '2025-09-17',
                    grade: null
                }
            ],
                recentGrades: [
                    { assignment: 'Quiz de Alfabeto', grade: 88, date: '2025-09-02' },
                    { assignment: 'Ejercicio de Números', grade: 76, date: '2025-08-30' },
                    { assignment: 'Saludos Básicos', grade: 83, date: '2025-08-22' }
                ]
        },
        {
            id: 'student-003',
            name: 'Fernanda López',
            email: 'fernanda.lopez@estudiante.edu',
            level: 'Avanzado',
            progress: 25,
            attendance: 95,
            averageGrade: 91.2,
            lastActivity: '2025-09-01',
            status: 'Activo',
            course: 'Curso de Inglés - Fernanda López',
            completedLessons: 3,
            totalLessons: 12,
            currentTopics: ['Gramática Avanzada', 'Escritura Académica', 'Conversación Avanzada', 'Vocabulario Técnico'],
            classDescription: 'Curso avanzado enfocado en perfeccionamiento del idioma. Desarrollo de habilidades de escritura académica y conversación fluida.',
            notes: 'Estudiante avanzada con excelente dominio del idioma. Enfocada en perfeccionar habilidades de conversación y escritura académica.',
            strengths: ['Gramática avanzada', 'Escritura', 'Comprensión lectora'],
            areasToImprove: ['Fluidez en conversación', 'Pronunciación de acentos', 'Vocabulario técnico'],
            assignments: [
                {
                    id: 5,
                    title: 'Ensayo sobre Tecnología',
                    status: 'completed',
                    dueDate: '2024-01-10',
                    grade: 94
                },
                {
                    id: 6,
                    title: 'Presentación: Cambio Climático',
                    status: 'pending',
                    dueDate: '2025-09-20',
                    grade: null
                }
            ],
                recentGrades: [
                    { assignment: 'Ensayo sobre Tecnología', grade: 94, date: '2025-09-02' },
                    { assignment: 'Quiz de Gramática Avanzada', grade: 89, date: '2025-08-30' },
                    { assignment: 'Conversación sobre Viajes', grade: 90, date: '2025-08-22' }
                ]
        },
        {
            id: 'student-004',
            name: 'Sebastián García',
            email: 'sebastian.garcia@estudiante.edu',
            level: 'Intermedio',
            progress: 20,
            attendance: 90,
            averageGrade: 79.8,
            lastActivity: '2025-08-30',
            status: 'Activo',
            course: 'Curso de Inglés - Sebastián García',
            completedLessons: 2,
            totalLessons: 12,
            currentTopics: ['Comprensión Auditiva', 'Lectura Comprensiva', 'Vocabulario Intermedio', 'Gramática Básica'],
            classDescription: 'Curso intermedio enfocado en fortalecer habilidades de comprensión y desarrollar confianza en la producción oral.',
            notes: 'Estudiante con potencial pero necesita más disciplina. Bueno en comprensión pero necesita mejorar en producción oral.',
            strengths: ['Comprensión auditiva', 'Lectura', 'Motivación'],
            areasToImprove: ['Pronunciación', 'Fluidez oral', 'Confianza al hablar'],
            assignments: [
                {
                    id: 7,
                    title: 'Ejercicio de Listening',
                    status: 'completed',
                    dueDate: '2024-01-08',
                    grade: 85
                },
                {
                    id: 8,
                    title: 'Conversación: Mi Ciudad',
                    status: 'pending',
                    dueDate: '2025-09-18',
                    grade: null
                }
            ],
                recentGrades: [
                    { assignment: 'Ejercicio de Listening', grade: 85, date: '2025-08-30' },
                    { assignment: 'Quiz de Vocabulario', grade: 75, date: '2025-08-28' },
                    { assignment: 'Lectura Comprensiva', grade: 79, date: '2025-08-25' }
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
        totalStudents: 4,
        activeStudents: 4,
        averageGrade: 85.2,
        totalClasses: 12,
        completedClasses: 4,
        upcomingClasses: 8,
        totalAssignments: 8,
        gradedAssignments: 6,
        pendingGrading: 2,
        averageAttendance: 96.25
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
