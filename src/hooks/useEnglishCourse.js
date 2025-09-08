import { useState, useEffect } from 'react';
import { englishCourseData } from '../data/englishCourseData';

export const useEnglishCourse = () => {
    const [courseData, setCourseData] = useState(englishCourseData);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Cargar lección actual
    useEffect(() => {
        const lesson = courseData.lessons.find(l => l.status === 'current');
        setCurrentLesson(lesson);
    }, [courseData]);

    // Funciones para manejar el progreso
    const completeLesson = (lessonId) => {
        setIsLoading(true);
        setTimeout(() => {
            setCourseData(prev => ({
                ...prev,
                lessons: prev.lessons.map(lesson => 
                    lesson.id === lessonId 
                        ? { ...lesson, status: 'completed' }
                        : lesson.id === lessonId + 1
                        ? { ...lesson, status: 'current' }
                        : lesson
                ),
                course: {
                    ...prev.course,
                    currentLesson: prev.course.currentLesson + 1,
                    progress: Math.round(((prev.course.currentLesson + 1) / prev.course.totalLessons) * 100)
                },
                statistics: {
                    ...prev.statistics,
                    completedLessons: prev.statistics.completedLessons + 1,
                    currentLesson: prev.course.currentLesson + 1
                }
            }));
            setIsLoading(false);
        }, 1000);
    };

    const submitAssignment = (assignmentId, grade) => {
        setIsLoading(true);
        setTimeout(() => {
            setCourseData(prev => ({
                ...prev,
                assignments: prev.assignments.map(assignment => 
                    assignment.id === assignmentId 
                        ? { ...assignment, status: 'completed', grade }
                        : assignment
                ),
                grades: [
                    ...prev.grades,
                    {
                        id: prev.grades.length + 1,
                        assignment: prev.assignments.find(a => a.id === assignmentId).title,
                        grade,
                        maxGrade: 100,
                        date: new Date().toISOString().split('T')[0],
                        type: 'assignment'
                    }
                ],
                statistics: {
                    ...prev.statistics,
                    completedAssignments: prev.statistics.completedAssignments + 1,
                    pendingAssignments: prev.statistics.pendingAssignments - 1,
                    averageGrade: calculateNewAverage(prev.grades, grade)
                }
            }));
            setIsLoading(false);
        }, 1000);
    };

    const calculateNewAverage = (grades, newGrade) => {
        const allGrades = [...grades, { grade: newGrade }];
        const total = allGrades.reduce((sum, g) => sum + g.grade, 0);
        return Math.round(total / allGrades.length);
    };

    const startLesson = (lessonId) => {
        const lesson = courseData.lessons.find(l => l.id === lessonId);
        if (lesson && lesson.status !== 'locked') {
            return lesson;
        }
        return null;
    };

    const getNextLesson = () => {
        return courseData.lessons.find(l => l.status === 'locked');
    };

    const getUpcomingClasses = () => {
        return courseData.calendar.filter(event => event.type === 'class');
    };

    const getPendingAssignments = () => {
        return courseData.assignments.filter(assignment => assignment.status === 'pending');
    };

    const getRecentGrades = () => {
        return courseData.grades.slice(0, 5);
    };

    const getResources = () => {
        return courseData.resources;
    };

    const getStatistics = () => {
        return courseData.statistics;
    };

    const getPastClasses = () => {
        return courseData.pastClasses || [];
    };

    return {
        courseData,
        currentLesson,
        lessons: courseData.lessons,
        isLoading,
        completeLesson,
        submitAssignment,
        startLesson,
        getNextLesson,
        getUpcomingClasses,
        getPendingAssignments,
        getRecentGrades,
        getResources,
        getStatistics,
        getPastClasses
    };
};

export default useEnglishCourse;
