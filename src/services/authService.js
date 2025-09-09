// Authentication Service
// Handles user authentication, validation, and session management

// Mock user database (in production, this would be an API)
const USERS_DATABASE = {
  // Students
  'gustavo': {
    id: 'student_gustavo',
    username: 'gustavo',
    password: '123456',
    role: 'student',
    name: 'Gustavo Arteaga',
    email: 'gustavo@example.com',
    avatar: '👨‍🎓',
    course: 'English Course',
    lastLogin: null,
    isActive: true
  },
  'maria': {
    id: 'student_maria',
    username: 'maria',
    password: 'student123',
    role: 'student',
    name: 'María González',
    email: 'maria@example.com',
    avatar: '👩‍🎓',
    course: 'English Course',
    lastLogin: null,
    isActive: true
  },
  
  // Professors
  'laura': {
    id: 'professor_laura',
    username: 'laura',
    password: 'prof123',
    role: 'professor',
    name: 'Laura Chaves',
    email: 'laura@example.com',
    avatar: '👨‍🏫',
    department: 'English Department',
    lastLogin: null,
    isActive: true
  },
  'carlos': {
    id: 'professor_carlos',
    username: 'carlos',
    password: 'teacher456',
    role: 'professor',
    name: 'Carlos Rodríguez',
    email: 'carlos@example.com',
    avatar: '👨‍🏫',
    department: 'English Department',
    lastLogin: null,
    isActive: true
  }
};

// Session management
const SESSION_KEY = 'user_session';
const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

class AuthService {
  // Validate user credentials
  static validateCredentials(username, password) {
    const user = USERS_DATABASE[username];
    
    if (!user) {
      return { success: false, error: 'Usuario no encontrado' };
    }
    
    if (!user.isActive) {
      return { success: false, error: 'Usuario inactivo' };
    }
    
    if (user.password !== password) {
      return { success: false, error: 'Contraseña incorrecta' };
    }
    
    return { success: true, user: { ...user } };
  }

  // Login user
  static login(username, password) {
    const validation = this.validateCredentials(username, password);
    
    if (!validation.success) {
      return validation;
    }
    
    const user = validation.user;
    const sessionData = {
      ...user,
      loginTime: new Date().toISOString(),
      sessionId: this.generateSessionId()
    };
    
    // Remove password from session data
    delete sessionData.password;
    
    // Save session to localStorage
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    
    // Update last login
    USERS_DATABASE[username].lastLogin = new Date().toISOString();
    
    return { success: true, user: sessionData };
  }

  // Logout user
  static logout() {
    localStorage.removeItem(SESSION_KEY);
    return { success: true };
  }

  // Get current session
  static getCurrentSession() {
    try {
      const sessionData = localStorage.getItem(SESSION_KEY);
      if (!sessionData) {
        return null;
      }
      
      const session = JSON.parse(sessionData);
      
      // Check if session is expired
      if (this.isSessionExpired(session)) {
        this.logout();
        return null;
      }
      
      return session;
    } catch (error) {
      console.error('Error getting session:', error);
      this.logout();
      return null;
    }
  }

  // Check if session is expired
  static isSessionExpired(session) {
    if (!session.loginTime) {
      return true;
    }
    
    const loginTime = new Date(session.loginTime);
    const now = new Date();
    const timeDiff = now - loginTime;
    
    return timeDiff > SESSION_TIMEOUT;
  }

  // Generate session ID
  static generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Get user by role
  static getUsersByRole(role) {
    return Object.values(USERS_DATABASE).filter(user => user.role === role);
  }

  // Get all users
  static getAllUsers() {
    return Object.values(USERS_DATABASE);
  }

  // Update user profile
  static updateUserProfile(username, updates) {
    if (USERS_DATABASE[username]) {
      USERS_DATABASE[username] = { ...USERS_DATABASE[username], ...updates };
      return { success: true, user: USERS_DATABASE[username] };
    }
    return { success: false, error: 'Usuario no encontrado' };
  }

  // Check if user is authenticated
  static isAuthenticated() {
    const session = this.getCurrentSession();
    return session !== null;
  }

  // Get current user role
  static getCurrentUserRole() {
    const session = this.getCurrentSession();
    return session ? session.role : null;
  }

  // Refresh session
  static refreshSession() {
    const session = this.getCurrentSession();
    if (session) {
      session.loginTime = new Date().toISOString();
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return session;
    }
    return null;
  }
}

export default AuthService;
