// Datos específicos para la vista del profesor - Laura Chaves
export const professorData = {
    professor: {
        id: 'laura-chaves',
        name: 'Laura Chaves',
        title: 'English Professor',
        email: 'laura.chaves@universidad.edu',
        phone: '+57 300 123 4567',
        experience: '8 years of experience',
        specialization: 'Conversational English and TOEFL Preparation',
        avatar: '👩‍🏫',
        bio: 'Passionate English teacher focused on practical communication and building student confidence.'
    },
    
    course: {
        id: 'gustavo-arteaga-english',
        title: 'English Course - Gustavo Arteaga',
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
        status: 'In Progress',
        color: '#4CAF50'
    },
    
    students: [
        {
            id: 'student-001',
            name: 'Gustavo Arteaga',
            email: 'gustavo.arteaga@student.edu',
            level: 'Intermediate',
            progress: 33,
            attendance: 100,
            averageGrade: 87.5,
            lastActivity: '2025-09-02',
            status: 'Active',
            course: 'English Course - Gustavo Arteaga',
            completedLessons: 4,
            totalLessons: 12,
            currentTopics: ['Introduction', 'Greetings and Farewells', 'Personal Introduction', 'Basic Vocabulary'],
            classDescription: 'Personalized course focused on practical communication. Covering English fundamentals with an emphasis on conversation and confidence.',
            notes: 'Very dedicated and participative student. Excellent progress in pronunciation. Has completed 4 classes successfully.',
            strengths: ['Vocabulary', 'Listening comprehension', 'Participation'],
            areasToImprove: ['Advanced grammar', 'Speaking fluency'],
            assignments: [
                {
                    id: 1,
                    title: 'Present Simple Exercise',
                    status: 'pending',
                    dueDate: '2024-01-18',
                    grade: null
                },
                {
                    id: 2,
                    title: 'Conversation: My Daily Routine',
                    status: 'pending',
                    dueDate: '2025-09-15',
                    grade: null
                }
            ],
                recentGrades: [
                    { assignment: 'Greetings Quiz', grade: 85, date: '2025-09-02' },
                    { assignment: 'Numbers Exercise', grade: 92, date: '2025-08-30' },
                    { assignment: 'Family Presentation', grade: 78, date: '2025-08-22' }
                ]
        }
    ],
    
    upcomingClasses: [
        {
            id: 1,
            date: '2025-09-08',
            time: '4:00 PM',
            title: 'Class 5: Basic Vocabulary - In-person',
            lesson: 5,
            duration: '60 min',
            students: 4,
            location: 'Murano Building',
            topics: ['Basic Vocabulary', 'Common Words', 'Pronunciation Practice'],
            materials: ['PPT Presentation', 'Practice exercises', 'Pronunciation audio']
        },
        {
            id: 2,
            date: '2025-09-10',
            time: '7:00 AM',
            title: 'Class 6: Greetings and Introductions - Virtual',
            lesson: 6,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Greetings', 'Introductions', 'Basic Conversations'],
            materials: ['Google Meet', 'Digital presentation', 'Online exercises']
        },
        {
            id: 3,
            date: '2025-09-12',
            time: '7:00 AM',
            title: 'Class 7: Numbers and Dates - Virtual',
            lesson: 7,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Numbers 1-100', 'Dates', 'Time Expressions'],
            materials: ['Google Meet', 'Numerical exercises', 'Digital calendar']
        },
        {
            id: 4,
            date: '2025-09-15',
            time: '4:00 PM',
            title: 'Class 8: Family - In-person',
            lesson: 8,
            duration: '60 min',
            students: 4,
            location: 'Murano Building',
            topics: ['Family Members', 'Relationships', 'Describing People'],
            materials: ['Family tree', 'Family photos', 'Description exercises']
        },
        {
            id: 5,
            date: '2025-09-17',
            time: '7:00 AM',
            title: 'Class 9: The House and Home - Virtual',
            lesson: 9,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['House Parts', 'Furniture', 'Prepositions of Place'],
            materials: ['Google Meet', 'House visual', 'Location exercises']
        },
        {
            id: 6,
            date: '2025-09-19',
            time: '7:00 AM',
            title: 'Class 10: Food and Drinks - Virtual',
            lesson: 10,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Food Vocabulary', 'Drinks', 'Restaurant Phrases'],
            materials: ['Google Meet', 'Food vocabulary', 'Restaurant phrases']
        },
        {
            id: 7,
            date: '2025-09-22',
            time: '4:00 PM',
            title: 'Class 11: Present Simple - In-person',
            lesson: 11,
            duration: '60 min',
            students: 4,
            location: 'Murano Building',
            topics: ['Present Simple', 'Verb Conjugation', 'Daily Routines'],
            materials: ['PPT Presentation', 'Grammar exercises', 'Daily routines']
        },
        {
            id: 8,
            date: '2025-09-24',
            time: '7:00 AM',
            title: 'Class 12: Present Simple Questions - Virtual',
            lesson: 12,
            duration: '60 min',
            students: 4,
            location: 'Google Meet',
            topics: ['Question Formation', 'Wh- Questions', 'Yes/No Questions'],
            materials: ['Google Meet', 'Question structure', 'Conversation exercises']
        }
    ],
    
    recentActivity: [
        {
            id: 1,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Class 4: Virtual Class - Google Meet',
            date: '2025-09-01',
            time: '7:00 AM'
        },
        {
            id: 2,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Class 3: Virtual Class - Google Meet',
            date: '2025-08-29',
            time: '7:00 AM'
        },
        {
            id: 3,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Class 2: Virtual Class - Google Meet',
            date: '2025-08-28',
            time: '7:00 AM'
        },
        {
            id: 4,
            type: 'class_completed',
            student: 'Gustavo Arteaga',
            class: 'Class 1: First In-person Class - Murano Building',
            date: '2025-08-21',
            time: '4:00 PM'
        },
        {
            id: 5,
            type: 'assignment_graded',
            student: 'Fernanda López',
            assignment: 'Technology Essay',
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
            title: 'Course Syllabus',
            type: 'curriculum',
            description: 'Complete structure of the English course',
            lastUpdated: '2025-08-21'
        },
        {
            id: 2,
            title: 'Class Materials',
            type: 'materials',
            description: 'Presentations, exercises and multimedia resources',
            lastUpdated: '2025-09-02'
        },
        {
            id: 3,
            title: 'Assessments and Rubrics',
            type: 'assessment',
            description: 'Evaluation criteria and grading rubrics',
            lastUpdated: '2025-08-25'
        }
    ]
};

export default professorData;
