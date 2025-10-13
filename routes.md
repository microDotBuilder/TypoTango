# TypoTango Routing Structure

## Route Paths

- [ ] `/` - Home/Landing page (timer selection + instructions)
- [ ] `/typing` - Active typing test page
- [ ] `/finish` - Results and statistics page

## Page Components

### Layout Component

- **Purpose**: Shared wrapper for consistent UI across routes
- **Contains**:
  - NavBar (always visible)
  - TimerNav (only on home page)
  - Footer (only on home and finish pages)
  - Reset button (only on finish page)
  - Shortcut buttons (only on finish page)

### Home Page (`/`)

- **Purpose**: Landing page with timer selection and instructions
- **Features**:
  - Timer selection (15s, 30s, 60s, etc.)
  - Instructions/onboarding
  - Start test button
- **Layout**: Full layout with NavBar, TimerNav, and Footer

### Typing Page (`/typing`)

- **Purpose**: Active typing test interface
- **Features**:
  - Passage display
  - Input field
  - Real-time timer
  - Character highlighting
  - Auto-scroll functionality
- **Layout**: Minimal layout (only NavBar, no Footer/TimerNav)
- **Navigation**: Auto-redirects to `/finish` when timer expires

### Finish Page (`/finish`)

- **Purpose**: Display test results and statistics
- **Features**:
  - WPM calculation
  - Accuracy percentage
  - Character breakdown
  - WPM consistency graph
  - Restart test button
  - Shortcut buttons
- **Layout**: Full layout with NavBar and Footer
- **Navigation**: Can restart test (go to `/typing`) or go home (`/`)

## Implementation Notes

### State Management

- Use React Router state or context to pass test data between routes
- Maintain typing progress, timer state, and results across navigation
- Consider using URL params for timer duration

### Route Protection

- Prevent direct access to `/finish` without completing a test
- Redirect invalid routes to home page
- Handle browser back/forward navigation appropriately

### Data Flow

1. Home → Select timer → Navigate to `/typing` with timer value
2. Typing → Complete test → Navigate to `/finish` with results
3. Finish → Restart → Navigate to `/typing` with new timer
4. Finish → Home → Navigate to `/` (reset state)
