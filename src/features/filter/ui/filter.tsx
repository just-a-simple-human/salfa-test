import React from "react"
import Checkbox from "#shared/ui/checkbox.tsx"

type Props = {
    title: string
    value: unknown
    handler: (value: unknown) => void
}

const Filter: React.FC<Props> = ({title, value, handler}) => {
  return (
    <div className="w-fit h-fit flex items-center gap-4">
        <p className="text-4xl font-medium">{ title }</p>
        <Checkbox isActive={!!value} handler={handler}/>
    </div>
  )
}

export default Filter