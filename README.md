# TypoTango

A modern, fast, and beautiful typing test application built with React, TypeScript, and Vite. TypoTango helps you improve your typing speed and accuracy with a clean, distraction-free interface.

![TypoTango](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple.svg)

## Features

- ⚡ **Fast & Responsive**: Built with Vite for lightning-fast development and builds
- 🎯 **Multiple Timer Options**: Choose from 15s, 30s, 60s, or custom time limits
- 📊 **Real-time Statistics**: Track your WPM, accuracy, and typing consistency
- 🎨 **Beautiful UI**: Dark theme with yellow accents and smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcuts**: Quick restart with `Tab + Enter`
- 🔄 **Auto-scroll**: Automatically scrolls through long passages
- 📈 **Progress Tracking**: Visual feedback for correct/incorrect keystrokes

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/microDotBuilder/TypoTango.git
cd TypoTango
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── NavBar/          # Navigation bar
│   ├── Footer/          # Footer with links and shortcuts
│   └── TimerNav/        # Timer selection component
├── pages/               # Route components
│   ├── contact.tsx      # Contact page (under construction)
│   ├── support.tsx      # Support page
│   ├── terms-of-service.tsx
│   ├── security-policy.tsx
│   └── privacy-policy.tsx
├── Main/                # Main typing test components
│   ├── main-component.tsx
│   ├── passage/         # Text passage display
│   ├── graph/           # Statistics visualization
│   └── finish/           # Results screen
├── hooks/               # Custom React hooks
├── context/             # React context providers
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables
- **Icons**: Lucide React
- **Routing**: React Router
- **Package Manager**: pnpm

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Keyboard Shortcuts

- `Tab + Enter` - Restart the typing test
- `Ctrl/Cmd + Shift + P` - Open command palette
- `Esc` - Close modals or return to main screen

## Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Reporting Issues

Found a bug or have a feature request? Please open an issue on our [GitHub Issues](https://github.com/microDotBuilder/TypoTango/issues) page.

## Support

- 📧 Email: support@typotango.com
- 🐛 Issues: [GitHub Issues](https://github.com/microDotBuilder/TypoTango/issues)
- ⭐ Star us on GitHub if you like the project!

## Legal

- [Terms of Service](/terms-of-service)
- [Privacy Policy](/privacy-policy)
- [Security Policy](/security-policy)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by MonkeyType and other typing test applications
- Built with modern web technologies for the best user experience
- Thanks to all contributors and users who help improve TypoTango!

---

**Happy Typing! 🎯**
