import { useTheme } from '../../../context/ThemeContext'

export default function HeroSection() {
  const { colors } = useTheme()

  return (
    <div className="flex w-full h-screen flex items-center justify-center">
        <h1 className="text-4xl text-center font-bold" style={{ color: colors.heroText }}>
          Hero Section
        </h1>
    </div>
  )
}