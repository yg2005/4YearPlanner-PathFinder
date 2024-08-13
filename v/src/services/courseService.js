// src/services/courseService.js

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:1337';

// Function to get all courses
export const getAllCourses = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/courses`);
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

// Function to get a specific course by major
export const getCoursesByMajor = async (major) => {
  try {
    const response = await fetch(`${BASE_URL}/api/courses/${major}`);
    if (!response.ok) {
      throw new Error('Failed to fetch courses for major');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses by major:', error);
    return [];
  }
};
