import React, { useState, useEffect } from 'react';
import './ProfessorDashboard.css';
import StudentCard from '../StudentCard/StudentCard';

function ProfessorDashboard({ onLogout }) {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setIsLoading(true);
        
        // Simular carga de datos
        setTimeout(() => {
            // Cursos de ejemplo
            const coursesData = [
                {
                    id: 'eng-gustavo',
                    name: 'Ingeniería Eléctrica - Gustavo',
                    description: 'Curso avanzado de sistemas eléctricos',
                    semester: '2024-1'
                },
                {
                    id: 'eng-laura',
                    name: 'Ingeniería de Sistemas - Laura',
                    description: 'Desarrollo de software y arquitectura',
                    semester: '2024-1'
                }
            ];

            // Estudiantes de ejemplo
            const studentsData = [
                {
                    id: 'student-1',
                    name: 'Ana García',
                    email: 'ana.garcia@universidad.edu',
                    course: 'Ingeniería Eléctrica',
                    semester: '2024-1',
                    avatar: 'A'
                },
                {
                    id: 'student-2',
                    name: 'Carlos López',
                    email: 'carlos.lopez@universidad.edu',
                    course: 'Ingeniería Eléctrica',
                    semester: '2024-1',
                    avatar: 'C'
                },
                {
                    id: 'student-3',
                    name: 'María Rodríguez',
                    email: 'maria.rodriguez@universidad.edu',
                    course: 'Ingeniería de Sistemas',
                    semester: '2024-1',
                    avatar: 'M'
                },
                {
                    id: 'student-4',
                    name: 'Diego Martínez',
                    email: 'diego.martinez@universidad.edu',
                    course: 'Ingeniería Eléctrica',
                    semester: '2024-1',
                    avatar: 'D'
                },
                {
                    id: 'student-5',
                    name: 'Sofia Herrera',
                    email: 'sofia.herrera@universidad.edu',
                    course: 'Ingeniería de Sistemas',
                    semester: '2024-1',
                    avatar: 'S'
                },
                {
                    id: 'student-6',
                    name: 'Andrés Vargas',
                    email: 'andres.vargas@universidad.edu',
                    course: 'Ingeniería Eléctrica',
                    semester: '2024-1',
                    avatar: 'A'
                }
            ];

            setCourses(coursesData);
            setStudents(studentsData);
            setSelectedCourse(coursesData[0]);
            setIsLoading(false);
        }, 1000);
    };

    const handleViewDetails = (student, course) => {
        console.log('Ver detalles de:', student.name, 'en curso:', course.name);
        // Aquí puedes implementar la lógica para mostrar detalles del estudiante
    };

    const handleViewProgress = (student, course) => {
        console.log('Ver progreso de:', student.name, 'en curso:', course.name);
        // Aquí puedes implementar la lógica para mostrar el progreso del estudiante
    };

    const filteredStudents = selectedCourse 
        ? students.filter(student => student.course === selectedCourse.name)
        : students;

    if (isLoading) {
        return (
            <div className="professor-dashboard">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Cargando estudiantes...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="professor-dashboard">
            <div className="dashboard-header">
                <div className="header-info">
                    <h1>Panel del Profesor</h1>
                    <p>Gestión de estudiantes y cursos</p>
                </div>
                <div className="header-actions">
                    <button onClick={onLogout} className="logout-button">
                        Cerrar Sesión
                    </button>
                </div>
            </div>

            <div className="course-selector">
                <label htmlFor="course-select">Seleccionar Curso:</label>
                <select 
                    id="course-select"
                    value={selectedCourse?.id || ''}
                    onChange={(e) => {
                        const course = courses.find(c => c.id === e.target.value);
                        setSelectedCourse(course);
                    }}
                    className="course-select"
                >
                    <option value="">Todos los cursos</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="students-section">
                <div className="section-header">
                    <h2>
                        {selectedCourse ? `Estudiantes de ${selectedCourse.name}` : 'Todos los Estudiantes'}
                    </h2>
                    <div className="student-count">
                        {filteredStudents.length} estudiante{filteredStudents.length !== 1 ? 's' : ''}
                    </div>
                </div>

                <div className="students-grid">
                    {filteredStudents.map(student => (
                        <StudentCard
                            key={student.id}
                            student={student}
                            course={selectedCourse || { id: 'all', name: student.course }}
                            onViewDetails={handleViewDetails}
                            onViewProgress={handleViewProgress}
                        />
                    ))}
                </div>

                {filteredStudents.length === 0 && (
                    <div className="no-students">
                        <p>No hay estudiantes en este curso</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfessorDashboard;


