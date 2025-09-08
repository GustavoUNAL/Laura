// Base de datos simulada para el curso de inglés
export const englishCourseData = {
    course: {
        id: 'gustavo-arteaga-english',
        title: 'Curso de Inglés - Gustavo Arteaga',
        instructor: 'Prof. Gustavo Arteaga',
        description: 'Curso personalizado de inglés con enfoque práctico y conversacional',
        level: 'A1-B2',
        totalLessons: 12,
        currentLesson: 5,
        progress: 33,
        nextClass: '2025-09-10',
        time: '4:00 PM',
        status: 'En Progreso',
        color: '#4CAF50'
    },
    
    lessons: [
        {
            id: 1,
            title: 'Introducción al Curso',
            description: 'Primera clase de introducción al curso de inglés',
            status: 'completed',
            duration: '45 min',
            difficulty: 'Fácil',
            topics: ['Course Overview', 'Objectives', 'Basic Structure']
        },
        {
            id: 2,
            title: 'Saludos y Despedidas I',
            description: 'Aprende saludos básicos en inglés',
            status: 'completed',
            duration: '45 min',
            difficulty: 'Fácil',
            topics: ['Basic Greetings', 'Hello, Hi, Goodbye', 'How are you?']
        },
        {
            id: 3,
            title: 'Saludos y Despedidas II',
            description: 'Saludos avanzados y formales',
            status: 'completed',
            duration: '50 min',
            difficulty: 'Fácil',
            topics: ['Advanced Greetings', 'Formal vs Informal', 'Time-based Greetings']
        },
        {
            id: 4,
            title: 'Presentación Personal',
            description: 'Aprende a presentarte en inglés',
            status: 'completed',
            duration: '55 min',
            difficulty: 'Fácil',
            topics: ['Personal Introduction', 'Self Description', 'Basic Information']
        },
        {
            id: 5,
            title: 'Vocabulario Básico',
            description: 'Aprende vocabulario fundamental en inglés',
            status: 'current',
            duration: '60 min',
            difficulty: 'Fácil',
            topics: ['Basic Vocabulary', 'Common Words', 'Pronunciation Practice']
        },
        {
            id: 6,
            title: 'Saludos y Presentaciones',
            description: 'Aprende a saludar y presentarte en inglés',
            status: 'pending',
            duration: '60 min',
            difficulty: 'Fácil',
            topics: ['Greetings', 'Introductions', 'Basic Conversations']
        },
        {
            id: 7,
            title: 'Números y Fechas',
            description: 'Números del 1-100 y fechas importantes',
            status: 'pending',
            duration: '50 min',
            difficulty: 'Fácil',
            topics: ['Numbers 1-100', 'Dates', 'Time Expressions']
        },
        {
            id: 8,
            title: 'La Familia',
            description: 'Vocabulario de la familia y relaciones',
            status: 'pending',
            duration: '45 min',
            difficulty: 'Fácil',
            topics: ['Family Members', 'Relationships', 'Describing People']
        },
        {
            id: 9,
            title: 'La Casa y el Hogar',
            description: 'Partes de la casa y muebles',
            status: 'pending',
            duration: '50 min',
            difficulty: 'Intermedio',
            topics: ['House Parts', 'Furniture', 'Prepositions of Place']
        },
        {
            id: 10,
            title: 'Comida y Bebidas',
            description: 'Vocabulario de alimentos',
            status: 'pending',
            duration: '55 min',
            difficulty: 'Intermedio',
            topics: ['Food Vocabulary', 'Drinks', 'Meals']
        },
        {
            id: 11,
            title: 'Presente Simple - Parte 1',
            description: 'Estructura básica del presente simple',
            status: 'pending',
            duration: '60 min',
            difficulty: 'Intermedio',
            topics: ['Present Simple', 'Verb To Be', 'Basic Structure']
        },
        {
            id: 12,
            title: 'Presente Simple - Parte 2',
            description: 'Verbos regulares e irregulares',
            status: 'pending',
            duration: '65 min',
            difficulty: 'Intermedio',
            topics: ['Regular Verbs', 'Irregular Verbs', 'Negative Forms']
        }
    ],
    
    assignments: [
        {
            id: 1,
            title: 'Ejercicio de Presente Simple',
            description: 'Completa las oraciones con la forma correcta del verbo',
            dueDate: '2024-01-18',
            priority: 'Alta',
            status: 'pending',
            type: 'exercise',
            points: 20
        },
        {
            id: 2,
            title: 'Conversación: Mi Rutina Diaria',
            description: 'Graba un video describiendo tu rutina diaria en inglés',
            dueDate: '2024-01-20',
            priority: 'Alta',
            status: 'pending',
            type: 'speaking',
            points: 30
        },
        {
            id: 3,
            title: 'Quiz de Vocabulario - Familia',
            description: 'Test de vocabulario sobre la familia',
            dueDate: '2024-01-22',
            priority: 'Media',
            status: 'pending',
            type: 'quiz',
            points: 15
        },
        {
            id: 4,
            title: 'Listening Exercise',
            description: 'Escucha el audio y responde las preguntas',
            dueDate: '2024-01-25',
            priority: 'Media',
            status: 'pending',
            type: 'listening',
            points: 25
        }
    ],
    
    grades: [
        {
            id: 1,
            assignment: 'Quiz de Saludos',
            grade: 85,
            maxGrade: 100,
            date: '2025-09-02',
            type: 'quiz'
        },
        {
            id: 2,
            assignment: 'Ejercicio de Números',
            grade: 92,
            maxGrade: 100,
            date: '2025-08-30',
            type: 'exercise'
        },
        {
            id: 3,
            assignment: 'Presentación de Familia',
            grade: 78,
            maxGrade: 100,
            date: '2025-08-22',
            type: 'presentation'
        },
        {
            id: 4,
            assignment: 'Test de Alfabeto',
            grade: 95,
            maxGrade: 100,
            date: '2025-08-21',
            type: 'quiz'
        }
    ],
    
    resources: [
        {
            id: 1,
            title: 'Diccionario Oxford Online',
            type: 'dictionary',
            url: 'https://www.oxfordlearnersdictionaries.com',
            description: 'Diccionario completo con pronunciación'
        },
        {
            id: 2,
            title: 'Gramática Básica PDF',
            type: 'pdf',
            url: '#',
            description: 'Guía completa de gramática inglesa'
        },
        {
            id: 3,
            title: 'Videos de Pronunciación',
            type: 'video',
            url: '#',
            description: 'Serie de videos para mejorar pronunciación'
        },
        {
            id: 4,
            title: 'Ejercicios Interactivos',
            type: 'interactive',
            url: '#',
            description: 'Juegos y ejercicios para practicar'
        }
    ],
    
    calendar: [
        {
            id: 1,
            date: '2025-09-08',
            time: '7:30 AM',
            title: 'Clase Presencial - Edificio Murano',
            type: 'class',
            description: 'Lección 4 - Repaso de Presentación Personal'
        },
        {
            id: 2,
            date: '2025-09-10',
            time: '4:00 PM',
            title: 'Class 6: Greetings and Introductions',
            type: 'class',
            description: 'Lección 6 - Saludos y Presentaciones'
        },
        {
            id: 3,
            date: '2025-09-12',
            time: '7:00 AM',
            title: 'Clase Virtual - Google Meet',
            type: 'class',
            description: 'Lección 7 - Números y Fechas'
        },
        {
            id: 4,
            date: '2025-09-15',
            time: '4:00 PM',
            title: 'Clase Presencial - Edificio Murano',
            type: 'class',
            description: 'Lección 8 - La Familia'
        },
        {
            id: 5,
            date: '2025-09-17',
            time: '7:00 AM',
            title: 'Clase Virtual - Google Meet',
            type: 'class',
            description: 'Lección 9 - La Casa y el Hogar'
        },
        {
            id: 6,
            date: '2025-09-19',
            time: '7:00 AM',
            title: 'Clase Virtual - Google Meet',
            type: 'class',
            description: 'Lección 10 - Comida y Bebidas'
        },
        {
            id: 7,
            date: '2025-09-22',
            time: '4:00 PM',
            title: 'Clase Presencial - Edificio Murano',
            type: 'class',
            description: 'Lección 11 - Presente Simple'
        },
        {
            id: 8,
            date: '2025-09-24',
            time: '7:00 AM',
            title: 'Clase Virtual - Google Meet',
            type: 'class',
            description: 'Lección 12 - Preguntas en Presente Simple'
        }
    ],
    
    pastClasses: [
        {
            id: 1,
            date: '2025-09-08',
            time: '7:30 AM',
            title: 'Class 4: Personal Introduction Review',
            lesson: 4,
            duration: '45 min',
            status: 'completed',
            attendance: 'present',
            topics: ['Presentation Review', 'Personal Introduction', 'Practice Exercise'],
            homework: 'Practice presentation skills',
            notes: 'Great participation in the review session. Good understanding of personal introduction concepts.',
            materials: ['Edificio Murano', 'Review materials', 'Practice exercises']
        },
        {
            id: 2,
            date: '2025-08-29',
            time: '7:00 AM',
            title: 'Class 3: Greetings and Farewells II',
            lesson: 3,
            duration: '60 min',
            status: 'completed',
            attendance: 'late',
            topics: ['Time Management', 'Punctuality', 'Online Etiquette'],
            homework: 'Solicitar presentación de la clase',
            notes: 'Llegó tarde a la clase. Solicitó la presentación posteriormente. Trabajar en puntualidad.',
            materials: ['Google Meet', 'Presentación enviada', 'Material de repaso']
        },
        {
            id: 3,
            date: '2025-08-28',
            time: '7:00 AM',
            title: 'Class 2: Greetings and Farewells I',
            lesson: 2,
            duration: '60 min',
            status: 'completed',
            attendance: 'present',
            topics: ['Virtual Learning', 'Online Communication', 'Digital Skills'],
            homework: 'Practicar herramientas digitales',
            notes: 'Excelente adaptación a la clase virtual. Muy participativo en el formato online.',
            materials: ['Google Meet', 'Herramientas digitales', 'Ejercicios online']
        },
        {
            id: 4,
            date: '2025-08-21',
            time: '4:00 PM',
            title: 'Class 1: Introduction',
            lesson: 1,
            duration: '60 min',
            status: 'completed',
            attendance: 'present',
            topics: ['Course Introduction', 'Classroom Setup', 'First Meeting'],
            homework: 'Revisar objetivos del curso',
            notes: 'Excelente primera clase presencial. Muy motivado y con ganas de aprender.',
            materials: ['Edificio Murano', 'Presentación física', 'Material impreso']
        },
    ],
    
    statistics: {
        totalLessons: 12,
        completedLessons: 4,
        currentLesson: 5,
        averageGrade: 87.5,
        totalAssignments: 4,
        completedAssignments: 0,
        pendingAssignments: 4,
        objectivesCompleted: 1,
        totalStudyTime: '6 horas'
    }
};

export default englishCourseData;
