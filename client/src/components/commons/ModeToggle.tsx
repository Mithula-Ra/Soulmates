import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/Themeprovider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();  

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className={`h-[1.5rem] w-[1.5rem] transition-all ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
      <Moon className={`h-[1.5rem] w-[1.5rem] transition-all absolute ${theme === "light" ? "opacity-0" : "opacity-100"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
