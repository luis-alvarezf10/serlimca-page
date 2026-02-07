import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { colors } = useTheme()

  return (
    <footer style={{
      backgroundColor: colors.bg,
      borderTop: `2px solid ${colors.border}`,
      padding: '2rem',
      textAlign: 'center',
      color: colors.textSecondary,
      transition: 'all 0.3s ease'
    }}>
      <p>&copy; 2024 SERLIMCA - Todos los derechos reservados</p>
    </footer>
  )
}
