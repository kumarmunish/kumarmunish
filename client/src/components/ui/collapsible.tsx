import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface CollapsibleContextValue {
  isOpen: boolean
  onToggle: () => void
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | undefined>(undefined)

const useCollapsible = () => {
  const context = React.useContext(CollapsibleContext)
  if (!context) {
    throw new Error("useCollapsible must be used within a Collapsible")
  }
  return context
}

interface CollapsibleProps {
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ children, defaultOpen = false, open, onOpenChange, className, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
    
    const isControlled = open !== undefined
    const isOpen = isControlled ? open : internalOpen
    
    const onToggle = React.useCallback(() => {
      if (isControlled) {
        onOpenChange?.(!isOpen)
      } else {
        setInternalOpen(!isOpen)
      }
    }, [isControlled, isOpen, onOpenChange])

    const contextValue: CollapsibleContextValue = React.useMemo(
      () => ({
        isOpen,
        onToggle,
      }),
      [isOpen, onToggle]
    )

    return (
      <CollapsibleContext.Provider value={contextValue}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </CollapsibleContext.Provider>
    )
  }
)
Collapsible.displayName = "Collapsible"

interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  showChevron?: boolean
}

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ children, showChevron = true, className, ...props }, ref) => {
    const { isOpen, onToggle } = useCollapsible()

    return (
      <button
        ref={ref}
        onClick={onToggle}
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "collapsible-trigger",
          "flex w-full items-center justify-between rounded-md p-3",
          "text-left font-medium transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
        {...props}
      >
        <span className="flex-1">{children}</span>
        {showChevron && (
          <ChevronDown className="chevron-icon h-4 w-4 shrink-0" />
        )}
      </button>
    )
  }
)
CollapsibleTrigger.displayName = "CollapsibleTrigger"

interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ children, className, ...props }, ref) => {
    const { isOpen } = useCollapsible()
    const [height, setHeight] = React.useState<number | undefined>(isOpen ? undefined : 0)
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (contentRef.current) {
        if (isOpen) {
          setHeight(contentRef.current.scrollHeight)
          // Reset to auto after animation
          const timer = setTimeout(() => setHeight(undefined), 300)
          return () => clearTimeout(timer)
        } else {
          setHeight(contentRef.current.scrollHeight)
          // Force reflow
          contentRef.current.offsetHeight
          setHeight(0)
        }
      }
    }, [isOpen])

    return (
      <div
        ref={ref}
        className={cn(
          "collapsible-content",
          "overflow-hidden",
          className
        )}
        style={{ height }}
        {...props}
      >
        <div ref={contentRef} className="pb-3">
          {children}
        </div>
      </div>
    )
  }
)
CollapsibleContent.displayName = "CollapsibleContent"

export { Collapsible, CollapsibleTrigger, CollapsibleContent }